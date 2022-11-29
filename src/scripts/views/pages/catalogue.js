/* eslint-disable no-shadow */
/* eslint-disable camelcase */
import TheCatalogDbSource from '../../data/thecatalogdb-source';
import { createCatalogItemTemplate, createSkeletonRestaurantTemplate } from '../templates/templates-creator';

const Catalogue = {
  async render() {
    return `
    <div class="jumbotron">
    <div class="inner-jumbotron">
        <h1 class="title-jumbotron">Krusty Krab Resto</h1>
        <p class="subtitle-jumbotron">Krusty Krab merupakan suatu restoran yang menyajikan berbagai hidangan yang tidak akan mengecewakan.</p>
    </div>
</div>

    <div tabidex="0" class="menu" id="catalog_content">
        <h2 tabindex="0" class="sub_title" id="sub_title">List Restaurant</h2>
        <div class="line_small" ></div>
        <div class="line_big"></div>
        <div class="line_small"></div>
        <br><br>
        <catalog-list>
            <div id="catalog_list" class="catalog_list">
              ${createSkeletonRestaurantTemplate(20)}
            </div>
        </catalog-list>
    </div>
  `;
  },

  async afterRender() {
    const catalog_list = await TheCatalogDbSource.nowPlayingCatalogList();
    console.log(catalog_list);
    const catalog_list_container = document.querySelector('#catalog_list');
    catalog_list_container.innerHTML = '';
    catalog_list.forEach((Catalogue) => {
      catalog_list_container.innerHTML += createCatalogItemTemplate(Catalogue);
    });
  },
};
export default Catalogue;
