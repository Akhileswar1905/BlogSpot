import { useState } from "react";
import "./SignUp.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://127.0.0.1:3001/user/signup", form);
    console.log(res.data);
    navigate("/settings");
  };

  return (
    <div className="signup">
      <h1>Register</h1>
      <form className="signupForm" onSubmit={handleSubmit}>
        <label>User Name</label>
        <input
          onChange={handleForm}
          required
          name="username"
          type="text"
          placeholder="Enter Your Name..."
          className="formInput"
        />
        <label>Email</label>
        <input
          onChange={handleForm}
          required
          type="email"
          name="email"
          placeholder="Enter Your Email..."
          className="formInput"
        />
        <label>Password</label>
        <input
          onChange={handleForm}
          required
          type="password"
          name="password"
          placeholder="Enter Your Password..."
          className="formInput"
        />

        <button className="signupBtn">Register</button>
        <span>
          Already Have an account? <NavLink to="/login">Login</NavLink>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
