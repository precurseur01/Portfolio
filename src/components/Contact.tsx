import React, { useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = () => {
    // Optionnel : si tu veux éviter le rechargement complet
    // e.preventDefault();

    setTimeout(() => {
      if (formRef.current) {
        formRef.current.reset();
      }
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }, 3000); // 3s après l'envoi
  };


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'yndriswilf@gmail.com',
      href: 'mailto:yndriswilf@gmail.com',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+237 650871031',
      href: 'tel:+237650871031',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Yaoundé, Cameroun',
      href: '#',
      color: 'from-cyan-500 to-cyan-600',
    },
  ];


  return (
    <>

      <section id="contact" className="py-24 bg-black/5 from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
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
              {t('contact.title')}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
            >
              {t('contact.letsStartProject')}

            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-600 max-w-2xl mx-auto"
            >
              {t('contact.letsStartProject')}

            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6"> {t('contact.contactInformation')}</h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.a
                        key={info.label}
                        href={info.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md shadow-slate-200/50 hover:shadow-lg hover:shadow-slate-300/50 transition-all duration-300 border border-slate-100 group"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-500 mb-1">{info.label}</div>
                          <div className="text-slate-900 font-semibold">{info.value}</div>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 }}
                className="p-8 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl border border-blue-100"
              >
                <h4 className="text-xl font-bold text-slate-900 mb-4">{t('contact.availability')}</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  {t('contact.currentlyAvailable')}
                </p>
                <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  Disponible immédiatement
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
                <form
                  ref={formRef}
                  action="https://formspree.io/f/xldnpebz"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    // disabled={isSubmitting || isSubmitted}
                    // whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02 } : {}}
                    // whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
                    className={`w-full px-6 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:from-blue-700 hover:to-emerald-700 shadow-lg shadow-blue-500/30'
                      `}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key="default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        {t('contact.form.submit')}
                        <Send size={20} />
                      </motion.div>
                    </AnimatePresence>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
