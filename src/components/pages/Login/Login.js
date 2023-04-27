import { NavLink } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <form className="loginForm">
        <label>Email</label>
        <input
          required
          type="email"
          placeholder="Enter Your Email..."
          className="formInput"
        />
        <label>Password</label>
        <input
          required
          type="password"
          placeholder="Enter Your Password..."
          className="formInput"
        />

        <button className="loginBtn">Login</button>
        <span>
          Don't have an account? <NavLink to="/signup">Register</NavLink>
        </span>
      </form>
    </div>
  );
};

export default Login;
