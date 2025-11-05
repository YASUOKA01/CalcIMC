import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handleNavigate() {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/imc"); // se estiver logado, vai direto pra calculadora
    } else {
      navigate("/login"); // se não estiver logado, vai pra tela de login
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 via-blue-950 to-black text-center px-6 py-10 space-y-10 text-gray-100">
      
      <h2 className="text-5xl font-extrabold mb-6 text-yellow-400 drop-shadow-lg">
        Bem-vindo à <span className="text-blue-400">YasuokaLiteFite</span>
      </h2>

      <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
        Cuidar da sua saúde é o primeiro passo para viver melhor.  
        Descubra como melhorar seu bem-estar, acompanhar seus resultados e ter uma vida mais equilibrada com a gente!
      </p>

      <section className="max-w-3xl bg-blue-800/40 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold text-yellow-400 mb-4">
          Por que usar o YasuokaLiteFite?
        </h3>
        <ul className="text-left text-gray-200 space-y-3 list-disc list-inside">
          <li>✅ Monitore sua saúde de forma simples e rápida</li>
          <li>📈 Acompanhe seu progresso ao longo do tempo</li>
          <li>⚖️ Calcule seu IMC com precisão</li>
          <li>🍎 Receba orientações básicas de bem-estar</li>
          <li>🧠 Aprenda sobre saúde de forma descomplicada</li>
        </ul>
      </section>

      <section className="max-w-3xl bg-blue-800/30 backdrop-blur-sm p-6 rounded-2xl shadow-md">
        <h3 className="text-xl font-semibold text-yellow-300 mb-4">Recursos disponíveis:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <div className="bg-blue-900/60 p-4 rounded-xl border border-blue-700 shadow">
            <h4 className="font-bold text-blue-300">🔢 Calculadora de IMC</h4>
            <p className="text-sm text-gray-300 mt-1">
              Descubra rapidamente seu índice de massa corporal e veja sua classificação.
            </p>
          </div>
          <div className="bg-blue-900/60 p-4 rounded-xl border border-blue-700 shadow">
            <h4 className="font-bold text-blue-300">📊 Acompanhamento</h4>
            <p className="text-sm text-gray-300 mt-1">
              Em breve: salve e visualize seus resultados anteriores.
            </p>
          </div>
          <div className="bg-blue-900/60 p-4 rounded-xl border border-blue-700 shadow">
            <h4 className="font-bold text-blue-300">💡 Dicas de saúde</h4>
            <p className="text-sm text-gray-300 mt-1">
              Receba sugestões simples para melhorar sua rotina e bem-estar.
            </p>
          </div>
          <div className="bg-blue-900/60 p-4 rounded-xl border border-blue-700 shadow">
            <h4 className="font-bold text-blue-300">🧘 Hábitos saudáveis</h4>
            <p className="text-sm text-gray-300 mt-1">
              Conheça práticas recomendadas para manter corpo e mente em equilíbrio.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-yellow-400/10 border border-yellow-500 rounded-xl p-6 max-w-2xl shadow-inner">
        <h3 className="text-xl font-bold text-yellow-300 mb-2">
          Pronto para começar?
        </h3>
        <p className="text-gray-200 mb-4">
          Vá para a calculadora de IMC e dê o primeiro passo rumo à sua melhor versão!
        </p>
        <button
          onClick={handleNavigate}
          className="inline-block bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition"
        >
          Calcular meu IMC
        </button>
      </section>

      <footer className="text-sm text-gray-400 mt-8 max-w-2xl text-center">
        <p>
          Desenvolvido com 💙 para ajudar você a cuidar da sua saúde. Lembre-se:
          mudanças reais começam com pequenos passos.
        </p>
      </footer>
    </div>
  );
}
