import React from 'react';
import { Home, Blogs } from "./../Pages";

const appRoutes = [
  {
    path: "/blogs",
    element: <Blogs/>,
  },
  {
    path: "/",
    element: <Home/>,
  }
];

export default appRoutes;
