import type { FC } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { Pricing } from '../components/sections/Pricing';
import { CTA } from '../components/sections/CTA';
import type { PricingPlan } from '../types/pricing';

interface HomeProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const Home: FC<HomeProps> = ({ onSelectPlan }) => {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <Pricing onSelectPlan={onSelectPlan} />
      <CTA />
    </MainLayout>
  );
};
