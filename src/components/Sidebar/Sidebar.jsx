import React, { useState } from "react";
import "./Sidebar.css";
import {
  FaReact,
  FaHome,
  FaUser,
  FaEnvelope,
  FaInfo,
  FaCog,
  FaLock,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const [active, setActive] = useState(false);
  const toggleSidebar = () => setActive(!active);

  const menuItems = [
    { title: "Brand Name", icon: <FaReact /> }, 
    { title: "Dashboard", icon: <FaHome /> },
    { title: "Customers", icon: <FaUser /> },
    { title: "Message", icon: <FaEnvelope /> },
    { title: "Help", icon: <FaInfo /> },
    { title: "Setting", icon: <FaCog /> },
    { title: "Password", icon: <FaLock /> },
    { title: "Signout", icon: <FaSignOutAlt /> },
  ];

  return (
    <div className={`navigation ${active ? "active" : ""}`}>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href="#">
              <span className="icon">{item.icon}</span>
              <span className="title">{item.title}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="toggle" onClick={toggleSidebar}></div>
    </div>
  );
}

export default Sidebar;
