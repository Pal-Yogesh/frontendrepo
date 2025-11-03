"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const hiddenRoutes = ["/", "/login"];

  const shouldHideSidebar = hiddenRoutes.includes(pathname);

  if (shouldHideSidebar) {
    return null;
  }

  return (
    <Sidebar
      isOpen={sidebarOpen}
      toggleSidebar={toggleSidebar}
      showSidebar={true} 
    />
  );
}