export default function Result({ imc, interpretacao }) {
  return (
    <div className="mt-4 text-center text-gray-100">
      <p className="text-lg">IMC: <strong>{imc}</strong></p>
      <p className="mt-1">{interpretacao}</p>
    </div>
  );
}
