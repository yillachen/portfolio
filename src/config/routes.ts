import About from "../components/About";
import Projects from '../components/Projects';
import IRoute from "../interface/route";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Projects",
    component: Projects,
    exact: true,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    exact: true,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    exact: true,
  },
];

export default routes;
