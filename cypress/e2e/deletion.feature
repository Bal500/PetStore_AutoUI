Feature: Deletion

    Let's delete our previously created and edited pet from the shop

    Scenario: Navigating to the Details page, to delete it
        Given I have already created and modified my pet
        When I click on the Detail button of the pet
    
    Scenario: Deleting the pet
        Then I have the option to delete it
        Then My pet is no longer visible on the home page