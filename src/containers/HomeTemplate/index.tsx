import React, { FunctionComponent } from 'react';
import { Route, RouteProps, RouteComponentProps } from 'react-router-dom';
import Navbar from '../../components/Navbar';

interface PrivateRouteProps extends RouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

function LayoutHome({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
const HomeTemplate: FunctionComponent<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props: any) => (
        <LayoutHome>
          <Component {...props} />
        </LayoutHome>
      )}
    ></Route>
  );
};

export default HomeTemplate;
