import React, { ReactNode } from "react";

interface CourseCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="bg-[var(--light-gray)] rounded-[10px] overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-[5px] flex flex-col">
      <div className="w-full h-[180px] bg-[var(--mid-gray)] flex items-center justify-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="64" 
          height="64" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="var(--primary-color)" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {icon}
        </svg>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-[1.2rem] mb-2">{title}</h3>
        <p className="text-[0.9rem] text-[#666] mb-6 flex-grow">
          {description}
        </p>
        <a href={link} className="btn btn-secondary mt-auto">Learn More</a>
      </div>
    </div>
  );
};

interface CourseData {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
}

const Courses: React.FC = () => {
  const courseData: CourseData[] = [
    {
      icon: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></>,
      title: "AI Alignment Fast-Track",
      description: "A comprehensive introduction to the technical aspects of aligning advanced AI systems with human values and intentions.",
      link: "https://aisafetyfundamentals.com/alignment-fast-track/"
    },
    {
      icon: <><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></>,
      title: "Governance Fast-Track",
      description: "Explore approaches to AI governance, policy development, and institutional design for managing AI risks.",
      link: "https://aisafetyfundamentals.com/governance-fast-track/"
    },
    {
      icon: <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></>,
      title: "Intro to Transformative AI",
      description: "A foundational course on the potential of advanced AI systems to transform society and the associated risks and opportunities.",
      link: "https://aisafetyfundamentals.com/intro-to-tai/"
    },
    {
      icon: <><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></>,
      title: "Economics of Transformative AI",
      description: "Understand the economic implications of advanced AI, including labor markets, inequality, and growth dynamics.",
      link: "https://aisafetyfundamentals.com/economics-of-tai/"
    }
  ];

  return (
    <section className="py-20 bg-[var(--white)]" id="courses">
      <div className="container">
        <div className="section-header">
          <h2 className="text-[2.5rem] text-[#333] font-bold mb-4">Educational Courses</h2>
          <p className="max-w-[700px] mx-auto text-[#666]">
            Complement your mentorship and community experience with BlueDot Impact&apos;s structured educational programs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courseData.map((course, index) => (
            <CourseCard
              key={index}
              icon={course.icon}
              title={course.title}
              description={course.description}
              link={course.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
