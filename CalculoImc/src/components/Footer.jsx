import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-950 to-black text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <h2 className="text-xl font-bold text-yellow-400">
          YasuokaLiteFite<span className="text-blue-400 font-extrabold">Corp</span>
        </h2>

        <div className="flex space-x-6">
          <Link className="hover:text-yellow-400 transition-colors duration-300" to="/">
            Home
          </Link>
          <Link className="hover:text-yellow-400 transition-colors duration-300" to="/imc">
            IMC
          </Link>
          <Link className="hover:text-yellow-400 transition-colors duration-300" to="#">
            Contato
          </Link>
        </div>

        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} YasuokaLiteFite. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
