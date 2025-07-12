import Img from "../image/img";

const projects = [
    {
        title: 'Social Media App',
        description: 'Application de réseau social avec messagerie instantanée et partage de médias.',
        image: `${Img.fan}`,
        tags: ['React', 'js', 'Bootstrap'],
        githubLink: '',
        liveLink: 'https://www.fanbusy.com/',
    },
    {
        title: 'Landing Page - App de Rencontre',
        description: 'Une landing page moderne et engageante pour une application de rencontre.',
        image: `${Img.valentine}`,
        tags: ['React', 'Tailwind CSS', 'Vite'],
        githubLink: '',
        liveLink: 'theprojectvalentine.com'
    },

    {
        title: 'Système de Chat Créateurs–Fans',
        description: "Messagerie privée avec partage de médias. Le chat peut être gratuit ou payant, avec envoi de contenus monétisés.",
        tags: ['React.js', 'WebSocket', 'Bootstrap'],
        image: `${Img.fanbusytchat}`,
        githubLink: '', // à remplacer par le lien réel
        liveLink: 'https://www.fanbusy.com/',
    },
    {
        title: 'Mon Portfolio Personnel',
        description: 'Site portfolioResponsive, mettant en avant mes projets, compétences et contact. Interface responsive et épurée.',
        image: `${Img.landingp}`,
        tags: ['React.js ', 'Tailwind CSS', ' Vite'],
        githubLink: 'https://github.com/precurseur01/Portfolio',
        liveLink: 'https://dev-yndris.vercel.app/',
    },
    {
        title: 'Site de Dons – Fondation Amalia',
        description: 'Plateforme de dons en ligne pour soutenir les actions sociales de la Fondation Amalia. Paiement sécurisé, design épuré, et expérience utilisateur fluide.',
        image: `${Img.donation}`,
        tags: ['React.js', 'Vite', ' paiement'],
        githubLink: '',
        liveLink: 'https://www.fondationamalia.org/',
    },
    {
        title: 'Landing Page WordPress – IA',
        description: 'Page de présentation d’un produit IA développée avec WordPress. Optimisée pour la conversion et le SEO.',
        image: `${Img.fwordpress}`, // ou un autre visuel pertinent
        tags: ['WordPress', 'Elementor', 'SEO'],
        githubLink: '', // souvent non applicable
        liveLink: 'https://famla.com/',
    },
    {
        title: 'Plateforme IA Collaborative',
        description: 'Plateforme interactive où les membres d’une équipe répondent à l’IA à tour de rôle, facilitant la réflexion collective. Génère une cartographie stratégique à la fin.',
        image: `${Img.f}`,
        tags: ['React.js', 'IA', 'Collaboration'],
        githubLink: '', // si disponible
        liveLink: 'https://www.famla.ai/', // si en ligne
    },
    {
        title: 'Générateur de Cartographie Dynamique',
        description: 'Outil interactif basé sur D3.js permettant de visualiser les tâches, les décisions et les acteurs d’un processus collaboratif. Entièrement éditable en drag & drop.',
        image: `${Img.famla_d}`,
        tags: ['D3.js', 'Data Visualization', 'React.js'],
        githubLink: '',
        liveLink: 'https://www.famla.ai/',
    },





];

export default projects