import React from "react";

const Hero = () => {
  return (
    <section className="pt-40 pb-20 bg-gradient-to-br from-[#F6F8FA] to-[#E6E9F0]">
      <div className="container">
        <div className="max-w-[700px]">
          <h1 className="text-[3rem] leading-[1.2] font-bold text-[#333] mb-6">
            Connect, Learn, and Grow in AI Safety—Globally
          </h1>
          <p className="text-[1.2rem] text-[#555] mb-8">
            Join BlueDot Impact Connect to find mentorship, expand your network, and collaborate 
            with a global community dedicated to ensuring AI systems are safe and beneficial for 
            humanity, regardless of your geographic location or background.
          </p>
          <div className="flex gap-4 md:flex-row flex-col">
            <a href="/community" className="btn btn-primary">
              Join Our Community
            </a>
            <a href="#features" className="btn btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
