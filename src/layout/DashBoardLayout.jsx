import React from "react";
import { Outlet } from "react-router";
import SideBar from "../components/SideBar";

const DashBoardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar />

     <div className="ml-60 flex flex-col gap-y-4 w-full">
        <Outlet />
     </div>
    </div>
  );
};

export default DashBoardLayout;
