
import { Code2, Palette, Globe, Cpu } from 'lucide-react';


const servicesData = (t: any) => {

    return [
        {
            icon: Code2,
            title: t('services.webDevelopment.title'),
            description: t('services.webDevelopment.description'),
            price: t('services.webDevelopment.price'),
            color: 'from-emerald-400 to-blue-400',
        },
        {
            icon: Palette,
            title: t('services.uiux.title'),
            description: t('services.uiux.description'),
            price: t('services.uiux.price'),
            color: 'from-blue-400 to-emerald-400',
        },
        {
            icon: Globe,
            title: t('services.seo.title'),
            description: t('services.seo.description'),
            price: t('services.seo.price'),
            color: 'from-emerald-400 to-blue-400',
        },
        {
            icon: Cpu,
            title: t('services.cloud.title'),
            description: t('services.cloud.description'),
            price: t('services.cloud.price'),
            color: 'from-emerald-400 to-blue-400',
        },
    ];
};

export default servicesData;
