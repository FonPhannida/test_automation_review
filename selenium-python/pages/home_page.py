import os
from dotenv import load_dotenv
from selenium.webdriver.common.by import By
from pages.base_page import BasePage

load_dotenv()

class HomePage(BasePage):
    NAV_PRODUCT_BUTTON = (By.XPATH, os.getenv("PRODUCTS_BUTTON_XPATH"))
    URL = os.getenv("BASE_URL")

    def open_home_page(self):
        if self.URL:
            self.open_url(self.URL)
        else:
            print("BASE_URL is not set in the environment variables.")

    def click_nav_product(self):
        self.click_element(self.NAV_PRODUCT_BUTTON)
    