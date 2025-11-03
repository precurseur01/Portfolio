// import React from 'react';
import { useTranslation } from 'react-i18next';
import servicesData from '../constant/data/serviceData';
import { ArrowRight } from 'lucide-react';


const Services = () => {
  const { t } = useTranslation();
  const services = servicesData(t)
  return (
    <>
      <section id="services" className="py-24 relative overflow-hidden bg-black/10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Services & <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Solutions sur Mesure</span>
            </h2>
            <p className="text-xl text-gray max-w-2xl mx-auto">
              Des services adaptés à vos besoins, de la conception à la mise en production
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border border-black/10 rounded-2xl p-8 hover:bg-black/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} className="text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-black">{service.title}</h3>
                  {/* <p className="text-sm text-emerald-400 mb-4 font-medium">{service.subtitle}</p> */}
                  <p className="text-gray mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {/* {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))} */}
                  </ul>

                  <div className="pt-4 border-t border-black/10">
                    <a href="#contact" className="text-black-400 hover:text-black flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                      En savoir plus
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>

  );
};

export default Services;