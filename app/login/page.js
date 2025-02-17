"use client"; // Si usas App Router

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config"; // Asegúrate de importar la configuración de Firebase
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Redirigir según el rol del usuario
      if (user.email === "admin@tusitio.com") {
        router.push("/admin");
      } else {
        router.push("/dashboard"); // O la página principal del usuario
      }
    } catch (error) {
      setError("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Iniciar sesión</h1>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
          <button type="submit" className="login-button">
            Ingresar
          </button>
        </form>
        {error && <p className="login-error">{error}</p>}
      </div>
      <style jsx>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f0f2f5;
        }
        .login-box {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          width: 100%;
          text-align: center;
        }
        .login-title {
          margin-bottom: 20px;
          font-size: 24px;
          color: #333;
        }
        .login-form {
          display: flex;
          flex-direction: column;
        }
        .login-input {
          margin-bottom: 15px;
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .login-button {
          padding: 10px;
          font-size: 16px;
          color: white;
          background-color: #007bff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .login-button:hover {
          background-color: #0056b3;
        }
        .login-error {
          margin-top: 10px;
          color: red;
        }
      `}</style>
    </div>
  );
}
