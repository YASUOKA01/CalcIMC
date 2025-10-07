export default function Header({ title }) {
  return (
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-yellow-400 drop-shadow-lg">
      {title}
    </h2>
  );
}
