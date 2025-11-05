import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import IMC from "./pages/IMC";
import UsersList from "./pages/UsersList";
import { useAuth } from "./context/AuthContext";

export default function App() {
  const { currentUser } = useAuth();

  return (
    <Router>
      {currentUser && <Navbar />} {/* Navbar só aparece se logado */}

      <Routes>
        {!currentUser ? (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/imc" element={<IMC />} />
            <Route path="/userslist" element={<UsersList />} />
          </>
        )}
      </Routes>
    </Router>
  );
}
