import { Input } from "../components/input.tsx";

const LoginPage = () => {
  return (
    <form className="flex flex-col items-center justify-center h-screen gap-3.5">
      <label htmlFor="username">Username:</label>
      <Input type="text" id="username" placeholder="username" />
      <label htmlFor="password">Password:</label>
      <Input type="password" id="password" placeholder="password" />
      <Input className="bg-lime-700 border-none font-black hover:bg-lime-600" type="submit" value="Log in" />
    </form>
  );
};

export default LoginPage;
