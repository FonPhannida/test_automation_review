import os
from dotenv import load_dotenv
from selenium.webdriver.common.by import By
from pages.base_page import BasePage

load_dotenv()

class LoginPage(BasePage):
    NAV_LOGIN_BUTTON = (By.XPATH, os.getenv("LOGIN_BUTTON_XPATH"))
    URL = os.getenv("BASE_URL")

    def openLoginPage(self):
        if self.URL:
            self.open_url(self.URL)
        else:
            print("BASE_URL is not set in the environment variables.")
        
    def click_nav_login(self):
        self.click_element(self.NAV_LOGIN_BUTTON)
    
    def login(self, username, password):
        USERNAME_FIELD = (By.XPATH, os.getenv("LOGIN_EMAIL_XPATH"))
        PASSWORD_FIELD = (By.XPATH, os.getenv("LOGIN_PASSWORD_XPATH"))
        LOGIN_SUBMIT_BUTTON = (By.XPATH, os.getenv("LOGIN_SUBMIT_BUTTON_XPATH"))

        self.send_keys(USERNAME_FIELD, username)
        self.send_keys(PASSWORD_FIELD, password)
        self.click_element(LOGIN_SUBMIT_BUTTON)
      