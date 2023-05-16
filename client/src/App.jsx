import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { TasksFormPage } from "./pages/TasksFormPage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/tasks-create" element={<TasksFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
