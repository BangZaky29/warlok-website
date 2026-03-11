import type { FC } from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, Clock, Building2 } from 'lucide-react';

// Custom TikTok Logo SVG component
const TikTokIcon = ({ size = 18, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
  </svg>
);

const WhatsAppIcon = ({ size = 18, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M17.472 14.382c-.301-.15-1.767-.872-2.04-.971-.272-.1-.47-.15-.667.15-.198.301-.765.971-.937 1.17-.173.199-.347.223-.647.073-.301-.15-1.272-.469-2.422-1.494-.894-.797-1.498-1.782-1.674-2.081-.176-.3-.019-.462.13-.61.134-.133.3-.349.45-.524.15-.174.199-.299.299-.498.1-.199.05-.373-.025-.524-.075-.15-.667-1.605-.914-2.201-.24-.576-.484-.498-.667-.507-.173-.009-.371-.01-.57-.01-.198 0-.521.074-.794.373-.272.301-1.04 1.016-1.04 2.479 0 1.463 1.066 2.876 1.214 3.076.149.199 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.767-.721 2.016-1.417.249-.695.249-1.291.174-1.417-.076-.126-.272-.199-.573-.349zM12.004 20h-.002c-1.42 0-2.812-.382-4.015-1.104l-.288-.171-2.983.782.796-2.906-.187-.298C4.545 15.115 4.027 13.582 4.027 12c0-4.397 3.575-7.972 7.976-7.972 2.131 0 4.134.829 5.642 2.338a7.915 7.915 0 0 1 2.335 5.637c0 4.399-3.575 7.977-7.976 7.977zm8.441-11.838A9.897 9.897 0 0 0 12.004 2c-5.462 0-9.904 4.444-9.904 9.908 0 1.748.459 3.452 1.33 4.962L2 22l5.248-1.377a9.851 9.851 0 0 0 4.752 1.22h.003c5.461 0 9.903-4.444 9.903-9.908a9.855 9.855 0 0 0-2.553-6.753z" />
  </svg>
);

export const Footer: FC = () => {
  return (
    <footer id="kontak" className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-1"
          >
            <div className="mb-6">
              <a href="#" className="text-2xl font-bold text-white tracking-tight block mb-1">
                Nuansa Solution
              </a>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                PT. NUANSA BERKAH SEJAHTERA
              </span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm">
              Solusi digital terpercaya untuk transformasi lingkungan RT/RW dan komunitas Anda menjadi lebih modern dan transparan.
            </p>
            <div className="space-y-4">
              <div className="flex flex-col space-y-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Nuansa Legal:</span>
                <div className="flex space-x-3">
                  <a href="https://www.instagram.com/nuansalegal.id/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#E4405F] hover:text-white transition-all shadow-lg hover:shadow-[#E4405F]/20" title="Instagram Nuansa Legal">
                    <Instagram size={14} />
                  </a>
                  <a href="https://www.tiktok.com/@nuansalegal.id?lang=id-ID" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-black hover:text-white transition-all shadow-lg hover:shadow-black/20" title="TikTok Nuansa Legal">
                    <TikTokIcon size={14} />
                  </a>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Nuansa Solution:</span>
                <div className="flex space-x-3">
                  <a href="https://www.instagram.com/nuansasolution.id/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#E4405F] hover:text-white transition-all shadow-lg hover:shadow-[#E4405F]/20" title="Instagram Nuansa Solution">
                    <Instagram size={14} />
                  </a>
                  <a href="https://www.tiktok.com/@nuansasolution.id" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-black hover:text-white transition-all shadow-lg hover:shadow-black/20" title="TikTok Nuansa Solution">
                    <TikTokIcon size={14} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Branch Offices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 lg:col-span-2"
          >
            <h3 className="text-white font-semibold mb-6 flex items-center">
              <Building2 size={18} className="mr-2 text-blue-400" />
              Kantor Cabang
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h4 className="text-white text-sm font-bold mb-1">Cabang Jakarta</h4>
                  <p className="text-xs leading-relaxed text-slate-400">
                    Gedung STC Senayan Lt.3 No.190<br />
                    Jakarta Pusat | 0896-4444-8721
                  </p>
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold mb-1">Cabang Bogor</h4>
                  <p className="text-xs leading-relaxed text-slate-400">
                    Perumahan Citoh Cluster Halimun Blok H No. 7<br />
                    Desa Cibatok 1, Kec. Cibungbulang,<br />
                    Kab. Bogor (16630) | +62 8577-5080-888
                  </p>
                </div>
              </div>
              <div>
                <h4 className="text-white text-sm font-bold mb-1">Cabang Bandung</h4>
                <p className="text-xs leading-relaxed text-slate-400">
                  Komplek Firdaus Garden, Ngamprah<br />
                  Kab. Bandung Barat | 0882-9409-6100
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-6">Kontak Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <a
                  href="https://wa.me/6289644448721"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start hover:text-green-400 transition-colors"
                >
                  <WhatsAppIcon size={18} className="mr-3 mt-1 flex-shrink-0 text-green-500 group-hover:scale-110 transition-transform" />
                  <span className="text-sm border-b border-transparent hover:border-green-400">0896-4444-8721</span>
                </a>
              </li>
              <li className="flex items-start group">
                <Mail size={18} className="mr-3 mt-1 flex-shrink-0 text-blue-400 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col space-y-1 text-sm">
                  <span>cs@nuansasolution.id</span>
                  <span>info@nuansasolution.id</span>
                  <span>teknis@nuansasolution.id</span>
                </div>
              </li>
              <li className="flex items-start group">
                <Clock size={18} className="mr-3 mt-1 flex-shrink-0 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm uppercase tracking-wide">08.00 - 17.00 WIB</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} <span className="text-slate-400 font-medium">Nuansa Solution</span>. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#privacy"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('app-navigate', { detail: 'privacy' }));
              }}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#security"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('app-navigate', { detail: 'security' }));
              }}
              className="hover:text-white transition-colors"
            >
              Security
            </a>
            <a
              href="#terms"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('app-navigate', { detail: 'terms' }));
              }}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
