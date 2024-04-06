import { Link } from "react-router-dom";

import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "../shared/config/theme/useTheme";
import AppRouter from "./providers/router/ui/AppRouter";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Change theme</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <AppRouter />
    </div>
  );
};

export default App;
