/* eslint-disable no-undef */
import { itActAsFavoriteCatalogModel } from './contract/favotireRestoContract';
import FavoriteCatalogIdb from '../src/scripts/data/favorite-catalog-idb';

describe('Favorite Catalog Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteCatalogIdb.getAllCatalogList()).forEach(async (catalog) => {
      await FavoriteCatalogIdb.deleteCatalog(catalog.id);
    });
  });

  itActAsFavoriteCatalogModel(FavoriteCatalogIdb);
});
