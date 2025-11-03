import { useTranslation } from 'react-i18next';
import useSkills from '../constant/data/skillData';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';



const About = () => {
  const skills = useSkills()
  const { t } = useTranslation()
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <>
      <section id="about" className="py-24 bg-black/5 from-slate-500 via-white to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3"
            >
              {t('about.title')}

            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
            >

              {t('about.versatilityExcellence')}
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto text-center">
              {t('about.description')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 font-semibold">
                {' '}
                {t('about.description1')}
              </span>
              {t('about.description2')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10" />

                  <div className="relative bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/50 transition-all duration-300 border border-slate-100 h-full">
                    <div className={`w-14 h-14 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-emerald-600 transition-all duration-300">
                      {skill.name}
                    </h3>

                    <ul className="space-y-2.5">
                      {skill.items.map((item, i) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="text-slate-600 font-medium flex items-center"
                        >
                          <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mr-3" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-8 px-8 py-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl border border-blue-100">
              <div className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                  5+
                </div>
                <div className="text-sm text-slate-600 font-medium mt-1">Projets réalisés</div>
              </div>
              <div className="w-px h-12 bg-slate-300" />
              <div className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-700">
                  3+
                </div>
                <div className="text-sm text-slate-600 font-medium mt-1">Années d'expérience</div>
              </div>
              <div className="w-px h-12 bg-slate-300" />
              <div className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-700">
                  100%
                </div>
                <div className="text-sm text-slate-600 font-medium mt-1">Satisfaction client</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;