import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/homepage";
import FixdermaPage from "./pages/FixDermaPage";
import FclPage from "./pages/FclPage";
import AboutPage from "./pages/About";
import FaceCare from "./pages/FaceCare";
import SkinConcernPage from "./pages/SkinConcern";
import BodyCare from "./pages/BodyCare";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/fix-derma" element={<FixdermaPage />} />
        <Route path="/fcl" element={<FclPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/fix-derma/face-care" element={<FaceCare />} />
        <Route path="/fix-derma/face-care" element={<FaceCare />} />
        <Route path="/fix-derma/body-care" element={<BodyCare />} />
        <Route path="skin-concerns" element={<SkinConcernPage />} />
      </Route>
    </Routes>
  );
}

export default App;
