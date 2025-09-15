import Header from "../components/Header";
import StoryCard from "../components/UI/Card";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { Link } from "react-router-dom"; // ADD
import Story from '../assets/LandingPage/Story.svg'
import Story2 from '../assets/LandingPage/Story2.svg'

const News = () => {
  const storiesData = [
    {
      title: 'From Classrooms to Careers: A Student Success Story',
      description: 'Discover how our education programs transformed a students journey.',
      image: Story,
      slug: 'from-classrooms-to-careers-a-student-success-story', // ADD
    },
    {
      title: 'Empowering Special Needs Families Through Workshops',
      description: 'Learn how our specialized programs support families and communities.',
      image: Story2,
      slug: 'empowering-special-needs-families-through-workshops',
    },
    {
      title: 'From Classrooms to Careers: A Student Success Story',
      description: 'Discover how our education programs transformed a students journey.',
      image: Story,
      slug: 'from-classrooms-to-careers-a-student-success-story-2',
    },
    {
      title: 'Empowering Special Needs Families Through Workshops',
      description: 'Learn how our specialized programs support families and communities.',
      image: Story2,
      slug: 'empowering-special-needs-families-through-workshops-2',
    },
  ];

  return (
    <section className="bg-[#E0F0FF]">
      <Header />
      {/* Main heading */}
      <div className="mr-16 ml-16">
        <div className="flex flex-col justify-center items-center mt-8">
          <div
            className="text-4xl lg:text-4xl font-bold text-[#1D69B5] leading-tight"
            style={{ fontFamily: 'Libre Baskerville' }}
          >
            News & Insights
          </div>
          <div className="mt-2 text-black text-2xl">
            Get The Latest Buzz. Interviews, Articles, Stories​.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {storiesData.map((story, index) => (
            <Link
              key={index}
              to={`/news/${story.slug}`}             // CLICK -> DETAIL PAGE
              className="block focus:outline-none focus:ring-2 focus:ring-[#1D69B5] rounded-lg"
              aria-label={story.title}
            >
              <StoryCard
                title={story.title}
                description={story.description}
                image={story.image}
              />
            </Link>
          ))}
        </div>

        <CTA />
      </div>
      <Footer />
    </section>
  );
};

export default News;