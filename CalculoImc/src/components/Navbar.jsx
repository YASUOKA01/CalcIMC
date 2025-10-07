import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-start items-center space-x-10">
        <h2 className="text-gray-100 text-2xl font-bold tracking-wide">
          YasuokaLiteFite<span className="text-yellow-400 font-extrabold">Corp</span>
        </h2>

        <div className="flex items-center space-x-6 ml-4">
          <Link
            to="/"
            className="text-gray-200 text-lg font-medium hover:text-yellow-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/imc"
            className="text-gray-200 text-lg font-medium hover:text-yellow-400 transition-colors duration-300"
          >
            IMC
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
