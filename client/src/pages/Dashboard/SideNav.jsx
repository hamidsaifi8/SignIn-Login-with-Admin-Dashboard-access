import React, { useState } from "react";
import { Menu, X, Home, User, Settings } from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-gray-900 text-white w-64 p-5 transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <h2 className="text-2xl font-bold mb-8">My App</h2>
        <nav className="space-y-4">
          <a href="#" className="flex items-center gap-2 hover:text-gray-300">
            <Home size={20} /> Home
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-300">
            <User size={20} /> Profile
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-300">
            <Settings size={20} /> Settings
          </a>
        </nav>
      </div>

      {/* Toggle Button (Mobile) */}
      <button
        onClick={() => setOpen(!open)}
        className="absolute top-4 left-4 md:hidden z-50 bg-gray-900 text-white p-2 rounded"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 p-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-4 text-gray-700">
          This is the main content area. Resize the window to see the responsive
          sidebar.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
