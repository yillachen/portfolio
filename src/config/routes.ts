import About from "../components/About";
import Projects from "../components/Projects";
import IRoute from "../interface/route";
import Mesh from '../components/projects/mesh'
import Hearth from '../components/projects/hearth'

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
  {
    path: "/projects/mesh",
    name: "Mesh",
    component: Mesh,
    exact: true,
  },
  {
    path: "/projects/hearth",
    name: "Hearth",
    component: Hearth,
    exact: true,
  },
];

export default routes;
