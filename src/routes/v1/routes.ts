import { Router } from "express";
import docsRoute from "./docs.route";
import config from "../../config/config";
import healthRoute from "./health.route";
import authRoute from "./auth.route";

const router = Router();

const defaultRoutes: Array<{ path: string; route: any }> = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/docs",
    route: docsRoute,
  },
  {
    path: "/health",
    route: healthRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
