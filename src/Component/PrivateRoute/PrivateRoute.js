import React from 'react';
import { Route, Navigate } from 'react-router-dom';

export const PrivateRoute = ({ element, loggedIn, ...rest }) => {
  return loggedIn ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/Login" />
  );
};
