from browser.chrome import chrome_setup
from selenium.webdriver.common.by import By
from selenium.webdriver import ActionChains, Keys
import random
import time

driver = chrome_setup()
act = ActionChains(driver)

mails = open(
    "E:\\TTT(TikTokTakeover)\\Send emails\\links.txt", 'r')
lines = mails.readlines()

for i in range(len(lines)):
    driver.get(lines[i])
    driver.implicitly_wait(20)
    distributor = driver.find_element(
        By.XPATH, '//div[@class="sr-side-contSupplier-name"]').text

    driver.implicitly_wait(5)
    driver.find_element(
        By.XPATH, '//a[@class="btns button-link-contact"]').click()

    windowIds = driver.window_handles
    driver.switch_to.window(windowIds[1])

    message = f"Subject: Inquiry about Euro Distribution Certificate\nDear {distributor},\nI am writing to inquire if your firm has an euro certificate that would allow it to distribute your products in EU. I understand that this is a relatively new product and would like more information on how I can acquire such a certificate. Any insight you could provide into the process of obtaining such certification would be greatly appreciated.\nThank you for your time and consideration in advance. \nSincerely, Nikolay Banev, AKB Fores!"

    time.sleep(3)
    act.send_keys(Keys.TAB).send_keys(Keys.TAB).send_keys(
        Keys.TAB).send_keys(Keys.TAB).send_keys(Keys.TAB).perform()
    act.send_keys(message).perform()
    if i == 0:
        driver.find_element(
            By.XPATH, '//input[@id="senderMail"]').send_keys('brawlcrypto@gmail.com')

        driver.find_element(By.XPATH, '//input[@type="button"]').click()
        time.sleep(5)

        # driver.find_element(
        #     By.XPATH, '//input[@name="senderMailDialog"]').send_keys('brawlcrypto@gmail.com')
        driver.find_element(
            By.XPATH, '//*[@id="senderName"]').send_keys('Nikolay Banev')
        driver.find_element(
            By.XPATH, '//*[@id="comName"]').send_keys('AKB Fores')
        driver.find_element(
            By.XPATH, '//*[@id="senderMobile"]').send_keys('889756575')
        driver.find_element(
            By.XPATH, '//*[@id="J-check-info-dialog"]/form/div/div[7]/div/input').click()

    driver.switch_to.window(windowIds[0])
