import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-yellow-400 text-center p-8">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-6">Página não encontrada 😢</p>
      <Link
        to="/"
        className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 shadow-md transition-transform hover:scale-105"
      >
        Voltar para Home
      </Link>
    </div>
  );
}
