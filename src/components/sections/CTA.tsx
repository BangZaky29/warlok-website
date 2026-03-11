import type { FC } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/Button';

export const CTA: FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-blue-600 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-500 opacity-50 blur-2xl" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-blue-700 opacity-50 blur-2xl" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Mulai Digitalisasi Warga Sekarang
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Tingkatkan efisiensi kepengurusan RT/RW Anda dengan WARLOK. Daftar sekarang dan rasakan kemudahannya.
            </p>
            <Button variant="secondary" size="lg" className="text-blue-600 font-semibold px-10">
              Coba WARLOK Gratis
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
