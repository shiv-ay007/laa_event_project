import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  HardHat,
  Store,
  Wallet,
  Settings,
  LogOut,
  X,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Architects",
    path: "/architects",
    icon: Building2,
  },
  {
    name: "Engineers",
    path: "/engineers",
    icon: HardHat,
  },
  {
    name: "Exhibitors",
    path: "/exhibitors",
    icon: Store,
  },
  {
    name: "Payments",
    path: "/payments",
    icon: Wallet,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

const Sidebar = ({ isOpen, onClose }) => {
  const { logout } = useAuth();

  return (
    <>

      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-dvh w-[260px] bg-neutral-950 text-white z-50 flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >

        {/* Logo */}

        <div className="px-7 py-8 border-b border-neutral-800 flex items-center justify-between">

          <div>

            <h1 className="text-3xl font-black">
              LAF<span className="text-red-600">3.0</span>
            </h1>

            <p className="text-[10px] text-neutral-500 tracking-[3px] uppercase mt-2">
              Admin Panel
            </p>

          </div>

          <button
            onClick={onClose}
            aria-label="Close sidebar"
            className="lg:hidden text-neutral-400"
          >
            <X size={22} />
          </button>

        </div>

        {/* Navigation */}

        <nav className="flex-1 overflow-y-auto px-4 py-7">

          <p className="text-[10px] tracking-[2px] text-neutral-500 uppercase px-4 mb-4">
            Management
          </p>

          <div className="space-y-2">

            {menuItems.map((item) => {

              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "bg-red-600 text-white"
                        : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                    }`
                  }
                >

                  <Icon size={19} />

                  {item.name}

                </NavLink>
              );
            })}

          </div>

        </nav>

        {/* Logout */}

        <div className="p-4 border-t border-neutral-800">

          <button
            onClick={logout}
            className="flex items-center gap-3 w-full px-4 py-3.5 rounded-lg text-red-400 hover:bg-red-600/10 transition-all text-sm font-medium cursor-pointer"
          >

            <LogOut size={19} />

            Logout

          </button>

        </div>

      </aside>

    </>
  );
};

export default Sidebar;