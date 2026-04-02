import { Input } from "../components/input.tsx";

const LoginPage = () => {
  return (
    <form className="flex flex-col items-center gap-3.5">
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="password" />  
    </form>
  );
};

export default LoginPage;
