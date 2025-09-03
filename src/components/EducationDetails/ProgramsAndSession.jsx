import React from 'react';
import Card from '../UI/SessionCard';
import Button from '../UI/Button';
import SessionCard from '../UI/SessionCard';


const ProgramsSection = () => {
  const programs = [
    {
      id: 1,
      title: "Complete Setup Solutions",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: ""
    },
    {
      id: 2,
      title: "Advisory/mentorship for school management.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: ""
    },
    {
      id: 3,
      title: "Workshops for teachers, students, and admin.",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: ""
    }
  ];

  return (
    <section className="py-16 px-16 ">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[34px] font-baskerville text-title font-bold  mb-4">
            Ways We Support You
          </h2>
          <div className="w-30 h-[6px] bg-title  mx-auto rounded-full mb-8"></div>
        </div>

        {/* Cards Grid */}
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

        {/* Call to Action Button */}
        <div className="text-center">
          <Button variant="secondary" size="md">
              Visit Site
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;