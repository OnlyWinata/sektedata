"""
Google Form Auto-Filler - Pendaftaran Pasien RV Ciledug
========================================================
Cara pakai:
1. pip install selenium webdriver-manager
2. Buka web UI → isi data → Save Config (download config.json)
3. python3 google_form_filler.py --config config.json

Atau edit CONFIG di bawah langsung.
"""

import time
import sys
import re
import json
import argparse
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# ============================================================
# CONFIG (defaults — bisa di-override via --config config.json)
# ============================================================
FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScqFl85ZlJCnUChOcCrzP9oAHYG9MyGks4-2MFLbOr0I83KwA/viewform"

# Halaman 1: Dokter Tujuan
DOKTER_TUJUAN = "DOKTER SPESIALIS ANAK"

# Halaman 2: Pilih Dokter Spesialis Anak
PILIH_DOKTER = "dr. Nunki Andria, Sp.A"

# Halaman 3: Rencana Kedatangan
# Pilihan: "KONSULTASI", "VAKSINASI DAN KONSULTASI"
RENCANA_KEDATANGAN = "VAKSINASI DAN KONSULTASI"

# Halaman 4: Pilih Tanggal (dinamis)
# Default ("") = otomatis pilih tanggal paling bawah selain WAITING LIST
TANGGAL_KUNJUNGAN = "1 APRIL"

# Data Pasien
NAMA_LENGKAP_PASIEN = "Kaashifa Ilmi Samudra"
TANGGAL_LAHIR_PASIEN = "15 Maret 2024"
USIA_PASIEN = "2 tahun"
RENCANA_DETAIL = "Vaksin"
NO_HANDPHONE = "08176050546"

# Timeout (detik) untuk WebDriverWait
WAIT_TIMEOUT = 10

# Scheduling: jalankan otomatis pada waktu tertentu
# Format: "HH:MM:SS" (WIB), contoh "08:00:00"
# Kosongkan ("") untuk langsung jalankan tanpa nunggu
# Script akan pre-load form utama (halaman 1-4) sebelum waktu ini,
# lalu buka link formlimit dan polling sampai form muncul
JADWAL_MULAI = "08:00:00"
# Berapa menit sebelum JADWAL_MULAI untuk mulai pre-load form utama
PRE_LOAD_MENIT = 2
# ============================================================

_t0 = None

def _lap(label):
    global _t0
    now = time.time()
    if _t0:
        print(f"  ⏱️  {label}: {now - _t0:.3f}s")
    _t0 = now


def wait_for_radios(driver):
    """Tunggu sampai radio buttons muncul (bukan fixed sleep)."""
    WebDriverWait(driver, WAIT_TIMEOUT).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, '[role="radio"]'))
    )


def wait_for_page_change(driver, old_params_text):
    """Tunggu sampai halaman berubah (data-params berubah)."""
    def page_changed(d):
        params = d.find_elements(By.CSS_SELECTOR, '[data-params]')
        if not params:
            return False
        current = params[0].get_attribute('data-params') or ""
        return current != old_params_text
    try:
        WebDriverWait(driver, WAIT_TIMEOUT).until(page_changed)
    except Exception:
        time.sleep(1)  # fallback minimal


def get_current_params_text(driver):
    """Ambil data-params pertama sebagai page identifier."""
    params = driver.find_elements(By.CSS_SELECTOR, '[data-params]')
    return params[0].get_attribute('data-params') if params else ""


def select_radio(driver, value_contains):
    """Pilih radio button yang data-value-nya mengandung teks tertentu."""
    radios = driver.find_elements(By.CSS_SELECTOR, '[role="radio"]')
    for r in radios:
        dv = r.get_attribute("data-value") or ""
        if value_contains.upper() in dv.upper():
            driver.execute_script("arguments[0].click();", r)
            print(f"  ✅ Dipilih: {dv}")
            return True
    if radios:
        dv = radios[0].get_attribute("data-value") or ""
        driver.execute_script("arguments[0].click();", radios[0])
        print(f"  ⚠️  '{value_contains}' tidak ditemukan, fallback: {dv}")
        return True
    return False


def click_next(driver):
    """Klik tombol Berikutnya dan tunggu halaman berubah."""
    old_params = get_current_params_text(driver)
    spans = driver.find_elements(By.TAG_NAME, "span")
    for s in spans:
        if s.text.strip() == "Berikutnya":
            parent = s.find_element(By.XPATH, "./..")
            driver.execute_script("arguments[0].click();", parent)
            wait_for_page_change(driver, old_params)
            return True
    return False


