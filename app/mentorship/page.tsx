import ProfilePlaceholder from "@/components/ProfilePlaceholder";
import Link from "next/link";
import React from "react";

interface MentorCardProps {
  name: string;
  title: string;
  organization: string;
  bio: string;
  research: string;
  mentorshipApproach: string;
  focusAreas: string[];
  availability: string;
  mentored: string;
}

const MentorCard: React.FC<MentorCardProps> = ({
  name,
  title,
  organization,
  bio,
  research,
  mentorshipApproach,
  focusAreas,
  availability,
  mentored,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow h-full flex flex-col">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center mb-4">
          <ProfilePlaceholder
            size={64}
            className="h-16 w-16 min-h-16 min-w-16 mr-4"
          />
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-gray-600 text-sm">
              {title} at {organization}
            </p>
          </div>
        </div>
        <p className="text-gray-700 mb-4 text-sm">{bio}</p>

        {/* Research & Publications */}
        <div className="mb-4">
          <h4 className="font-semibold text-sm mb-2 text-gray-700">
            Key Research:
          </h4>
          <p className="text-sm text-gray-600">{research}</p>
        </div>

        {/* Mentorship Style */}
        <div className="mb-4">
          <h4 className="font-semibold text-sm mb-2 text-gray-700">
            Mentorship Approach:
          </h4>
          <p className="text-sm text-gray-600">{mentorshipApproach}</p>
        </div>

        {/* Focus Areas */}
        <div className="mb-4">
          <h4 className="font-semibold text-sm mb-2 text-gray-700">
            Focus Areas:
          </h4>
          <div className="flex flex-wrap gap-2">
            {focusAreas.map((area, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: `rgba(179, 88, 247, 0.1)`,
                  color: "#B358F7",
                }}
                className="text-xs px-2 py-1 rounded"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Availability & Experience */}
        <div className="mb-4 pt-2 border-t border-gray-100">
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span>Available: {availability}</span>
            <span>Previously mentored: {mentored}</span>
          </div>
        </div>

        <div className="mt-auto pt-4">
          <a href="mentorship/profiles/mentor" className="w-full px-4 py-2 text-sm border border-purple-500 text-purple-600 rounded-lg">
            View Full Profile
          </a>
        </div>
      </div>
    </div>
  );
};

interface MenteeCardProps {
  name: string;
  title: string;
  organization: string;
  bio: string;
  skillsSeeking: string[];
  careerGoals: string;
  coursesCompleted: string[];
  hopesToGain: string;
  availability: string;
}

