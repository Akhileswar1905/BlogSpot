import React, { useState } from "react";
import "./Sidebar.css";
import {
  FaHome,
  FaBars,
  FaUserAlt,
  // FaPhoneAlt,
  FaPlus,
  FaSignInAlt,
  // FaSignOutAlt,
  FaBookmark,
  // FaTools,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const token = localStorage.getItem("token");
  // const navigate = useNavigate();

  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome />,
    },

    {
      path: token ? "/new-blog" : "/auth",
      name: "New Blog",
      icon: <FaPlus />,
    },
    {
      path: token ? "/saved-blogs" : "/auth",
      name: "Saved Blogs",
      icon: <FaBookmark />,
    },
    {
      path: token ? "/profile" : "/login",
      name: token ? "Profile" : "Login",
      icon: token ? <FaUserAlt /> : <FaSignInAlt />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
        <div className="top_section">
          <Link
            to={"/"}
            style={{ display: isOpen ? "block" : "none", width: "100%" }}
            className="logo"
          >
            Blog Spot
          </Link>
          <div style={{ marginLeft: isOpen ? "30px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
