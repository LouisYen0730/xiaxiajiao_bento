
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dishes from './pages/Dishes';
import Menu from './pages/Menu';
import { Page } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.Home);

  const renderPage = () => {
    switch (activePage) {
      case Page.Home:
        return <Home />;
      case Page.Dishes:
        return <Dishes />;
      case Page.Menu:
        return <Menu />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-amber-50 font-sans text-warm-gray">
      <Header activePage={activePage} onNavClick={setActivePage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;