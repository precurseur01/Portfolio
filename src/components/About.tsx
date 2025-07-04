import { skills } from '../constant';




const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">À propos de moi</h2>
        
        <div className="mb-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
            Passionné par le développement web depuis plus de 5 ans, je combine créativité et expertise technique 
            pour créer des solutions numériques innovantes. Mon approche est centrée sur l'utilisateur, 
            avec un souci constant de la qualité et de la performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <skill.icon className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;