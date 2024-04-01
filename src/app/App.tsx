import { Suspense, useContext, useState } from "react";

import { Link, Route, Routes } from "react-router-dom";
import { AboutPageLazy } from "../pages/AboutPage/ui/AboutPage.lazy";
import { MainPageLazy } from "../pages/MainPage/ui/MainPage.lazy";

import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "../shared/config/theme/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Change theme</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
