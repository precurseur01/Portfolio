import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setFormData((prev: any) => ({
        ...prev,
        name: "",
        email: "",
        message: ""
      }));
    }, 3000);


  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Mes coordonnées</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-600 mr-3" />
                <span>yndriswilf@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-600 mr-3" />
                <span>+237 650871031</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                <span>Yaounde, Cameroun</span>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <form
            action="https://formspree.io/f/xldnpebz"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nom complet
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
                Email
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
                Message
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
              className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;