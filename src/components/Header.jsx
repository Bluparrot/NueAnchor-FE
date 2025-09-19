import React, { useEffect, useMemo, useState } from 'react';
import logo from "../assets/LandingPage/neuanchorlogo.svg";
import { Link, useLocation } from 'react-router-dom';

// Brand previews for the mobile "Our Brands" panel
import academiesImg from "../assets/LandingPage/academies.png";
import educationImg from "../assets/LandingPage/education1.png";
import careersImg from "../assets/LandingPage/careers1.png";
import hospitalityImg from "../assets/LandingPage/hospitality1.png";
import conferencesImg from "../assets/LandingPage/conferences1.png";
import starsImg from "../assets/LandingPage/stars1.png"; // NEW
import healingImg from "../assets/LandingPage/healing1.png";
import indianaImg from "../assets/LandingPage/indiana1.png"; // NEW
// If you have a Stars image, import it and replace null below:
// import starsImg from "../assets/StarDetails/your-stars-image.png";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [activeBrandIdx, setActiveBrandIdx] = useState(0);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setBrandsOpen(false);
  }, [location.pathname]);

  // Mobile Figma-spec navigation links
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/brands", label: "Our Brands" },
    { to: "/aboutUs", label: "About Us" },
    { to: "/news", label: "Insights" },
    { to: "/contact", label: "Contact Us" }
  ];

  // Brands data for the mobile panel
  const brands = useMemo(() => ([
    {
      key: "academies",
      name: "NeuAnchor Academies",
      titleLight: "NeuAnchor",
      titleBold: "Academies",
      desc: "Learn at your own pace with globally recognized, certified online self-learning courses.",
      path: "/academies",
      img: academiesImg
    },
    {
      key: "education",
      name: "NeuAnchor Education",
      titleLight: "NeuAnchor",
      titleBold: "Education",
      desc: "Inclusive, research-driven education solutions for learners and institutions.",
      path: "/education",
      img: educationImg
    },
    {
      key: "careers",
      name: "NeuAnchor Careers",
      titleLight: "NeuAnchor",
      titleBold: "Careers",
      desc: "Grow your career with impact-first roles across our global ecosystem.",
      path: "/brands",
      img: careersImg
    },
    {
      key: "hospitality",
      name: "NeuAnchor Hospitality",
      titleLight: "NeuAnchor",
      titleBold: "Hospitality",
      desc: "Elevating accessible hospitality with training, tools, and standards.",
      path: "/hospitality",
      img: hospitalityImg
    },
    {
      key: "conferences",
      name: "NeuAnchor Conferences",
      titleLight: "NeuAnchor",
      titleBold: "Conferences",
      desc: "Curated events bringing leaders together to advance inclusion.",
      path: "/conferences",
      img: conferencesImg
    },
    {
      key: "stars",                             // NEW
      name: "NeuAnchor Stars",                  // NEW
      titleLight: "NeuAnchor",                  // NEW
      titleBold: "Stars",                       // NEW
      desc: "Showcasing outstanding talents and inspiring stories.", // NEW
      path: "/stars",                           // NEW
      img: starsImg
    },
    {
      key: "healing",
      name: "NeuAnchor Healing",
      titleLight: "NeuAnchor",
      titleBold: "Healing",
      desc: "Holistic healing experiences rooted in science and empathy.",
      path: "/healing",
      img: healingImg
    },
    {
      key: "indianag",
      name: "INDIANA G",
      titleLight: "INDIANA",
      titleBold: "G",
      desc: "Discover the world of INDIANA G.",
      path: "/indiana-g",
      img: indianaImg
    }
  ]), []);

  const activeBrand = brands[activeBrandIdx] ?? brands[0];

  return (
		<nav
			className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 py-2 px-5 md:py-3 md:px-16"
			aria-label="Primary"
		>
			{/* Bar: 60.69px tall, 20px horizontal, 8px vertical, 8px gap */}
			<div className="max-w-7xl mx-auto flex items-center justify-between min-h-[60.69px]">
				{/* Left: Logo (gap 8px) */}
				<Link to={"/"} className="flex items-center gap-2">
					<img
						src={logo}
						alt="NeuAnchor logo"
						className="h-16 w-auto object-contain" // Increased from h-11 to h-16 for a larger logo
					/>
				</Link>

				{/* Desktop Nav */}
				<div className="hidden md:flex items-center space-x-8">
					{navLinks.map((link) => (
						<Link
							key={link.to}
							to={link.to}
							className={`relative text-gray-700 font-medium transition-colors duration-200 hover:text-blue-600
                ${location.pathname === link.to ? "text-blue-600" : ""}
              `}
						>
							{link.label}
							{location.pathname === link.to && (
								<span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 rounded"></span>
							)}
						</Link>
					))}
				</div>

				{/* Mobile Menu Button */}
				<div className="md:hidden">
					<button
						type="button"
						className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
						aria-label={isOpen ? "Close menu" : "Open menu"}
						aria-expanded={isOpen}
						aria-controls="mobile-menu"
						onClick={() => setIsOpen((v) => !v)}
					>
						{isOpen ? (
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu (collapsible) */}
			<div
				id="mobile-menu"
				className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
					isOpen ? "max-h-[85vh]" : "max-h-0"
				}`}
			>
				<div className="px-5 py-4 border-t border-gray-100 bg-white">
					<div className="flex flex-col gap-3">
						{navLinks.map((link) => {
							const active = location.pathname === link.to;

							// Special handling for "Our Brands" in mobile:
							if (link.label === "Our Brands") {
								return (
									<div key="our-brands">
										<button
											type="button"
											onClick={() =>
												setBrandsOpen((o) => !o)
											}
											aria-expanded={brandsOpen}
											className={`w-full flex items-center justify-between px-2 py-2 rounded text-base font-medium transition-colors duration-200
                        ${
							brandsOpen
								? "text-blue-600 bg-blue-50"
								: "text-gray-700 hover:text-blue-600"
						}
                      `}
										>
											<span>Our Brands</span>
											<svg
												className={`w-5 h-5 transition-transform ${
													brandsOpen
														? "rotate-180 text-blue-600"
														: "text-gray-500"
												}`}
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
													clipRule="evenodd"
												/>
											</svg>
										</button>

										{/* Our Brands panel (mobile) */}
										{brandsOpen && (
											<div className="mt-3 rounded-2xl border border-gray-200 p-3">
												{/* Two-column layout like the Figma card (fits 375px) */}
												<div className="grid grid-cols-2 gap-3">
													{/* Left list (scrollable to show all brands incl. INDIANA G) */}
													<div className="flex flex-col gap-1 max-h-[240px] sm:max-h-[260px] overflow-y-auto pr-1 scrollbar-hide">
														{brands.map((b, i) => {
															const selected =
																i ===
																activeBrandIdx;
															return (
																<button
																	key={b.key}
																	type="button"
																	onClick={() =>
																		setActiveBrandIdx(
																			i
																		)
																	}
																	className={[
																		"text-left px-2 py-2 rounded-md transition-colors",
																		selected
																			? "text-blue-600 bg-blue-50 font-medium"
																			: "text-gray-800 hover:bg-gray-50",
																	].join(" ")}
																	aria-current={
																		selected
																			? "true"
																			: undefined
																	}
																>
																	{b.name}
																</button>
															);
														})}
													</div>

													{/* Right preview card */}
													<div className="bg-blue-50 rounded-xl p-3">
														<div className="bg-white rounded-xl p-3 shadow-sm border border-blue-100 h-[240px] sm:h-[260px] flex flex-col overflow-hidden">
															<h4 className="text-[13px] leading-4 text-gray-900">
																<span className="font-normal">
																	{
																		activeBrand.titleLight
																	}{" "}
																</span>
																<span className="font-semibold">
																	{
																		activeBrand.titleBold
																	}
																</span>
															</h4>

															<p
																className="mt-1 text-[11px] leading-4 text-gray-600"
																style={{
																	display:
																		"-webkit-box",
																	WebkitLineClamp: 3,
																	WebkitBoxOrient:
																		"vertical",
																	overflow:
																		"hidden",
																}}
															>
																{
																	activeBrand.desc
																}
															</p>

															{/* Image (optional, slightly smaller to fit comfortably) */}
															{activeBrand.img && (
																<div className="mt-2 rounded-xl overflow-hidden border border-gray-100 h-16 sm:h-20 flex-none">
																	<img
																		src={
																			activeBrand.img
																		}
																		alt={
																			activeBrand.name
																		}
																		className="w-full h-full object-contain bg-white"
																		loading="lazy"
																	/>
																</div>
															)}

															{/* Button pinned to bottom */}
															<Link
																to={
																	activeBrand.path
																}
																onClick={() =>
																	setIsOpen(
																		false
																	)
																}
																className="mt-auto inline-flex items-center justify-center text-sm font-medium text-blue-600 hover:text-blue-700"
															>
																Visit Now
																<svg
																	className="ml-1 w-4 h-4"
																	viewBox="0 0 20 20"
																	fill="currentColor"
																	aria-hidden="true"
																>
																	<path
																		fillRule="evenodd"
																		d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 01-.042 1.457l-5 4.5a1 1 0 11-1.33-1.494L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
																		clipRule="evenodd"
																	/>
																</svg>
															</Link>
														</div>
													</div>
												</div>
											</div>
										)}
									</div>
								);
							}

							// Default mobile link items
							return (
								<Link
									key={link.to}
									to={link.to}
									className={`px-2 py-2 rounded text-base font-medium transition-colors duration-200
                    ${
						active
							? "text-blue-600 bg-blue-50"
							: "text-gray-700 hover:text-blue-600"
					}
                  `}
								>
									{link.label}
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</nav>
  );
};

export default Header;