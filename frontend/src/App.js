import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layouts from "./componets/Layouts";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Layouts>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layouts>
    </Router>
  );
}

export default App;
