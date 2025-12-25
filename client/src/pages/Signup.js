import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Signup() {
  const navigate = useNavigate();
  const [regId, setRegId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const isStrongPassword = (pwd) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(pwd);
  };

  const handleSignup = () => {
    if (!regId || !password) {
      setError("All fields are required");
      return;
    }

    if (!isStrongPassword(password)) {
      setError(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[regId]) {
      setError("Account already exists");
      return;
    }

    users[regId] = password;
    localStorage.setItem("users", JSON.stringify(users));

    setSuccess("Account created successfully. Please login.");
    setError("");

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="container">
      <div className="card">
        <h3>Create Account</h3>

        <input
          placeholder="Registration ID"
          value={regId}
          onChange={(e) => setRegId(e.target.value)}
        />

        <input
          type="password"
          placeholder="Strong Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <small style={{ color: "#555" }}>
          Password must contain uppercase, lowercase, number & special character
        </small>

        <button onClick={handleSignup}>Create Account</button>

        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
      </div>
    </div>
  );
}

export default Signup;
