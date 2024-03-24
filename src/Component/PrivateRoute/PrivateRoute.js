import React from 'react';
import { Route, Navigate } from 'react-router-dom';

export const PrivateRoute = ({ element, loggedIn, ...rest }) => {
  console.log(loggedIn);
  return loggedIn.isSingedIn ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/Login" />
  );
};
