import type { FC } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { motion } from 'motion/react';
import { privacyContent } from '../data/privacySecurityData';
import { ShieldCheck } from 'lucide-react';

export const Privacy: FC = () => {
    return (
        <MainLayout>
            <section className="pt-32 pb-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mb-6 shadow-sm border border-blue-100">
                            <ShieldCheck size={32} />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">{privacyContent.title}</h1>
                        <p className="text-gray-500 italic">Terakhir diperbarui: {privacyContent.lastUpdated}</p>
                    </motion.div>

                    <div className="prose prose-blue max-w-none">
                        {privacyContent.sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="mb-12"
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                                    {section.title}
                                </h2>
                                <ul className="space-y-4">
                                    {section.content.map((item, i) => (
                                        <li key={i} className="text-gray-600 leading-relaxed flex items-start">
                                            <span className="mr-3 text-blue-400 mt-1.5">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};
