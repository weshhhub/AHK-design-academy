import { motion } from 'motion/react';
import { Clock, Laptop, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  id: string;
  title: string;
  price: string;
  duration: string;
  tools: string[];
  image: string;
  description: string;
  key?: string | number;
}

export default function CourseCard({ id, title, price, duration, tools, image, description }: CourseCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all"
    >
      <Link to={`/courses/${id}`}>
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
            {price}
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <Link to={`/courses/${id}`}>
          <h3 className="text-xl mb-2 hover:text-accent transition-colors">{title}</h3>
        </Link>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Clock className="w-4 h-4 text-accent" />
            {duration}
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Laptop className="w-4 h-4 text-accent" />
            {tools.join(', ')}
          </div>
        </div>
        
        <div className="flex gap-2">
          <Link 
            to={`/courses/${id}`}
            className="flex-grow btn-outline flex items-center justify-center gap-2 py-2 text-sm"
          >
            Details
          </Link>
          <Link 
            to="/enroll" 
            className="flex-grow btn-accent flex items-center justify-center gap-2 py-2 text-sm"
          >
            Enroll
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
