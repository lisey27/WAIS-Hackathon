import React from "react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-dark)] text-[var(--white)] text-center">
      <div className="container">
        <h2 className="text-[2.5rem] text-[var(--white)] font-bold mb-6">
          Ready to Join the AI Safety Community?
        </h2>
        <p className="max-w-[700px] mx-auto mb-8 text-[1.2rem]">
          Connect with mentors, join discussion groups, attend events, and contribute to ensuring 
          AI systems are safe and beneficial for humanity.
        </p>
        <a 
          href="/community" 
          className="inline-block py-4 px-10 rounded-md font-semibold text-center text-[1.1rem] 
          bg-[var(--white)] text-[var(--primary-color)] border-2 border-[var(--white)] 
          transition-all duration-300 hover:bg-transparent hover:text-[var(--white)]"
        >
          Get Started Today
        </a>
      </div>
    </section>
  );
};

export default CTASection;
