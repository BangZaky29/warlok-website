import type { FC } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { pricingPlans } from '../../data/pricingData';
import { Button } from '../ui/Button';
import type { PricingPlan } from '../../types/pricing';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const Pricing: FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="harga" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Pilihan Paket Sesuai Kebutuhan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Mulai dari gratis hingga paket lengkap untuk lingkungan yang lebih besar.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative bg-white rounded-3xl p-8 shadow-sm border ${plan.isPopular ? 'border-blue-500 shadow-blue-100 shadow-xl' : 'border-gray-100 hover:shadow-xl'
                } transition-all duration-300 flex flex-col`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Paling Populer
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline text-gray-900">
                  <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className="ml-1 text-xl font-medium text-gray-500">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3">
                      <Check size={14} className="text-blue-600" />
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.isPopular ? 'primary' : 'outline'}
                className="w-full"
                onClick={() => onSelectPlan(plan)}
              >
                Pilih Paket
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