def get_date_links(driver):
    """Ambil semua date links dari halaman 4."""
    params = driver.find_elements(By.CSS_SELECTOR, '[data-params]')
    date_links = []
    for p in params:
        dp = p.get_attribute('data-params') or ""
        label_match = re.search(r'\,"([^"]+)"\,"Silakan', dp)
        if not label_match:
            label_match = re.search(r'\\u003cb\\u003e([^\\]+)\\u003c', dp)
            if not label_match:
                continue
        label = label_match.group(1)
        try:
            listitem = p.find_element(By.XPATH, "./ancestor::div[@role='listitem']")
            link_el = listitem.find_element(By.CSS_SELECTOR, 'a[href*="formlimit"], a[href*="forms.gle"]')
            href = link_el.get_attribute("href") or ""
            if href:
                date_links.append((label, href))
        except Exception:
            url_match = re.search(r'https://formlimit[^"\\]+', dp.replace('\\u003d', '='))
            if url_match:
                date_links.append((label, url_match.group(0)))
    return date_links


def pick_target_date(date_links, preference):
    """Pilih tanggal: kalau preference kosong, ambil paling bawah selain WL."""
    non_wl = [(l, u) for l, u in date_links if "WAITING" not in l.upper()]
    if preference:
        for label, url in non_wl:
            if preference.upper() in label.upper():
                return label, url
        print(f"  ⚠️  '{preference}' tidak ditemukan di daftar tanggal")
    if non_wl:
        return non_wl[-1]
    return date_links[-1] if date_links else (None, None)


def fill_patient_form(driver):
    """Isi form pendaftaran pasien (Form 2)."""
    entry_map = {
        281593572: NAMA_LENGKAP_PASIEN,
        1222754963: TANGGAL_LAHIR_PASIEN,
        641600353: USIA_PASIEN,
        1913622837: RENCANA_DETAIL,
        605243980: "",
        1085668742: NO_HANDPHONE,
        180203476: NO_HANDPHONE,
    }

    inputs = driver.find_elements(By.CSS_SELECTOR, 'input[type="text"], textarea')
    params = driver.find_elements(By.CSS_SELECTOR, '[data-params]')

    filled = 0
    for i, p in enumerate(params):
        dp = p.get_attribute('data-params') or ""
        try:
            listitem = p.find_element(By.XPATH, "./ancestor::div[@role='listitem']")
        except Exception:
            continue
        inp = listitem.find_elements(By.CSS_SELECTOR, 'input[type="text"], textarea')
        if not inp:
            continue
        for eid, value in entry_map.items():
            if str(eid) in dp and value:
                try:
                    inp[0].clear()
                    inp[0].send_keys(value)
                except Exception:
                    # Fallback: inject value via JavaScript
                    try:
                        driver.execute_script(
                            "arguments[0].value = arguments[1]; arguments[0].dispatchEvent(new Event('input', {bubbles:true}));",
                            inp[0], value
                        )
                    except Exception:
                        pass
                name_match = re.search(r'\,"([^"]+)",', dp)
                fname = name_match.group(1) if name_match else f"field {i}"
                print(f"  ✅ {fname}: {value}")
                filled += 1
                break

    if filled == 0:
        values = [NAMA_LENGKAP_PASIEN, TANGGAL_LAHIR_PASIEN, USIA_PASIEN,
                  RENCANA_DETAIL, NO_HANDPHONE]
        for i, inp in enumerate(inputs):
            if i < len(values) and values[i]:
                inp.clear()
                inp.send_keys(values[i])
                print(f"  ✅ Field {i+1}: {values[i]}")
                filled += 1

    return filled


def open_registration_form(driver, target_url):
    """Buka form pendaftaran via formlimit, handle berbagai skenario."""
    driver.execute_script("window.open(arguments[0]);", target_url)

    # Tunggu tab baru terbuka
    WebDriverWait(driver, WAIT_TIMEOUT).until(lambda d: len(d.window_handles) > 1)
    driver.switch_to.window(driver.window_handles[-1])

    # Tunggu halaman formlimit selesai load
    WebDriverWait(driver, WAIT_TIMEOUT).until(
        lambda d: d.execute_script("return document.readyState") == "complete"
    )

    return _check_form_status(driver)


