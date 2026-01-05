import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage"
import MainLayout from "./layout/MainLayout"

function App() {

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />
    </Routes>
  )
}

export default App
