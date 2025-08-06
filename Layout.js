import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Cloud, Settings, Home } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to={createPageUrl("Dashboard")} className="flex items-center gap-3 group">
            <div className="p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
              <Cloud className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">WeatherLux</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link 
              to={createPageUrl("Dashboard")}
              className={`p-3 rounded-xl transition-all duration-300 ${
                location.pathname === createPageUrl("Dashboard")
                  ? "bg-white/20 text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              } backdrop-blur-sm border border-white/20`}
            >
              <Home className="w-5 h-5" />
            </Link>
            <Link 
              to={createPageUrl("Settings")}
              className={`p-3 rounded-xl transition-all duration-300 ${
                location.pathname === createPageUrl("Settings")
                  ? "bg-white/20 text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              } backdrop-blur-sm border border-white/20`}
            >
              <Settings className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="relative z-10">
        {children}
      </main>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}