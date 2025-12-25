import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const login = () => {
    navigate("/complaint");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Login</h2>

        <input placeholder="Registration ID" />
        <input type="password" placeholder="Password" />

        <button onClick={login}>Login</button>

        <p className="link" onClick={() => navigate("/signup")}>
          New user? Create Account
        </p>
      </div>
    </div>
  );
}

export default Login;
