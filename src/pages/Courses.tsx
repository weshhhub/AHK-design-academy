import CourseCard from '../components/CourseCard';

const allCourses = [
  {
    id: "full-program",
    title: "Full Program",
    price: "KSh 30,000",
    duration: "8 Weeks",
    tools: ["SketchUp", "Enscape", "V-Ray", "D5"],
    image: "/images/full-program.jpg",
    description: "The ultimate workflow from 2D/3D modeling to high-end visualization."
  },
  {
    id: "modeling-only",
    title: "Modeling Only",
    price: "KSh 20,000",
    duration: "6 Weeks",
    tools: ["SketchUp"],
    image: "/images/sketchupmodelling.png",
    description: "Focus on precision modeling for architecture and interior design."
  },
  {
    id: "rendering-only",
    title: "Rendering Only",
    price: "KSh 10,000",
    duration: "6 Weeks",
    tools: ["Enscape", "V-Ray", "D5", "Twinmotion"],
    image: "/images/rendering.png",
    description: "Transform your models into photorealistic masterpieces."
  }
];

export default function Courses() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl mb-4">Our Training Programs</h1>
          <p className="text-lg text-gray-600">
            From foundational modeling to advanced photorealistic rendering. Choose the course that fits your current skill level and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {allCourses.map((course) => (
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
    </div>
  );
}
