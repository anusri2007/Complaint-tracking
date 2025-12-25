import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Complaint from "./pages/Complaint";
import Admin from "./pages/Admin";
import MyComplaints from "./pages/MyComplaints";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="header">Complaint Tracking System</div>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/my-complaints" element={<MyComplaints />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
