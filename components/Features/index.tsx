import React from "react";

const Features = () => {
  return (
    <section className="py-20 bg-[var(--white)]" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="text-[2.5rem] text-[#333] font-bold mb-4">Our Platform</h2>
          <p className="max-w-[700px] mx-auto text-[#666]">
            Impact Connect offers two powerful ways to engage with the AI safety community and accelerate your growth
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-[var(--light-gray)] rounded-[10px] p-10 transition-all duration-300 h-full hover:-translate-y-[5px] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)]">
            <div className="w-[60px] h-[60px] bg-[var(--primary-color)] rounded-full flex justify-center items-center mb-6">
              <svg 
                className="w-[30px] h-[30px] fill-white" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-[1.5rem] text-[#333] font-bold mb-4">Mentorship Platform</h3>
            <p className="mb-6">
              Connect with experienced AI safety professionals who can provide personalized guidance on your journey. 
              Our sophisticated matching algorithm pairs mentees with mentors based on expertise areas, career goals, and learning styles.
            </p>
            <p className="mb-6">
              Mentors offer guidance on research directions, career paths, and skill development across 
              areas like alignment research, interpretability, governance, and policy.
            </p>
            <p className="mb-6">
              Through structured relationships and regular feedback, youapos;ll accelerate your development 
              and gain valuable insights that aren&apos;t available through courses alone.
            </p>
            <a href="/mentorship" className="btn btn-secondary">Find a Mentor</a>
          </div>
          
          <div className="bg-[var(--light-gray)] rounded-[10px] p-10 transition-all duration-300 h-full hover:-translate-y-[5px] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)]">
            <div className="w-[60px] h-[60px] bg-[var(--primary-color)] rounded-full flex justify-center items-center mb-6">
              <svg 
                className="w-[30px] h-[30px] fill-white" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-[1.5rem] text-[#333] font-bold mb-4">Community Hub</h3>
            <p className="mb-6">
              Join a vibrant ecosystem of AI safety professionals and enthusiasts from around the world. 
              Our Community Hub provides multiple ways to engage, learn, and collaborate beyond one-on-one mentorship.
            </p>
            <p className="mb-6">
              Participate in specialized groups focused on topics like interpretability, alignment theory, and governance. 
              Join discussion forums to ask questions and share insights. 
              Attend virtual events including workshops, panels, and reading groups.
            </p>
            <p className="mb-6">
              Connect with practitioners from over 100 countries to help bridge the gap between global regions. 
              Learn how to implement AI safety knowledge in diverse cultural, economic, and technological contexts, 
              not just in the US and Europe.
            </p>
            <a href="/community" className="btn btn-secondary">Explore Communities</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
