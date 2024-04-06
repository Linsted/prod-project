import React from "react";

import { AboutPageLazy } from "pages/AboutPage/ui/AboutPage.lazy";
import { MainPageLazy } from "pages/MainPage/ui/MainPage.lazy";

export enum ROUTES {
  MAIN = "main",
  ABOUT = "about",
}

export enum ROUTS_PATHS {
  MAIN = "/",
  ABOUT = "/about",
}

export const routePath: Record<ROUTES, ROUTS_PATHS> = {
  [ROUTES.MAIN]: ROUTS_PATHS.MAIN,
  [ROUTES.ABOUT]: ROUTS_PATHS.ABOUT,
};

type RouteConfig = {
  path: ROUTS_PATHS;
  element: React.ReactNode;
};

export const routesConfig: RouteConfig[] = [
  {
    path: ROUTS_PATHS.MAIN,
    element: <MainPageLazy />,
  },
  {
    path: ROUTS_PATHS.ABOUT,
    element: <AboutPageLazy />,
  },
];
