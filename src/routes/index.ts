import HomePage from '../containers/HomeTemplate/HomePage';
import ManagePostPage from '../containers/AdminTemplate/ManagePostPage';
import LearningPathsPage from 'containers/HomeTemplate/LearningPathsPage';
import CoursesPage from 'containers/HomeTemplate/CoursesPage';
import DetailCoursePage from 'containers/HomeTemplate/DetailCoursePage';
const routesHome = [
  {
    exact: true,
    path: '/',
    component: HomePage,
  },
  {
    exact: false,
    path: '/learning-path',
    component: LearningPathsPage,
  },
  {
    exact: false,
    path: '/course/:id',
    component: DetailCoursePage,
  },
  {
    exact: false,
    path: '/course',
    component: CoursesPage,
  },
];
const routesAdmin = [
  {
    exact: false,
    path: '/manage-posts',
    component: ManagePostPage,
  },
];

export { routesHome, routesAdmin };
