import LikeButtonInitiator from '../../src/scripts/utils/like-button-presenter';
import FavoriteCatalogIdb from '../../src/scripts/data/favorite-catalog-idb';

const createLikeButtonPresenterWithCatalog = async (catalog) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteCatalog: FavoriteCatalogIdb,
    catalog,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithCatalog };
