import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

const AdminLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMenuClick = () => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setMobileOpen((prev) => !prev);
    } else {
      setIsCollapsed((prev) => !prev);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F6F8]">

      <Sidebar
        isCollapsed={isCollapsed}
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      <div
        className={`transition-all duration-300 min-h-screen ${
          isCollapsed ? "lg:ml-[72px]" : "lg:ml-[260px]"
        }`}
      >

        <Header onMenuClick={handleMenuClick} />

        <main className="p-4 lg:p-5">

          <Outlet />

        </main>

      </div>

    </div>
  );
};

export default AdminLayout;
