import { Code2, Palette, Globe, Cpu } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const servicesData = () => {
    const { t } = useTranslation();

    return [
        {
            icon: Code2,
            title: t('services.webDevelopment.title'),
            description: t('services.webDevelopment.description'),
            price: t('services.webDevelopment.price'),
        },
        {
            icon: Palette,
            title: t('services.uiux.title'),
            description: t('services.uiux.description'),
            price: t('services.uiux.price'),
        },
        {
            icon: Globe,
            title: t('services.seo.title'),
            description: t('services.seo.description'),
            price: t('services.seo.price'),
        },
        {
            icon: Cpu,
            title: t('services.cloud.title'),
            description: t('services.cloud.description'),
            price: t('services.cloud.price'),
        },
    ];
};

export default servicesData;
