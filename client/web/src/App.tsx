import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.css";
import LoginPage from "./components/login";
import ProtectedRoute from "./components/protected.route";
import ProfilePage from "./components/profile";
import HomePage from "./components/home";
import RegistrationPage from "./components/registration";
import EventsPage from "./components/events";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route
          path="/events"
          element={
            <ProtectedRoute>
              <EventsPage />
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
