/* eslint-disable no-undef */
const assert = require('assert');

Feature('unliking restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#catalog_list');
  I.see('Daftar masih kosong');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Daftar masih kosong');

  I.amOnPage('/');

  I.waitForElement('.catalog-item__content a');
  I.seeElement('.catalog-item__content a');

  const firstItem = locate('.catalog-item__content a').first();
  const firstItemName = await I.grabTextFrom(firstItem);
  I.click(firstItem);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.catalog-item');
  const likedItemName = await I.grabTextFrom('.catalog-item__content a');

  assert.strictEqual(firstItemName, likedItemName);

  I.click('.catalog-item__content a');

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Daftar masih kosong');
});
