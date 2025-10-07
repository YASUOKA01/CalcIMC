export default function InputForm({ peso, setPeso, altura, setAltura, onCalcular }) {
  return (
    <div className="bg-blue-800/80 backdrop-blur-md shadow-lg rounded-2xl p-6 w-80 space-y-4">

      <div className="relative">
        <label htmlFor="peso" className="sr-only">Peso</label>
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">kg</span>
        <input
          id="peso"
          type="number"
          step="0.1"
          min="0"
          placeholder="Peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          className="w-full pl-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
          aria-label="Peso em quilogramas"
        />
      </div>

      <div className="relative">
        <label htmlFor="altura" className="sr-only">Altura</label>
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">m</span>
        <input
          id="altura"
          type="number"
          step="0.01"
          min="0"
          placeholder="Altura"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          className="w-full pl-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
          aria-label="Altura em metros"
        />
      </div>

      <button
        type="button"
        onClick={onCalcular}
        className="w-full bg-yellow-400 text-blue-900 py-2 rounded font-bold hover:bg-yellow-500 transition-colors"
      >
        Calcular IMC
      </button>
    </div>
  );
}
