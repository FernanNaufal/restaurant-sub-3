import API_ENDPOINT from '../globals/api-endpoint';

class TheCatalogDbSource {
  static async nowPlayingCatalogList() {
    const response = await fetch(API_ENDPOINT.NOW_PLAYING);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailCatalog(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default TheCatalogDbSource;
