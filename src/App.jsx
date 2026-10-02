import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { UserGrid } from "./components/UserGrid";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<UserGrid />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;