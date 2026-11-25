import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F6F8]">

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="lg:ml-[260px] min-h-screen">

        <Header
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="p-5 lg:p-8">

          <Outlet />

        </main>

      </div>

    </div>
  );
};

export default AdminLayout;