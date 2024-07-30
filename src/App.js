import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import GingerLandingPage from "./pages/GingerLandingPage";
import ECommerceLandingPage from "./pages/ECommerceLandingPage";

function App() {
  const action = useNavigationType();

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  return (
    <Routes>
      <Route path="/" element={<GingerLandingPage />} />
      <Route path="/ecommerce-landing-page" element={<ECommerceLandingPage />} />
    </Routes>
  );
}

export default App;
