import React from 'react';
import Card from '../UI/SessionCard';
import Button from '../UI/Button';
import SessionCard from '../UI/SessionCard';


const ProgramsSection = () => {
  const programs = [
    {
      id: 1,
      title: "Corporate Learning",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Leadership, Digital Transformation, Future Skills."
    },
    {
      id: 2,
      title: "Academic Enrichment",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Advanced subjects, professional certifications for schools/universities."
    },
    {
      id: 3,
      title: "Elite Household Programs",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Lifelong learning for parents, teens, and family enrichment."
    }
  ];

  return (
    <section className="py-16 px-16 ">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Core Learning Tracks
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program) => (
            <SessionCard
              key={program.id}
              image={program.image}
              title={program.title}
              description={program.description}
            />
          ))}
        </div>


        <div className="text-center">
          {/* <Button variant="secondary" size="md">
              Visit Site
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;