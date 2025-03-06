#https://www.automationexercise.com/
from selenium.webdriver import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class BasePage:
    def __init__(self, driver):
        self.driver = driver
        self.wait = WebDriverWait(driver, 10)

    def click_element(self, locator):
        self.wait.until(EC.element_to_be_clickable(locator)).click()

    def open_url(self, url):
        self.driver.get(url)