def _check_form_status(driver):
    """Cek status form di halaman saat ini."""
    body = driver.find_element(By.TAG_NAME, "body").text
    body_lower = body.lower()

    if "penuh" in body_lower or ("tertutup" in body_lower and "sudah dibuka" not in body_lower):
        source = driver.page_source
        form_ids = re.findall(r'1FAIpQL[A-Za-z0-9_-]+', source)
        if form_ids:
            form_url = f"https://docs.google.com/forms/d/e/{form_ids[0]}/viewform"
            print(f"  ℹ️  Formlimit bilang penuh, coba langsung...")
            driver.get(form_url)
            WebDriverWait(driver, WAIT_TIMEOUT).until(
                lambda d: d.execute_script("return document.readyState") == "complete"
            )
            if "closedform" in driver.current_url:
                return False, "Form sudah ditutup"
            return True, "OK (direct)"
        return False, "Kuota penuh"

    if "belum dibuka" in body_lower:
        return False, "Form belum dibuka"

    # Cek countdown (formlimit timer sebelum jam buka)
    if _has_countdown(body):
        return False, "Countdown (belum jam buka)"

    # Cek apakah form ada di iframe
    iframes = driver.find_elements(By.TAG_NAME, "iframe")
    for iframe in iframes:
        src = iframe.get_attribute("src") or ""
        if "docs.google.com/forms" in src:
            driver.switch_to.frame(iframe)
            return True, "OK (iframe)"

    # Cek apakah form inline (formlimit embed dengan field)
    params = driver.find_elements(By.CSS_SELECTOR, '[data-params]')
    if params:
        return True, "OK (inline)"

    # Cek apakah ada input fields langsung (formlimit embed tanpa data-params)
    inputs = driver.find_elements(By.CSS_SELECTOR, 'input[type="text"], textarea')
    form_inputs = [i for i in inputs if i.get_attribute("name") != "g-recaptcha-response"]
    if form_inputs:
        return True, "OK (inputs found)"

    # Fallback: cari form URL di source
    source = driver.page_source
    form_ids = re.findall(r'1FAIpQL[A-Za-z0-9_-]+', source)
    if form_ids:
        form_url = f"https://docs.google.com/forms/d/e/{form_ids[0]}/viewform"
        driver.get(form_url)
        WebDriverWait(driver, WAIT_TIMEOUT).until(
            lambda d: d.execute_script("return document.readyState") == "complete"
        )
        if "closedform" not in driver.current_url:
            return True, "OK (direct)"
        return False, "Form sudah ditutup"

    return False, "Form tidak ditemukan"


def _has_countdown(body_text):
    """Deteksi apakah halaman menampilkan countdown timer."""
    indicators = ["days", "hours", "minutes", "seconds",
                  "hari", "jam", "menit", "detik",
                  "dibuka", "will open", "not yet open"]
    body_lower = body_text.lower()
    matches = sum(1 for ind in indicators if ind in body_lower)
    return matches >= 2  # minimal 2 indicator = kemungkinan countdown


def poll_until_form_ready(driver, max_wait=300, interval=0.5):
    """
    Polling: refresh halaman formlimit sampai form muncul.
    Dipakai kalau buka link sebelum jam 8 (countdown).
    Refresh tiap `interval` detik, max `max_wait` detik.
    """
    print(f"  ⏳ Menunggu form dibuka (polling tiap {interval}s, max {max_wait}s)...")
    start = time.time()
    attempt = 0
    while time.time() - start < max_wait:
        attempt += 1
        driver.refresh()
        try:
            WebDriverWait(driver, 3).until(
                lambda d: d.execute_script("return document.readyState") == "complete"
            )
        except Exception:
            pass

        ok, msg = _check_form_status(driver)
        elapsed = time.time() - start
        if ok:
            print(f"  🎉 Form terbuka! (attempt #{attempt}, {elapsed:.1f}s)")
            return True, msg
        if "penuh" in msg.lower() or "ditutup" in msg.lower():
            print(f"  ❌ {msg} (attempt #{attempt}, {elapsed:.1f}s)")
            return False, msg

        # Masih countdown / belum buka, tunggu sebentar lalu retry
        if attempt % 20 == 0:
            print(f"  ⏳ Masih menunggu... ({elapsed:.0f}s, attempt #{attempt})")
        time.sleep(interval)

    return False, f"Timeout setelah {max_wait}s"


