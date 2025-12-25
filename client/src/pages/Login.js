import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

function Login() {
  const [regId, setRegId] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let cap = "";
    for (let i = 0; i < 5; i++) {
      cap += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedCaptcha(cap);
  };

  const handleLogin = () => {
    if (!regId || !password || !captcha) {
      setError("All fields required");
      return;
    }

    if (captcha !== generatedCaptcha) {
      setError("Invalid captcha");
      generateCaptcha();
      return;
    }

    // SAVE LOGIN SESSION
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userRole", regId === "admin" ? "admin" : "user");

    navigate(regId === "admin" ? "/admin" : "/complaint");
  };

  return (
    <div className="card">
      <h2>Login</h2>

      <input
        placeholder="Registration ID"
        value={regId}
        onChange={(e) => setRegId(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="captcha-box">{generatedCaptcha}</div>

      <input
        placeholder="Enter Captcha"
        value={captcha}
        onChange={(e) => setCaptcha(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      {error && <p className="error">{error}</p>}

      <p>
        New user? <Link to="/signup">Create Account</Link>
      </p>
    </div>
  );
}

export default Login;
