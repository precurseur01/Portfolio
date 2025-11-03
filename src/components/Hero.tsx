
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Img } from '../constant';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {

  const { t } = useTranslation()

  const competences = [
    { name: t('hero.title'), icon: '💻', color: 'from-blue-600 to-blue-700' },
    { name: 'Community Manager', icon: '🌍', color: 'from-emerald-600 to-emerald-700' },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % competences.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [competences.length]);

  return (
    <>
      <section id="accueil" className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-emerald-50/30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex-1 space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-full border border-blue-100"
              >
                <Sparkles size={16} className="text-blue-600" />
                <span className="text-md font-medium text-slate-700">{t('hero.avaibility')}</span>
              </motion.div>

              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}

                  className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight"
                >
                  Yndris Douanla
                </motion.h1>

                <div className="mt-6 min-h-32">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 20, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      exit={{ opacity: 0, y: -20, rotateX: 90 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-6xl">{competences[currentIndex].icon}</span>
                        <div>
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className={`text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${competences[currentIndex].color}`}
                          >
                            {competences[currentIndex].name}
                          </motion.div>
                        </div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: '100%' }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className={`h-1 bg-gradient-to-r ${competences[currentIndex].color} rounded-full`}
                      />

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex gap-2 mt-4"
                      >
                        {competences.map((_, index) => (
                          <motion.button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            animate={{
                              scale: index === currentIndex ? 1 : 0.8,
                              opacity: index === currentIndex ? 1 : 0.5,
                            }}
                            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex
                              ? `bg-gradient-to-r ${competences[index].color}`
                              : 'bg-slate-300'
                              }`}
                          />
                        ))}
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6"
                >
                  <span className="text-lg md:text-xl text-slate-600 font-light">
                    {t('hero.whoTurnsIdeasInto')}
                  </span>
                  <br />
                  <span className="text-lg md:text-xl text-slate-600 font-light">
                    {t('hero.smoothAndMemorableExperiences')} 
                  </span>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl"
              >
                {t('hero.title')}

              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-4"
              >

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -15px rgba(59, 130, 246, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-emerald-700 transition-all duration-200 shadow-lg shadow-blue-500/30"
                >
                  Démarrer un projet
                  <ArrowRight className="ml-2" size={20} />
                </motion.a>

                <motion.a
                  href="#portfolio"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-200 border-2 border-slate-200 hover:border-slate-300"
                >
                  Voir mes réalisations
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
              className="flex-1 relative"
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-emerald-400/20 rounded-full blur-3xl"
                />

                <div className="flex-1">
                  <img
                    src={Img.yndProfil}
                    alt="Portrait professionnel"
                    className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover shadow-xl"
                  />
                </div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl shadow-blue-500/50 flex items-center justify-center"
                >
                  <span className="text-white font-bold text-lg">5+</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl shadow-xl shadow-emerald-500/50 flex items-center justify-center"
                >
                  <span className="text-white font-bold text-lg">✓</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-slate-400 rounded-full" />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;