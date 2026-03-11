import { useState } from 'react';
import { Home } from './pages/Home';
import { Checkout } from './pages/Checkout';
import type { PricingPlan } from './types/pricing';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    window.scrollTo(0, 0);
  };

  const handleCancel = () => {
    setSelectedPlan(null);
    window.scrollTo(0, 0);
  };

  if (selectedPlan) {
    return <Checkout selectedPlan={selectedPlan} onCancel={handleCancel} />;
  }

  return <Home onSelectPlan={handleSelectPlan} />;
}
