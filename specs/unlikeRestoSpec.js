/* eslint-disable no-undef */
import FavoriteCatalogIdb from '../src/scripts/data/favorite-catalog-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteCatalogIdb.putCatalog({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteCatalogIdb.deleteCatalog(1);
  });

  it('should display unlike widget when the catalog has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithCatalog({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this catalog"]'))
      .toBeTruthy();
  });

  it('should not display like widget when the catalog has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithCatalog({ id: 1 });

    expect(document.querySelector('[aria-label="like this catalog"]'))
      .toBeFalsy();
  });

  it('should be able to remove liked catalog from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithCatalog({ id: 1 });

    document.querySelector('[aria-label="unlike this catalog"]').dispatchEvent(new Event('click'));
    expect(await FavoriteCatalogIdb.getAllCatalogList()).toEqual([]);
  });

  it('should not throw error if the unliked catalog is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithCatalog({ id: 1 });

    await FavoriteCatalogIdb.deleteCatalog(1);
    document.querySelector('[aria-label="unlike this catalog"]').dispatchEvent(new Event('click'));
    expect(await FavoriteCatalogIdb.getAllCatalogList()).toEqual([]);
  });
});
