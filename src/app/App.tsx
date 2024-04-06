import { Link } from "react-router-dom";

import AppRouter from "./providers/router/ui/AppRouter";
import Navbar from "widgets/Navbar/ui/Navbar";

import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "../shared/config/theme/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>Change theme</button>
    </div>
  );
};

export default App;
