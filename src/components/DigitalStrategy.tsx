import { motion } from 'framer-motion';
import { Share2, Users, PenTool } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function DigitalStrategy() {
    const { t } = useTranslation();

    const items = [
        {
            icon: <Users className="w-10 h-10 text-cyan-400" />,
            title: t('digital.items.community.title'),
            desc: t('digital.items.community.desc'),
        },
        {
            icon: <PenTool className="w-10 h-10 text-emerald-400" />,
            title: t('digital.items.content.title'),
            desc: t('digital.items.content.desc'),
        },
        {
            icon: <Share2 className="w-10 h-10 text-cyan-400" />,
            title: t('digital.items.visibility.title'),
            desc: t('digital.items.visibility.desc'),
        },
    ];

    return (
        <section
            id="digital"
            className="py-24 bg-gradient-to-b from-white to-slate-50 text-center"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-emerald-500"
            >
                {t('digital.title')}
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg"
            >
                {t('digital.description.part1')}
                <span className="text-cyan-500 font-semibold">
                    {t('digital.description.developer')}
                </span>
                {t('digital.description.part2')}
                <span className="text-emerald-500 font-semibold">
                    {t('digital.description.digitalCom')}
                </span>
                {t('digital.description.part3')}
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16 px-6">
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.5 }}
                        className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-cyan-100 transition-all border border-slate-100"
                    >
                        <div className="flex justify-center mb-4">{item.icon}</div>
                        <h3 className="text-2xl font-semibold text-slate-800 mb-2">
                            {item.title}
                        </h3>
                        <p className="text-gray-500">{item.desc}</p>
                    </motion.div>
                ))}
            </div>

            <motion.a
                href="https://cm.freedry.dev/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-3 mt-12 px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
            >
                {t('digital.cta')}
                <Share2 className="w-5 h-5" />
            </motion.a>
        </section>
    );
}
