import { Suspense, useState } from "react";

import Modal from "shared/ui/Modal/Modal";
import Navbar from "widgets/Navbar/ui/Navbar";
import Sidebar from "widgets/Sidebar/ui/SIdebar/Sidebar";
import AppRouter from "./providers/router/ui/AppRouter";

import useTheme from "../shared/config/theme/useTheme";
import classNames from "../shared/lib/classNames/classNames";

function App() {
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
}

export default App;
