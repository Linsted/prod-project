import { Suspense } from "react";

import AppRouter from "./providers/router/ui/AppRouter";
import Sidebar from "widgets/Sidebar/ui/SIdebar/Sidebar";
import Navbar from "widgets/Navbar/ui/Navbar";

import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "../shared/config/theme/useTheme";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
