import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import HomePage from "./pages/homepage";
import FixdermaPage from "./pages/fixdermapage";
import FclPage from "./pages/FclPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/fix-derma" element={<FixdermaPage />} />
        <Route path="/fcl" element={<FclPage />} />
      </Route>
    </Routes>
  );
}

export default App;
