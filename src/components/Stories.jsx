import React from 'react';
import StoryCard from './UI/Card.jsx';
import Story from '../assets/LandingPage/story7.jpg'
import Story2 from '../assets/LandingPage/story4.jpg'
const Stories = () => {
  const storiesData = [
    {
      title: 'From Classrooms to Careers: A Student Success Story',
      description: 'Discover how our education programs transformed a students journey.',
      image: Story
    },
    {
      title: 'Empowering Special Needs Families Through Workshops',
      description: 'Learn how our specialized programs support families and communities.',
      image: Story2
    }
  ];

  return (
    <section className="py-20 bg-[#FEE368]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mb-12 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 md:mb-0 w-full text-center md:text-left">
            Stories That Inspire
          </h2>
          <button className="px-6 py-2 bg-[#FEE368] text-black font-medium rounded-lg border border-black hover:bg-gray-50 transition-colors duration-200  md:w-40">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {storiesData.map((story, index) => (
            <StoryCard
              key={index}
              title={story.title}
              description={story.description}
              image={story.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;