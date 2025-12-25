import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <h2>Create Account</h2>

        <input placeholder="Registration ID" />
        <input type="password" placeholder="Password" />

        <button onClick={() => navigate("/")}>Register</button>
      </div>
    </div>
  );
}

export default Signup;
