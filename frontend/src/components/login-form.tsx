import { Input } from "./input";

export const LoginForm = () => {
  return (
    <form className="flex flex-col items-center justify-center h-screen gap-3.5">
      <div className="flex flex-col">
        <label htmlFor="username" className="self-start mb-2">
          Username:
        </label>
        <Input type="text" id="username" placeholder="username" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="self-start mb-2">
          Password:
        </label>
        <Input type="password" id="password" placeholder="password" />
      </div>
      <Input
        className="bg-lime-700 border-none font-black hover:bg-lime-600"
        type="submit"
        value="Log in"
      />
    </form>
  );
};
