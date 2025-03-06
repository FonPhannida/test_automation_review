from dotenv import load_dotenv
from pages.home_page import HomePage


def test_open_product_page(driver):
    click_nav_product = HomePage(driver)
    click_nav_product.open_home_page()
    click_nav_product.click_nav_product()

    #assert