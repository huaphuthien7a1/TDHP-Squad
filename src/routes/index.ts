import HomePage from '../containers/HomeTemplate/HomePage';
import ManagePostPage from '../containers/AdminTemplate/ManagePostPage';
const routesHome = [
  {
    exact: true,
    path: '/',
    component: HomePage,
  },
  //   {
  //     exact: false,
  //     path: '/detail/:id',
  //     component: DetailPage,
  //   },
  //   {
  //     exact: false,
  //     path: '/cart',
  //     component: CartPage,
  //   },
  //   {
  //     exact: false,
  //     path: '/purchased',
  //     component: PurchasedPage,
  //   },
];
const routesAdmin = [
  {
    exact: false,
    path: '/manage-posts',
    component: ManagePostPage,
  },
];

export { routesHome, routesAdmin };
