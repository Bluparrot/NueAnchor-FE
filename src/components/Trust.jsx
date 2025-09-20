import React from 'react';
import { Award, Star, Rocket, Monitor } from 'lucide-react';

const Trust = () => {
  const trustData = [
    { icon: <Award className="w-6 h-6" />, title: 'Multi-industry', subtitle: 'expertise' },
    { icon: <Star className="w-6 h-6" />, title: 'Premium', subtitle: 'service delivery' },
    { icon: <Rocket className="w-6 h-6" />, title: 'Inclusive and', subtitle: 'innovative solutions' },
    { icon: <Monitor className="w-6 h-6" />, title: 'Online', subtitle: 'presence' }
  ];

  return (
		<section className="py-16 bg-white relative overflow-hidden">
			{/* MOBILE VERSION (only mobile changed) */}
			<div className="lg:hidden px-6 max-w-[430px] mx-auto">
				{/* Centered exactly as per Figma */}
				<header className="mb-10 text-center">
					<p className="text-[20px] font-Figtree font-medium text-[#1A1A1A] mb-3">
						Why Choose NeuAnchor?
					</p>
					<h2 className="font-baskerville font-bold text-[28px] leading-[1.15] text-[#1D69B5]">
						Your Trusted Partner
						<br />
						<span className="text-[#195FA6]">in Growth</span>
					</h2>
				</header>

				<ul className="flex flex-col gap-10" role="list">
					{trustData.map((item, i) => (
						<li
							key={i}
							className="flex flex-col items-center text-center"
						>
							<div className="group flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-110 hover:text-[#1D69B5] hover:bg-transparent">
								<div className="w-36 h-36 mb-4 rounded-full bg-[#1D69B5] flex items-center justify-center text-white shadow-md transition-all duration-300 group-hover:bg-white group-hover:text-[#1D69B5] border-2 border-[#1D69B5]">
									{item.icon}
								</div>
								<h3 className="font-Figtree text-[20px] font-semibold leading-tight text-[#111] transition-all duration-300 group-hover:text-[#1D69B5]">
									{item.title}
								</h3>
								<p className="font-Figtree text-[20px] font-semibold leading-tight text-[#111] transition-all duration-300 group-hover:text-[#1D69B5]">
									{item.subtitle}
								</p>
							</div>
						</li>
					))}
				</ul>
			</div>

			{/* DESKTOP VERSION (unchanged) */}
			<div className="hidden lg:block">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
						<div className="lg:col-span-5">
							<div className="bg-white p-8 lg:p-12 relative">
								<p className="text-gray-700 text-[20px] mb-2 font-medium font-Figtree">
									Why Choose NeuAnchor?
								</p>
								<h2 className="text-3xl lg:text-[34px] font-bold font-baskerville text-[#1D69B5] leading-tight">
									Your Trusted Partner
									<br />
									<span className="text-[#195FA6]">
										in Growth
									</span>
								</h2>
							</div>
						</div>

						<div className="lg:col-span-7">
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
								{trustData.map((item, index) => (
									<div
										key={index}
										className="flex flex-col items-center text-center space-y-4"
									>
										<div className="group flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-110 hover:text-[#1D69B5] hover:bg-transparent">
											<div className="w-20 h-20 lg:w-24 lg:h-24 bg-[#1D69B5] rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:bg-white group-hover:text-[#1D69B5] border-2 border-[#1D69B5]">
												{item.icon}
											</div>
											<div className="space-y-1 mt-2">
												<h3 className="font-Figtree text-[18px] lg:text-xl font-semibold text-black leading-tight transition-all duration-300 group-hover:text-[#1D69B5]">
													{item.title}
												</h3>
												<p className="font-Figtree font-semibold text-[18px] lg:text-xl text-black leading-tight transition-all duration-300 group-hover:text-[#1D69B5]">
													{item.subtitle}
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
};

export default Trust;