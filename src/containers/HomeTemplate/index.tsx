import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import React, { FunctionComponent } from 'react';
import { Route, RouteProps, RouteComponentProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

function LayoutHome({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className='h-screen'>
      <Navbar />
      <Sidebar />
      <div className='flex flex-col justify-between h-full'>
        <div className='p-6 mt-[64px] m-0 lg:ml-[160px]'>{children}</div>
        <Footer />
      </div>
    </div>
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
