import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h2 className="text-5xl font-bold text-red-600 mb-4">404</h2>
      <p className="text-lg mb-4">Página não encontrada!</p>
      <Link to="/" className="text-blue-600 hover:underline">Voltar para Home</Link>
    </div>
  );
}
