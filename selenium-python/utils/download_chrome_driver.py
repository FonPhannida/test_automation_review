from webdriver_manager.chrome import ChromeDriverManager
import shutil
import os

project_chromedriver_path = os.path.join(os.getcwd(), "drivers", "chromedriver.exe")
downloaded_chromedriver_path = ChromeDriverManager().install()
os.makedirs(os.path.dirname(project_chromedriver_path), exist_ok=True)
shutil.copy(downloaded_chromedriver_path, project_chromedriver_path)
print(f"ChromeDriver installed at: {project_chromedriver_path}")