import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Clock, Laptop, CheckCircle2, ArrowRight, Download } from 'lucide-react';

const courseData: Record<string, any> = {
  "full-program": {
    title: "Full Program",
    price: "KSh 30,000",
    duration: "8 Weeks",
    tools: ["SketchUp", "Enscape", "V-Ray", "D5", "Photoshop"],
    image: "/images/full-program.jpg",
    description: "The ultimate workflow from 2D/3D modeling to high-end visualization. This course covers everything you need to know to create professional architectural renders from scratch.",
    modules: [
      { week: "Week 1-2", title: "Advanced SketchUp Modeling", desc: "Architecture & Interiors modeling techniques." },
      { week: "Week 3", title: "Interior Design Detailing", desc: "Furniture modeling and component management." },
      { week: "Week 4", title: "Lighting Principles", desc: "Natural and artificial lighting setups." },
      { week: "Week 5-6", title: "Rendering with Enscape & V-Ray", desc: "Mastering the two most popular render engines." },
      { week: "Week 7", title: "Post-production", desc: "Photoshop and D5 Render workflows." },
      { week: "Week 8", title: "Final Project", desc: "Portfolio review and certification." }
    ]
  },
  "modeling-only": {
    title: "Modeling Only",
    price: "KSh 20,000",
    duration: "6 Weeks",
    tools: ["SketchUp"],
    image: "/images/sketchupmodelling.png",
    description: "Focus on precision modeling for architecture and interior design. Learn how to build clean, organized models that are ready for rendering.",
    modules: [
      { week: "Week 1", title: "SketchUp Interface", desc: "Mastering the basics and shortcuts." },
      { week: "Week 2", title: "Architectural Modeling", desc: "Walls, openings, and roof structures." },
      { week: "Week 3", title: "Interior Modeling", desc: "Custom cabinetry and furniture." },
      { week: "Week 4", title: "Site Modeling", desc: "Terrain and landscaping basics." },
      { week: "Week 5", title: "Organization", desc: "Layers, tags, and outliner." },
      { week: "Week 6", title: "Documentation", desc: "Exporting for Layout and CAD." }
    ]
  },
  "rendering-only": {
    title: "Rendering Only",
    price: "KSh 10,000",
    duration: "2 Weeks",
    tools: ["Enscape", "V-Ray", "D5", "Twinmotion"],
    image: "/images/rendering.png",
    description: "Transform your models into photorealistic masterpieces. This course is for those who already know how to model but want to master visualization.",
    modules: [
      { week: "Week 1", title: "Real-time Rendering & Basics", desc: "Mastering Enscape and V-Ray fundamentals for fast, high-quality results." },
      { week: "Week 2", title: "Advanced Materials & Lighting", desc: "PBR textures, D5 Render animations, and professional lighting setups." }
    ]
  },
  "autocad": {
    title: "AutoCAD",
    price: "KSh 7,499",
    duration: "4 Weeks",
    tools: ["AutoCAD"],
    image: "/projects/urban.jpg",
    description: "Master 2D drafting and technical documentation. Ideal for creating clean, professional architectural plans and construction drawings.",
    modules: [
      { week: "Week 1", title: "AutoCAD Basics", desc: "Interface, navigation, and basic drawing tools." },
      { week: "Week 2", title: "Detailed Drafting", desc: "Layers, blocks, and precision drawing techniques." },
      { week: "Week 3", title: "Annotation & Layouts", desc: "Dimensions, text, and setting up plot layouts." },
      { week: "Week 4", title: "Project Workflow", desc: "Finalizing a complete set of architectural plans." }
    ]
  },
  "twinmotion": {
    title: "Twinmotion",
    price: "KSh 9,999",
    duration: "3 Weeks",
    tools: ["Twinmotion"],
    image: "/projects/villa.jpg",
    description: "Learn to create high-end architectural animations and real-time immersive renderings using Twinmotion.",
    modules: [
      { week: "Week 1", title: "Scene Setup", desc: "Importing models, materials, and environment settings." },
      { week: "Week 2", title: "Assets & Life", desc: "Adding vegetation, characters, and realistic lighting." },
      { week: "Week 3", title: "Animation & VR", desc: "Creating walkthrough videos and immersive experiences." }
    ]
  },
  "archicad": {
    title: "ArchiCAD",
    price: "KSh 24,999",
    duration: "8 Weeks",
    tools: ["ArchiCAD"],
    image: "/projects/kitchen.jpg",
    description: "Master BIM (Building Information Modeling) and architectural design from concept to construction documentation.",
    modules: [
      { week: "Week 1-2", title: "BIM Concepts", desc: "Modeling walls, floors, and basic structures." },
      { week: "Week 3-4", title: "Advanced Objects", desc: "Custom libraries, stairs, and roof systems." },
      { week: "Week 5-6", title: "Documentation", desc: "Generating sections, elevations, and schedules." },
      { week: "Week 7-8", title: "Advanced Workflow", desc: "Teamwork, classification, and final project." }
    ]
  }
};

export default function CourseDetail() {
  const { id } = useParams();
  const course = id ? courseData[id] : null;

  if (!course) return <div className="pt-32 text-center">Course not found.</div>;

  return (
    <div className="pt-20 pb-24">
      <div className="relative h-[50vh] overflow-hidden">
        <img src={course.image} alt={course.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-6xl text-white mb-6">{course.title}</h1>
              <div className="flex flex-wrap gap-6 text-white/80">
                <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-accent" /> {course.duration}</div>
                <div className="flex items-center gap-2"><Laptop className="w-5 h-5 text-accent" /> {course.tools.join(', ')}</div>
                <div className="text-2xl font-bold text-accent">{course.price}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl mb-6">Course Overview</h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">{course.description}</p>

            <h2 className="text-3xl mb-8">What You'll Learn</h2>
            <div className="space-y-6">
              {course.modules.map((module: any, i: number) => (
                <div key={i} className="flex gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="text-accent font-bold text-lg whitespace-nowrap">{module.week}</div>
                  <div>
                    <h4 className="text-xl mb-2">{module.title}</h4>
                    <p className="text-gray-600">{module.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-32">
              <h3 className="text-2xl mb-6">Enroll Today</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 className="w-5 h-5 text-accent" /> Weekly Live Sessions</li>
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 className="w-5 h-5 text-accent" /> Lifetime Access</li>
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 className="w-5 h-5 text-accent" /> Certificate of Completion</li>
                <li className="flex items-center gap-3 text-gray-600"><CheckCircle2 className="w-5 h-5 text-accent" /> Job Placement Support</li>
              </ul>
              <Link to={`/enroll?course=${id}`} className="w-full btn-accent flex items-center justify-center gap-2 mb-4">
                Enroll Now <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`/brochure/${id}.pdf`}
                download
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors"
              >
                Download Course Brochure <Download className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
