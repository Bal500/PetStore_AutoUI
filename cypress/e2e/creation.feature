Feature: Creation

    Create a new pet with the important checkbox checked

    Scenario: Navigating to the creator page
        Given I am on the correct site
        When I click the creator button
        Then The creator page should open
    
    Scenario: Entering data
        Then I can give a name for the pet
        Then I can choose what type of animal I have
        Then I can make my new pet important
        Then I can give the age of the new pet

    Scenario: Saving the pet
        Then I click create to get my pet to the home page
        Then I am returned to the home page

    Scenario: Searching for the pet
        Then I make sure that the pet is created
        Then I check if the details were entered successfully