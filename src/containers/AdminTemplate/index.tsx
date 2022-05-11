import Navbar from 'components/Navbar';
import React, { FunctionComponent } from 'react';
import {
  Route,
  RouteProps,
  RouteComponentProps,
  Redirect,
} from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';

interface PrivateRouteProps extends RouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

function LayoutAdmin({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <Navbar />
      <div className='mt-[64px] ml-[160px]'>{children}</div>
    </>
  );
}

const AdminTemplate: FunctionComponent<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  let isTeacher = localStorage.getItem('isTeacher');
  if (isTeacher) isTeacher = JSON.parse(isTeacher);
  if (isTeacher)
    return (
      <Route
        {...rest}
        render={(props: any) => {
          const token = localStorage.getItem('token');
          if (token)
            return (
              <LayoutAdmin>
                <Component {...props} />
              </LayoutAdmin>
            );
          return <Redirect to='/' />;
        }}
      ></Route>
    );
  return <Redirect to='/' />;
};

export default AdminTemplate;
