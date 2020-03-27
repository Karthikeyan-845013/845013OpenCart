package com.POM;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

public class OpenCart_Searchproduct_POM 
{
	protected WebDriver driver;
	public OpenCart_Searchproduct_POM(WebDriver driver)
	{
		this.driver = driver;
	}
	//getting xpath for various elements
	By searchbar = By.name("search");
	By searchbutton = By.xpath("//button[@class='btn btn-default btn-lg']");
	By isDisplayed = By.xpath("//div[@id='content']/h1");
	By filterSelect = By.id("input-sort");
	By searchProduct = By.linkText("Search");
	By product1 = By.linkText("MacBook");
	By wishListProductButton = By.xpath("//button[@class='btn btn-default']//i[@class='fa fa-heart']");
	By addToCompareProduct1 = By.xpath("(//button[@class = 'btn btn-default'])[2]");
	By product2 = By.linkText("MacBook Pro");
	By compareProduct = By.id("compare-total");
	By addToCompareProduct2 = By.xpath("//i[@class='fa fa-exchange']");
	By listView= By.xpath("//i[@class='fa fa-th-list']");
	By product = By.linkText("MacBook Pro");
	//entering product name in search bar
	public void enterProduct() throws InterruptedException
	{
		Thread.sleep(3000);
		driver.findElement(searchbar).clear();
		driver.findElement(searchbar).sendKeys("macbook");
	}
	//searching for the product
	public void clickSearch() throws InterruptedException
	{
		Thread.sleep(3000);
		driver.findElement(searchbutton).click();
	}
	//displaying the searched product
	public boolean enteredProductDisplayed() throws InterruptedException
	{
		Thread.sleep(3000);
		return driver.findElement(isDisplayed).isDisplayed();
	}
	//clicking the particular product
	public void clickProduct() throws InterruptedException
	{
		Thread.sleep(3000);
		driver.findElement(product1).click();
	}
	//filtering the product on the basis of price(low>high)
	public void selectCategories() throws InterruptedException
	{
		Thread.sleep(3000);
		WebElement sel = driver.findElement(filterSelect);
		driver.findElement(filterSelect).click();
		Select select = new Select(sel);
		select.selectByVisibleText("Price (Low > High)");	
		Thread.sleep(1000);
	}
	//comparing the two products
	public void productComparision() throws InterruptedException
	{
		Thread.sleep(3000);
		driver.findElement(product1).click();
		driver.findElement(addToCompareProduct1).click();
		driver.findElement(searchProduct).click();
		driver.findElement(product2).click();
		driver.findElement(addToCompareProduct2).click();
		driver.findElement(searchProduct).click();
		Thread.sleep(1000);
		driver.findElement(compareProduct).click();
	}
	//viewing the products in list manner
	public void changeToListView() throws InterruptedException
	{
		Thread.sleep(3000);
		driver.findElement(listView).click();
		Actions action = new Actions(driver);
		WebElement element = driver.findElement(product);
		action.moveToElement(element).build().perform();
	}
	//wishlist is clicked
	public void wishListProduct() throws InterruptedException 
	{
		Thread.sleep(3000);
		driver.findElement(wishListProductButton).click();
	}
}