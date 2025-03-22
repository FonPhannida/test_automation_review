from dotenv import load_dotenv
from pages.home_page import HomePage


def test_open_product_page(driver):
    click_nav_product = HomePage(driver)
    click_nav_product.open_home_page()
    click_nav_product.click_nav_product()

    #assert
    assert "Product" in driver.title
    assert driver.current_url == "https://example.com/product"
    assert driver.find_element_by_id("product-title").is_displayed()
    assert driver.find_element_by_class_name("product-description").is_displayed()
    assert driver.find_element_by_xpath("//button[@id='add-to-cart']").is_enabled()