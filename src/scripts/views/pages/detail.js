import UrlParser from '../../routes/url-parser';
import TheCatalogDbSource from '../../data/thecatalogdb-source';
import { createCatalogDetailTemplate } from '../templates/templates-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteCatalogIdb from '../../data/favorite-catalog-idb';

class detail extends HTMLElement {}
customElements.define('detail-catalog', detail);

const Detail = {
  async render() {
    return `
        <detail-catalog>
            <div id="catalog" class="catalog"></div>
            <div id="likeButtonContainer"></div>
        </detail-catalog>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const catalog = await TheCatalogDbSource.detailCatalog(url.id);
    console.log(catalog);
    const catalogContainer = document.querySelector('#catalog');
    catalogContainer.innerHTML = createCatalogDetailTemplate(catalog);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteCatalog: FavoriteCatalogIdb,
      catalog: {
        id: catalog.restaurant.id,
        name: catalog.restaurant.name,
        description: catalog.restaurant.description,
        pictureId: catalog.restaurant.pictureId,
        rating: catalog.restaurant.rating,
      },
    });
  },
};

export default Detail;
