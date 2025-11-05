import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = confirm("Tem certeza que deseja sair?");
    if (confirmLogout) {
      logout();
      navigate("/"); 
    }
  };

  return (
    <nav className="bg-blue-900 text-yellow-400 p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold tracking-wide">YasuokaLiteFiteCorp</h1>
      <div className="space-x-4 flex items-center">
        <Link to="/" className="hover:text-white transition">Home</Link>
        {currentUser && (
          <>
            <Link to="/imc" className="hover:text-white transition">IMC</Link>
            <Link to="/userslist" className="hover:text-white transition">Users</Link>
            <button
              onClick={handleLogout}
              className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-md font-semibold hover:bg-yellow-300 shadow-md transition-transform hover:scale-105"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
