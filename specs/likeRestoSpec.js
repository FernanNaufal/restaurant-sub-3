/* eslint-disable no-undef */
import FavoriteCatalogIdb from '../src/scripts/data/favorite-catalog-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithCatalog({ id: 1 });

    expect(document.querySelector('[aria-label="like this catalog"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithCatalog({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this catalog"]'))
      .toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithCatalog({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteCatalogIdb.getCatalog(1);
    expect(restaurant).toEqual({ id: 1 });
    FavoriteCatalogIdb.deleteCatalog(1);
  });

  it('should not add a catalog again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithCatalog({ id: 1 });

    await FavoriteCatalogIdb.putCatalog({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteCatalogIdb.getAllCatalogList()).toEqual([{ id: 1 }]);

    FavoriteCatalogIdb.deleteCatalog(1);
  });

  it('should not add a catalog when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithCatalog({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteCatalogIdb.getAllCatalogList()).toEqual([]);
  });
});
