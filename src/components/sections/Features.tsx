import type { FC } from 'react';
import { motion } from 'motion/react';
import { Wallet, FileText, MessageCircle, AlertTriangle, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    title: 'Manajemen Iuran',
    description: 'Catat dan pantau pembayaran iuran warga dengan mudah dan transparan.',
    icon: Wallet,
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    title: 'Laporan Warga',
    description: 'Fasilitas pelaporan masalah lingkungan yang langsung terhubung ke pengurus.',
    icon: FileText,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Chat Komunitas',
    description: 'Ruang diskusi dan komunikasi antar warga ke pihak admin dan securiti setempat yang aman dan terstruktur.',
    icon: MessageCircle,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Panik Darurat',
    description: 'Tombol darurat untuk meminta bantuan keamanan atau medis dengan cepat.',
    icon: AlertTriangle,
    color: 'bg-rose-100 text-rose-600',
  },
  {
    title: 'Konsultasi Teknis',
    description: 'Dukungan tim teknis untuk membantu penggunaan aplikasi kapan saja.',
    icon: HeadphonesIcon,
    color: 'bg-amber-100 text-amber-600',
  },
];

export const Features: FC = () => {
  return (
    <section id="fitur" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Fitur Unggulan WARLOK
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Semua yang Anda butuhkan untuk mengelola lingkungan RT/RW dalam satu aplikasi.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.color}`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
