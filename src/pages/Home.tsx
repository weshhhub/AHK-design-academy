import Hero from '../components/Hero';
import CourseCard from '../components/CourseCard';
import { motion } from 'motion/react';
import { Award, Users, BookOpen, MessageSquare } from 'lucide-react';

const courses = [
  {
    id: "full-program",
    title: "Full Program",
    price: "KSh 30,000",
    duration: "8 Weeks",
    tools: ["SketchUp", "Enscape", "V-Ray", "D5"],
    image: "https://picsum.photos/seed/full/600/400",
    description: "The ultimate workflow from 2D/3D modeling to high-end visualization."
  },
  {
    id: "modeling-only",
    title: "Modeling Only",
    price: "KSh 20,000",
    duration: "6 Weeks",
    tools: ["SketchUp"],
    image: "https://picsum.photos/seed/modeling/600/400",
    description: "Focus on precision modeling for architecture and interior design."
  },
  {
    id: "rendering-only",
    title: "Rendering Only",
    price: "KSh 10,000",
    duration: "6 Weeks",
    tools: ["Enscape", "V-Ray", "D5", "Twinmotion"],
    image: "https://picsum.photos/seed/rendering/600/400",
    description: "Transform your models into photorealistic masterpieces."
  }
];

const stats = [
  { icon: Users, label: "Students Trained", value: "500+" },
  { icon: Award, label: "Success Rate", value: "98%" },
  { icon: BookOpen, label: "Modules", value: "24+" },
  { icon: MessageSquare, label: "Support", value: "24/7" }
];

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex p-3 rounded-xl bg-white shadow-sm mb-4">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Our Core Programs</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Choose the path that fits your career goals. Whether you're a beginner or looking to polish your rendering skills.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard 
                key={course.id} 
                id={course.id}
                title={course.title}
                price={course.price}
                duration={course.duration}
                tools={course.tools}
                image={course.image}
                description={course.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl mb-8">Why AHK Design Academy?</h2>
              <div className="space-y-8">
                {[
                  { title: "Industry Standard Workflows", desc: "We don't just teach tools; we teach the professional workflow used by top firms." },
                  { title: "Weekly Live Q&A", desc: "Get your questions answered in real-time by expert instructors every week." },
                  { title: "Guided Projects", desc: "Build a portfolio-ready project with step-by-step guidance from start to finish." },
                  { title: "Lifetime Community Access", desc: "Join our network of designers and architects for ongoing support and jobs." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl mb-2">{item.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/workspace/800/600" 
                  alt="Learning Environment" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent/20 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-accent/5 rounded-3xl p-12 border border-accent/10">
            <h2 className="text-4xl mb-6">Ready to Elevate Your Design Skills?</h2>
            <p className="text-lg text-gray-600 mb-10">
              Don't miss out on our next intake. Join hundreds of successful students who have transformed their careers with AHK.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-accent text-lg px-10">Secure My Spot</button>
              <button className="btn-outline text-lg px-10">Contact Support</button>
            </div>
            <p className="mt-6 text-sm text-gray-400 italic">
              * Limited to 20 students per intake to ensure quality guidance.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
