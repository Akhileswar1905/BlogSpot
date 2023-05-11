import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [form, setForm] = useState({});
  const [errMsg, setErrMsg] = useState("none");
  const navigate = useNavigate();
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const res = await axios.post(
      "https://blogspot-kn7q.onrender.com/users/login",
      form
    );
    console.log(res.data[0]);

    if (res.data.length) {
      localStorage.setItem("token", res.data[0]._id);
      localStorage.setItem("username", res.data[0].username);

      navigate("/profile");
    } else {
      setErrMsg("block");
    }
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          name="email"
          onChange={handleForm}
          required
          type="email"
          placeholder="Enter Your Email..."
          className="formInput"
        />
        <label>Password</label>
        <input
          name="password"
          onChange={handleForm}
          required
          type="password"
          placeholder="Enter Your Password..."
          className="formInput"
        />
        <p className="err" style={{ display: errMsg }}>
          Wrong Credientials
        </p>
        <button className="loginBtn">Login</button>
        <span>
          Don't have an account? <NavLink to="/signup">Register</NavLink>
        </span>
      </form>
    </div>
  );
};

export default Login;
