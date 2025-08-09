import React, { useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
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

  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('contact.title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">{t('contact.info')}</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-[#00A6E2] mr-3" />
                <span>yndriswilf@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-[#00A6E2] mr-3" />
                <span>+237 650871031</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-[#00A6E2] mr-3" />
                <span>Yaounde, Cameroun</span>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <form
            ref={formRef}
            action="https://formspree.io/f/xldnpebz"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full px-6 py-3 bg-[#00A6E2] text-white font-medium rounded-lg hover:bg-[#52BB72] transition-colors"
            >
              {t('contact.form.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
