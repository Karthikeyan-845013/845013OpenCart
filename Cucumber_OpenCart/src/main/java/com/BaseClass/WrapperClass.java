package com.BaseClass;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class WrapperClass 
{
	protected WebDriver driver;
	//launching the browser
	public void launchApplication(String browser)
	{
		if(browser.equalsIgnoreCase("chrome"))
			{
				System.setProperty("webdriver.chrome.driver","src/test/resources/drivers/chromedriver_80.exe");
				driver = new ChromeDriver();
			}
			else if(browser.equalsIgnoreCase("firefox"))
			{
				System.setProperty("webdriver.gecko.driver","src/test/resources/drivers/geckodriver_v_26.exe");
				driver = new FirefoxDriver();
			}
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
			driver.get("http://opencart.abstracta.us/");
		
		
	}
	//taking the screenshot
	public void Screenshot(String path) throws IOException
	{
		TakesScreenshot ss = (TakesScreenshot)driver;
		File Screenshot = ss.getScreenshotAs(OutputType.FILE);
		
			FileUtils.copyFile(Screenshot,new File(path));
		
	}
	//closing the browser
	public void closeBrowser()
	{
		driver.close();
	}
}