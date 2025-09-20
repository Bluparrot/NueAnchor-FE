import Header from "../components/Header";
import StoryCard from "../components/UI/Card";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Story from '../assets/LandingPage/Story.svg';
import Story2 from '../assets/LandingPage/Story2.svg';
import Story3 from '../assets/LandingPage/Brands2.png'; // ADD
import Story4 from '../assets/LandingPage/Brands3.png'; // ADD
import Story5 from '../assets/LandingPage/Brands4.png'; // ADD
import Story6 from '../assets/LandingPage/Brands5.png'; // ADD

const News = () => {
	const storiesData = [
		{
			title: "From Classrooms to Careers: A Student Success Story",
			description:
				"Discover how our education programs transformed a students journey.",
			image: Story,
			slug: "from-classrooms-to-careers-a-student-success-story",
		},
		{
			title: "Empowering Special Needs Families Through Workshops",
			description:
				"Learn how our specialized programs support families and communities.",
			image: Story2,
			slug: "empowering-special-needs-families-through-workshops",
		},
		{
			title: " Innovative Leadership in Modern Education for learning ",
			description:
				"How innovative leadership is shaping the future of learning.",
			image: Story3,
			slug: "leadership-in-modern-education",
		},
		{
			title: "Inclusive Learning Environments",
			description: "Creating spaces where every student can thrive.",
			image: Story4,
			slug: "inclusive-learning-environments",
		},
		{
			title: "Technology in the Classroom",
			description: "The impact of digital tools on student engagement.",
			image: Story5,
			slug: "technology-in-the-classroom",
		},
		{
			title: "Community Partnerships for Growth",
			description:
				"How schools and communities work together for success.",
			image: Story6,
			slug: "community-partnerships-for-growth",
		},
	];

	return (
		<section className="bg-[#E0F0FF] min-h-screen">
			<Header />
			<div className="max-w-md md:max-w-3xl lg:max-w-5xl mx-auto px-4 py-8">
				{/* Heading */}
				<div className="flex flex-col items-center mb-6">
					<h1
						className="text-[#1D69B5] font-bold text-2xl md:text-4xl mb-2 text-center"
						style={{ fontFamily: "Libre Baskerville" }}
					>
						Insights
					</h1>
					<p className="text-gray-700 text-base md:text-lg text-center">
						Get The Latest Buzz. Interviews, Articles, Stories.
					</p>
				</div>
				{/* Cards */}
				<div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
					{storiesData.map((story, index) => (
						<Link
							key={index}
							to={`/news/${story.slug}`}
							className="group block focus:outline-none focus:ring-2 focus:ring-[#1D69B5] rounded-lg w-full h-full transition-transform duration-300 hover:scale-105"
							aria-label={story.title}
							style={{
								display: "flex",
								flexDirection: "column",
								height: "460px",
								minHeight: "460px",
								maxHeight: "460px",
								marginBottom: "1.5rem",
							}}
						>
							<StoryCard
								title={story.title}
								description={story.description}
								image={story.image}
								className="flex-1 flex flex-col justify-between h-full"
								titleClassName="transition-transform duration-300 group-hover:scale-110"
								imgClassName="w-full h-[220px] md:h-[260px] lg:h-[280px] object-cover rounded-xl"
							/>
						</Link>
					))}
				</div>
				<button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium text-base md:text-lg shadow hover:bg-gray-900 transition-colors duration-200 mt-8">
					Contact Us Today
				</button>
			</div>
			<Footer />
		</section>
	);
};

export default News;