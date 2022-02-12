import React from 'react';
import { Home, Blogs } from "./../Pages";

const appRoutes = [
  {
  	name:"blogs",
  	exact:true,
    path: "/blogs",
    element: <Blogs/>,
  },
  {
  	name:"home",
  	exact:true,
    path: "/",
    element: <Home/>,
  }
];

export default appRoutes;
