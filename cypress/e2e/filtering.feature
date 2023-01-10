Feature: Filtering

    When clicking any of the 3 images on the top of the page, the one that we have just clicked will disappear from the menu

    Scenario: Checking for active filters
        Given There is no active filter

    Scenario: Cat filter
        When I click the cat icon
        Then Each cat should disappear from the home page
        Then I remove the cat filter
    
    Scenario: Dog filter
        When I click the dog icon
        Then Each dog should disappear from the home page
        Then I remove the dog filter
    
    Scenario: Fish filter
        When I click the fish icon
        Then Each fish should disappear from the home page
        Then I remove the fish filter