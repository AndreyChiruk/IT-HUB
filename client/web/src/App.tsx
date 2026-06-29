import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.css";
import LoginPage from "./components/login";
import ProtectedRoute from "./components/protected.route";
import ProfilePage from "./components/profile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/events"
          element={
            <ProtectedRoute>
              <></>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
