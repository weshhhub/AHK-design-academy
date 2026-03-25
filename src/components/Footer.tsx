import { GraduationCap, Instagram, Youtube, Facebook, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-white p-2 rounded-lg">
                <GraduationCap className="text-accent w-6 h-6" />
              </div>
              <span className="text-xl font-display font-bold tracking-tighter">
                AHK <span className="text-accent">DESIGN</span> ACADEMY
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              Helping designers master 3D modeling and rendering with real-world, industry-ready skills.
            </p>
            <div className="flex gap-4">
  <a 
    href="https://instagram.com/ahk_designacademy?igsh=dXYxNWRqeDk1MzNh" 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-2 bg-white/5 rounded-full hover:bg-accent transition-colors"
  >
    <Instagram className="w-5 h-5" />
  </a>

  <a 
    href="https://youtube.com/@AHKDesignAcademy" 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-2 bg-white/5 rounded-full hover:bg-accent transition-colors"
  >
    <Youtube className="w-5 h-5" />
  </a>

  <a 
    href="https://facebook.com/share/1D9N79vDMK/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-2 bg-white/5 rounded-full hover:bg-accent transition-colors"
  >
    <Facebook className="w-5 h-5" />
  </a>
</div>
          </div>
          
          <div>
            <h4 className="text-lg mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-gray-400">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/courses" className="hover:text-accent transition-colors">Courses</Link></li>
              <li><Link to="/portfolio" className="hover:text-accent transition-colors">Student Work</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-gray-400">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent" /> info@ahkdesign.com</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /> +254 736 935 458</li>
              <li className="text-sm">Remote (Online classes available)</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} AHK Design Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
