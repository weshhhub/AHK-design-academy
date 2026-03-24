import { motion } from 'motion/react';
import { GraduationCap, Award, Target, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl mb-6">Empowering Kenya's Next Generation of Designers</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            AHK Design Academy was founded with a single mission: to bridge the gap between academic theory and industry-standard 3D visualization skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/instructor/800/800" 
              alt="Our Founder" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="text-3xl mb-6">Meet Your Instructor</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 10 years of experience in architectural visualization and interior design, our lead instructor has worked on some of the most iconic projects in East Africa.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              "I started AHK because I saw so many talented students struggling to present their ideas effectively. My goal is to give you the tools and the confidence to compete on a global stage."
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-bold text-accent">10+</p>
                <p className="text-sm text-gray-400">Years Exp.</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">500+</p>
                <p className="text-sm text-gray-400">Students</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">100%</p>
                <p className="text-sm text-gray-400">Online</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { icon: Target, title: "Our Mission", desc: "To provide accessible, high-quality design education that leads directly to career growth." },
            { icon: Heart, title: "Our Values", desc: "We believe in mentorship, practical learning, and building a supportive community." },
            { icon: Award, title: "Our Vision", desc: "To become Africa's leading hub for architectural visualization and digital design." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <item.icon className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-xl mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
