import { children } from "react";
import {
  FaReact,
  FaHome,
  FaUser,
  FaEnvelope,
  FaInfo,
  FaCog,
  FaLock,
  FaSignOutAlt,
  FaAngleDown
} from "react-icons/fa";

 const menuItems = [
    { title: "Brand Name", icon: <FaReact />, className:"brand-name" }, 
    { title: "Dashboard", icon: <FaHome />, path: "/dashboard"},
    { title: "Customers", icon: <FaUser /> },
    { title: "Message", icon: <FaEnvelope />, hasDropdown: true,
      children : [
        {title : "Email"},
        {title : "Sent"},
        {title : "Inbox"},
      ]
     },
    { title: "Help", icon: <FaInfo /> },
    { title: "Setting", icon: <FaCog /> },
    { title: "Password", icon: <FaLock /> },
    { title: "Signout", icon: <FaSignOutAlt /> },
  ];

  export default menuItems