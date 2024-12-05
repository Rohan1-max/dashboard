/* eslint-disable no-unused-vars */
import React from "react";

const Dashboard = () => {
  return (
    <div className="space-y-10">
      <div className="flex gap-10 w-full">
        <div className="flex gap-5 h-40 w-40 bg-red-500"></div>
        <div className="flex gap-5 h-40 w-40 bg-yellow-600"></div>
        <div className="flex gap-5 h-40 w-40 bg-purple-500"></div>
      </div>

      <div className="flex gap-10">
        <div className="flex gap-5 h-40 w-40  bg-cyan-500"></div>
        <div className="flex gap-5 h-40 w-40 bg-teal-500"></div>
        <div className="flex gap-5 h-40 w-40 bg-green-500"></div>
      </div>

      <div className="flex gap-10">
        <div className="flex gap-5 h-40 w-40  bg-orange-500"></div>
        <div className="flex gap-5 h-40 w-40 bg-zinc-500"></div>
        <div className="flex gap-5 h-40 w-40 bg-black"></div>
      </div>
    </div>

   
  );
};

export default Dashboard;
