import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-accent/5 blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Next Intake: April 5th • Limited Slots
            </div>
            
            <h1 className="text-5xl md:text-7xl mb-6 leading-[1.1]">
              Master the Art of <span className="text-accent">3D Design</span> & Visualization
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
              Join Kenya's premium online design academy. Go from SketchUp basics to photorealistic renders with industry-standard workflows.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/enroll" className="btn-accent flex items-center gap-2 group">
                Enroll Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/courses" className="btn-outline flex items-center gap-2">
                <PlayCircle className="w-4 h-4" />
                View Courses
              </Link>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Weekly Live Q&A
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Lifetime Access
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Guided Projects
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
  src="/images/hero.png"
  alt="3D Visualization Render" 
  className="w-full h-full object-cover rounded-2xl shadow-xl"
  referrerPolicy="no-referrer"
/>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-xl max-w-[200px] hidden md:block">
              <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">Student Result</p>
              <p className="text-sm font-medium text-primary">"I went from zero to pro in just 8 weeks. Best investment ever!"</p>
              <p className="text-[10px] text-gray-400 mt-2">— Sarah K., Interior Designer</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
