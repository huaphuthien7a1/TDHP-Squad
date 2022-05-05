import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import PageNotFound from './containers/PageNotFound';
import { routesHome, routesAdmin } from './routes';
import HomeTemplate from './containers/HomeTemplate';
import AdminTemplate from './containers/AdminTemplate';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { useEffect } from 'react';
// import axios from 'axios';

function App() {
  const renderRoutesHome = (routes: any[]) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            component={item.component}
          ></HomeTemplate>
        );
      });
    }
  };
  const renderRoutesAdmin = (routes: any[]) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            component={item.component}
          />
        );
      });
    }
  };
  return (
    <BrowserRouter>
      <Switch>
        {renderRoutesHome(routesHome)}
        {renderRoutesAdmin(routesAdmin)}
        <Route path='/login' component={LoginPage}></Route>
        <Route path='/register' component={RegisterPage}></Route>
        <Route path='' component={PageNotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
