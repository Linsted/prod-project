import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import PageLoader from "widgets/PageLoader/PageLoader";

import { routesConfig } from "shared/config/routeConfig/routeConfig";

function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routesConfig.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper"> {element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
