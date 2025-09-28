import React, { useState } from "react";
import "./Sidebar.css";
import menuItems from "./MenuItem";
import { FaAngleDown } from "react-icons/fa";
import { Link, useLocation  } from "react-router-dom";

function Sidebar({ mode, setMode }) {
  const [openIndex, setOpenIndex] = useState(null); // وضعیت زیرمنو

  const toggleSidebar = () => setMode((prev) => (prev + 1) % 3);

  const toggleSubmenu = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const location = useLocation(); 
  const isDashboard = location.pathname === "/dashboard";

  return (
    <div className="sidebar-wrapper">
      {/* دکمه باز و بسته کردن */}
      {!isDashboard && (
        <div
          className={`toggle ${mode > 0 ? "active" :  ""}`}
          onClick={toggleSidebar}
        ></div>
      )}

  
      <div className={`navigation mode-${mode}`}>
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`group ${openIndex === index ? "active" : ""}${item.className || ""}`}
              onClick={() => {
                if (item.hasDropdown) {
                  toggleSubmenu(index);
                }
              }}
            >
              {/* لینک اصلی */}
              <Link to={item.path || "#"} className="">
                <span className="icon flex items-center justify-center">
                  {item.icon}
                </span>

                {/* تولتیپ در حالت mode-1 */}
                {mode === 1 && (
                  <span className="tooltip-title">{item.title}</span>
                )}

                {/* فلش برای آیتم‌های دارای زیرمنو در mode-2 */}
                {item.hasDropdown && mode === 2 && (
                  <FaAngleDown
                    className={`ml-auto mr-4 text-sm absolute right-10 top-[25px] group-hover:text-[#365fa1] ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                )}

                {/* نمایش عنوان فقط در mode-2 */}
                {mode === 2 && <span className="title">{item.title}</span>}
              </Link>

              {/* زیرمنوها */}
              {item.children && (
                <ul
                  className={`submenu ${
                    openIndex === index ? "submenu-open" : ""
                  }`}
                >
                  {item.children.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={subItem.path || "#"}
                        className="block px-8 h-10 leading-10 text-white"
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
