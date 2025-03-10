import Benefits from "../components/Benefits";
import Courses from "../components/Courses";
import CTA from "../components/CTASection";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <Courses />
      <CTA />
      <Footer />
    </div>
  );
}
