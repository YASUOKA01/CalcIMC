import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-blue-900 text-yellow-400 p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">YasuokaLiteFiteCorp</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-white">Home</Link>
        {currentUser && (
          <>
            <Link to="/imc" className="hover:text-white">IMC</Link>
            <Link to="/userslist" className="hover:text-white">Users</Link>
            <button
              onClick={handleLogout}
              className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-md font-semibold hover:bg-yellow-300"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
