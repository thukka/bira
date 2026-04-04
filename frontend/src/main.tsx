import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { LoginPage } from "./routes/login";
import { TaskPage } from "./routes/task";
// import App from './App.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <LoginPage /> */}
    <TaskPage />
  </StrictMode>,
);
