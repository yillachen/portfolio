import { Project } from "paper/dist/paper-core";
import About from "../components/About";
import Landing from "../components/Landing";
import IRoute from "../interface/route";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
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
    component: Project,
    exact: true,
  },
];

export default routes;
