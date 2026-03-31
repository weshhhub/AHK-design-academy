import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Student Work", path: "/portfolio" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
           <img src="/images/1.png" className="h-10 w-auto" />
            <span className="text-xl font-bold tracking-tight">
              AHK <span className="text-accent">DESIGN</span> ACADEMY
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/enroll"
              className="bg-accent text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="md:hidden bg-white border-t p-4 flex flex-col gap-4 shadow-lg"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-accent"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/enroll"
              onClick={() => setIsOpen(false)}
              className="bg-accent text-white text-center py-3 rounded-xl font-medium"
            >
              Enroll Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}