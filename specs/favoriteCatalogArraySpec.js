/* eslint-disable no-undef */
import { itActAsFavoriteCatalogModel } from './contract/favotireRestoContract';

let favoriteCatalog = [];

const FavoriteCatalogArray = {
  getCatalog(id) {
    if (!id) {
      return;
    }

    // eslint-disable-next-line consistent-return
    return favoriteCatalog.find((Restaurant) => Restaurant.id === id);
  },

  getAllCatalogList() {
    return favoriteCatalog;
  },

  putCatalog(Restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!Restaurant.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestaurants
    if (this.getCatalog(Restaurant.id)) {
      return;
    }

    favoriteCatalog.push(Restaurant);
  },

  deleteCatalog(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteCatalog = favoriteCatalog.filter((Restaurant) => Restaurant.id !== id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  // eslint-disable-next-line no-return-assign
  afterEach(() => favoriteCatalog = []);

  itActAsFavoriteCatalogModel(FavoriteCatalogArray);
});
