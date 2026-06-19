import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { dummyProfileData } from "../assets/assets";
import {
  MenuIcon,
  UserIcon,
  XIcon,
  LayoutGridIcon,
  CalendarIcon,
  FileTextIcon,
  CheckSquareIcon,
  CreditCardIcon,
  SettingsIcon,
  ChevronRight,
  LogOutIcon,
} from "lucide-react";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [username, setUsername] = useState("");
  const [mobileOpen, setmobileOpen] = useState(false);

  useEffect(() => {
    setUsername(dummyProfileData.firstName + " " + dummyProfileData.lastName);
  }, []);

  //close mobile sidebar when route changes
  useEffect(() => {
    setmobileOpen(false);
  }, [pathname]);

  const role= ""||"Employee";
  const navigationLinks = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutGridIcon },
    
    role === "ADMIN" ? {
      name: "Employees",
      href: "/employees",
      icon: UserIcon
    }:
    { name: "Attendance", href: "/attendance", icon: CalendarIcon },
    { name: "Leave", href: "/leave", icon: FileTextIcon },
    { name: "Tasks", href: "/tasks", icon: CheckSquareIcon },
    { name: "Payslips", href: "/payslips", icon: CreditCardIcon },
    { name: "Settings", href: "/settings", icon: SettingsIcon },
  ];

  const handleLogout =()=>{
    window.location.href = "/login";
  }

  const sidebarContent = (
    <>
      {/*Brand Header*/}
      <div className="px-5 pt-6 pb-6 border-b border-white/6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <UserIcon className="text-white size-7" />
            <div>
              <p className="text-lg font-semibold text-white tracking-wide">
                Employee MS
              </p>
              <p className="text-sm text-slate-500 font-medium">
                Management System
              </p>
            </div>
          </div>

          {/*Mobile Close Button*/}
          <button
            onClick={() => setmobileOpen(false)}
            className="lg:hidden text-slate-400 hover:text-white p-1"
          >
            <XIcon size={20} />
          </button>
        </div>
      </div>
      {/*User Profile Card*/}
      {username && (
        <div className="mx-3 mt-4 mb-1 p-3 border border-white/6 rounded-lg bg-white/3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center text-white font-semibold">
              <span>{username.charAt(0).toUpperCase()}</span>
            </div>

            <div>
              <p className="text-lg font-semibold text-white truncate">
                {username}
              </p>
              <p className="text-sm text-slate-500 truncate">
                {role === "ADMIN" ? "Administrator" : "Employee"}
              </p>
            </div>
          </div>
        </div>
      )}

      {/*Section Labels*/}
      <div className="px-5 mt-6 mb-2">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Navigations
        </p>
      </div>
      {/*Navigation Links*/}
      <div className="flex-1 px-3 space-y-0.5 overflow-y-auto">
        {navigationLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              to={link.href}
              className={`group flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${isActive ? "bg-indigo-500/12 text-indigo-300" : "text-slate-400 hover:bg-white/4 hover:text-white"}`}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 w-1 h-5 -translate-y-1/2 rounded-r-full bg-indigo-500"></div>
              )}

              <link.icon
                size={18}
                className={`shirnk-0 ${isActive ? "text-indigo-400" : "text-slate-400 group-hover:text-slate-300"}`}
              />
              <span className="flex-1 truncate">{link.name}</span>
              {isActive && (
                <ChevronRight size={16} className="text-indigo-500/5" />
              )}
            </Link>
          );
        })}
      </div>

      {/*Logout Button*/}

      <div className="px-5 mt-4 pt-4 border-t border-white/6">
        <button 
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/4 hover:text-white cursor-pointer"
          onClick={handleLogout}
        >
          <LogOutIcon size={24}/>
          <span>Log Out</span>
        </button>
      </div>
    </>
  );

  return (
    <>
      {/*Mobile Button*/}
      <button
        onClick={() => setmobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-lg shadow-lg border border-white/10"
      >
        <MenuIcon size={20} />
      </button>
      {/*mobile overlay*/}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50 blackdrop-blur-sm"
          onClick={() => setmobileOpen(false)}
        ></div>
      )}
      {/*sidebar-desktop*/}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-slate-800 text-white p-4 z-50 transform ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:flex-shrink-0`}
      >
        {sidebarContent}
      </aside>
    </>
  );
};

export default Sidebar;
