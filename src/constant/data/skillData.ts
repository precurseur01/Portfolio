import { Code, Terminal, Palette, Database, Settings } from 'lucide-react'
const skills = [
    {
        name: 'Frontend',
        icon: Code,
        items: ['React.js', 'Next.js', 'TypeScript', 'Vite.js', 'Tailwind CSS', 'JavaScript',]
    },
    {
        name: 'Backend',
        icon: Terminal,
        items: ['Node.js', 'Express.js', 'python', 'REST APIs']
    },
    {
        name: 'Base de données',
        icon: Database,
        items: ['PostgreSQL', 'MongoDB', 'MySQL']
    },
    {
        name: 'Outils & DevOps',
        icon: Settings,
        items: ['Git', 'GitHub', 'Vercel', 'Postman', 'Visual Studio Code']
    },
    {
        name: 'Design UI/UX',
        icon: Palette,
        items: ['Figma', 'Adobe XD']
    }
]

export default skills
