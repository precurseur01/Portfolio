import { Facebook, Github, Linkedin, Mail } from 'lucide-react';
import { Img } from '../constant';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Logo et description */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src={Img.logo}
                alt="Free Technology Logo"
                className="max-h-[64px] w-auto"
              />
            </div>
            <p className="text-gray-400">
              {t('footer.description')}
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><a href="#accueil" className="text-gray-400 hover:text-white">{t('nav.home')}</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">{t('nav.about')}</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white">{t('nav.portfolio')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">{t('nav.services')}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">{t('nav.contact')}</a></li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.followMe')}</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/precurseur01" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/yndris-douanla-060968273" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="mailto:yndriswilf@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Mail size={24} />
              </a>
              <a href="https://www.facebook.com/share/1BC6jjWT3G/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Yndris Douanla. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
