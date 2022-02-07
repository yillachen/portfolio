import About from "../client/components/About";
import Projects from "../client/components/Projects";
import IRoute from "../interface/route";
import Mesh from "../client/components/projects/mesh";
import Hearth from "../client/components/projects/hearth";
import Loading from "../client/components/loading/Loading";

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
  {
    path: "/loading",
    name: "Hearth",
    component: Loading,
    exact: true,
  },
];

export default routes;
