import { Suspense, useContext, useState } from "react";

import { Route, Routes, Link } from "react-router-dom";
import { MainPageLazy } from "../pages/MainPage/MainPage.lazy";
import { AboutPageLazy } from "../pages/AboutPage/AboutPage.lazy";
import { THEME, ThemeContext } from "../theme/ThemeContext";
import { useTheme } from "../theme/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
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
