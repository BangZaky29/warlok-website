import type { FC } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { motion } from 'motion/react';
import { securityContent } from '../data/privacySecurityData';
import { Mail, Lock, CheckCircle2 } from 'lucide-react';

export const Security: FC = () => {
    return (
        <MainLayout>
            <section className="pt-32 pb-20 bg-slate-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">{securityContent.title}</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{securityContent.subtitle}</p>
                    </motion.div>

                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">{securityContent.intro.title}</h2>
                        <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
                            {securityContent.intro.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {securityContent.measures.map((measure, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                            >
                                <div className="text-3xl mb-4">{measure.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{measure.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {measure.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-xl shadow-blue-200"
                        >
                            <h3 className="text-2xl font-bold mb-8 flex items-center">
                                <Lock className="mr-3" /> Tips Keamanan untuk Pengguna
                            </h3>
                            <ul className="space-y-4">
                                {securityContent.tips.map((tip, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle2 className="mr-3 mt-1 flex-shrink-0 text-blue-200" size={20} />
                                        <span className="text-blue-50 leading-relaxed">{tip}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm flex flex-col justify-center"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{securityContent.report.title}</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                {securityContent.report.description}
                            </p>
                            <a
                                href={`mailto:${securityContent.report.email}`}
                                className="inline-flex items-center px-6 py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors w-full sm:w-max mb-8"
                            >
                                <Mail className="mr-2" size={20} /> {securityContent.report.email}
                            </a>
                            <p className="text-gray-500 italic text-sm">
                                {securityContent.report.closing}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};
