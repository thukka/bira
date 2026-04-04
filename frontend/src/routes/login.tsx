import { useState } from "react";
import { LoginForm } from "../components/login-form";

export const LoginPage = () => {
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (user: string, password: string) => {
    setError(null);

    try {
      const res = await fetch("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user,
          password: password,
        }),
      });

      // Username or password incorrect
      if (!res.ok && res.status === 401) {
        setError('Username or password incorrect.');
      }

      // backend offline most likely
      if (!res.ok && res.status === 502) {
        setError('Bad gateway.');
      }
      
      // Network & other errors
    } catch (error) {
      let errorMessage = 'Something went wrong';
      if (error instanceof Error) errorMessage = error.message;
      setError(errorMessage);
    }
  };

  return <LoginForm onSubmit={handleLogin} error={error} />;
};
