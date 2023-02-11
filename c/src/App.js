
import './App.css';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="App">
     <Routes>
        {AppRoutes.map((appRoute) => (
          <Route path={appRoute.path} element={appRoute.comp} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
