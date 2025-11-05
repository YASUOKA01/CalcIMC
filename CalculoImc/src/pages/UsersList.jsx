import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function UsersList() {
  const { users, setUsers, currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleDelete = (email) => {
    if (confirm("Tem certeza que deseja excluir este usuário?")) {
      const updatedUsers = users.filter((u) => u.email !== email);
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      // 🟡 Se o usuário apagar a própria conta:
      if (currentUser && currentUser.email === email) {
        alert("Sua conta foi excluída. Você será redirecionado para o login.");
        logout();
        navigate("/login"); // redireciona automaticamente
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-8 text-yellow-400 drop-shadow-lg">
        Usuários Registrados
      </h1>

      <div className="bg-blue-800 rounded-xl shadow-2xl w-full max-w-3xl p-6">
        {users.length === 0 ? (
          <p className="text-center text-gray-300">Nenhum usuário cadastrado.</p>
        ) : (
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-blue-600 text-yellow-400">
                <th className="p-3">Email</th>
                <th className="p-3 text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.email}
                  className="border-b border-blue-700 hover:bg-blue-700/40 transition"
                >
                  <td className="p-3">{user.email}</td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => handleDelete(user.email)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md font-semibold shadow-md transition"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
