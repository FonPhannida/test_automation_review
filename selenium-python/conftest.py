import os
import pytest
from dotenv import load_dotenv
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.firefox.service import Service as FirefoxService

load_dotenv()

CHROMEDRIVER_PATH  = os.getenv("CHROMEDRIVER_PATH_DIR")
if not CHROMEDRIVER_PATH or not os.path.exists(CHROMEDRIVER_PATH):
    raise FileNotFoundError(f"ChromeDriver not found at: {CHROMEDRIVER_PATH}")

def pytest_addoption(parser):
    parser.addoption("--browser", action="store", default="chrome", help="Choose browser: chrome or firefox")

@pytest.fixture(scope="function")
def driver(request):
    browser = request.config.getoption("--browser")

    if browser == "chrome":
        service = ChromeService(CHROMEDRIVER_PATH)
        driver = webdriver.Chrome(service=service)
    elif browser == "firefox":
        service = FirefoxService()
        driver = webdriver.Firefox(service=service)
    else:
        raise ValueError("Invalid browser option. Use --browser=chrome or --browser=firefox")

    driver.maximize_window()
    driver.implicitly_wait(10)

    yield driver
    driver.quit()
