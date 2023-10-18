from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
import undetected_chromedriver as uc
import random
import time

# Headless mode - the application is working without an UI - only in the backend
### Recommended for the bulk methods we will be using ###
#


def get_proxies():
    from selenium.webdriver.common.by import By
    import undetected_chromedriver as uc

    ops = uc.ChromeOptions()
    ops.add_argument("--headless")
    driver = uc.Chrome(ops)
    driver.get("https://free-proxy-list.net/")

    proxies = []

    proxy_table_rows = driver.find_elements(By.XPATH, '//table/tbody/tr')

    for p in range(1, len(proxy_table_rows)):
        if proxy_table_rows[p].text.split(' ')[5] == 'yes':
            proxies.append(proxy_table_rows[p].text.split(
                ' ')[0] + ':' + proxy_table_rows[p].text.split(' ')[1])
    driver.close()

    return proxies


def is_port_in_use(port):
    import psutil

    for connection in psutil.net_connections():
        if connection.laddr.port == port and connection.status == psutil.CONN_LISTEN:
            return True
    return False

# Generating and checking a free port for running multiple drivers simultaneously


def generate_port():
    port = 0
    established = False
    while established != True:
        port = random.choice(range(49152, 49552))
        response = is_port_in_use(port)
        if response:
            continue
        else:
            established = True
            break
    return port


def chrome_setup():
    from selenium import webdriver
    import undetected_chromedriver as uc
    from selenium.webdriver.chrome.options import DesiredCapabilities
    from selenium.webdriver.common.proxy import Proxy, ProxyType
    from selenium.webdriver.chrome.service import Service as ChromeService
    from webdriver_manager.chrome import ChromeDriverManager
    from webdriver_manager.core.utils import ChromeType

    # import logging
    # logging.basicConfig(level=logging.NOTSET)

    options = uc.ChromeOptions()
    options.binary_location = "C:/Program Files/Google/Chrome/Application/chrome.exe"
    # The more preferable approach
    preferences = {
        "download.default_directory": "E:\\TTT(TikTokTakeover)\\content"}  # OR specifiyng the path Windows style
    # Adding the desired download directory setting to Chrome
    port = generate_port()

    # proxies = open(
    #     'E:\\TTT(TikTokTakeover)\\Python Scripts\\proxies.txt', 'r')
    # lines = proxies.readlines()
    # ip = random.choice(lines)

    # options.add_argument(f'--proxy-server={ip}')
    # options.headless = True
    options.add_argument(
        f"--remote-debugging-port-{str(port)}")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-gpu")

    # options.add_argument(
    #     '--profile-directory=C:\\Users\\AДМИН\\AppData\\Local\\Google\\Chrome\\User Data\\')
    # options.add_argument(
    #     '--user-data-dir=C:/Users/АДМИН\AppData/Local\Google/Chrome/User Data')

    driver = uc.Chrome(
        options=options,
        service=ChromeService(ChromeDriverManager().install())
        # service=ChromiumService("C:/Users/АДМИН/AppData/Local/Google/Chrome SxS/Application/chrome-win/chrome.exe", ChromeDriverManager(
        #     chrome_type=ChromeType.CHROMIUM))
    )

    return driver

# Miscelaneous chrome_settings:
# options.headless = True

# options.add_argument(
#     "user-agent=Mozilla/5.0 (Linux; Android 10; SM-J810G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Mobile Safari/537.36")
# options.add_argument(
#     "user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36")
# options.add_experimental_option("excludeSwitches", ["enable-automation"])
# options.add_experimental_option('useAutomationExtension', False)
# options.add_argument("--disable-browser-side-navigation")
# options.add_argument("--disable-features=VizDisplayCompositor")
# options.add_argument("--disable-extensions")
# options.add_argument("--disable-dev-shm-usage")
# options.add_argument("--disable-infobars")
# options.add_argument("--disable-gpu")
# options.add_argument("--disable-dev-shm-usage")
# options.add_argument("--disable-setuid-sandbox")
# options.add_argument("--disable-web-security")
# options.add_argument("--disable-site-isolation-trials")
# options.add_argument("--no-sandbox")
# options.add_argument("--disable-infobars")
# options.add_argument("--disable-browser-side-navigation")
# options.add_argument("--disable-features=VizDisplayCompositor")
# options.add_argument("--disable-extensions")
# options.add_argument("--disable-setuid-sandbox")
# options.add_argument("--disable-web-security")

# Proxy
# import requests

# ip = requests.get(
#     "https://ipv4.webshare.io/",
#     proxies={
#         "http": "socks5://xspjfrgs-rotate:em4x009ttm5w@p.webshare.io:80/",
#         "https": "socks5://xspjfrgs-rotate:em4x009ttm5w@p.webshare.io:80/"
#     }
# ).text

# proxies = open(
#     'E:\\TTT(TikTokTakeover)\\Python Scripts\\proxies.txt', 'r')
# lines = proxies.readlines()
# ip = random.choice(lines)

# print(f' -- Running on proxy : {ip} -- ')
# Dev Tools
# Map_coordinates = dict({
#     "latitude": 41.8781,
#     "longitude": -87.6298,
#     "accuracy": 100
# })
# driver.execute_cdp_cmd("Emulation.setGeolocationOverride", Map_coordinates)
