from dotenv import load_dotenv
from  import LoginPage
import os


def test_logi_successfuly(driver):
    login_page = LoginPage(driver)
    email = os.getenv("EMAIL")
    password = os.getenv("PASSWORD")
    login_page.login(email, password)