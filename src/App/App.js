import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, AboutCompany } from "@components/";
import { routesConfig } from "@cs/routes";
import styles from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <AboutCompany />
        <Routes>
          {routesConfig.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              element={route.element}
            />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
