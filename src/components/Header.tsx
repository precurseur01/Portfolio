import React from 'react';
import { Menu, X, Github, Linkedin, Mail, Facebook } from 'lucide-react';
import { Img } from '../constant';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src={Img.logo}
              alt="Free Technology Logo"
              className="max-h-[50px] w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-gray-900">{t('nav.home')}</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900">{t('nav.about')}</a>
            <a href="#portfolio" className="text-gray-700 hover:text-gray-900">{t('nav.portfolio')}</a>
            <a href="#services" className="text-gray-700 hover:text-gray-900">{t('nav.services')}</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">{t('nav.contact')}</a>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <a href="https://github.com/precurseur01" className="text-gray-700 hover:text-gray-900">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/yndris-douanla-060968273" className="text-gray-700 hover:text-gray-900">
              <Linkedin size={20} />
            </a>
            <a href="mailto:yndriswilf@gmail.com" className="text-gray-700 hover:text-gray-900">
              <Mail size={20} />
            </a>
            <a href="https://www.facebook.com/share/1BC6jjWT3G/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-white">
              <Facebook size={24} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#accueil" className="block px-3 py-2 text-gray-700 hover:text-gray-900">{t('nav.home')}</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-gray-900">{t('nav.about')}</a>
            <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-gray-900">{t('nav.portfolio')}</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-gray-900">{t('nav.services')}</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900">{t('nav.contact')}</a>
            <div className="px-3 py-2 border-t border-gray-100 mt-2 pt-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;