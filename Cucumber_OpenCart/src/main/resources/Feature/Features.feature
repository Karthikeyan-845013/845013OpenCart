Feature: Open Cart Application
@TC_01
Scenario: Search Functionality
Given the user opens the application by launching the chrome browser
When the product is being searched
And Search button is clicked
Then search results is displayed and can be viewed by the browser

@TC_02
Scenario: Product Description
Given the user opens the application by launching the chrome browser
When the product is being searched
And Search button is clicked
When Particular product is clicked by the user
Then The product details is being displayed and viewed by the user

@TC_03
Scenario: Filter
Given the user opens the application by launching the chrome browser
When the product is being searched
And Search button is clicked
Then the user should see the search results and be able to allow filter the search

@TC_04
Scenario: Comparision Screenshot
Given the user opens the application by launching the chrome browser
When the product is being searched
And Search button is clicked
Then the application should allow the user to compare one product with available another product
And the user should be able to see the comparision results

@TC_05
Scenario: List View
Given the user opens the application by launching the chrome browser
When the product is being searched
And Search button is clicked
Then the user should be able to change the view to List View
And Results should be viewed in List View
