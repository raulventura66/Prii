import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { TeamPage } from './pages/TeamPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { PageType } from './types/navigation';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('inicio');

  const renderPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <HomePage />;
      case 'sobre':
        return <AboutPage />;
      case 'servicos':
        return <ServicesPage />;
      case 'time':
        return <TeamPage />;
      case 'time':
        return <TeamPage />;
      case 'projetos':
        return <ProjectsPage />;
      case 'contato':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="transition-all duration-300">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;