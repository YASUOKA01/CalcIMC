import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // Certifique-se que seu AuthContext exporta corretamente o login
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      navigate("/imc");
    } else {
      setError("❌ Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #12306b 0%, #071739 100%)",
        padding: "2rem",
      }}
    >
      <div
        style={{
          backgroundColor: "#0b2046",
          padding: "2.5rem 3rem",
          borderRadius: "16px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
          width: "100%",
          maxWidth: "400px",
          color: "white",
          textAlign: "center",
          border: "1px solid #2e4fa3",
        }}
      >
        <h1
          style={{
            fontSize: "1.8rem",
            marginBottom: "1.5rem",
            color: "#f8c600",
            fontWeight: "700",
          }}
        >
          Entrar em{" "}
          <span style={{ color: "#4fa4ff" }}>YasuokaLiteFiteCorp</span>
        </h1>

        <form
          onSubmit={handleLogin}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
            textAlign: "left",
          }}
        >
          <label style={{ fontSize: "0.9rem", fontWeight: "500" }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: "0.75rem",
              borderRadius: "8px",
              border: "1px solid #4fa4ff",
              background: "#0f2a5a",
              color: "white",
              outline: "none",
            }}
          />

          <label style={{ fontSize: "0.9rem", fontWeight: "500" }}>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: "0.75rem",
              borderRadius: "8px",
              border: "1px solid #4fa4ff",
              background: "#0f2a5a",
              color: "white",
              outline: "none",
            }}
          />

          {error && (
            <p
              style={{
                color: "#ff6060",
                fontSize: "0.85rem",
                textAlign: "center",
                marginTop: "-0.5rem",
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            style={{
              marginTop: "1rem",
              background: "linear-gradient(90deg, #4fa4ff, #f8c600)",
              border: "none",
              borderRadius: "10px",
              padding: "0.9rem",
              fontWeight: "700",
              color: "#001b3a",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) =>
              (e.target.style.background =
                "linear-gradient(90deg, #f8c600, #4fa4ff)")
            }
            onMouseOut={(e) =>
              (e.target.style.background =
                "linear-gradient(90deg, #4fa4ff, #f8c600)")
            }
          >
            Entrar
          </button>
        </form>

        <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
          Não tem uma conta?{" "}
          <Link
            to="/register"
            style={{
              color: "#4fa4ff",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}
