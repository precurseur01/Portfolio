import { Code, Terminal, Palette, Database, Settings } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const useSkills = () => {
  const { t } = useTranslation()

  const skills = [
    {
      name: t('about.skill.frontend'),
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      items: ['React.js', 'Next.js', 'TypeScript', 'Vite.js', 'Tailwind CSS', 'JavaScript']
    },
    {
      name: t('about.skill.backend'),
      icon: Terminal,
      color: 'from-emerald-500 to-emerald-600',
      items: ['Node.js', 'Express.js', 'python', 'REST APIs']
    },
    {
      name: t('about.skill.database'),
      icon: Database,
      color: 'from-violet-500 to-violet-600',
      items: ['PostgreSQL', 'MongoDB', 'MySQL']
    },
    {
      name: t('about.skill.tools'),
      icon: Settings,
      color: 'from-violet-500 to-violet-600',
      items: ['Git', 'GitHub', 'Vercel', 'Postman', 'Visual Studio Code']
    },
    {
      name: t('about.skill.design'),
      icon: Palette,
      color: 'from-violet-500 to-violet-600',
      items: ['Figma', 'Adobe XD']
    }
  ]

  return skills
}

export default useSkills
