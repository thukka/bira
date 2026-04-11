import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { LoginPage } from "./routes/login";
import { TaskPage } from "./routes/task";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/task" element={<TaskPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
