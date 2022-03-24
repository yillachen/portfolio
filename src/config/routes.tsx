import About from "../client/components/About";
import Projects from "../client/components/Projects";
import IRoute from "../interface/route";
import Mesh from "../client/components/projects/mesh";
import Hearth from "../client/components/projects/hearth";
import Home from "../client/components/Home";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
  }
];

export default routes;