def main():
    global _t0
    global DOKTER_TUJUAN, PILIH_DOKTER, RENCANA_KEDATANGAN, TANGGAL_KUNJUNGAN
    global NAMA_LENGKAP_PASIEN, TANGGAL_LAHIR_PASIEN, USIA_PASIEN, RENCANA_DETAIL, NO_HANDPHONE
    global JADWAL_MULAI, PRE_LOAD_MENIT

    # ---- LOAD CONFIG FROM JSON ----
    parser = argparse.ArgumentParser(description="Google Form Auto-Filler")
    parser.add_argument("--config", "-c", help="Path to config.json (from web UI)")
    args = parser.parse_args()

    if args.config:
        with open(args.config, 'r') as f:
            cfg = json.load(f)
        print(f"📂 Config loaded from: {args.config}")
        DOKTER_TUJUAN = cfg.get("DOKTER_TUJUAN", DOKTER_TUJUAN)
        PILIH_DOKTER = cfg.get("PILIH_DOKTER", PILIH_DOKTER)
        RENCANA_KEDATANGAN = cfg.get("RENCANA_KEDATANGAN", RENCANA_KEDATANGAN)
        TANGGAL_KUNJUNGAN = cfg.get("TANGGAL_KUNJUNGAN", TANGGAL_KUNJUNGAN)
        NAMA_LENGKAP_PASIEN = cfg.get("NAMA_LENGKAP_PASIEN", NAMA_LENGKAP_PASIEN)
        TANGGAL_LAHIR_PASIEN = cfg.get("TANGGAL_LAHIR_PASIEN", TANGGAL_LAHIR_PASIEN)
        USIA_PASIEN = cfg.get("USIA_PASIEN", USIA_PASIEN)
        RENCANA_DETAIL = cfg.get("RENCANA_DETAIL", RENCANA_DETAIL)
        NO_HANDPHONE = cfg.get("NO_HANDPHONE", NO_HANDPHONE)
        JADWAL_MULAI = cfg.get("JADWAL_MULAI", JADWAL_MULAI)
        PRE_LOAD_MENIT = cfg.get("PRE_LOAD_MENIT", PRE_LOAD_MENIT)

    print("=" * 60)
    print("🏥 Pendaftaran Pasien RV Ciledug - Auto Filler")
    print("=" * 60)
    print(f"   Dokter    : {DOKTER_TUJUAN} → {PILIH_DOKTER}")
    print(f"   Rencana   : {RENCANA_KEDATANGAN}")
    print(f"   Tanggal   : {TANGGAL_KUNJUNGAN or '(otomatis)'}")
    print(f"   Pasien    : {NAMA_LENGKAP_PASIEN}")
    print(f"   Jadwal    : {JADWAL_MULAI or '(langsung)'}")

    # ---- SCHEDULING ----
    if JADWAL_MULAI:
        from datetime import datetime, timedelta
        target_time = datetime.strptime(JADWAL_MULAI, "%H:%M:%S").replace(
            year=datetime.now().year, month=datetime.now().month, day=datetime.now().day
        )
        preload_time = target_time - timedelta(minutes=PRE_LOAD_MENIT)
        now = datetime.now()

        if now < preload_time:
            wait_secs = (preload_time - now).total_seconds()
            print(f"\n⏰ Jadwal: {JADWAL_MULAI}")
            print(f"   Pre-load form pada: {preload_time.strftime('%H:%M:%S')}")
            print(f"   Menunggu {wait_secs:.0f} detik ({wait_secs/60:.1f} menit)...")
            time.sleep(wait_secs)
        elif now < target_time:
            print(f"\n⏰ Sudah masuk window pre-load, langsung mulai...")
        else:
            print(f"\n⏰ Jadwal {JADWAL_MULAI} sudah lewat, langsung jalankan...")

    t_total = time.time()
    _t0 = time.time()

    # ============================================================
    # FASE 1: Headless — navigate form utama (halaman 1-4) + extract link
    # ============================================================
    print("\n🚀 Fase 1: Headless speed-run halaman 1-4...")
    h_options = webdriver.ChromeOptions()
    h_options.add_argument("--headless=new")
    h_options.add_argument("--no-sandbox")
    h_options.add_argument("--disable-dev-shm-usage")
    h_options.add_argument("--window-size=1920,1080")

    try:
        headless = webdriver.Chrome(
            service=Service(ChromeDriverManager().install()),
            options=h_options
        )
    except Exception as e:
        print(f"❌ Gagal membuka Chrome: {e}")
        sys.exit(1)

    _lap("Browser headless start")

    target_url = None
    target_label = None
    try:
        headless.get(FORM_URL)
        WebDriverWait(headless, WAIT_TIMEOUT).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, '[role="radio"]'))
        )
        _lap("Load form")

        # Halaman 1
        print("  📄 Hal 1: Dokter Tujuan")
        select_radio(headless, DOKTER_TUJUAN)
        click_next(headless)
        _lap("Halaman 1")

        # Halaman 2
        print("  📄 Hal 2: Pilih Dokter")
        wait_for_radios(headless)
        select_radio(headless, PILIH_DOKTER)
        click_next(headless)
        _lap("Halaman 2")

        # Halaman 3
        print("  📄 Hal 3: Rencana Kedatangan")
        wait_for_radios(headless)
        select_radio(headless, RENCANA_KEDATANGAN)
        click_next(headless)
        _lap("Halaman 3")

        # Halaman 4: extract link
        print("  📄 Hal 4: Pilih Tanggal")
        date_links = get_date_links(headless)
        print("  📅 Tanggal tersedia:")
        for label, url in date_links:
            print(f"     - {label}")

        target_label, target_url = pick_target_date(date_links, TANGGAL_KUNJUNGAN)
        print(f"  🎯 Target: {target_label}")
        _lap("Halaman 4 (parse)")

    finally:
        headless.quit()
        _lap("Headless ditutup")

    if not target_url:
        print("  ❌ Tidak ada tanggal tersedia")
        return

    # ============================================================
    # FASE 2: Visible browser — buka form pendaftaran + isi + review
    # ============================================================
    # Kalau ada jadwal, tunggu sampai waktunya sebelum buka form
    if JADWAL_MULAI:
        from datetime import datetime
        target_time = datetime.strptime(JADWAL_MULAI, "%H:%M:%S").replace(
            year=datetime.now().year, month=datetime.now().month, day=datetime.now().day
        )
        now = datetime.now()
        if now < target_time:
            wait_secs = (target_time - now).total_seconds()
            print(f"\n⏳ Menunggu {wait_secs:.0f}s sampai {JADWAL_MULAI} untuk buka form...")
            time.sleep(wait_secs)
            print(f"  🔔 Waktu! GO GO GO!")

    print(f"\n🖥️  Fase 2: Buka browser untuk review...")
    v_options = webdriver.ChromeOptions()
    v_options.add_argument("--start-maximized")

    try:
        visible = webdriver.Chrome(
            service=Service(ChromeDriverManager().install()),
            options=v_options
        )
    except Exception as e:
        print(f"❌ Gagal membuka Chrome visible: {e}")
        sys.exit(1)

    _lap("Browser visible start")

    try:
        # Langsung buka link formlimit
        print(f"  🔗 Membuka form pendaftaran...")
        visible.get(target_url)
        WebDriverWait(visible, WAIT_TIMEOUT).until(
            lambda d: d.execute_script("return document.readyState") == "complete"
        )

        ok, msg = _check_form_status(visible)
        _lap("Load form pendaftaran")

        if not ok:
            if "countdown" in msg.lower() or "belum" in msg.lower():
                print(f"  ℹ️  {msg}")
                ok, msg = poll_until_form_ready(visible, max_wait=600, interval=0.5)
                _lap("Polling sampai form buka")
            if not ok:
                # Fallback: coba akses form langsung
                source = visible.page_source
                form_ids = re.findall(r'1FAIpQL[A-Za-z0-9_-]+', source)
                if form_ids:
                    form_url = f"https://docs.google.com/forms/d/e/{form_ids[0]}/viewform"
                    visible.get(form_url)
                    WebDriverWait(visible, WAIT_TIMEOUT).until(
                        lambda d: d.execute_script("return document.readyState") == "complete"
                    )
                    if "closedform" in visible.current_url:
                        print(f"  ❌ Form sudah ditutup")
                        input("\nTekan Enter untuk menutup browser...")
                        return
                    _lap("Fallback direct")
                else:
                    print(f"  ❌ {msg}")
                    input("\nTekan Enter untuk menutup browser...")
                    return

        # Isi data pasien
        print("\n📝 Mengisi data pasien...")
        WebDriverWait(visible, WAIT_TIMEOUT).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, '[data-params]'))
        )
        filled = fill_patient_form(visible)
        _lap(f"Isi {filled} field")

        total = time.time() - t_total
        print(f"\n{'=' * 60}")
        print(f"✅ Selesai dalam {total:.3f} detik!")
        print(f"👀 Review di browser, lalu klik 'Kirim' kalau sudah benar.")
        print(f"⛔ Script TIDAK auto-submit.")
        print(f"{'=' * 60}")

        input("\nTekan Enter untuk menutup browser...")

    except KeyboardInterrupt:
        print("\n\n⚠️  Dihentikan.")
    except Exception as e:
        print(f"\n❌ Error: {e}")
        import traceback
        traceback.print_exc()
        input("\nTekan Enter untuk menutup browser...")
    finally:
        visible.quit()
        print("👋 Selesai!")


if __name__ == "__main__":
    main()
