import React from "react";

import AboutPageLazy from "pages/AboutPage/ui/AboutPage.lazy";
import MainPageLazy from "pages/MainPage/ui/MainPage.lazy";
import NotFoundPageLazy from "pages/NotFound/ui/NotFoundPage.lazy";

export enum ROUTES {
  MAIN = "main",
  ABOUT = "about",
  NOT_FOUND = "not_found",
}

export enum ROUTS_PATHS {
  MAIN = "/",
  ABOUT = "/about",
  NOT_FOUND = "/*",
}

export const routePath: Record<ROUTES, ROUTS_PATHS> = {
  [ROUTES.MAIN]: ROUTS_PATHS.MAIN,
  [ROUTES.ABOUT]: ROUTS_PATHS.ABOUT,
  [ROUTES.NOT_FOUND]: ROUTS_PATHS.NOT_FOUND,
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
  {
    path: ROUTS_PATHS.NOT_FOUND,
    element: <NotFoundPageLazy />,
  },
];
