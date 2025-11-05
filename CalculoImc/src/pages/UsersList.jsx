import { useAuth } from "../context/AuthContext";

export default function UsersList() {
  const { users, setUsers } = useAuth();

  const handleDelete = (email) => {
    if (confirm(`Tem certeza que deseja excluir o usuário ${email}?`)) {
      const updatedUsers = users.filter((u) => u.email !== email);
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  };

  if (!users || users.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 flex items-center justify-center text-yellow-400 text-xl font-semibold">
        Nenhum usuário cadastrado ainda.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-gray-100 flex flex-col items-center py-12 px-6">
      <div className="bg-blue-900/60 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-blue-800 w-full max-w-3xl transition hover:shadow-yellow-400/20">
        <h1 className="text-3xl font-extrabold text-yellow-400 mb-6 text-center">
          Usuários Cadastrados
        </h1>

        <div className="overflow-hidden rounded-xl border border-blue-800 shadow-inner">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-800/60 text-yellow-400 uppercase text-sm tracking-wider">
                <th className="p-4">Email</th>
                <th className="p-4 text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr
                  key={i}
                  className="border-b border-blue-800 hover:bg-blue-800/40 transition duration-200"
                >
                  <td className="p-4 font-medium">{u.email}</td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => handleDelete(u.email)}
                      className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-1.5 rounded-md font-semibold hover:from-red-500 hover:to-red-400 hover:shadow-md hover:scale-105 transition-transform duration-150"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center text-gray-400 text-sm mt-6">
          Total de usuários:{" "}
          <span className="text-yellow-400 font-semibold">{users.length}</span>
        </div>
      </div>
    </div>
  );
}
