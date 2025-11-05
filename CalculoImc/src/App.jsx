import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import IMC from "./pages/IMC";
import UsersList from "./pages/UsersList";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/imc" element={<IMC />} />
        <Route path="/userslist" element={<UsersList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
