"use client";

import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-6 bg-[var(--white)] shadow-[0_2px_10px_rgba(0,0,0,0.05)] fixed w-full top-0 z-[1000]">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-[1.4rem] font-bold">
            BlueDot<span className="text-[var(--primary-color)]">Impact</span> Connect
          </div>
        </div>
        
        <nav>
          <button 
            className="mobile-menu-btn text-[1.5rem] bg-transparent border-none cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            &#9776;
          </button>
          
          <ul className={`${isMenuOpen ? 'active' : ''} flex list-none md:flex md:items-center`}>
            <li className="ml-8">
              <a 
                href="#features" 
                className="font-medium text-[var(--secondary-color)] hover:text-[var(--primary-color)] transition-colors duration-300"
              >
                Features
              </a>
            </li>
            <li className="ml-8">
              <a 
                href="#benefits" 
                className="font-medium text-[var(--secondary-color)] hover:text-[var(--primary-color)] transition-colors duration-300"
              >
                Benefits
              </a>
            </li>
            <li className="ml-8">
              <a 
                href="#courses" 
                className="font-medium text-[var(--secondary-color)] hover:text-[var(--primary-color)] transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li className="ml-8">
              <a href="#" className="btn btn-primary">
                Join Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
