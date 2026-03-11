import type { FC } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { motion } from 'motion/react';
import { termsContent } from '../data/termsData';
import { FileText } from 'lucide-react';

export const Terms: FC = () => {
    return (
        <MainLayout>
            <section className="pt-32 pb-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mb-6 shadow-sm border border-blue-100">
                            <FileText size={32} />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">{termsContent.title}</h1>
                        <p className="text-gray-500 italic">Terakhir diperbarui: {termsContent.lastUpdated}</p>
                    </motion.div>

                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-8">
                        <p className="text-lg text-gray-600 leading-relaxed mb-12 border-l-4 border-blue-500 pl-6 italic">
                            "{termsContent.intro}"
                        </p>

                        <div className="space-y-12">
                            {termsContent.sections.map((section, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                        <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm mr-4 flex-shrink-0">
                                            {index + 1}
                                        </span>
                                        {section.title}
                                    </h2>
                                    <div className="space-y-4 ml-12">
                                        {section.content.map((item, i) => (
                                            <p key={i} className="text-gray-600 leading-relaxed">
                                                {item}
                                            </p>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 text-center text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} PT. NUANSA BERKAH SEJAHTERA. Semua hak dilindungi undang-undang.
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};
