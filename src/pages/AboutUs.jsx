import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamMemberCard from '../components/AboutUs/TeamMemberCard';
import CTA from '../components/CTA';
import profile from '../assets/LandingPage/profile.svg';
import Hero from '../assets/AboutUs/Hero.svg';
import Story from '../assets/AboutUs/Story.svg';
import mission from '../assets/AboutUs/mission.svg';
import member2 from '../assets/team/member2.jpg';
import member3 from '../assets/team/member3.jpg';

const AboutUs = () => {
  const teamMembers = [
    { id: 1, name: "Ms. Shuchi Chopra", designation: "Chief Executive Officer", imageUrl: profile, isActive: false },
    { id: 2, name: "Mr. Nitin Kalra", designation: "Chief Advisor- Marketing", imageUrl: member2, isActive: false },
    { id: 3, name: "Mr. Ranveer Singh Saini", designation: "Chief Inspirational Officer", imageUrl: member3, isActive: false },
    { id: 4, name: "Mr. Ranvijay Singh Saini", designation: "Head of Internship Recruitment", imageUrl: profile, isActive: false },
    { id: 5, name: "Mr. Achal Jain", designation: "Chief Advisor- IT", imageUrl: profile, isActive: false }
  ];

  return (
    <section>
      <Header />
      {/* MOBILE VERSION */}
      <div
        className="block md:hidden w-full bg-white"
        style={{
          width: "100vw", // Changed from 375px to full viewport width
          minHeight: "1150.69px",
          paddingTop: "40px",
          paddingRight: "0px", // Remove side gaps
          paddingBottom: "40px",
          paddingLeft: "0px", // Remove side gaps
          gap: "28px",
          opacity: 1,
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {/* Hero Section */}
        <div style={{ marginBottom: "28px", textAlign: "left", padding: "0 20px" }}>
          <h1
            className="font-bold text-black leading-tight"
            style={{
              fontFamily: 'Libre Baskerville',
              fontSize: "32px",
              lineHeight: "120%",
              marginBottom: "20px",
            }}
          >
            NeuAnchor –<br />
            Building Inclusive,<br />
            Innovative,<br />
            <span style={{ color: "#175491" }}>Impactful Futures</span>
          </h1>
          <p
            className="font-medium text-black"
            style={{
              fontFamily: 'Figtree',
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "140%",
              marginBottom: "20px",
            }}
          >
            A family of brands delivering solutions in education, careers, healthcare, events, hospitality, and gifting.
          </p>
          <img
            src={Hero}
            alt="Happy family"
            style={{
              width: "100vw", // Full width
              maxWidth: "100%",
              height: "253px",
              borderRadius: "18px",
              objectFit: "cover",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              opacity: 1,
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>

        {/* GAP between hero and story */}
        <div style={{ height: "28px" }} />

        {/* Our Story Section */}
        <div style={{ marginBottom: "28px", textAlign: "center", padding: "0 20px" }}>
          <p
            className="text-base font-semibold text-black mb-4"
            style={{
              fontFamily: 'Figtree',
              fontSize: "18px",
              marginBottom: "8px",
              textAlign: "center",
            }}
          >
            Who We Are
          </p>
          <h2
            className="text-2xl font-bold"
            style={{
              fontFamily: 'Libre Baskerville',
              fontSize: "26px",
              marginBottom: "16px",
              color: "#1D69B5",
              textAlign: "center",
            }}
          >
            Our Story
          </h2>
          <img
            src={Story}
            alt="Professional woman smiling"
            style={{
              width: "100vw", // Full width
              maxWidth: "100%",
              height: "203px",
              objectFit: "cover",
              borderRadius: "18px",
              marginBottom: "34px",
              boxShadow: "0 2px 8px rgba(230, 216, 216, 0.95)",
              opacity: 1,
              display: "block",
              margin: "0 auto",
            }}
          />
          <div className="flex flex-col gap-4" style={{ textAlign: "left" }}>
            <p className="text-base text-gray-700 leading-relaxed" style={{ fontSize: "16px" }}>
              NeuAnchor was founded with a vision to bridge gaps across education, careers, special needs, and personal growth. With expertise spanning multiple industries, we create solutions that are inclusive, innovative, and future-ready.
            </p>
            <p className="text-base text-gray-700 leading-relaxed" style={{ fontSize: "16px" }}>
              NeuAnchor was founded with a vision to bridge gaps across education, careers, special needs, and personal growth. With expertise spanning multiple industries, we create solutions that are inclusive, innovative, and future-ready.
            </p>
            <p className="text-base text-gray-700 leading-relaxed" style={{ fontSize: "16px" }}>
              NeuAnchor was founded with a vision to bridge gaps across education, careers, special needs, and personal growth. With expertise spanning multiple industries, we create solutions that are inclusive, innovative, and future-ready.
            </p>
            <p className="text-base text-gray-700 leading-relaxed" style={{ fontSize: "16px" }}>
              NeuAnchor was founded with a vision to bridge gaps across education, careers, special needs, and personal growth. With expertise spanning multiple industries, we create solutions that are inclusive, innovative, and future-ready.
            </p>
          </div>
        </div>

        {/* GAP between story and mission */}
        <div style={{ height: "28px" }} />

        {/* Mission Card */}
        <div
          style={{
            width: "100vw", // Full width
            maxWidth: "100%",
            height: "210px",
            background: "#1D69B5",
            borderRadius: "20px",
            padding: "28px 20px",
            marginBottom: "28px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              fontFamily: 'Libre Baskerville',
              fontWeight: 700,
              fontSize: "28px",
              color: "#fff",
              marginBottom: "16px",
            }}
          >
            Mission
          </h2>
          <p
            style={{
              fontFamily: 'Figtree',
              fontWeight: 400,
              fontSize: "16px",
              color: "#fff",
              lineHeight: "140%",
            }}
          >
            To empower individuals, families, and organizations with transformative solutions across education, careers, wellness, and innovation.
          </p>
        </div>

        {/* GAP between mission and image */}
        <div style={{ height: "28px" }} />

        {/* Mission Image */}
        <div
          style={{
            width: "100vw", // Full width
            maxWidth: "100%",
            height: "210px",
            borderRadius: "20px",
            overflow: "hidden",
            marginBottom: "28px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <img
            src={mission}
            alt="Group collaborating"
            style={{
              width: "100vw", // Full width
              maxWidth: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20px",
              opacity: 1,
            }}
          />
        </div>

        {/* GAP between image and vision */}
        <div style={{ height: "28px" }} />

        {/* Vision Card */}
        <div
          style={{
            width: "100vw", // Full width
            maxWidth: "100%",
            height: "210px",
            background: "#17B5A1",
            borderRadius: "20px",
            padding: "28px 20px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              fontFamily: 'Libre Baskerville',
              fontWeight: 700,
              fontSize: "28px",
              color: "#fff",
              marginBottom: "16px",
            }}
          >
            Vision
          </h2>
          <p
            style={{
              fontFamily: 'Figtree',
              fontWeight: 400,
              fontSize: "16px",
              color: "#fff",
              lineHeight: "140%",
            }}
          >
            To become India's most trusted ecosystem for inclusive growth and impactful learning.
          </p>
        </div>
        {/* Team Members */}
        <div className="text-center mb-6" style={{ marginTop: "28px", padding: "0 20px" }}>
          <h2
            className="text-xl font-bold mb-6"
            style={{
              fontFamily: 'Libre Baskerville',
              color: "#1D69B5",
              fontSize: "26px",
              marginBottom: "24px",
            }}
          >
            Meet Our Team Members
          </h2>
          <div className="flex flex-col gap-8 items-center">
            {teamMembers.map((member, idx) => (
              <div key={member.id} className="flex flex-col items-center">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className={`rounded-full object-cover mb-2 transition-all duration-300 ${idx === 0 ? "w-[120px] h-[120px] border-4 border-[#1D69B5]" : "w-[110px] h-[110px] border-0 grayscale hover:grayscale-0"}`}
                  style={idx === 0 ? { boxShadow: "0 2px 8px rgba(29,105,181,0.15)" } : {}}
                />
                <div
                  className="font-semibold text-xs mb-1"
                  style={{
                    color: "#1D69B5",
                    fontFamily: 'Figtree',
                    letterSpacing: "0.5px",
                  }}
                >
                  {member.designation}
                </div>
                <div className="font-bold text-base" style={{ fontFamily: 'Figtree', color: "#222" }}>
                  {member.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* CTA */}
        <div className="w-full flex flex-col items-center mb-8" style={{ padding: "0 20px" }}>
          <div
            className="font-bold text-[#7D3C98] mb-3"
            style={{ fontFamily: 'Figtree', fontSize: "26px" }}
          >
            Ready to work with us?
          </div>
          <button
            className="bg-[#222] text-white px-6 py-2 rounded-[6px] font-semibold text-[14px]"
            style={{ fontFamily: 'Figtree' }}
          >
            Contact Us Today
          </button>
        </div>
        {/* Footer - mobile view width larger */}
        <div
          className="w-full"
          style={{
            width: "100vw", // Full width
            maxWidth: "100%",
            margin: "0 auto",
          }}
        >
          <Footer />
        </div>
      </div>
      {/* DESKTOP VERSION */}
      <div className="hidden md:block">
        <div className="mr-16 ml-16 mt-12">
          {/* Main heading */}
          <h1 className="text-[46px] font-bold text-blank mb-6 leading-16"
                  style={{fontFamily: 'Libre Baskerville'}}
          >
            NeuAnchor – Building Inclusive, Innovative,{' '}
            <span className="text-[#175491] leading-1" style={{fontFamily: 'Libre Baskerville'}}>Impactful Futures</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl font-medium text-black mb-12 max-w-7xl"
          style={{fontFamily: 'Figtree', fontWeight:500}}
          >
            A family of brands delivering solutions in education, careers, healthcare, events, hospitality, and gifting.
          </p>
          
          {/* Hero image */}
          <div className="w-full">
            <img
              src={Hero}
              alt="Happy family - father, mother and young child smiling together"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          <div className="max-w-6xl py-16 ">
            <div className="grid lg:grid-cols-3 gap-x-8 items-start">
                {/* Left side - Content (takes 2 columns) */}
                <div className="space-y-2 lg:col-span-1 ">
                  <div>
                      <p className="text-sm font-semibold font-Figtree text-black mb-2">
                      Who We Are
                      </p>
                      <h2 className="text-3xl font-bold font-baskerville text-[#1D69B5] mb-6">
                      Our Story
                      </h2>
                  </div>
                  <div className="relative ">
                      <img
                      src={Story}
                      alt="Professional woman smiling"
                      className="w-full h-64 rounded-lg shadow-md object-cover"
                      />
                  </div>
                
                
                </div>

                
                {/* Right side - Image (takes 1 column) */}
                <div className="lg:col-span-2">
                
                <div className="space-y-4 ml-12 text-gray-700 leading-relaxed">
                    <p>
                    NetAnchor was founded with a vision to bridge gaps across education, careers, 
                    special needs, and personal growth. With expertise spanning multiple industries, we 
                    create solutions that are inclusive, innovative, and future-ready.
                    </p>
                    
                    <p>
                    NetAnchor was founded with a vision to bridge gaps across education, careers, 
                    special needs, and personal growth. With expertise spanning multiple industries, we 
                    create solutions that are inclusive, innovative, and future-ready.
                    </p>
                    
                    <p>
                    NetAnchor was founded with a vision to bridge gaps across education, careers, 
                    special needs, and personal growth. With expertise spanning multiple industries, we 
                    create solutions that are inclusive, innovative, and future-ready.
                    </p>
                    
                    <p>
                    NetAnchor was founded with a vision to bridge gaps across education, careers, 
                    special needs, and personal growth. With expertise spanning multiple industries, we 
                    create solutions that are inclusive, innovative, and future-ready.
                    </p>
                </div>
                </div>
            </div>
            </div>
          
            <div className="py-20 bg-[#EBF5FF] from-blue-50/80 via-gray-50 to-blue-100/60 -mx-16 px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:h-[500px] items-center">
          
          {/* Mission Card - Top Left */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border border-blue-500/20 lg:self-start">
            <h2 className="text-4xl font-bold mb-8 tracking-tight font-baskerville">Mission</h2>
            <p className="text-blue-50/90 leading-relaxed text-lg font-light font-Figtree">
              To empower individuals, families, and organizations with transformative solutions across education, careers, wellness, and innovation.
            </p>
          </div>

          {/* Center Image - Spans full height */}
          <div className="relative lg:row-span-1 flex items-center justify-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-full w-full hover:scale-105 transition-all duration-300 border-4 border-white/50 lg:h-[500px]">
              <img 
                src={mission}
                alt="Group of young people collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Vision Card - Bottom Right */}
          <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-10 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border border-teal-500/20 lg:self-end">
            <h2 className="text-4xl font-bold mb-8 tracking-tight font-baskerville">Vision</h2>
            <p className="text-teal-50/90 leading-relaxed text-lg font-light font-figtree">
              To become India's most trusted ecosystem for inclusive growth and impactful learning.
            </p>
          </div>

        </div>
      </div>
    </div>
            <div className="py-16 px-4 max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1D69B5]"
                    style={{fontFamily: 'Libre Baskerville'}}>
                    Meet Our Team Members
                    </h2>
                </div>

                {/* Team Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
                        {teamMembers.map((member) => (
                        <TeamMemberCard
                            key={member.id}
                            imageUrl={member.imageUrl}
                            name={member.name}
                            designation={member.designation}
                            isActive={member.isActive}
                        />
                        ))}
                    </div>
                </div>

        </div>
        <CTA />
        <Footer />
      </div>
    </section>
  );
};

export default AboutUs;