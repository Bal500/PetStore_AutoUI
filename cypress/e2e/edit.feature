Feature: Edit

    Let's change the pet to 'not new', also edit what type of animal it is

    Scenario: Navigating to the edit page
        Given I have already created a new animal
        When I click on the Detail button of the pet
        Then I click on the Edit button
        Then I make sure I am using the editor
    
    Scenario: Changing details
        Then I mark the pet as not new
        Then I change the type of the animal
        Then I click Save to update the pet
        Then I am returned to the home page

    Scenario: Validation
        Then I check if the pet is now a different kind
        Then I check if the pet is not new anymore