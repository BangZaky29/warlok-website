import type { FC } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer: FC = () => {
  return (
    <footer id="kontak" className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <a href="#" className="text-2xl font-bold text-white tracking-tight mb-4 block">
              WARLOK
            </a>
            <p className="text-slate-400 max-w-md mb-6 leading-relaxed">
              Aplikasi digital untuk membantu pengurus RT/RW mengelola iuran, laporan warga, komunikasi, dan keamanan lingkungan secara praktis.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-3">
              <li><a href="#fitur" className="hover:text-white transition-colors">Fitur</a></li>
              <li><a href="#harga" className="hover:text-white transition-colors">Harga</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Kontak Support</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 flex-shrink-0 text-blue-400" />
                <span>support@warlok.id</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 flex-shrink-0 text-blue-400" />
                <span>0800-1234-5678</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-blue-400" />
                <span>Jl. Sudirman No. 123, Jakarta Selatan, 12190</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} WARLOK (Warga Lokal). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
