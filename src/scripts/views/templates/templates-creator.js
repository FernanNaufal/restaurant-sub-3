/* eslint-disable camelcase */
import CONFIG from '../../globals/config';

const createCatalogDetailTemplate = (catalog) => `
      <h2 class="sub_title" id="sub_title">${catalog.restaurant.name}</h2>
      <div class="line_small"></div>
      <div class="line_big"></div>
      <div class="line_small"></div>
      <br>

      <img class="catalog__img" src="${CONFIG.BASE_IMAGE_URL + catalog.restaurant.pictureId}" alt="${catalog.restaurant.name}" />

      <div class="informasi___catalog">
        <h3>Informasi Resto</h3>
       <h4>Kota :</h4>
        <p>${catalog.restaurant.city}</p>
        <h4>Alamat :</h4>
        <p>${catalog.restaurant.address}</p>
        <h4 >Deskripsi :</h4>
        <p>${catalog.restaurant.description}</p>
        <h4>Menu Makanan :</h4>
        <h4>Menu Makanan :</h4>
        <ul>
          ${catalog.restaurant.menus.foods.map(({ name }) => `<li>${name}</li>`).join('')}
        </ul>
        <h4>Menu Minuman :</h4>
        <ul>
        ${catalog.restaurant.menus.drinks.map(({ name }) => `<li>${name}</li>`).join('')}
        </ul>
        <h4>Review Pengunjung :</h4>  
          ${catalog.restaurant.customerReviews
    .map(
      ({ name, review, date }, index) => `
              <div>
                <b>Review No. ${index + 1}</b>
                <p>Nama: ${name}</p>
                <p>Review: ${review}</p>
                <p>Date: ${date}</p>
              </div>
              <br />
            `,
    )
    .join('')}
      </div>
    `;

const createCatalogItemTemplate = (catalog) => `
  <div class="catalog-item">
    <div class="catalog-item__header">
      <img loading="lazy" tabIndex="0" class="catalog-item__header__poster" alt="${catalog.name}"
           src="${CONFIG.BASE_IMAGE_URL + catalog.pictureId}">
           <span class="fa fa-star checked">${catalog.rating}/5</span>
    </div>
    <div class="catalog-item__content">
      <h3><a class="tombol3" href="/#/detail/${catalog.id}">${catalog.name}</a></h3>
      <div class="list_menu_desc">Description : ${catalog.description}...</div>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this catalog" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this catalog" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createSkeletonRestaurantTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
    <div class="catalog-item">
      <div class="catalog-item__header">
        <img tabIndex="0" class="catalog-item__header__poster" alt="nama restoran"
            src="./images/placeholder.png">
            <span class="fa fa-star checked">rating/5</span>
      </div>
      <div class="catalog-item__content">
        <h3><a class="skeleton" class="tombol3" href="/#/detail">Nama Restoran</a></h3>
        <div class="list_menu_desc skeleton">Description : Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</div>
      </div>
    </div>
    `;
  }
  return template;
};

export {
  createCatalogItemTemplate,
  createCatalogDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createSkeletonRestaurantTemplate,
};
