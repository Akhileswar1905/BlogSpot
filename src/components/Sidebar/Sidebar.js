import React, { useState } from "react";
import "./Sidebar.css";
import {
  FaHome,
  FaBars,
  // FaUserAlt,
  // FaPhoneAlt,
  FaPlus,
  FaSignInAlt,
  FaSignOutAlt,
  FaTools,
} from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  // const token = localStorage.getItem("token");
  // const navigate = useNavigate();

  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome />,
    },

    {
      path: "/new-blog",
      name: "New Blog",
      icon: <FaPlus />,
    },
    // {
    //   path: "/contact",
    //   name: "Contact",
    //   icon: <FaPhoneAlt />,
    // },
    {
      path: "/login",
      name: "Login",
      icon: <FaSignInAlt />,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <FaTools />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
        <div className="top_section">
          <Link
            to={"/"}
            style={{ display: isOpen ? "block" : "none" }}
            className="logo"
          ></Link>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
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
