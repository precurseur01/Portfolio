import { Code, Terminal, Palette, Database, Settings } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const useSkills = () => {
  const { t } = useTranslation()

  const skills = [
    {
      name: t('about.skill.frontend'),
      icon: Code,
      items: ['React.js', 'Next.js', 'TypeScript', 'Vite.js', 'Tailwind CSS', 'JavaScript']
    },
    {
      name: t('about.skill.backend'),
      icon: Terminal,
      items: ['Node.js', 'Express.js', 'python', 'REST APIs']
    },
    {
      name: t('about.skill.database'),
      icon: Database,
      items: ['PostgreSQL', 'MongoDB', 'MySQL']
    },
    {
      name: t('about.skill.tools'),
      icon: Settings,
      items: ['Git', 'GitHub', 'Vercel', 'Postman', 'Visual Studio Code']
    },
    {
      name: t('about.skill.design'),
      icon: Palette,
      items: ['Figma', 'Adobe XD']
    }
  ]

  return skills
}

export default useSkills
