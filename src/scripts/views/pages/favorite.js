/* eslint-disable camelcase */
import FavoriteCatalogIdb from '../../data/favorite-catalog-idb';
import { createCatalogItemTemplate } from '../templates/templates-creator';

class favorite extends HTMLElement {}
customElements.define('favorite-catalog', favorite);

const logo_detail = document.querySelectorAll('.logo_detail');
const intro_detail = document.querySelector('#intro_detail');

const Like = {
  async render() {
    return `
    <div class="jumbotron" style="background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('images/heros/hero-image_2.jpg');  ">
      <div class="inner-jumbotron">
          <h1 class="title-jumbotron">Krusty Krab Favorite Resto</h1>
      </div>
    </div>
    <div tabindex="0" class="content">
      <h2 tabindex="0" class="sub_title" id="sub_title">List Favorite Restaurants</h2>
      <div class="line_small"></div>
      <div class="line_big"></div>
      <div class="line_small"></div>
      <br><br>
      <favorite-catalog>
        <div id="catalog_list" class="catalog_list"></div>
      </favorite-catalog>
    </div>
    `;
  },

  async afterRender() {
    const catalog_list = await FavoriteCatalogIdb.getAllCatalogList();
    const catalog_list_container = document.querySelector('#catalog_list');
    if (catalog_list.length === 0) {
      catalog_list_container.innerHTML = `
      <h3>Daftar masih kosong</h3>
      `;
    }
    catalog_list.forEach((catalog) => {
      catalog_list_container.innerHTML += createCatalogItemTemplate(catalog);
    });

    const tombol3 = document.querySelectorAll('.tombol3');
    tombol3.forEach((i) => {
      i.addEventListener('click', () => {
        setTimeout(() => {
          logo_detail.forEach(() => {
            setTimeout(() => {
              intro_detail.style.top = '0vh';
            });
          });

          setTimeout(() => {
            logo_detail.forEach((span, idx) => {
              setTimeout(() => {
                span.classList.remove('fade');
                span.classList.add('active');
              }, (idx + 1) * 100);
            });
          });

          setTimeout(() => {
            logo_detail.forEach((span, idx) => {
              setTimeout(() => {
                span.classList.remove('active');
                span.classList.add('fade');
              }, (idx + 1) * 100);
            });
          }, 1300);
        });
      });
    });
  },
};

export default Like;
