// import React from 'react';
import { useTranslation } from 'react-i18next';
import servicesData from '../constant/data/serviceData';


const Services = () => {
  const { t } = useTranslation();
  const services = servicesData()
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{t('services.title')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-lg shadow-md">
              <service.icon className="w-12 h-12 text-[#00A6E2] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              {/* <p className="text-[#00A6E2] font-semibold">{service.price}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;