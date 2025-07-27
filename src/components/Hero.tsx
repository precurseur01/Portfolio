import { ArrowRight } from 'lucide-react';
import { Img } from '../constant';
import { useTranslation } from 'react-i18next';


const Hero = () => {
  const { t } = useTranslation()
  return (
    <section id="accueil" className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              yndris Douanla
              <span className="block text-2xl md:text-3xl text-gray-600 mt-2">
                {t('hero.title')}
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('hero.description')}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-[#00A6E2] text-white font-medium rounded-lg hover:bg-[#52BB72] transition-colors"
            >
              {t('hero.contactButton')}
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
          <div className="flex-1">
            <img
              src={Img.yndProfil}
              alt="Portrait professionnel"
              className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;