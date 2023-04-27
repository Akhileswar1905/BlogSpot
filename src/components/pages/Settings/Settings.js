import "./Settings.css";
import { FaUserAlt } from "react-icons/fa";
import Article from "../Article/Article";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <h1>Update Your account</h1>
          <span className="settingsDel">Delete Account</span>
        </div>
        <div className="settingsPP">
          <img
            src="https://i.pinimg.com/564x/ad/73/1c/ad731cd0da0641bb16090f25778ef0fd.jpg"
            alt=""
          />
          <label className="settingsLabel" htmlFor="file">
            <FaUserAlt className="userIcon" />
          </label>
          <input
            className="settingsInput"
            type="file"
            id="file"
            style={{ display: "none" }}
          />
        </div>
        <div className="settingsForm">
          <label className="settingsLabel">UserName</label>
          <input
            className="settingsInput"
            type="text"
            placeholder="Enter Your Name"
          />
          <label className="settingsLabel">Email</label>
          <input
            className="settingsInput"
            type="email"
            placeholder="Enter Email Id"
          />
          <label className="settingsLabel">Password</label>
          <input className="settingsInput" type="password" />
          <button className="settingsSubmit">Update</button>
        </div>
      </div>
      <Article />
    </div>
  );
};

export default Settings;
