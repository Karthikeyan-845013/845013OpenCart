$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Feature/Features.feature");
formatter.feature({
  "line": 1,
  "name": "Open Cart Application",
  "description": "",
  "id": "open-cart-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Search Functionality",
  "description": "",
  "id": "open-cart-application;search-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@TC_01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user opens the application by launching the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the product is being searched",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Search button is clicked",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "search results is displayed and can be viewed by the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "OpenCart_Searchproduct_StepDefinition.the_user_launches_the_chrome_browser_and_opens_application()"
});
formatter.result({
  "duration": 14558847400,
  "status": "passed"
});
formatter.match({
  "location": "OpenCart_Searchproduct_StepDefinition.the_user_searches_for_the_product()"
});
formatter.result({
  "duration": 33939588400,
  "status": "passed"
});
formatter.match({
  "location": "OpenCart_Searchproduct_StepDefinition.clicks_on_Search_button()"
});
formatter.result({
  "duration": 4585266900,
  "status": "passed"
});
formatter.match({
  "location": "OpenCart_Searchproduct_StepDefinition.the_user_should_be_able_to_see_the_search_results()"
});
formatter.result({
  "duration": 4878940900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Product Description",
  "description": "",
  "id": "open-cart-application;product-description",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@TC_02"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "the user opens the application by launching the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the product is being searched",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Search button is clicked",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Particular product is clicked by the user",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "The product details is being displayed and viewed by the user",
  "keyword": "Then "
});
formatter.match({
  "location": "OpenCart_Searchproduct_StepDefinition.the_user_launches_the_chrome_browser_and_opens_application()"
});
formatter.result({
  "duration": 15110114100,
  "status": "passed"
});
formatter.match({
  "location": "OpenCart_Searchproduct_StepDefinition.the_user_searches_for_the_product()"
});
formatter.result({
  "duration": 3149091900,
  "status": "passed"
});
formatter.match({
  "location": "OpenCart_Searchproduct_StepDefinition.clicks_on_Search_button()"
});
formatter.result({
  "duration": 4708139700,
  "status": "passed"
});
formatter.match({
  "location": "OpenCart_Searchproduct_StepDefinition.the_user_clicks_on_particular_product()"
});
formatter.result({
  "duration": 10049551200,
  "status": "passed"
});
formatter.match({
  "location": "OpenCart_Searchproduct_StepDefinition.the_user_should_be_able_to_see_all_the_details_regarding_the_product()"
});
formatter.result({
  "duration": 1712169900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Filter",
  "description": "",
  "id": "open-cart-application;filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@TC_03"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "the user opens the application by launching the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the product is being searched",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Search button is clicked",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the user should see the search results and be able to allow filter the search",
  "keyword": "Then "
});
formatter.match({
  "location": "OpenCart_Searchproduct_StepDefinition.the_user_launches_the_chrome_browser_and_opens_application()"
});
formatter.result({
  "duration": 11749086400,
  "status": "passed"
});
formatter.match({
  "location": "OpenCart_Searchproduct_StepDefinition.the_user_searches_for_the_product()"
});
formatter.result({
  "duration": 5519912300,
  "status": "passed"
});
formatter.match({
  "location": "OpenCart_Searchproduct_StepDefinition.clicks_on_Search_button()"
});
formatter.result({
  "duration": 4562669000,
  "status": "passed"
});
formatter.match({
  "location": "OpenCart_Searchproduct_StepDefinition.the_user_should_see_the_search_results_and_be_able_to_allow_filter_the_search()"
});
formatter.result({
  "duration": 7162459200,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Comparision Screenshot",
  "description": "",
  "id": "open-cart-application;comparision-screenshot",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@TC_04"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "the user opens the application by launching the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "the product is being searched",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Search button is clicked",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the application should allow the user to compare one product with available another product",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "the user should be able to see the comparision results",
  "keyword": "And "
});
formatter.match({
  "location": "OpenCart_Searchproduct_StepDefinition.the_user_launches_the_chrome_browser_and_opens_application()"
});
formatter.result({
  "duration": 16174329400,
  "status": "passed"
});
formatter.match({
  "location": "OpenCart_Searchproduct_StepDefinition.the_user_searches_for_the_product()"
});
formatter.result({
  "duration": 3144434500,
  "status": "passed"
});
formatter.match({
  "location": "OpenCart_Searchproduct_StepDefinition.clicks_on_Search_button()"
});
formatter.result({
  "duration": 4319972200,
  "status": "passed"
});
formatter.match({
  "location": "OpenCart_Searchproduct_StepDefinition.the_application_should_allow_the_user_to_compare_one_product_with_available_another_product()"
});
formatter.result({
  "duration": 11496477200,
  "status": "passed"
});
formatter.match({
  "location": "OpenCart_Searchproduct_StepDefinition.the_user_should_be_able_to_see_the_comparision_results()"
});
formatter.result({
  "duration": 1639442100,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "List View",
  "description": "",
  "id": "open-cart-application;list-view",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@TC_05"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "the user opens the application by launching the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "the product is being searched",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Search button is clicked",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user should be able to change the view to List View",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Results should be viewed in List View",
  "keyword": "And "
});
formatter.match({
  "location": "OpenCart_Searchproduct_StepDefinition.the_user_launches_the_chrome_browser_and_opens_application()"
});
formatter.result({
  "duration": 12426168400,
  "status": "passed"
});
formatter.match({
  "location": "OpenCart_Searchproduct_StepDefinition.the_user_searches_for_the_product()"
});
formatter.result({
  "duration": 3445262200,
  "status": "passed"
});
formatter.match({
  "location": "OpenCart_Searchproduct_StepDefinition.clicks_on_Search_button()"
});
formatter.result({
  "duration": 4516278900,
  "status": "passed"
});
formatter.match({
  "location": "OpenCart_Searchproduct_StepDefinition.the_user_should_be_able_to_change_the_view_to_List_View()"
});
formatter.result({
  "duration": 3357476200,
  "status": "passed"
});
formatter.match({
  "location": "OpenCart_Searchproduct_StepDefinition.results_should_be_viewed_in_List_View()"
});
formatter.result({
  "duration": 1595954900,
  "status": "passed"
});
});