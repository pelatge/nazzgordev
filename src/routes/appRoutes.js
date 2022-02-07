import { Home, About } from "./../pages";

const appRoutes = [
  {
    name: "About",
    component: About,
    exact: true,
    path: "/about"
  },
  {
    name: "Homepage",
    component: Home,
    exact: true,
    path: "/"
  }
];

export default appRoutes;
