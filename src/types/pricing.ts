export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular: boolean;
}
