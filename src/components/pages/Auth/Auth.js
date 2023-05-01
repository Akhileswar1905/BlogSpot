import "./Auth.css";
import { NavLink } from "react-router-dom";

const Auth = () => {
  return (
    <div className="auth">
      Please {<NavLink to="/login">login/register</NavLink>} to continue
    </div>
  );
};

export default Auth;
