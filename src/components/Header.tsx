import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, User, LogOut, Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../hooks/useAuth';
import { storageService } from '../services/storage.service';

type NavItem = {
  path: string;
  label: string;
  shortLabel: string;
  isActiveStudies?: boolean;
};

const staticNavItems: NavItem[] = [
  { path: '/', label: 'Home', shortLabel: 'Home' },
  { path: '/framework', label: 'Framework', shortLabel: 'Framework' },
  { path: '/reviews', label: 'Reviews', shortLabel: 'Reviews' },
  { path: '/evaluation-areas', label: 'Evaluation Areas', shortLabel: 'Areas' },
  { path: '/about', label: 'About', shortLabel: 'About' },
  { path: '/access', label: 'Access', shortLabel: 'Access' },
];

const navLinkClass =
  'relative shrink-0 px-2 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-medium transition-all duration-300 whitespace-nowrap';

export function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, baSlug } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRefDesktop = useRef<HTMLDivElement>(null);
  const profileRefMobile = useRef<HTMLDivElement>(null);

  const activeStudiesPath = baSlug ? `/${baSlug}` : '/studies';

  const navItems: NavItem[] = [
    ...staticNavItems,
    {
      path: activeStudiesPath,
      label: 'Active Studies',
      shortLabel: 'Studies',
      isActiveStudies: true,
    },
    { path: '/survey', label: 'Survey', shortLabel: 'Survey' },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideDesktop = profileRefDesktop.current?.contains(target);
      const insideMobile = profileRefMobile.current?.contains(target);
      if (!insideDesktop && !insideMobile) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    storageService.resetAuthData();
    setIsProfileOpen(false);
    setMobileMenuOpen(false);
    window.location.href = '/';
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isNavActive = (item: NavItem) => {
    if (item.isActiveStudies) {
      return (
        location.pathname === '/studies' ||
        (baSlug != null && location.pathname === `/${baSlug}`)
      );
    }
    return location.pathname === item.path;
  };

  const renderNavLink = (item: NavItem, onNavigate?: () => void) => {
    const active = isNavActive(item);
    return (
      <Link
        key={item.label}
        to={item.path}
        onClick={onNavigate}
        className={`${navLinkClass} ${
          active ? 'text-emerald-700' : 'text-gray-600 hover:text-emerald-600'
        }`}
      >
        {active && (
          <span className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200/50" />
        )}
        <span className="relative">
          <span className="xl:hidden">{item.shortLabel}</span>
          <span className="hidden xl:inline">{item.label}</span>
        </span>
      </Link>
    );
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-emerald-500/5 border-b border-gray-200/50'
          : 'bg-white/90 backdrop-blur-md border-b border-gray-200/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 lg:gap-4 py-3 lg:py-4">
          <Link to="/" className="flex items-center space-x-3 group shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gradient-to-br from-emerald-600 to-teal-600 p-2 rounded-xl shadow-lg">
                <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
            </div>
            <h1 className="text-lg lg:text-xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent whitespace-nowrap">
              XenoFlow
            </h1>
          </Link>

          <div className="hidden lg:flex flex-1 min-w-0 items-center justify-end gap-0.5">
            <nav
              className="flex flex-nowrap items-center justify-end max-w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label="Main navigation"
            >
              {navItems.map((item) => renderNavLink(item))}
            </nav>
            {isAuthenticated && (
              <div className="relative shrink-0 ml-1" ref={profileRefDesktop}>
                <button
                  type="button"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="p-2 rounded-lg text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                  aria-label="Profile menu"
                  aria-expanded={isProfileOpen}
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
            )}
          </div>

          <div className="flex items-center gap-1 shrink-0 ml-auto lg:ml-0">
            {isAuthenticated && (
              <div className="relative lg:hidden" ref={profileRefMobile}>
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
            )}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
          <nav className="px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) =>
              renderNavLink(item, () => setMobileMenuOpen(false))
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
