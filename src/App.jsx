import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import HomePage from "./pages/homepage";
import FixdermaPage from "./pages/fixdermapage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/fix-derma" element={<FixdermaPage />} />
      </Route>
    </Routes>
  );
}

export default App;
