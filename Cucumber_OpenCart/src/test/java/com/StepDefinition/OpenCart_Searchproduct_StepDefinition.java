package com.StepDefinition;

import org.junit.Assert;

import com.BaseClass.WrapperClass;
import com.POM.OpenCart_Searchproduct_POM;

import cucumber.api.java.en.*;

public class OpenCart_Searchproduct_StepDefinition extends WrapperClass
{
	//browser is launched
	OpenCart_Searchproduct_POM search;
	@Given("^the user opens the application by launching the chrome browser$") 
	public void the_user_launches_the_chrome_browser_and_opens_application() throws Throwable
	{
		launchApplication("chrome"); 
	}
	//product is entered
	@When("^the product is being searched$") 
	public void the_user_searches_for_the_product() throws Throwable 
	{
		search = new OpenCart_Searchproduct_POM(driver);
		search.enterProduct();
	}
	//search button is clicked
	@When("^Search button is clicked$") 
	public void clicks_on_Search_button() throws Throwable 
	{
		search = new OpenCart_Searchproduct_POM(driver); 
		search.clickSearch(); 
	}
	//search result is displayed and screenshot is taken
	@Then("^search results is displayed and can be viewed by the browser$")
	public void the_user_should_be_able_to_see_the_search_results() throws Throwable 
	{
		search = new OpenCart_Searchproduct_POM(driver);
		Assert.assertTrue(search.enteredProductDisplayed()); 
		String path = "src/test/resources/Screenshot/Search.jpeg";
		Screenshot(path);
		Thread.sleep(1000);
		closeBrowser();
	}
	//user clicks the particular product
	@When("^Particular product is clicked by the user$")
	public void the_user_clicks_on_particular_product() throws Throwable 
	{
		search = new OpenCart_Searchproduct_POM(driver);
		search.clickProduct();
	}
	//product details is displayed and can be viewed by the browser
	@Then("^The product details is being displayed and viewed by the user$")
	public void the_user_should_be_able_to_see_all_the_details_regarding_the_product() throws Throwable 
	{
		search = new OpenCart_Searchproduct_POM(driver);
		Screenshot("src/test/resources/Screenshot/ProductPage.jpeg");
		Thread.sleep(1000);
		closeBrowser();
	}
	//filter search is done
	@Then("^the user should see the search results and be able to allow filter the search$")
	public void the_user_should_see_the_search_results_and_be_able_to_allow_filter_the_search() throws Throwable 
	{
		search = new OpenCart_Searchproduct_POM(driver);
		search.selectCategories();
		Screenshot("src/test/resources/Screenshot/FilterSearch.jpeg");
		Thread.sleep(1000);
		closeBrowser();
	}
	//comparing one product with another
	@Then("^the application should allow the user to compare one product with available another product$")
	public void the_application_should_allow_the_user_to_compare_one_product_with_available_another_product() throws Throwable 
	{
		search = new OpenCart_Searchproduct_POM(driver);
		search.productComparision();
	}
	//comparision results is displayed
	@Then("^the user should be able to see the comparision results$")
	public void the_user_should_be_able_to_see_the_comparision_results() throws Throwable 
	{
		search = new OpenCart_Searchproduct_POM(driver);
		String path = "src/test/resources/Screenshot/ComparisionSearch.jpeg";
		Screenshot(path);
		Thread.sleep(1000);
		closeBrowser();
	}
	//user changes the view mode as list
	@Then("^the user should be able to change the view to List View$")
	public void the_user_should_be_able_to_change_the_view_to_List_View() throws Throwable 
	{
		search = new OpenCart_Searchproduct_POM(driver);
		search.changeToListView();
	}
	//list view is displayed
	@Then("^Results should be viewed in List View$")
	public void results_should_be_viewed_in_List_View() throws Throwable 
	{
		search = new OpenCart_Searchproduct_POM(driver);
		String path = "src/test/resources/Screenshot/ListView.jpeg";
		Screenshot(path);
		Thread.sleep(1000);
		closeBrowser();
	}
}