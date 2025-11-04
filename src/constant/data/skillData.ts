import { Code, Terminal, Palette, Database, Settings } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const useSkills = () => {
  const { t } = useTranslation()

  const skills = [
    {
      name: t('about.skill.frontend'),
      icon: Code,
      color: 'from-sky-500 to-cyan-500', // Bleu clair moderne pour le front-end
      items: ['React.js', 'Next.js', 'TypeScript', 'Vite.js', 'Tailwind CSS', 'JavaScript']
    },
    {
      name: t('about.skill.backend'),
      icon: Terminal,
      color: 'from-emerald-500 to-green-600', // Vert naturel et stable pour le backend
      items: ['Node.js', 'Express.js', 'Python', 'REST APIs']
    },
    {
      name: t('about.skill.database'),
      icon: Database,
      color: 'from-indigo-500 to-purple-500', // Violet profond pour la data
      items: ['PostgreSQL', 'MongoDB', 'MySQL']
    },
    {
      name: t('about.skill.tools'),
      icon: Settings,
      color: 'from-orange-400 to-amber-500', // Chaud et dynamique pour les outils
      items: ['Git', 'GitHub', 'Vercel', 'Postman', 'Visual Studio Code']
    },
    {
      name: t('about.skill.design'),
      icon: Palette,
      color: 'from-pink-500 to-rose-500', // Créatif et artistique pour le design
      items: ['Figma', 'Adobe XD']
    }
  ]

  return skills
}

export default useSkills
