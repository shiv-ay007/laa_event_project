import { Menu } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Header = ({ onMenuClick }) => {
  const { admin } = useAuth();

  return (
    <header className="sticky top-0 z-30 h-[80px] bg-white border-b border-neutral-200 flex items-center justify-between px-5 lg:px-8">

      {/* Left: Hamburger & Welcome Title */}
      <div className="flex items-center gap-4">

        <button
          onClick={onMenuClick}
          aria-label="Toggle menu"
          className="p-2 -ml-2 rounded-lg text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
        >
          <Menu size={22} />
        </button>

        <div>

          <h1 className="text-base sm:text-xl font-bold text-neutral-900 leading-snug">
            Welcome back, <span className="text-red-600 font-extrabold">Lucknow Architecture Festival</span>
          </h1>

          <p className="text-xs text-neutral-500 font-normal mt-0.5 hidden sm:block">
            Lucknow Architecture Festival 3.0 • Management System
          </p>

        </div>

      </div>

      {/* Right: Admin Profile */}
      <div className="flex items-center gap-3 cursor-pointer select-none group">

        <div className="w-10 h-10 rounded-full bg-[#800020] text-white flex items-center justify-center font-bold text-sm shadow-sm ring-2 ring-red-100">
          LA
        </div>

        <div className="hidden sm:block text-left">

          <p className="text-sm font-semibold text-neutral-900 leading-tight group-hover:text-red-700 transition-colors">
            {admin?.name || "Lucknow Architecture Festival"}
          </p>

          <p className="text-xs text-neutral-500 mt-0.5">
            Executive Administrator
          </p>

        </div>

      </div>

    </header>
  );
};

export default Header;