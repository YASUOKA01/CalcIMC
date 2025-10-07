import { useState } from "react";
import Header from "../components/Header";
import InputForm from "../components/InputForm";
import Result from "../components/Result";

export default function IMC() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    const p = parseFloat(String(peso).replace(",", "."));
    const a = parseFloat(String(altura).replace(",", "."));
    if (!p || !a) {
      setResultado(null);
      return;
    }
    const imc = +(p / (a * a)).toFixed(2);
    setResultado(imc);
  };

  const interpretarIMC = (valor) => {
    const v = Number(valor);
    if (v < 18.5) return "Abaixo do peso";
    if (v < 24.9) return "Peso normal";
    if (v < 29.9) return "Sobrepeso";
    if (v < 34.9) return "Obesidade grau I";
    if (v < 39.9) return "Obesidade grau II";
    return "Obesidade grau III (mórbida)";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 via-blue-950 to-black text-gray-100 px-6 py-10 space-y-10">
      <Header title="Calculadora de IMC (Índice de Massa Corporal)" />

      <section className="max-w-2xl text-center bg-blue-800/40 p-6 rounded-2xl backdrop-blur-sm shadow-lg">
        <p className="mb-4 text-lg">
          O <strong>IMC (Índice de Massa Corporal)</strong> é uma medida usada
          para avaliar se uma pessoa está dentro do peso ideal em relação à sua altura.
        </p>
        <p className="text-sm text-gray-300">
          Ele é calculado dividindo o peso (em quilogramas) pela altura ao quadrado (em metros).
        </p>
        <div className="mt-4 bg-blue-900/60 border border-yellow-400 rounded-xl p-3 text-sm">
          <p>
            <strong>Fórmula:</strong> IMC = peso (kg) / altura² (m²)
          </p>
          <p className="mt-1 italic">
            Exemplo: 70kg / (1.75 × 1.75) = <span className="text-yellow-400">22.86</span>
          </p>
        </div>
      </section>

      <InputForm
        peso={peso}
        setPeso={setPeso}
        altura={altura}
        setAltura={setAltura}
        onCalcular={calcularIMC}
      />

      {resultado !== null && (
        <Result imc={resultado} interpretacao={interpretarIMC(resultado)} />
      )}

      <section className="max-w-3xl bg-blue-800/40 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold text-yellow-400 mb-4">
          Classificação do IMC
        </h3>
        <table className="w-full border-collapse text-sm md:text-base">
          <thead>
            <tr className="bg-blue-900 text-yellow-400">
              <th className="border border-gray-500 p-2">Faixa de IMC</th>
              <th className="border border-gray-500 p-2">Classificação</th>
              <th className="border border-gray-500 p-2">Riscos à saúde</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-600 p-2">Menor que 18.5</td>
              <td className="border border-gray-600 p-2">Abaixo do peso</td>
              <td className="border border-gray-600 p-2">Baixo peso e deficiências nutricionais</td>
            </tr>
            <tr className="bg-blue-900/40">
              <td className="border border-gray-600 p-2">18.5 - 24.9</td>
              <td className="border border-gray-600 p-2">Peso normal</td>
              <td className="border border-gray-600 p-2">Menor risco de doenças</td>
            </tr>
            <tr>
              <td className="border border-gray-600 p-2">25.0 - 29.9</td>
              <td className="border border-gray-600 p-2">Sobrepeso</td>
              <td className="border border-gray-600 p-2">Risco moderado de doenças cardiovasculares</td>
            </tr>
            <tr className="bg-blue-900/40">
              <td className="border border-gray-600 p-2">30.0 - 34.9</td>
              <td className="border border-gray-600 p-2">Obesidade grau I</td>
              <td className="border border-gray-600 p-2">Risco alto de diabetes e hipertensão</td>
            </tr>
            <tr>
              <td className="border border-gray-600 p-2">35.0 - 39.9</td>
              <td className="border border-gray-600 p-2">Obesidade grau II</td>
              <td className="border border-gray-600 p-2">Risco muito alto</td>
            </tr>
            <tr className="bg-blue-900/40">
              <td className="border border-gray-600 p-2">≥ 40.0</td>
              <td className="border border-gray-600 p-2">Obesidade grau III (mórbida)</td>
              <td className="border border-gray-600 p-2">Risco extremo e necessidade de acompanhamento médico</td>
            </tr>
          </tbody>
        </table>
      </section>

      <footer className="text-sm text-gray-400 mt-8 max-w-2xl text-center">
        <p>
          ⚠️ Este cálculo é apenas uma estimativa. O IMC não considera massa
          muscular, idade, sexo ou composição corporal. Consulte um(a) médico(a)
          ou nutricionista para uma avaliação completa.
        </p>
      </footer>
    </div>
  );
}
