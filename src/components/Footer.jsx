import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import footer from '../assets/LandingPage/onlylogo.svg';

/* Link data */
const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'News & Insights', href: '#news' },
  { name: 'Contact Us', href: '#contact' },
];

const brandLinks = [
  { name: 'NeuAnchor Academies', href: '#' },
  { name: 'NeuAnchor Conferences', href: '#' },
  { name: 'NeuAnchor Education', href: '#' },
  { name: 'NeuAnchor Stars', href: '#' },
  { name: 'NeuAnchor Careers', href: '#' },
  { name: 'NeuAnchor Healing', href: '#' },
  { name: 'NeuAnchor Hospitality', href: '#' },
  { name: 'INDIANA G', href: '#' },
];

const handleNavClick = (e, targetId) => {
  if (targetId?.startsWith('#')) {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const headerHeight = 80;
      const y = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
};

const Footer = () => {
  return (
		<footer className="bg-[#195FA6] text-white">
			{/* MOBILE — exact Figma layout */}
			<div className="lg:hidden px-6 py-10">
				{/* Brand block */}
				<div className="flex flex-col items-center">
					<img
						src={footer}
						alt="NeuAnchor logo"
						className="w-24 h-24 mb-2"
					/>
					<p className="text-3xl font-bold leading-tight">
						NeuAnchor
					</p>
					<p className="text-xs mt-1 opacity-90">
						Anchoring Change, Navigating Growth
					</p>
				</div>

				{/* Quick Links */}
				<div className="mt-8 text-center">
					<h4 className="font-Figtree font-semibold mb-4">
						Quick Links
					</h4>
					<nav aria-label="Quick links">
						<ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
							{quickLinks.map((l) => (
								<li key={l.name}>
									<a
										href={l.href}
										onClick={(e) =>
											handleNavClick(e, l.href)
										}
										className="text-white/90 hover:text-white no-underline"
									>
										{l.name}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>

				{/* Our Brands */}
				<div className="mt-10 text-center">
					<h4 className="font-Figtree font-semibold mb-4">
						Our Brands
					</h4>
					{/* Make each brand stay on a single line (no wrapping) exactly like Figma */}
					<div className="grid grid-cols-2 gap-x-10 gap-y-3 max-w-[360px] mx-auto text-left">
						{brandLinks.map((l) => (
							<a
								key={l.name}
								href={l.href}
								className="block whitespace-nowrap text-white/90 hover:text-white no-underline text-[12.5px] leading-5"
							>
								{l.name}
							</a>
						))}
					</div>
				</div>

				{/* Divider */}
				<hr className="border-white/20 my-8" />

				{/* Copyright + Social */}
				<div className="flex flex-col items-center gap-5">
					<p className="text-center text-xs text-white/90">
						Copyright © NeuAnchor 2025 | Designed and Developed by
						<br />
						Bluparrot Ventures
					</p>
					<div className="flex items-center gap-5">
						<a
							href="#"
							aria-label="Facebook"
							className="w-7 h-7 rounded-full bg-white text-[#195FA6] flex items-center justify-center no-underline"
						>
							<Facebook className="w-4 h-4" />
						</a>
						<a
							href="#"
							aria-label="Instagram"
							className="w-7 h-7 rounded-full bg-white text-[#195FA6] flex items-center justify-center no-underline"
						>
							{/* Using Twitter icon as placeholder if Instagram not available in lucide-react */}
							<Twitter className="w-4 h-4" />
						</a>
						<a
							href="#"
							aria-label="LinkedIn"
							className="w-7 h-7 rounded-full bg-white text-[#195FA6] flex items-center justify-center no-underline"
						>
							<Linkedin className="w-4 h-4" />
						</a>
					</div>
				</div>
			</div>

			{/* DESKTOP — keep your current layout unchanged */}
			<div className="hidden lg:block py-16 px-24">
				<div className="max-w-7xl">
					<div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
						<div className="lg:col-span-1 flex flex-col items-center">
							<img
								src={footer}
								alt="NeuAnchor Symbol"
								className="h-46 w-46 mb-1"
							/>
							<span className="text-white text-4xl font-bold font-sans mt-0.5">
								NeuAnchor
							</span>
							<span className="text-white text-xs font-normal font-sans mt-0 text-center block">
								Anchoring Change, Navigating Growth
							</span>
						</div>
						<div className="lg:col-start-2 pl-20 lg:col-span-4 ">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-16">
								{/* Quick Links */}
								<div>
									<h4 className="text-white font-Figtree font-semibold mb-4">
										Quick Links
									</h4>
									<ul className="space-y-2 list-none p-0">
										{quickLinks.map((l) => (
											<li key={l.name}>
												<a
													href={l.href}
													onClick={(e) =>
														handleNavClick(
															e,
															l.href
														)
													}
													className="text-gray-300 hover:text-white transition-colors no-underline"
												>
													{l.name}
												</a>
											</li>
										))}
									</ul>
								</div>

								{/* Our Brands left column */}
								<div>
									<h4 className="text-white font-Figtree font-semibold mb-4">
										Our Brands
									</h4>
									<ul className="space-y-2 list-none p-0">
										{brandLinks.slice(0, 4).map((l) => (
											<li key={l.name}>
												<a
													href={l.href}
													className="text-gray-300 hover:text-white no-underline"
												>
													{l.name}
												</a>
											</li>
										))}
									</ul>
								</div>

								{/* Our Brands right column */}
								<div>
									<h4 className="opacity-0 select-none mb-4">
										.
									</h4>
									<ul className="space-y-2 list-none p-0">
										{brandLinks.slice(4).map((l) => (
											<li key={l.name}>
												<a
													href={l.href}
													className="text-gray-300 hover:text-white no-underline"
												>
													{l.name}
												</a>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="border-t border-white/20 pt-4 -px-24 flex flex-col md:flex-row justify-between items-center">
						<p className="text-gray-300 mb-4 md:mb-0">
							&copy; Copyright © 2025 Bluparrot Ventures
						</p>
						<div className="flex gap-4">
							<a
								href="#"
								className="w-6 h-6 rounded-full flex items-center justify-center bg-white text-blue-800 transition-all duration-300 hover:-translate-y-1 no-underline"
							>
								<Facebook className="w-3 h-3" />
							</a>
							<a
								href="#"
								className="w-6 h-6 rounded-full flex items-center justify-center bg-white text-blue-800 transition-all duration-300 hover:-translate-y-1 no-underline"
							>
								<Twitter className="w-3 h-3" />
							</a>
							<a
								href="#"
								className="w-6 h-6 rounded-full flex items-center justify-center bg-white text-blue-800 transition-all duration-300 hover:-translate-y-1 no-underline"
							>
								<Linkedin className="w-3 h-3" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
  );
};

export default Footer;
