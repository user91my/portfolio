import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/navbar/Sidebar";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarOpening, setIsSidebarOpening] = useState(false);
  const [isSidebarClosing, setIsSidebarClosing] = useState(false);

  const sidebarController = () => {
    // Closing the sidebar
    if (isSidebarOpen) {
      setIsSidebarClosing(true); // ON opacity: 0 (BLUR LAYOUT), transform: "translate(-350px)" (SIDEBAR)
      setTimeout(() => {
        setIsSidebarClosing(false); // OFF opacity: 0 (BLUR LAYOUT), transform: "translate(-350px)" (SIDEBAR)
        setIsSidebarOpen(false); // ON display: "none" (BLUR LAYOUT)
      }, 400);
      return;
    }
    // Opening the sidebar
    if (!isSidebarOpen) {
      setIsSidebarOpening(true); // ON opacity: 0 (BLUR LAYOUT), transform: "translate(-350px)" (SIDEBAR)
      setIsSidebarOpen(true); // ON backdropFilter: "blur(5px)" (BLUR LAYOUT)
      setTimeout(() => {
        setIsSidebarOpening(false); // OFF opacity: 0 (BLUR LAYOUT)
      }, 10);
      return;
    }
  };

  return (
    <>
      <Navbar sidebarController={sidebarController} />
      <Sidebar
        sidebarController={sidebarController}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpening={isSidebarOpening}
        isSidebarClosing={isSidebarClosing}
        setIsSidebarClosing={setIsSidebarClosing}
      />
      <Outlet />
    </>
  );
};

export default Layout;
