import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  HardHat,
  Store,
  Wallet,
  LogOut,
  X,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";
import lafLogo from "../assets/images/logo.webp";

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
];

const Sidebar = ({ isCollapsed = false, isOpen = false, onClose }) => {
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
        className={`fixed top-0 left-0 h-dvh bg-neutral-950 text-white z-50 flex flex-col transition-all duration-300 ${
          isCollapsed ? "lg:w-[72px]" : "lg:w-[260px]"
        } w-[260px] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >

        {/* Logo Section */}
        <div className="h-[80px] px-3.5 border-b border-neutral-800 flex items-center justify-between overflow-hidden">

          <NavLink
            to="/dashboard"
            className={`flex items-center gap-4 transition-all duration-300 ${
              isCollapsed ? "lg:justify-center lg:w-full" : "px-2"
            }`}
            title="LAF 3.0 - Lucknow Architecture Festival"
          >
            {/* White container for the logo */}
            <div
              className={`bg-white rounded-xl flex items-center justify-center shadow-sm transition-all duration-300 ${
                isCollapsed
                  ? "w-12 h-12 p-1.5 shrink-0"
                  : "px-3.5 py-2 h-[52px] shrink-0"
              }`}
            >
              <img
                src={lafLogo}
                alt="LAF 3.0 Logo"
                className={`w-auto object-contain transition-all duration-300 ${
                  isCollapsed ? "h-9 max-w-full" : "h-10 max-w-[115px]"
                }`}
              />
            </div>

            {/* Brand text (shifted right with larger font) */}
            <div
              className={`overflow-hidden pl-1 transition-all duration-300 ${
                isCollapsed ? "lg:hidden" : "block"
              }`}
            >
              <span className="text-xl font-black tracking-wider text-white whitespace-nowrap">
                LAF<span className="text-red-600">3.0</span>
              </span>
              <p className="text-[10px] text-neutral-400 tracking-[2.5px] uppercase whitespace-nowrap mt-0.5 font-medium">
                Admin Panel
              </p>
            </div>
          </NavLink>

          {/* Close button for mobile */}
          <button
            onClick={onClose}
            aria-label="Close sidebar"
            className="lg:hidden text-neutral-400 hover:text-white p-1 cursor-pointer"
          >
            <X size={22} />
          </button>

        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-6">

          {/* Category Header */}
          <p
            className={`text-[10px] tracking-[2px] text-neutral-500 uppercase px-3 mb-4 transition-all duration-300 ${
              isCollapsed ? "lg:hidden" : "block"
            }`}
          >
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
                  title={item.name}
                  className={({ isActive }) =>
                    `flex items-center rounded-xl transition-all ${
                      isCollapsed
                        ? "lg:justify-center lg:w-11 lg:h-11 lg:mx-auto lg:p-0 px-3.5 py-3 gap-3"
                        : "gap-3.5 px-4 py-3"
                    } ${
                      isActive
                        ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                        : "text-neutral-300 hover:bg-neutral-900 hover:text-white"
                    } text-[15px] font-semibold tracking-wide`
                  }
                >
                  <Icon size={21} className="shrink-0" />

                  <span
                    className={`whitespace-nowrap transition-all duration-300 ${
                      isCollapsed ? "lg:hidden" : "inline"
                    }`}
                  >
                    {item.name}
                  </span>
                </NavLink>
              );
            })}
          </div>

        </nav>

        {/* Logout */}
        <div className="p-3 border-t border-neutral-800">

          <button
            onClick={logout}
            title="Logout"
            className={`flex items-center w-full rounded-xl text-red-400 hover:bg-red-600/10 transition-all text-[15px] font-semibold tracking-wide cursor-pointer ${
              isCollapsed
                ? "lg:justify-center lg:w-11 lg:h-11 lg:mx-auto lg:p-0 px-3.5 py-3 gap-3"
                : "gap-3.5 px-4 py-3"
            }`}
          >
            <LogOut size={21} className="shrink-0" />
            <span
              className={`whitespace-nowrap transition-all duration-300 ${
                isCollapsed ? "lg:hidden" : "inline"
              }`}
            >
              Logout
            </span>
          </button>

        </div>

      </aside>
    </>
  );
};

export default Sidebar;
