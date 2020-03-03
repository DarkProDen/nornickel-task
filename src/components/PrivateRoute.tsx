import React, { SFC } from 'react';
import checkToken from '../misc/checkToken';
import { Redirect, Route, RouteProps } from 'react-router-dom';

const PrivateRoute: SFC<RouteProps> = (props): JSX.Element => (
  <Route {...props}>
    {checkToken() ? (
      props.children
    ) : (
      <Redirect
        to={{
          pathname: '/login',
        }}
      />
    )}
  </Route>
);

export default PrivateRoute;
