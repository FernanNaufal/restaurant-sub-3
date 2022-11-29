import Catalogue from '../views/pages/catalogue';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': Catalogue, // default page
  '/Catalogue': Catalogue,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
