import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

before(() => {
  cy.visit('https://petstore.casrd.de/pet');
});


//Create

  //Navigating
  Given('I am on the correct site', () => {
    cy.url().should('eq', 'https://petstore.casrd.de/pet');
  });

  When('I click the creator button', () => {
    cy.get('a.nav-link').contains('Create').click();
  });

  Then('The creator page should open', () => {
    cy.url().should('eq', 'https://petstore.casrd.de/pet/create');
  });

  //Entering data
  Then('I can give a name for the pet', () => {
    cy.get('input#name').type('Bala');
  });

  Then('I can choose what type of animal I have', () => {
    cy.get('input#type-dog').check();
  });

  Then('I can make my new pet important', () => {
    cy.get('input#highlighted').check();
  });

  Then('I can give the age of the new pet', () => {
    cy.get('input#age').type('20');
  });

  //Saving
  Then('I click create to get my pet to the home page', () => {
    cy.get('button.btn.btn-primary.mr-2').click();
  });

  Then('I am returned to the home page', () => {
    cy.url().should('contain', '\pet');
  });

  //Searching for the pet
  Then('I make sure that the pet is created', () => {
    cy.get('div.pet').contains('Bala');
  });

  Then('I check if the details were entered successfully', () => {
    cy.contains('div.card', 'Bala').should('contain', 'Important');
  });



//Edit

  //Navigating
  Given('I have already created a new animal', () => {
    cy.get('div.pet').contains('Bala');
  });

  When('I click on the Detail button of the pet', () => {
    cy.contains('div.card', 'Bala').find('a.btn.btn-primary').click();
  });

  Then('I click on the Edit button', () => {
    cy.get('a.btn.btn-primary.mr-2').click();
  });

  Then('I make sure I am using the editor', () => {
    cy.url().should('contain', '/edit')
  });

  //Changing details
  Then('I mark the pet as not new', () => {
    cy.get('input#new').uncheck();
  });

  Then('I change the type of the animal', () => {
    cy.get('input#type-fish').check();
  });

  Then('I click Save to update the pet', () => {
    cy.get('button.btn.btn-primary.mr-2').click();
  });

  //Validation
  Then('I check if the pet is now a different kind', () => {
    cy.get('div').find('img').should('have.attr', 'src').should('contain', 'fish');
  });

  Then('I check if the pet is not new anymore', () => {
    cy.contains('div.card', 'Bala').should('not.contain', 'New');
  });



//Deletion

  //Navigation
  Given('I have already created and modified my pet', () => {
    cy.get('div.pet').contains('Bala');
  });

  //Deleting
  Then('I have the option to delete it', () => {
    cy.get('button.btn.btn-outline-danger').click();
  });

  Then('My pet is no longer visible on the home page', () => {
    cy.get('div.pet').should('not.contain', 'Bala');
  });



//Filtering

  //Active filters
  Given('There is no active filter', () => {
    cy.get('div.col-xs-1.cat').should('not.contain', 'filtered');
    cy.get('div.col-xs-1.dog').should('not.contain', 'filtered');
    cy.get('div.col-xs-1.fish').should('not.contain', 'filtered');
  });

  //Cat filter
  When('I click the cat icon', () => {
    cy.get('div.col-xs-1.cat').click();
  });

  Then('Each cat should disappear from the home page', () => {
    cy.get('div.card').each(($ele) => {
      cy.wrap($ele).find('div').find('img').should('have.attr', 'src').should('not.contain', 'cat');
    });
  });

  Then('I remove the cat filter', () => {
    cy.get('div.col-xs-1.cat.filtered').click();
  });

  //Dog filter
  When('I click the dog icon', () => {
    cy.get('div.col-xs-1.dog').click();
  });

  Then('Each dog should disappear from the home page', () => {
    cy.get('div.card').each(($ele) => {
      cy.wrap($ele).find('div').find('img').should('have.attr', 'src').should('not.contain', 'dog');
    });
  });

  Then('I remove the dog filter', () => {
    cy.get('div.col-xs-1.dog.filtered').click();
  });

  //Fish filter
  When('I click the fish icon', () => {
    cy.get('div.col-xs-1.fish').click();
  });

  Then('Each fish should disappear from the home page', () => {
    cy.get('div.card').each(($ele) => {
      cy.wrap($ele).find('div').find('img').should('have.attr', 'src').should('not.contain', 'fish');
    });
  });

  Then('I remove the fish filter', () => {
    cy.get('div.col-xs-1.fish.filtered').click();
  });