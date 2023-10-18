import os
import time
from chrome import chrome_setup
from selenium import webdriver
import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
from dotenv import load_dotenv

# driver = chrome_setup()
load_dotenv()

# driver = uc.Chrome(
#     browser_executable_path="C:/Program Files/Google/Chrome/Application/chrome.exe",
#     service=ChromeService(ChromeDriverManager().install())
# )
driver = webdriver.Chrome(
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    service=ChromeService(ChromeDriverManager().install())
)
driver.get('https://www.udemy.com/')

driver.find_element(By.XPATH, "//a[@class='ud-btn ud-btn-medium ud-btn-secondary ud-heading-sm']").click()
driver.implicitly_wait(100)
driver.find_element(By.XPATH, "//input[@id='form-group--1']").send_keys(os.getenv('USERNAME_UDEMY'))
driver.find_element(By.XPATH, '//*[@id="form-group--3"]').send_keys(os.getenv('PASSWORD_UDEMY'))
driver.find_element(By.XPATH, '//*[@id="udemy"]/div[1]/div[2]/div/div/form/button').click()

driver.find_element(By.CSS_SELECTOR, 'a[href="/home/my-courses/"]').click()
time.sleep(3)
driver.find_element(By.CSS_SELECTOR, 'a[href="/course-dashboard-redirect/?course_id=851712"]').click()

# Open the transcript
driver.find_element(By.XPATH, '/html/body/div[1]/div[1]/div/div/main/div/div[1]/div/div/div/div/div/div/div/div/div/section/div/div[1]/div/div[2]/div[1]/div[2]/div[2]/div[10]/div[1]/button').click()
time.sleep(999)

# click //*[@id="tabs--1-content-0"]/div/div[2]/div[1]/div/div[1]

# Open the transcript
# click //*[@id="popper-trigger--447"]

# retreive all the divs that are inside that main div //*[@id="ct-sidebar-scroll-container"]/div >> div
# div >> p >> span
# all the divs textContents

# For changing the sections do the following trick with the css and a for loop:
# //*[@id="tabs--1-content-1"]/div/div/div/div >> div

# For changing the videos in the section do the following
# click //*[@id="tabs--1-tab-1"]
# find the //*[@id="tabs--1-content-1"]/div/div/div/div/div[2]/div[2]/div/ul and every li inside it and increment the index by one

