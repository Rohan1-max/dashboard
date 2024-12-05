/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaUserGraduate, FaEdit } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="">
    
      <nav
        className="min-h-screen w-60 fixed position left-0 top-0 bg-gradient-to-b from-indigo-900 to-blue-700 shadow-lg flex flex-col items-center py-10 px-4 z-50"
      >
      
        <h1 className="text-white text-xl font-bold mb-12">Admin Panel</h1>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-6 w-full">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-lg text-white ${
                isActive ? "bg-blue-500 shadow-md" : "hover:bg-blue-800"
              }`
            }
          >
            <FaUserGraduate className="text-xl" />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/dataform"
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-lg text-white ${
                isActive ? "bg-blue-500 shadow-md" : "hover:bg-blue-800"
              }`
            }
          >
            <FaUserGraduate className="text-xl" />
            <span>Dataform</span>
          </NavLink>

          <NavLink
            to="/analytics1"
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-lg text-white ${
                isActive ? "bg-blue-500 shadow-md" : "hover:bg-blue-800"
              }`
            }
          >
            <FaEdit className="text-xl" />
            <span>Analytics1</span>
          </NavLink>

          <NavLink
            to="/analytics2"
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-lg text-white ${
                isActive ? "bg-blue-500 shadow-md" : "hover:bg-blue-800"
              }`
            }
          >
            <FaEdit className="text-xl" />
            <span>Analytics2</span>
          </NavLink>

          <NavLink
            to="/analytics3"
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-lg text-white ${
                isActive ? "bg-blue-500 shadow-md" : "hover:bg-blue-800"
              }`
            }
          >
            <FaEdit className="text-xl" />
            <span>Analytics3</span>
          </NavLink>

          <NavLink
            to="/analytics4"
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-lg text-white ${
                isActive ? "bg-blue-500 shadow-md" : "hover:bg-blue-800"
              }`
            }
          >
            <FaEdit className="text-xl" />
            <span>Analytics4</span>
          </NavLink>

          <NavLink
            to="/analytics5"
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-lg text-white ${
                isActive ? "bg-blue-500 shadow-md" : "hover:bg-blue-800"
              }`
            }
          >
            <FaEdit className="text-xl" />
            <span>Analytics5</span>
          </NavLink>

          <NavLink
            to="/analytics6"
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-lg text-white ${
                isActive ? "bg-blue-500 shadow-md" : "hover:bg-blue-800"
              }`
            }
          >
            <FaEdit className="text-xl" />
            <span>Analytics6</span>
          </NavLink>
          
        </div>
      </nav>

      {/* Main Content */}
      <div className="w-full  ">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
