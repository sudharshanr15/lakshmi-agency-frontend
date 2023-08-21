"use client";
import { useState, useEffect } from "react";
import { Mobilenav } from "./mobileNav";
import { Mobilefooter } from "./mobileFooter";
import { Desktopnav } from "./desktopNav";

export function Nav() {
  const [isDesktopSidebarOpen, setDesktopSidebarOpen] = useState(false);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleDesktopSidebar = () => {
    setDesktopSidebarOpen(!isDesktopSidebarOpen);
    setMobileSidebarOpen(false); // Close mobile sidebar
  };

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!isMobileSidebarOpen);
    setDesktopSidebarOpen(false); // Close desktop sidebar
  };

  useEffect(() => {
    const closeDesktopSidebarOnResize = () => {
      if (window.innerWidth <= 768) {
        setDesktopSidebarOpen(false);
      }
    };

    window.addEventListener("resize", closeDesktopSidebarOnResize);

    return () => {
      window.removeEventListener("resize", closeDesktopSidebarOnResize);
    };
  }, []);

  return (
    <div>
      <Desktopnav toggleDesktopSidebar={toggleDesktopSidebar} />
      <Mobilenav toggleMobileSidebar={toggleMobileSidebar} />
      <Mobilefooter isMobileSidebarOpen={isMobileSidebarOpen} />
    </div>
  );
}
