import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <GraduationCap className="text-accent w-6 h-6" />
            </div>
            <span className="text-xl font-display font-bold tracking-tighter">
              AHK <span className="text-accent">DESIGN</span> ACADEMY
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium hover:text-accent transition-colors">Home</Link>
            <Link to="/courses" className="text-sm font-medium hover:text-accent transition-colors">Courses</Link>
            <Link to="/portfolio" className="text-sm font-medium hover:text-accent transition-colors">Student Work</Link>
            <Link to="/about" className="text-sm font-medium hover:text-accent transition-colors">About</Link>
            <Link to="/enroll" className="btn-accent text-sm">Enroll Now</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t p-4 flex flex-col gap-4 shadow-lg"
        >
          <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-medium">Home</Link>
          <Link to="/courses" onClick={() => setIsOpen(false)} className="text-lg font-medium">Courses</Link>
          <Link to="/portfolio" onClick={() => setIsOpen(false)} className="text-lg font-medium">Student Work</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium">About</Link>
          <Link to="/enroll" onClick={() => setIsOpen(false)} className="btn-accent text-center">Enroll Now</Link>
        </motion.div>
      )}
    </nav>
  );
}
