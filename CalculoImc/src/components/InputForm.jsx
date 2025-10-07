export default function InputForm({ peso, setPeso, altura, setAltura, onCalcular }) {
  return (
    <div className="bg-blue-800/80 backdrop-blur-md shadow-lg rounded-2xl p-6 w-80">
      <input
        type="number"
        step="any"
        placeholder="Peso (kg)"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
      />
      <input
        type="number"
        step="any"
        placeholder="Altura (m)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
      />

      <button
        type="button"
        onClick={onCalcular}
        className="w-full bg-yellow-400 text-blue-900 py-2 rounded font-bold hover:bg-yellow-500 transition-colors"
      >
        Calcular
      </button>
    </div>
  );
}
