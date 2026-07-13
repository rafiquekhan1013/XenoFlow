import { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CheckCircle, User, LogOut } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { storageService } from "../services/storage.service";
import type { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  maxWidth?: "md" | "lg";
}

type LayoutNavItem = {
  path: string;
  label: string;
  shortLabel: string;
  isActiveStudies?: boolean;
};

const navLinkClass =
  "shrink-0 px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-colors whitespace-nowrap";

export default function PageLayout({
  children,
  maxWidth = "lg",
}: PageLayoutProps) {
  const { isAuthenticated, baSlug } = useAuth();
  const location = useLocation();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const [activeStudyPath, setActiveStudyPath] = useState("/studies");

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    if (baSlug) setActiveStudyPath(`/${baSlug}`);
  }, [baSlug]);

  const navItems: LayoutNavItem[] = [
    { path: "/", label: "Home", shortLabel: "Home" },
    { path: "/framework", label: "Framework", shortLabel: "Framework" },
    { path: "/reviews", label: "Reviews", shortLabel: "Reviews" },
    { path: "/evaluation-areas", label: "Evaluation Areas", shortLabel: "Areas" },
    { path: "/about", label: "About", shortLabel: "About" },
    { path: "/access", label: "Access", shortLabel: "Access" },
    {
      path: activeStudyPath,
      label: "Active Studies",
      shortLabel: "Studies",
      isActiveStudies: true,
    },
    { path: "/survey", label: "Survey", shortLabel: "Survey" },
  ];

  const isNavItemActive = (item: LayoutNavItem) => {
    if (item.isActiveStudies) {
      return (
        location.pathname === "/studies" ||
        (baSlug != null && location.pathname === `/${baSlug}`)
      );
    }
    return location.pathname === item.path;
  };

  const handleLogout = () => {
    storageService.resetAuthData();
    setIsProfileOpen(false);
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-3 lg:gap-4">
            <Link to="/" className="flex items-center gap-2 group shrink-0">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-2 rounded-xl">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <span className="text-lg lg:text-xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent whitespace-nowrap">
                XenoFlow
              </span>
            </Link>
            <div className="flex flex-1 min-w-0 items-center justify-end gap-1">
              <nav
                className="hidden lg:flex flex-nowrap items-center justify-end max-w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                aria-label="Main navigation"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`${navLinkClass} ${
                      isNavItemActive(item)
                        ? "text-emerald-700 bg-emerald-50"
                        : "text-gray-600 hover:text-emerald-600 hover:bg-emerald-50"
                    }`}
                  >
                    <span className="xl:hidden">{item.shortLabel}</span>
                    <span className="hidden xl:inline">{item.label}</span>
                  </Link>
                ))}
              </nav>
              {isAuthenticated ? (
                <div className="relative shrink-0 ml-1" ref={profileRef}>
                  <button
                    type="button"
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="p-2 rounded-lg text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                    aria-label="Profile menu"
                  >
                    <User className="w-5 h-5" />
                  </button>
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
                      <Link
                        to="/account"
                        onClick={() => setIsProfileOpen(false)}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                      >
                        <User className="w-4 h-4" />
                        Account
                      </Link>
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="flex items-center gap-2 w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-800"
                      >
                        <LogOut className="w-4 h-4" />
                        Log out
                      </button>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </header>

      <main
        className={`pt-10 pb-24 px-4 sm:px-6 lg:px-8 ${maxWidth === "md" ? "max-w-4xl" : "max-w-6xl"} mx-auto`}
      >
        {children}
      </main>
    </div>
  );
}
