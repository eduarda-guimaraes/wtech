import { useState, KeyboardEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { Loading } from "./Loading";
import { ErrorToast } from "./ErrorToast";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  async function handleLogin() {
    const trimmedUsername = username.trim();
    if (!trimmedUsername) return;

    setIsLoading(true);
    setError(false);

    try {
      const data = await api.getUserData(trimmedUsername);
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (data && data.user) {
        navigate("/profile", { state: data });
      }
    } catch (err) {
      console.error("Erro no login:", err);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className="w-full flex items-center justify-center bg-white relative font-montserrat p-6 min-h-screen">
      {error && (
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-[450px] z-50">
          <ErrorToast onClose={() => setError(false)} />
        </div>
      )}

      {isLoading ? (
        <Loading /> 
      ) : (
        <div className="w-full max-w-[500px] flex flex-col gap-6">
          <h1 className="font-bold text-[40px] leading-[51px] text-[#303030]">
            Entrar
          </h1>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="user" className="text-[#717171] text-sm">
                Usuário
              </label>
              <input
                type="text"
                id="user"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Digite aqui seu usuário do Github"
                className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#D9D9D9] rounded-sm text-sm outline-none focus:border-[#05478A] transition-colors"
              />
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-[#05478A] text-white py-3 rounded-md font-bold text-sm hover:bg-[#09509b] transition-colors mt-2"
            >
              Entrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}