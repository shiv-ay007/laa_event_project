import { Menu } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = ({ onMenuClick }) => {
  const { admin } = useAuth();
  const location = useLocation();

  const pageName =
    location.pathname.split("/")[1] || "dashboard";

  return (
    <header className="sticky top-0 z-30 h-[76px] bg-white border-b border-neutral-200 flex items-center justify-between px-5 lg:px-8">

      <div className="flex items-center gap-4">

        <button
          onClick={onMenuClick}
          aria-label="Open sidebar"
          className="lg:hidden text-neutral-700 cursor-pointer"
        >
          <Menu size={24} />
        </button>

        <div>

          <h2 className="text-lg font-bold text-neutral-900 capitalize">
            {pageName}
          </h2>

          <p className="text-xs text-neutral-400 mt-1 hidden sm:block">
            LAF 3.0 Management System
          </p>

        </div>

      </div>

      {/* Admin Profile */}

      <div className="flex items-center gap-3">

        <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">

          {admin?.name?.charAt(0).toUpperCase() || "A"}

        </div>

        <div className="hidden sm:block">

          <p className="text-sm font-semibold text-neutral-900">
            {admin?.name || "Administrator"}
          </p>

          <p className="text-xs text-neutral-500 capitalize">
            {admin?.role || "Admin"}
          </p>

        </div>

      </div>

    </header>
  );
};

export default Header;