const MenteeCard: React.FC<MenteeCardProps> = ({
  name,
  title,
  organization,
  bio,
  skillsSeeking,
  careerGoals,
  coursesCompleted,
  hopesToGain,
  availability,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow h-full flex flex-col">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center mb-4">
          <ProfilePlaceholder
            size={64}
            className="h-16 w-16 min-h-16 min-w-16 mr-4"
          />
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-gray-600 text-sm">
              {title} at {organization}
            </p>
          </div>
        </div>
        <p className="text-gray-700 mb-4 text-sm">{bio}</p>

        {/* Skills Seeking */}
        <div className="mb-4">
          <h4 className="font-semibold text-sm mb-2 text-gray-700">
            Skills Seeking:
          </h4>
          <div className="flex flex-wrap gap-2">
            {skillsSeeking.map((skill, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: `rgba(179, 88, 247, 0.1)`,
                  color: "#B358F7",
                }}
                className="text-xs px-2 py-1 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Career Goals */}
        <div className="mb-4">
          <h4 className="font-semibold text-sm mb-2 text-gray-700">
            Career Goals:
          </h4>
          <p className="text-sm text-gray-600">{careerGoals}</p>
        </div>

        {/* Courses Completed */}
        <div className="mb-4">
          <h4 className="font-semibold text-sm mb-2 text-gray-700">
            Courses Completed:
          </h4>
          <div className="flex flex-wrap gap-2">
            {coursesCompleted.map((course, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
              >
                {course}
              </span>
            ))}
          </div>
        </div>

        {/* Mentorship Expectations & Availability */}
        <div className="mb-4 pt-2 border-t border-gray-100">
          <div className="flex flex-col gap-2 text-xs text-gray-500">
            <p>
              <span className="font-medium">Hopes to gain:</span> {hopesToGain}
            </p>
            <p>
              <span className="font-medium">Availability:</span> {availability}
            </p>
          </div>
        </div>

        <div className="mt-auto pt-4">
          <a href="mentorship/profiles/mentee" className="w-full px-4 py-2 text-sm border border-purple-500 text-purple-600 rounded-lg">
            View Full Profile
          </a>
        </div>
      </div>
    </div>
  );
};

interface Mentor {
  name: string;
  title: string;
  organization: string;
  bio: string;
  research: string;
  mentorshipApproach: string;
  focusAreas: string[];
  availability: string;
  mentored: string;
}

interface Mentee {
  name: string;
  title: string;
  organization: string;
  bio: string;
  skillsSeeking: string[];
  careerGoals: string;
  coursesCompleted: string[];
  hopesToGain: string;
  availability: string;
}

const AISafetyMentorship: React.FC = () => {
  // Mentor data
  const mentors: Mentor[] = [
    {
      name: "Dr. Sarah Chen",
      title: "Principal Researcher",
      organization: "Anthropic",
      bio: "Expert in AI alignment with 8+ years of experience in interpretability research.",
      research:
        '"Understanding Latent Objectives in LLMs" (NeurIPS 2024), "Interpretability Methods for Transformer Models" (ACL 2022)',
      mentorshipApproach:
        "Structured biweekly meetings with clear goals. Helps with paper drafting and research direction.",
      focusAreas: ["Alignment Research", "Interpretability"],
      availability: "4-6 hrs/month",
      mentored: "8 researchers",
    },
    {
      name: "James Wilson",
      title: "Policy Researcher",
      organization: "GovAI",
      bio: "Specializes in AI governance and international policy coordination for AI safety.",
      research:
        '"Regulatory Approaches to Advanced AI" (2024), "International Coordination on AI Safety Standards" (2023)',
      mentorshipApproach:
        "Reading assignments, policy discussions, and connecting mentees with valuable network contacts.",
      focusAreas: ["AI Governance", "AI Policy"],
      availability: "3-5 hrs/month",
      mentored: "12 policy analysts",
    },
    {
      name: "Dr. Anika Patel",
      title: "Research Lead",
      organization: "DeepMind",
      bio: "Focuses on robustness and safety guarantees in advanced AI systems.",
      research:
        '"Formal Verification Methods for Deep RL Systems" (ICML 2024), "Safety Guarantees for Multi-Agent Systems" (2023)',
      mentorshipApproach:
        "Collaborative projects where we tackle concrete safety problems together with hands-on technical feedback.",
      focusAreas: ["Safety Engineering", "Robustness"],
      availability: "4 hrs/month",
      mentored: "6 engineers",
    },
  ];

  // Mentee data
  const mentees: Mentee[] = [
    {
      name: "Miguel Rodriguez",
      title: "PhD Student",
      organization: "MIT",
      bio: "Researching neural network interpretability with a focus on language models.",
      skillsSeeking: ["Research methodology", "Publication strategy"],
      careerGoals:
        "Contribute to alignment research at organizations like Anthropic or MIRI after completing PhD.",
      coursesCompleted: [
        "AI Alignment Fast-Track",
        "Intro to Transformative AI",
      ],
      hopesToGain: "Research direction and publication strategy guidance",
      availability: "3-5 hours weekly for mentorship activities",
    },
    {
      name: "Yuki Tanaka",
      title: "Policy Researcher",
      organization: "AI Policy Institute",
      bio: "Exploring AI governance frameworks and regulation approaches in Asia.",
      skillsSeeking: ["Policy analysis", "International coordination"],
      careerGoals:
        "Work at international organizations on AI governance or join AI policy teams at research labs.",
      coursesCompleted: [
        "Governance Fast-Track",
        "Economics of Transformative AI",
      ],
      hopesToGain:
        "Guidance on international AI governance approaches and networking",
      availability: "Evenings and weekends (JST), 2-3 hours weekly",
    },
    {
      name: "Olivia Johnson",
      title: "ML Engineer",
      organization: "Robust AI Startup",
      bio: "ML engineer interested in transitioning to AI safety research.",
      skillsSeeking: ["Formal verification", "Safety engineering"],
      careerGoals:
        "Transition from general ML engineering to dedicated AI safety research and implementation.",
      coursesCompleted: ["ML Safety Fundamentals", "AGISF Technical Track"],
      hopesToGain: "Guidance on career transition to AI safety research",
      availability: "Evenings and weekends, 5-8 hours weekly for projects",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-xl font-bold">
            <Link href="/"><span style={{ color: "#1A1A1A" }}>BlueDot Impact</span></Link>
            <span className="mx-2 text-gray-300">|</span>
            <span style={{ color: "#B358F7" }}>Mentorship</span>
          </div>
          <button
            style={{
              backgroundColor: "#B358F7",
              borderRadius: "8px",
            }}
            className="text-white px-4 py-2"
          >
            Apply Now
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">
            <span style={{ color: "#B358F7" }}>AI Safety</span>
            <span style={{ color: "#1A1A1A" }}> Mentorship</span>
          </h1>
          <p className="text-xl mb-8 text-gray-700 max-w-2xl">
            Connect with experienced AI safety professionals from leading
            organizations. Join our community of 4,500+ members from over 100
            countries.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              style={{ backgroundColor: "#B358F7", borderRadius: "8px" }}
              className="text-white px-6 py-3 font-semibold"
            >
              Find a Mentor
            </button>
            <button
              style={{
                backgroundColor: "white",
                color: "#1A1A1A",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
              }}
              className="px-6 py-3 font-semibold"
            >
              Become a Mentor
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: "#B358F7" }}
              ></div>
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Matching</h3>
            <p className="text-gray-600">
              Our algorithm connects mentors and mentees based on shared AI
              safety interests.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: "#B358F7" }}
              ></div>
            </div>
            <h3 className="text-xl font-bold mb-2">Structured Guidance</h3>
            <p className="text-gray-600">
              Mentors provide personalized guidance on research and career
              paths.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: "#B358F7" }}
              ></div>
            </div>
            <h3 className="text-xl font-bold mb-2">Global Community</h3>
            <p className="text-gray-600">
              Join a diverse community of AI safety professionals worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Mentors */}
      <div style={{ backgroundColor: "#F5F5F5" }} className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Mentors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <MentorCard key={index} {...mentor} />
            ))}
          </div>
        </div>
      </div>

      {/* Featured Mentees */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Mentees
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mentees.map((mentee, index) => (
            <MenteeCard key={index} {...mentee} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div
          className="rounded-lg p-12 text-center max-w-4xl mx-auto"
          style={{ background: `linear-gradient(to right, #B358F7, #8A2BE2)` }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to accelerate your AI safety journey?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Join our global community dedicated to ensuring AI systems are safe
            and beneficial.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              style={{
                backgroundColor: "white",
                color: "#B358F7",
                borderRadius: "8px",
              }}
              className="px-6 py-3 font-semibold"
            >
              Apply as Mentee
            </button>
            <button
              style={{
                backgroundColor: "transparent",
                color: "white",
                border: "1px solid white",
                borderRadius: "8px",
              }}
              className="px-6 py-3 font-semibold"
            >
              Apply as Mentor
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{ backgroundColor: "#B358F7" }}
        className="text-white py-12"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-xl font-bold mb-4">AI Safety Mentorship</h2>
              <p className="text-white text-opacity-80 max-w-md">
                Connecting AI safety professionals worldwide to accelerate
                progress on reducing risks from advanced AI systems.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-3">Program</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-white text-opacity-80 hover:text-opacity-100"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-opacity-80 hover:text-opacity-100"
                    >
                      How it Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-opacity-80 hover:text-opacity-100"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-white text-opacity-80 hover:text-opacity-100"
                    >
                      AI Safety Courses
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-opacity-80 hover:text-opacity-100"
                    >
                      Research Database
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-opacity-80 hover:text-opacity-100"
                    >
                      Career Paths
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-white border-opacity-20 mt-8 pt-8 flex flex-col md:flex-row md:items-center justify-between">
            <p className="text-sm text-white text-opacity-80">
              © 2025 BlueDot Impact. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-white text-opacity-80 hover:text-opacity-100"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white text-opacity-80 hover:text-opacity-100"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AISafetyMentorship;

// function AISafetyMentorship() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navbar */}
//       <nav className="bg-white border-b border-gray-200 py-4">
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           <div className="text-xl font-bold">
//             <span style={{ color: '#1A1A1A' }}>BlueDot Impact</span>
//             <span className="mx-2 text-gray-300">|</span>
//             <span style={{ color: '#B358F7' }}>Mentorship</span>
//           </div>
//           <button
//             style={{
//               backgroundColor: '#B358F7',
//               borderRadius: '8px'
//             }}
//             className="text-white px-4 py-2"
//           >
//             Apply Now
//           </button>
//         </div>
//       </nav>

//       {/* Hero */}
//       <div className="bg-gray-50 py-16">
//         <div className="container mx-auto px-4">
//           <h1 className="text-4xl font-bold mb-6">
//             <span style={{ color: '#B358F7' }}>AI Safety</span>
//             <span style={{ color: '#1A1A1A' }}> Mentorship</span>
//           </h1>
//           <p className="text-xl mb-8 text-gray-700 max-w-2xl">
//             Connect with experienced AI safety professionals from leading organizations.
//             Join our community of 4,500+ members from over 100 countries.
//           </p>
//           <div className="flex gap-4 flex-wrap">
//             <button
//               style={{ backgroundColor: '#B358F7', borderRadius: '8px' }}
//               className="text-white px-6 py-3 font-semibold"
//             >
//               Find a Mentor
//             </button>
//             <button
//               style={{
//                 backgroundColor: 'white',
//                 color: '#1A1A1A',
//                 borderRadius: '8px',
//                 border: '1px solid #e2e8f0'
//               }}
//               className="px-6 py-3 font-semibold"
//             >
//               Become a Mentor
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Features */}
//       <div className="py-16 container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
//             <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
//               <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#B358F7' }}></div>
//             </div>
//             <h3 className="text-xl font-bold mb-2">Expert Matching</h3>
//             <p className="text-gray-600">
//               Our algorithm connects mentors and mentees based on shared AI safety interests.
//             </p>
//           </div>
//           <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
//             <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
//               <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#B358F7' }}></div>
//             </div>
//             <h3 className="text-xl font-bold mb-2">Structured Guidance</h3>
//             <p className="text-gray-600">
//               Mentors provide personalized guidance on research and career paths.
//             </p>
//           </div>
//           <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
//             <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
//               <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#B358F7' }}></div>
//             </div>
//             <h3 className="text-xl font-bold mb-2">Global Community</h3>
//             <p className="text-gray-600">
//               Join a diverse community of AI safety professionals worldwide.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Featured Mentors */}
//       <div style={{ backgroundColor: '#F5F5F5' }} className="py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-12 text-center">Featured Mentors</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Mentor Card 1 */}
//             <div className="bg-white rounded-lg overflow-hidden shadow">
//               <div className="p-6">
//                 <div className="flex items-center mb-4">
//                   <img
//                     src="/api/placeholder/80/80"
//                     alt="Mentor 1"
//                     className="h-16 w-16 rounded-full mr-4"
//                   />
//                   <div>
//                     <h3 className="font-bold text-lg">Dr. Sarah Chen</h3>
//                     <p className="text-gray-600 text-sm">Principal Researcher at Anthropic</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 mb-4 text-sm">
//                   Expert in AI alignment with 8+ years of experience in interpretability research.
//                 </p>

//                 {/* Research & Publications */}
//                 <div className="mb-4">
//                   <h4 className="font-semibold text-sm mb-2 text-gray-700">Key Research:</h4>
//                   <p className="text-sm text-gray-600">
//                     &quot;Understanding Latent Objectives in LLMs&quot; (NeurIPS 2024), &quot;Interpretability Methods for Transformer Models&quot; (ACL 2022)
//                   </p>
//                 </div>

//                 {/* Mentorship Style */}
//                 <div className="mb-4">
//                   <h4 className="font-semibold text-sm mb-2 text-gray-700">Mentorship Approach:</h4>
//                   <p className="text-sm text-gray-600">
//                     Structured biweekly meetings with clear goals. Helps with paper drafting and research direction.
//                   </p>
//                 </div>

//                 {/* Focus Areas */}
//                 <div className="mb-4">
//                   <h4 className="font-semibold text-sm mb-2 text-gray-700">Focus Areas:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     <span style={{ backgroundColor: `rgba(179, 88, 247, 0.1)`, color: '#B358F7' }} className="text-xs px-2 py-1 rounded">
//                       Alignment Research
//                     </span>
//                     <span style={{ backgroundColor: `rgba(179, 88, 247, 0.1)`, color: '#B358F7' }} className="text-xs px-2 py-1 rounded">
//                       Interpretability
//                     </span>
//                   </div>
//                 </div>

//                 {/* Availability & Experience */}
//                 <div className="mb-4 pt-2 border-t border-gray-100">
//                   <div className="flex justify-between items-center text-xs text-gray-500">
//                     <span>Available: 4-6 hrs/month</span>
//                     <span>Previously mentored: 8 researchers</span>
//                   </div>
//                 </div>

//                 <button className="w-full px-4 py-2 text-sm border border-purple-500 text-purple-600 rounded-lg">
//                   View Full Profile
//                 </button>
//               </div>
//             </div>

//             {/* Mentor Card 2 */}
//             <div className="bg-white rounded-lg overflow-hidden shadow">
//               <div className="p-6">
//                 <div className="flex items-center mb-4">
//                   <img
//                     src="/api/placeholder/80/80"
//                     alt="Mentor 2"
//                     className="h-16 w-16 rounded-full mr-4"
//                   />
//                   <div>
//                     <h3 className="font-bold text-lg">James Wilson</h3>
//                     <p className="text-gray-600 text-sm">Policy Researcher at GovAI</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 mb-4 text-sm">
//                   Specializes in AI governance and international policy coordination for AI safety.
//                 </p>

//                 {/* Research & Publications */}
//                 <div className="mb-4">
//                   <h4 className="font-semibold text-sm mb-2 text-gray-700">Key Research:</h4>
//                   <p className="text-sm text-gray-600">
//                     &quot;Regulatory Approaches to Advanced AI&quot; (2024), &quot;International Coordination on AI Safety Standards&quot; (2023)
//                   </p>
//                 </div>

//                 {/* Mentorship Style */}
//                 <div className="mb-4">
//                   <h4 className="font-semibold text-sm mb-2 text-gray-700">Mentorship Approach:</h4>
//                   <p className="text-sm text-gray-600">
//                     Reading assignments, policy discussions, and connecting mentees with valuable network contacts.
//                   </p>
//                 </div>

//                 {/* Focus Areas */}
//                 <div className="mb-4">
//                   <h4 className="font-semibold text-sm mb-2 text-gray-700">Focus Areas:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     <span style={{ backgroundColor: `rgba(179, 88, 247, 0.1)`, color: '#B358F7' }} className="text-xs px-2 py-1 rounded">
//                       AI Governance
//                     </span>
//                     <span style={{ backgroundColor: `rgba(179, 88, 247, 0.1)`, color: '#B358F7' }} className="text-xs px-2 py-1 rounded">
//                       AI Policy
//                     </span>
//                   </div>
//                 </div>

//                 {/* Availability & Experience */}
//                 <div className="mb-4 pt-2 border-t border-gray-100">
//                   <div className="flex justify-between items-center text-xs text-gray-500">
//                     <span>Available: 3-5 hrs/month</span>
//                     <span>Previously mentored: 12 policy analysts</span>
//                   </div>
//                 </div>

//                 <button className="w-full px-4 py-2 text-sm border border-purple-500 text-purple-600 rounded-lg">
//                   View Full Profile
//                 </button>
//               </div>
//             </div>

//             {/* Mentor Card 3 */}
//             <div className="bg-white rounded-lg overflow-hidden shadow">
//               <div className="p-6">
//                 <div className="flex items-center mb-4">
//                   <img
//                     src="/api/placeholder/80/80"
//                     alt="Mentor 3"
//                     className="h-16 w-16 rounded-full mr-4"
//                   />
//                   <div>
//                     <h3 className="font-bold text-lg">Dr. Anika Patel</h3>
//                     <p className="text-gray-600 text-sm">Research Lead at DeepMind</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 mb-4 text-sm">
//                   Focuses on robustness and safety guarantees in advanced AI systems.
//                 </p>

//                 {/* Research & Publications */}
//                 <div className="mb-4">
//                   <h4 className="font-semibold text-sm mb-2 text-gray-700">Key Research:</h4>
//                   <p className="text-sm text-gray-600">
//                     &quot;Formal Verification Methods for Deep RL Systems&quot; (ICML 2024), &quot;Safety Guarantees for Multi-Agent Systems&quot; (2023)
//                   </p>
//                 </div>

//                 {/* Mentorship Style */}
//                 <div className="mb-4">
//                   <h4 className="font-semibold text-sm mb-2 text-gray-700">Mentorship Approach:</h4>
//                   <p className="text-sm text-gray-600">
//                     Collaborative projects where we tackle concrete safety problems together with hands-on technical feedback.
//                   </p>
//                 </div>

//                 {/* Focus Areas */}
//                 <div className="mb-4">
//                   <h4 className="font-semibold text-sm mb-2 text-gray-700">Focus Areas:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     <span style={{ backgroundColor: `rgba(179, 88, 247, 0.1)`, color: '#B358F7' }} className="text-xs px-2 py-1 rounded">
//                       Safety Engineering
//                     </span>
//                     <span style={{ backgroundColor: `rgba(179, 88, 247, 0.1)`, color: '#B358F7' }} className="text-xs px-2 py-1 rounded">
//                       Robustness
//                     </span>
//                   </div>
//                 </div>

//                 {/* Availability & Experience */}
//                 <div className="mb-4 pt-2 border-t border-gray-100">
//                   <div className="flex justify-between items-center text-xs text-gray-500">
//                     <span>Available: 4 hrs/month</span>
//                     <span>Previously mentored: 6 engineers</span>
//                   </div>
//                 </div>

//                 <button className="w-full px-4 py-2 text-sm border border-purple-500 text-purple-600 rounded-lg">
//                   View Full Profile
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Featured Mentees */}
//       <div className="container mx-auto px-4 py-16">
//         <h2 className="text-3xl font-bold mb-12 text-center">Featured Mentees</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Mentee Card 1 */}
//           <div className="bg-white rounded-lg overflow-hidden shadow">
//             <div className="p-6">
//               <div className="flex items-center mb-4">
//                 <img
//                   src="/api/placeholder/80/80"
//                   alt="Mentee 1"
//                   className="h-16 w-16 rounded-full mr-4"
//                 />
//                 <div>
//                   <h3 className="font-bold text-lg">Miguel Rodriguez</h3>
//                   <p className="text-gray-600 text-sm">PhD Student at MIT</p>
//                 </div>
//               </div>
//               <p className="text-gray-700 mb-4 text-sm">
//                 Researching neural network interpretability with a focus on language models.
//               </p>

//               {/* Skills Seeking */}
//               <div className="mb-4">
//                 <h4 className="font-semibold text-sm mb-2 text-gray-700">Skills Seeking:</h4>
//                 <div className="flex flex-wrap gap-2">
//                   <span style={{ backgroundColor: `rgba(179, 88, 247, 0.1)`, color: '#B358F7' }} className="text-xs px-2 py-1 rounded">
//                     Research methodology
//                   </span>
//                   <span style={{ backgroundColor: `rgba(179, 88, 247, 0.1)`, color: '#B358F7' }} className="text-xs px-2 py-1 rounded">
//                     Publication strategy
//                   </span>
//                 </div>
//               </div>

//               {/* Career Goals */}
//               <div className="mb-4">
//                 <h4 className="font-semibold text-sm mb-2 text-gray-700">Career Goals:</h4>
//                 <p className="text-sm text-gray-600">
//                   Contribute to alignment research at organizations like Anthropic or MIRI after completing PhD.
//                 </p>
//               </div>

//               {/* Courses Completed */}
//               <div className="mb-4">
//                 <h4 className="font-semibold text-sm mb-2 text-gray-700">Courses Completed:</h4>
//                 <div className="flex flex-wrap gap-2">
//                   <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">AI Alignment Fast-Track</span>
//                   <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Intro to Transformative AI</span>
//                 </div>
//               </div>

//               {/* Mentorship Expectations & Availability */}
//               <div className="mb-4 pt-2 border-t border-gray-100">
//                 <div className="flex flex-col gap-2 text-xs text-gray-500">
//                   <p><span className="font-medium">Hopes to gain:</span> Research direction and publication strategy guidance</p>
//                   <p><span className="font-medium">Availability:</span> 3-5 hours weekly for mentorship activities</p>
//                 </div>
//               </div>

//               <button className="w-full px-4 py-2 text-sm border border-purple-500 text-purple-600 rounded-lg">
//                 View Full Profile
//               </button>
//             </div>
//           </div>

//           {/* Mentee Card 2 */}
//           <div className="bg-white rounded-lg overflow-hidden shadow">
//             <div className="p-6">
//               <div className="flex items-center mb-4">
//                 <img
//                   src="/api/placeholder/80/80"
//                   alt="Mentee 2"
//                   className="h-16 w-16 rounded-full mr-4"
//                 />
//                 <div>
//                   <h3 className="font-bold text-lg">Yuki Tanaka</h3>
//                   <p className="text-gray-600 text-sm">Policy Researcher at AI Policy Institute</p>
//                 </div>
//               </div>
//               <p className="text-gray-700 mb-4 text-sm">
//                 Exploring AI governance frameworks and regulation approaches in Asia.
//               </p>

//               {/* Skills Seeking */}
//               <div className="mb-4">
//                 <h4 className="font-semibold text-sm mb-2 text-gray-700">Skills Seeking:</h4>
//                 <div className="flex flex-wrap gap-2">
//                   <span style={{ backgroundColor: `rgba(179, 88, 247, 0.1)`, color: '#B358F7' }} className="text-xs px-2 py-1 rounded">
//                     Policy analysis
//                   </span>
//                   <span style={{ backgroundColor: `rgba(179, 88, 247, 0.1)`, color: '#B358F7' }} className="text-xs px-2 py-1 rounded">
//                     International coordination
//                   </span>
//                 </div>
//               </div>

//               {/* Career Goals */}
//               <div className="mb-4">
//                 <h4 className="font-semibold text-sm mb-2 text-gray-700">Career Goals:</h4>
//                 <p className="text-sm text-gray-600">
//                   Work at international organizations on AI governance or join AI policy teams at research labs.
//                 </p>
//               </div>

//               {/* Courses Completed */}
//               <div className="mb-4">
//                 <h4 className="font-semibold text-sm mb-2 text-gray-700">Courses Completed:</h4>
//                 <div className="flex flex-wrap gap-2">
//                   <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Governance Fast-Track</span>
//                   <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Economics of Transformative AI</span>
//                 </div>
//               </div>

//               {/* Mentorship Expectations & Availability */}
//               <div className="mb-4 pt-2 border-t border-gray-100">
//                 <div className="flex flex-col gap-2 text-xs text-gray-500">
//                   <p><span className="font-medium">Hopes to gain:</span> Guidance on international AI governance approaches and networking</p>
//                   <p><span className="font-medium">Availability:</span> Evenings and weekends (JST), 2-3 hours weekly</p>
//                 </div>
//               </div>

//               <button className="w-full px-4 py-2 text-sm border border-purple-500 text-purple-600 rounded-lg">
//                 View Full Profile
//               </button>
//             </div>
//           </div>

//           {/* Mentee Card 3 */}
//           <div className="bg-white rounded-lg overflow-hidden shadow">
//             <div className="p-6">
//               <div className="flex items-center mb-4">
//                 <img
//                   src="/api/placeholder/80/80"
//                   alt="Mentee 3"
//                   className="h-16 w-16 rounded-full mr-4"
//                 />
//                 <div>
//                   <h3 className="font-bold text-lg">Olivia Johnson</h3>
//                   <p className="text-gray-600 text-sm">ML Engineer at Robust AI Startup</p>
//                 </div>
//               </div>
//               <p className="text-gray-700 mb-4 text-sm">
//                 ML engineer interested in transitioning to AI safety research.
//               </p>

//               {/* Skills Seeking */}
//               <div className="mb-4">
//                 <h4 className="font-semibold text-sm mb-2 text-gray-700">Skills Seeking:</h4>
//                 <div className="flex flex-wrap gap-2">
//                   <span style={{ backgroundColor: `rgba(179, 88, 247, 0.1)`, color: '#B358F7' }} className="text-xs px-2 py-1 rounded">
//                     Formal verification
//                   </span>
//                   <span style={{ backgroundColor: `rgba(179, 88, 247, 0.1)`, color: '#B358F7' }} className="text-xs px-2 py-1 rounded">
//                     Safety engineering
//                   </span>
//                 </div>
//               </div>

//               {/* Career Goals */}
//               <div className="mb-4">
//                 <h4 className="font-semibold text-sm mb-2 text-gray-700">Career Goals:</h4>
//                 <p className="text-sm text-gray-600">
//                   Transition from general ML engineering to dedicated AI safety research and implementation.
//                 </p>
//               </div>

//               {/* Courses Completed */}
//               <div className="mb-4">
//                 <h4 className="font-semibold text-sm mb-2 text-gray-700">Courses Completed:</h4>
//                 <div className="flex flex-wrap gap-2">
//                   <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">ML Safety Fundamentals</span>
//                   <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">AGISF Technical Track</span>
//                 </div>
//               </div>

//               {/* Mentorship Expectations & Availability */}
//               <div className="mb-4 pt-2 border-t border-gray-100">
//                 <div className="flex flex-col gap-2 text-xs text-gray-500">
//                   <p><span className="font-medium">Hopes to gain:</span> Guidance on career transition to AI safety research</p>
//                   <p><span className="font-medium">Availability:</span> Evenings and weekends, 5-8 hours weekly for projects</p>
//                 </div>
//               </div>

//               <button className="w-full px-4 py-2 text-sm border border-purple-500 text-purple-600 rounded-lg">
//                 View Full Profile
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="container mx-auto px-4 py-16">
//         <div
//           className="rounded-lg p-12 text-center max-w-4xl mx-auto"
//           style={{ background: `linear-gradient(to right, #B358F7, #8A2BE2)` }}
//         >
//           <h2 className="text-3xl font-bold mb-4 text-white">Ready to accelerate your AI safety journey?</h2>
//           <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
//             Join our global community dedicated to ensuring AI systems are safe and beneficial.
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <button
//               style={{
//                 backgroundColor: 'white',
//                 color: '#B358F7',
//                 borderRadius: '8px'
//               }}
//               className="px-6 py-3 font-semibold"
//             >
//               Apply as Mentee
//             </button>
//             <button
//               style={{
//                 backgroundColor: 'transparent',
//                 color: 'white',
//                 border: '1px solid white',
//                 borderRadius: '8px'
//               }}
//               className="px-6 py-3 font-semibold"
//             >
//               Apply as Mentor
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer style={{ backgroundColor: '#B358F7' }} className="text-white py-12">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between">
//             <div className="mb-8 md:mb-0">
//               <h2 className="text-xl font-bold mb-4">AI Safety Mentorship</h2>
//               <p className="text-white text-opacity-80 max-w-md">
//                 Connecting AI safety professionals worldwide to accelerate progress on reducing risks from advanced AI systems.
//               </p>
//             </div>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
//               <div>
//                 <h3 className="font-semibold mb-3">Program</h3>
//                 <ul className="space-y-2">
//                   <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100">About</a></li>
//                   <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100">How it Works</a></li>
//                   <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100">FAQ</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="font-semibold mb-3">Resources</h3>
//                 <ul className="space-y-2">
//                   <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100">AI Safety Courses</a></li>
//                   <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100">Research Database</a></li>
//                   <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100">Career Paths</a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-white border-opacity-20 mt-8 pt-8 flex flex-col md:flex-row md:items-center justify-between">
//             <p className="text-sm text-white text-opacity-80">© 2025 BlueDot Impact. All rights reserved.</p>
//             <div className="flex space-x-4 mt-4 md:mt-0">
//               <a href="#" className="text-white text-opacity-80 hover:text-opacity-100">Privacy Policy</a>
//               <a href="#" className="text-white text-opacity-80 hover:text-opacity-100">Terms of Service</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default AISafetyMentorship;
