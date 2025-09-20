import React from 'react';

const StoryCard = ({
	title,
	image,
	className = "",
	titleClassName = "",
	imgClassName = "",
}) => {
	return (
		<div
			className={`bg-white p-4 overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-[#FFF2B5] ${className}`}
		>
			<div className="w-full h-82">
				<img
					src={image}
					alt={title}
					className={`w-full h-full object-cover rounded-[8px] ${imgClassName}`}
				/>
			</div>
			<div className="pt-4">
				<h3
					className={`text-[24px] font-semibold text-black leading-tight underline decoration-1 mb-2 ${titleClassName}`}
					style={{ fontFamily: "Figtree, system-ui, sans-serif" }}
				>
					{title}
				</h3>
			</div>
		</div>
	);
};

export default StoryCard;