/* eslint-disable no-undef */
Feature('open favorite page');

Scenario('Showing page of liked restaurant', ({ I }) => {
  I.amOnPage('/');
  I.seeElement('#goToFavoritePage');
  I.click('#goToFavoritePage');
  I.waitForElement('favorite-catalog');
  I.seeElement('favorite-catalog');
});
