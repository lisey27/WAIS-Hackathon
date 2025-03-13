import React from "react";

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 bg-[#2A2A2A] text-[#B0B0B0]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-x-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="text-[1.2rem] font-bold text-[var(--white)]">
                <span className="text-[var(--primary-color)]">Impact</span> Connect
              </div>
            </div>
            <p>
              A global community platform dedicated to fostering connections, knowledge transfer, 
              and collaboration in AI safety education and research.
            </p>
          </div>
          
          <div>
            <h4 className="text-[var(--white)] mb-6 text-[1.1rem] font-bold">Platform</h4>
            <ul className="space-y-3">
              <li><a href="/mentorship" className="text-[#B0B0B0] hover:text-[var(--white)] transition-colors duration-300">Mentorship</a></li>
              <li><a href="/community" className="text-[#B0B0B0] hover:text-[var(--white)] transition-colors duration-300">Community Groups</a></li>
              <li><a href="#" className="text-[#B0B0B0] hover:text-[var(--white)] transition-colors duration-300">Discussion Forums</a></li>
              <li><a href="#" className="text-[#B0B0B0] hover:text-[var(--white)] transition-colors duration-300">Events</a></li>
              <li><a href="#" className="text-[#B0B0B0] hover:text-[var(--white)] transition-colors duration-300">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[var(--white)] mb-6 text-[1.1rem] font-bold">Courses</h4>
            <ul className="space-y-3">
              <li><a href="https://aisafetyfundamentals.com/alignment-fast-track/" className="text-[#B0B0B0] hover:text-[var(--white)] transition-colors duration-300">AI Alignment Fast-Track</a></li>
              <li><a href="https://aisafetyfundamentals.com/governance-fast-track/" className="text-[#B0B0B0] hover:text-[var(--white)] transition-colors duration-300">Governance Fast-Track</a></li>
              <li><a href="https://aisafetyfundamentals.com/intro-to-tai/" className="text-[#B0B0B0] hover:text-[var(--white)] transition-colors duration-300">Intro to Transformative AI</a></li>
              <li><a href="https://aisafetyfundamentals.com/economics-of-tai/" className="text-[#B0B0B0] hover:text-[var(--white)] transition-colors duration-300">Economics of Transformative AI</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[var(--white)] mb-6 text-[1.1rem] font-bold">Connect</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#B0B0B0] hover:text-[var(--white)] transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-[#B0B0B0] hover:text-[var(--white)] transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="text-[#B0B0B0] hover:text-[var(--white)] transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-[#B0B0B0] hover:text-[var(--white)] transition-colors duration-300">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 text-center text-[0.9rem] border-t border-[#3A3A3A]">
          <p>&copy; 2025 Elise Racine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
