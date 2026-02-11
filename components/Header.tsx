
import React from 'react';
import { Page } from '../types';

interface HeaderProps {
  activePage: Page;
  onNavClick: (page: Page) => void;
}

const NavButton: React.FC<{
  page: Page;
  activePage: Page;
  onClick: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, activePage, onClick, children }) => {
  const isActive = page === activePage;
  return (
    <button
      onClick={() => onClick(page)}
      className={`px-4 py-2 rounded-md text-base md:text-lg font-medium transition-all duration-300 ${
        isActive
          ? 'bg-brand-primary text-white shadow-md'
          : 'text-warm-gray hover:bg-brand-light hover:text-brand-dark'
      }`}
    >
      {children}
    </button>
  );
};


const Header: React.FC<HeaderProps> = ({ activePage, onNavClick }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-brand-dark cursor-pointer" onClick={() => onNavClick(Page.Home)}>
              嗄嗄叫便當店
            </h1>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavButton page={Page.Home} activePage={activePage} onClick={onNavClick}>
                首頁
              </NavButton>
              <NavButton page={Page.Dishes} activePage={activePage} onClick={onNavClick}>
                招牌菜色
              </NavButton>
              <NavButton page={Page.Menu} activePage={activePage} onClick={onNavClick}>
                菜單下載
              </NavButton>
            </div>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu could be implemented here */}
            <select
                onChange={(e) => onNavClick(e.target.value as Page)}
                value={activePage}
                className="block w-full pl-3 pr-10 py-2 text-lg sm:text-base border-gray-300 focus:outline-none focus:ring-brand-primary focus:border-brand-primary rounded-md bg-white"
            >
                <option value={Page.Home}>首頁</option>
                <option value={Page.Dishes}>招牌菜色</option>
                <option value={Page.Menu}>菜單下載</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;