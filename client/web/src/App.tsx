import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.css";
import LoginPage from "./components/login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/login" Component={LoginPage} />
        <Route path="/events" />
        <Route path="/profile" />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
