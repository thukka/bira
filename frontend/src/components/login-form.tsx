import { useState, type ChangeEvent } from "react";
import { Input } from "./input";

export const LoginForm = () => {
  const [user, setUser] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleLogin = async (e: ChangeEvent) => {
    e.preventDefault();

    console.log("user: ", user, "pw: ", password);

    await fetch("/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user,
        password: password,
      }),
    });
  };

  return (
    <form
      className="flex flex-col items-center justify-center h-screen gap-3.5"
      onSubmit={handleLogin}
    >
      <div className="flex flex-col">
        <label htmlFor="username" className="self-start mb-2">
          Username:
        </label>
        <Input
          type="text"
          id="username"
          placeholder="username"
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="self-start mb-2">
          Password:
        </label>
        <Input
          type="password"
          id="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className="border rounded-md border-white h-10 w-[320px] p-2 bg-lime-700 border-none font-black hover:bg-lime-600"
        type="submit"
      >
        Log in
      </button>
    </form>
  );
};
