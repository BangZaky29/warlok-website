import { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { Checkout } from './pages/Checkout';
import { Privacy } from './pages/Privacy';
import { Security } from './pages/Security';
import { Terms } from './pages/Terms';
import type { PricingPlan } from './types/pricing';

export type Page = 'home' | 'checkout' | 'privacy' | 'security' | 'terms';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setCurrentPage('checkout');
  };

  const navigateTo = (page: Page) => {
    setSelectedPlan(null);
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'checkout':
        return selectedPlan ? (
          <Checkout selectedPlan={selectedPlan} onCancel={() => navigateTo('home')} />
        ) : (
          <Home onSelectPlan={handleSelectPlan} />
        );
      case 'privacy':
        return <Privacy />;
      case 'security':
        return <Security />;
      case 'terms':
        return <Terms />;
      default:
        return <Home onSelectPlan={handleSelectPlan} />;
    }
  };

  return (
    <div className="app-container">
      {renderPage()}

      {/* 
          Since we aren't using a real router, we'll listen for a custom 
          'navigate' event from footer links to switch pages globally.
      */}
      <NavigationListener onNavigate={navigateTo} />
    </div>
  );
}

// Simple internal component to listen for navigation events from footer/navbar
function NavigationListener({ onNavigate }: { onNavigate: (page: Page) => void }) {
  useEffect(() => {
    const handleNavigation = (e: any) => {
      if (e.detail) onNavigate(e.detail);
    };
    window.addEventListener('app-navigate', handleNavigation);
    return () => window.removeEventListener('app-navigate', handleNavigation);
  }, [onNavigate]);

  return null;
}

