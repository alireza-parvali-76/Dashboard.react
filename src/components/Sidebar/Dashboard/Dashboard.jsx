import React from "react";
import { FaChartBar, FaUsers, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { TfiBackLeft } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import './Dashboard.css'

function Dashboard({ mode }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/"); 
  };
  return (
    <div>
      <div className="navigation mode-2">
        <ul className="dashboard-ul w-full">
          <li className="relative list-none w-full rounded-l-[30px] group">
            <a
              href="#"
              className="flex items-center h-[60px] text-white hover:text-[#365fa1] hover:bg-white no-underline rounded-l-[30px]"
            >
              <span className="icon min-w-[60px] h-[60px] flex items-center justify-center">
                <FaChartBar size={20} />
              </span>
              <span className="title px-2 whitespace-nowrap">Sales statistics</span>
            </a>
          </li>

          <li className="relative list-none w-full rounded-l-[30px] group">
            <a
              href="#"
              className="flex items-center h-[60px] text-white hover:text-[#365fa1] hover:bg-white no-underline rounded-l-[30px]"
            >
              <span className="icon min-w-[60px] h-[60px] flex items-center justify-center">
                <FaUsers size={20} />
              </span>
              <span className="title px-2 whitespace-nowrap">customers</span>
            </a>
          </li>

          <li className="relative list-none w-full rounded-l-[30px] group">
            <a
              href="#"
              className="flex items-center h-[60px] text-white hover:text-[#365fa1] hover:bg-white no-underline rounded-l-[30px]"
            >
              <span className="icon min-w-[60px] h-[60px] flex items-center justify-center">
                <FaEnvelope size={20} />
              </span>
              <span className="title px-2 whitespace-nowrap">Messages</span>
            </a>
          </li>

          <li className="relative list-none w-full rounded-l-[30px] group">
            <a
              href="#"
              className="flex items-center h-[60px] text-white hover:text-[#365fa1] hover:bg-white no-underline rounded-l-[30px]"
            >
              <span className="icon min-w-[60px] h-[60px] flex items-center justify-center">
                <FaFileAlt size={20} />
              </span>
              <span className="title px-2 whitespace-nowrap">Reports</span>
            </a>
          </li>
          <div className="">
            <button onClick={handleBackClick}
             className="w-14 h-14 flex items-center justify-center text-white rounded-full hover:text-[#365fa1] hover:bg-white">
              <TfiBackLeft size={32} />
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
