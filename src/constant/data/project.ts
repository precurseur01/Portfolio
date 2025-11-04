import Img from "../image/img";
import { useTranslation } from "react-i18next";

const ProjectsData = () => {
    const { t } = useTranslation();

    return [
        {
            title: t("projects.socialMediaApp.title"),
            description: t("projects.socialMediaApp.description"),
            image: `${Img.fan}`,
            tags: ["React", "js", "Bootstrap"],
            githubLink: "",
            liveLink: "https://www.fanbusy.com/",
        },
        {
            title: t("projects.landingPageDating.title"),
            description: t("projects.landingPageDating.description"),
            image: `${Img.valentine}`,
            tags: ["React", "Tailwind CSS", "Vite"],
            githubLink: "",
            liveLink: "https://theprojectvalentine.com",
        },
        {
            title: t("projects.chatSystem.title"),
            description: t("projects.chatSystem.description"),
            tags: ["React.js", "WebSocket", "Bootstrap"],
            image: `${Img.fanbusytchat}`,
            githubLink: "",
            liveLink: "https://www.fanbusy.com/",
        },
        // {
        //     title: t("projects.portfolio.title"),
        //     description: t("projects.portfolio.description"),
        //     image: `${Img.landingp}`,
        //     tags: ["React.js ", "Tailwind CSS", " Vite"],
        //     githubLink: "https://github.com/precurseur01/Portfolio",
        //     liveLink: "https://dev-yndris.vercel.app/",
        // },
        {
            title: t("projects.donationSite.title"),
            description: t("projects.donationSite.description"),
            image: `${Img.donation}`,
            tags: ["React.js", "Vite", "paiement"],
            githubLink: "",
            liveLink: "https://www.fondationamalia.org/",
        },
        // {
        //     title: t("projects.wordpressLanding.title"),
        //     description: t("projects.wordpressLanding.description"),
        //     image: `${Img.fwordpress}`,
        //     tags: ["WordPress", "Elementor", "SEO"],
        //     githubLink: "",
        //     liveLink: "https://famla.com/",
        // },
        {
            title: t("projects.collaborativeAIPlatform.title"),
            description: t("projects.collaborativeAIPlatform.description"),
            image: `${Img.f}`,
            tags: ["React.js", "IA", "Collaboration"],
            githubLink: "",
            liveLink: "https://www.famla.ai/",
        },
        {
            title: t("projects.dynamicMappingGenerator.title"),
            description: t("projects.dynamicMappingGenerator.description"),
            image: `${Img.famla_d}`,
            tags: ["D3.js", "Data Visualization", "React.js"],
            githubLink: "",
            liveLink: "https://www.famla.ai/",
        },
    ];
};

export default ProjectsData;
