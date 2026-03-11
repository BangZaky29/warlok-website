import type { FC } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { PaymentForm } from '../components/sections/PaymentForm';
import type { PricingPlan } from '../types/pricing';
import { motion } from 'motion/react';

interface CheckoutProps {
    selectedPlan: PricingPlan;
    onCancel: () => void;
}

export const Checkout: FC<CheckoutProps> = ({ selectedPlan, onCancel }) => {
    return (
        <MainLayout>
            <section className="pt-32 pb-20 bg-slate-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Langkah Terakhir</h1>
                        <p className="text-lg text-gray-600">Terima kasih telah memilih WARLOK untuk solusi digital lingkungan Anda.</p>
                    </motion.div>

                    <PaymentForm selectedPlan={selectedPlan} onCancel={onCancel} />
                </div>
            </section>
        </MainLayout>
    );
};
