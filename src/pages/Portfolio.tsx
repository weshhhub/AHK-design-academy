import { motion } from 'motion/react';

const projects = [
  { title: "Modern Villa", category: "Architecture", image: "https://picsum.photos/seed/villa/600/600" },
  { title: "Scandi Interior", category: "Interior", image: "https://picsum.photos/seed/scandi/600/600" },
  { title: "Office Lobby", category: "Commercial", image: "https://picsum.photos/seed/office/600/600" },
  { title: "Kitchen Detail", category: "Interior", image: "https://picsum.photos/seed/kitchen/600/600" },
  { title: "Urban Plaza", category: "Architecture", image: "https://picsum.photos/seed/urban/600/600" },
  { title: "Master Bedroom", category: "Interior", image: "https://picsum.photos/seed/bedroom/600/600" }
];

export default function Portfolio() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl mb-4">Student Work Showcase</h1>
          <p className="text-lg text-gray-600">
            Real projects created by our students during the 8-week program. From zero experience to professional-grade renders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <p className="text-accent text-sm font-bold uppercase tracking-wider mb-1">{project.category}</p>
                <h3 className="text-white text-2xl">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
