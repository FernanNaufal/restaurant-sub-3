import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/templates-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteCatalog, catalog }) {
    this._likeButtonContainer = likeButtonContainer;
    this._catalog = catalog;
    this._favoriteCatalog = favoriteCatalog;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._catalog;

    if (await this._isCatalogExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isCatalogExist(id) {
    const catalog = await this._favoriteCatalog.getCatalog(id);
    return !!catalog;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteCatalog.putCatalog(this._catalog);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteCatalog.deleteCatalog(this._catalog.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
