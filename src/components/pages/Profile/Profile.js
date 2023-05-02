import MyBlogs from "../MyBlogs/MyBlogs";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="profile">
      <div className="profileTitle">
        <h1>Your Profile</h1>
        <p>Delete this account</p>
      </div>
      <figure className="profilePicture">
        <img
          src="https://i.pinimg.com/280x280_RS/1e/58/e0/1e58e0ccba79625e8d63bb789bc07e36.jpg"
          alt="pp"
        />
        <figcaption>User Name</figcaption>
        <figcaption>1 following</figcaption>
      </figure>

      <div className="btns">
        <button
          onClick={() => {
            navigate("/settings");
          }}
        >
          Edit profile
        </button>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>

      <div className="blogs">
        <div className="myblogs">
          <MyBlogs />
        </div>
      </div>
    </div>
  );
};

export default Profile;
