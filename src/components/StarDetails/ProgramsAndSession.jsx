import React from 'react';
import Card from '../UI/SessionCard';
import Button from '../UI/Button';
import SessionCard from '../UI/SessionCard';


const ProgramsSection = () => {
  const programs = [
    {
      id: 1,
      title: "Corporates & Institutions",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Premium curated gifts for clients, employees, and partners."
    },
    {
      id: 2,
      title: "Households & Families",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Personalized sets for festivals, celebrations, and milestones."
    },
    {
      id: 3,
      title: "Individuals & Friends",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Elegant, ready-to-gift collections that make every gesture thoughtful."
    }
  ];

  return (
    <section className="py-16 px-16 ">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-baskerville text-title mb-4">
            Made for Every Gifting Moment
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
          <Button variant="secondary" size="md">
              Visit Site
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;