"use client";

import ProfilePlaceholder from "@/components/ProfilePlaceholder";
import React, { useState } from "react";

const MentorProfile = () => {
  const [activeTab, setActiveTab] = useState("about");

  // Mentor data
  const mentor = {
    name: "Dr. Sarah Chen",
    title: "Principal Research Scientist",
    organization: "Anthropic",
    profileImage: "/api/placeholder/150/150",
    location: "San Francisco, USA",
    timezone: "GMT-8 (Pacific Time)",
    languages: ["English (Fluent)", "Mandarin Chinese (Fluent)"],
    memberSince: "January 2023",
    availability: "Limited (1 slot open)",
    contactInfo: {
      email: "sarah.chen@example.com",
    },
    expertise: [
      {
        area: "Interpretability Research",
        level: 5,
        years: 8,
        description:
          "Developing techniques to understand internal representations in large language models, with focus on mechanistic interpretability approaches.",
      },
      {
        area: "AI Alignment",
        level: 5,
        years: 7,
        description:
          "Creating methods to align language models with human values. Specializing in constitutional AI and RLHF techniques.",
      },
      {
        area: "ML Safety",
        level: 4,
        years: 6,
        description:
          "Developing robustness measures and safety frameworks for machine learning systems, with emphasis on large language models.",
      },
      {
        area: "Adversarial Testing",
        level: 4,
        years: 5,
        description:
          "Creating techniques to identify potential risks and vulnerabilities in AI systems through systematic probing and testing.",
      },
      {
        area: "Governance & Policy",
        level: 3,
        years: 3,
        description:
          "Contributing to technical standards development and policy recommendations for frontier AI systems.",
      },
    ],
    about: `Dr. Sarah Chen is a Principal Research Scientist at Anthropic focusing on interpretability methods for large language models. Her research aims to develop techniques that make AI systems more transparent, explainable, and aligned with human values. She leads Anthropic's Mechanistic Interpretability team, where she and her colleagues work to understand how concepts and capabilities emerge in large language models.

Prior to joining Anthropic in 2022, Sarah was a Senior Research Scientist at DeepMind, where she worked on reinforcement learning safety and robustness. She completed her Ph.D. at Stanford University in 2017, focusing on interpretability methods for neural networks. Her dissertation, "Transparency in Deep Learning: Interpreting Neural Network Behavior," received the department's outstanding thesis award.

Sarah is passionate about ensuring AI systems are developed safely and responsibly. She believes that understanding the internal mechanisms of advanced AI is crucial for ensuring these systems remain aligned with human values as they become more capable.`,
    careerPath: [
      {
        position: "Principal Research Scientist",
        organization: "Anthropic",
        period: "2022-Present",
        description:
          "Leading interpretability research to understand and align large language models. Managing a team of 7 researchers focused on mechanistic interpretability.",
      },
      {
        position: "Senior Research Scientist",
        organization: "DeepMind",
        period: "2019-2022",
        description:
          "Worked on reinforcement learning safety and robustness. Developed methods for preventing reward hacking and ensuring agent reliability.",
      },
      {
        position: "Research Scientist",
        organization: "AI Alignment Lab",
        period: "2017-2019",
        description:
          "Developed early work on neural network interpretability, focusing on feature visualization techniques and attribution methods.",
      },
      {
        position: "Ph.D. Candidate",
        organization: "Stanford University",
        period: "2013-2017",
        description:
          "Conducted research on interpretability methods for deep neural networks. Teaching assistant for Machine Learning and AI Safety courses.",
      },
    ],
    education: [
      {
        degree: "Ph.D. in Computer Science",
        institution: "Stanford University",
        year: "2017",
        focus: "Machine Learning and AI Safety",
      },
      {
        degree: "M.S. in Machine Learning",
        institution: "Carnegie Mellon University",
        year: "2013",
        focus: "Neural Networks and Representations",
      },
      {
        degree: "B.S. in Computer Science",
        institution: "UC Berkeley",
        year: "2011",
        focus: "Artificial Intelligence",
      },
    ],
    publications: [
      {
        title: "Understanding Latent Objectives in Large Language Models",
        venue: "NeurIPS",
        year: "2024",
        authors: "Chen, S., Lee, J., Kumar, R., & Smith, A.",
        link: "#",
        description:
          "Developed new techniques to identify the implicit objectives that language models optimize for during pre-training and fine-tuning.",
      },
      {
        title: "Evaluating Alignment in Large Language Models",
        venue: "ICLR",
        year: "2023",
        authors: "Chen, S., Williams, B., & Johnson, T.",
        link: "#",
        description:
          "Created comprehensive benchmarks for measuring alignment in language models across diverse tasks and scenarios.",
      },
      {
        title: "Interpretability Methods for Transformer Models",
        venue: "ACL",
        year: "2022",
        authors: "Chen, S. & Patel, R.",
        link: "#",
        description:
          "Novel techniques for understanding attention patterns and representation formation in transformer architectures.",
      },
      {
        title: "Feature Attribution in Deep Neural Networks",
        venue: "ICML",
        year: "2020",
        authors: "Chen, S., Lopez, M., & Garcia, D.",
        link: "#",
        description:
          "Methods for attributing predictions to specific features and neurons in deep networks.",
      },
      {
        title:
          "Transparency in Deep Learning: Interpreting Neural Network Behavior",
        venue: "Ph.D. Dissertation, Stanford University",
        year: "2017",
        authors: "Chen, S.",
        link: "#",
        description:
          "Comprehensive framework for understanding and interpreting neural network behavior through various visualization and analysis techniques.",
      },
    ],
    mentorshipStyle: {
      approach:
        "I take a project-based approach to mentorship, working with mentees on concrete research questions that align with their interests and career goals. I believe in providing regular, structured feedback while encouraging independent exploration.",
      preferredCommunication:
        "Biweekly video calls (1 hour) with email/messaging between sessions for questions and updates.",
      expectations:
        "I expect mentees to come prepared to sessions with specific questions or progress updates. I value proactive communication and intellectual curiosity.",
      strengths: [
        "Providing research direction",
        "Paper writing guidance",
        "Technical skill development",
        "Career planning in AI alignment",
      ],
    },
    mentorshipHistory: {
      experience: "8 years of mentorship experience with 15+ mentees",
      testimonial: {
        quote:
          "Sarah's guidance was instrumental in helping me navigate my transition into AI safety research. Her technical expertise, combined with her ability to provide clear career direction, transformed my approach to alignment problems.",
        author: "Dr. Maya Zhang, Research Scientist at DeepMind",
        relationship: "Mentee (2020-2021)",
      },
    },
    coursesTaught: [
      "Advanced AI Alignment (Stanford Guest Lecturer)",
      "Neural Network Interpretability Workshop (NeurIPS)",
      "Mechanistic Interpretability Bootcamp (Anthropic)",
    ],
    currentMentees: [
      {
        name: "Miguel Rodriguez",
        title: "PhD Student",
        organization: "MIT",
        focus: "Neural network interpretability for language models",
        duration: "6 months",
        profileImage: "/api/placeholder/60/60",
        matchReason:
          "Shared research interests in mechanistic interpretability and language model internals.",
      },
      {
        name: "Aisha Patel",
        title: "ML Engineer",
        organization: "Robust AI Startup",
        focus: "Transitioning from ML engineering to AI safety research",
        duration: "3 months",
        profileImage: "/api/placeholder/60/60",
        matchReason:
          "Complementary technical skills and aligned career trajectory goals.",
      },
    ],
    pastMentees: [
      {
        name: "James Wilson",
        title: "Now: AI Policy Researcher at GovAI",
        organization: "Previously: PhD student at Oxford",
        outcome:
          "Successfully transitioned to AI governance research, published two papers on safety standards",
        duration: "12 months (2022-2023)",
        profileImage: "/api/placeholder/60/60",
      },
      {
        name: "Maya Zhang",
        title: "Now: Research Scientist at DeepMind",
        organization: "Previously: Postdoc at Stanford",
        outcome:
          "Developed novel interpretability methods, landed research position at DeepMind",
        duration: "14 months (2020-2021)",
        profileImage: "/api/placeholder/60/60",
      },
      {
        name: "Alex Kumar",
        title: "Now: AI Safety Researcher at Anthropic",
        organization: "Previously: ML Engineer at Google",
        outcome:
          "Published two papers on alignment, joined Anthropic's technical staff",
        duration: "10 months (2021-2022)",
        profileImage: "/api/placeholder/60/60",
      },
    ],
  };

  // Render stars for expertise level
  const renderStars = (level: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`h-4 w-4 mr-0.5 rounded-full ${
              i < level ? "bg-yellow-400" : "bg-gray-200"
            }`}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold text-purple-600">
                BlueDot Impact Mentorship
              </div>
            </div>
            <div className="flex items-center">
              <button className="ml-4 px-4 py-2 rounded border border-gray-300 text-gray-700 text-sm">
                Back to Dashboard
              </button>
              <button className="ml-4 px-4 py-2 rounded bg-purple-600 text-white text-sm">
                Message
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="p-6">
            <div className="md:flex">
              <div className="md:flex-shrink-0 flex justify-center">
                <ProfilePlaceholder
                  size={160}
                  className="h-40 w-40 rounded-full object-cover"
                />
                {/* <img
                  className="h-40 w-40 rounded-full object-cover"
                  src={mentor.profileImage}
                  alt={mentor.name}
                /> */}
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 md:flex-1">
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      {mentor.name}
                    </h1>
                    <p className="text-sm text-gray-600">
                      {mentor.title} at {mentor.organization}
                    </p>
                    <div className="mt-1 flex items-center">
                      <span className="text-sm text-gray-500 mr-4">
                        {mentor.location}
                      </span>
                      <span className="text-sm text-gray-500">
                        {mentor.timezone}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {mentor.languages.map((language, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
                    <div className="text-sm text-gray-500">
                      Member since {mentor.memberSince}
                    </div>
                    <div className="mt-1">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          mentor.availability.includes("Limited")
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {mentor.availability}
                      </span>
                    </div>
                    <button className="mt-3 px-4 py-2 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700 transition">
                      Request Mentorship
                    </button>
                  </div>
                </div>

                <div className="mt-6 bg-purple-50 p-3 rounded-md">
                  <h3 className="text-sm font-semibold text-purple-800">
                    Top Expertise Areas
                  </h3>
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {mentor.expertise.slice(0, 4).map((skill, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <span className="text-sm text-gray-700">
                          {skill.area}
                        </span>
                        <div className="flex items-center">
                          <span className="text-xs text-gray-500 mr-2">
                            {skill.years} yrs
                          </span>
                          {renderStars(skill.level)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Navigation */}
          <div className="border-t border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab("about")}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === "about"
                    ? "border-b-2 border-purple-500 text-purple-700"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                About
              </button>
              <button
                onClick={() => setActiveTab("expertise")}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === "expertise"
                    ? "border-b-2 border-purple-500 text-purple-700"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Expertise & Research
              </button>
              <button
                onClick={() => setActiveTab("mentorship")}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === "mentorship"
                    ? "border-b-2 border-purple-500 text-purple-700"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Mentorship
              </button>
              <button
                onClick={() => setActiveTab("mentees")}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === "mentees"
                    ? "border-b-2 border-purple-500 text-purple-700"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Mentees
              </button>
            </nav>
          </div>
        </div>

        {/* About Tab */}
        {activeTab === "about" && (
          <div className="bg-white shadow rounded-lg">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">About</h2>
              <div className="text-gray-700 space-y-4">
                {mentor.about.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <h2 className="text-lg font-medium text-gray-900 mt-8 mb-4">
                Career Path
              </h2>
              <div className="space-y-6">
                {mentor.careerPath.map((job, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 mt-1">
                      <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center">
                        <div className="h-4 w-4 rounded-full bg-purple-600"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-md font-medium text-gray-900">
                        {job.position}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {job.organization} • {job.period}
                      </p>
                      <p className="mt-1 text-sm text-gray-700">
                        {job.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-lg font-medium text-gray-900 mt-8 mb-4">
                Education
              </h2>
              <div className="space-y-4">
                {mentor.education.map((edu, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 mt-1">
                      <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center">
                        <div className="h-4 w-4 rounded-full bg-purple-600"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-md font-medium text-gray-900">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {edu.institution} • {edu.year}
                      </p>
                      <p className="text-sm text-gray-700">
                        Focus: {edu.focus}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Expertise & Research Tab */}
        {activeTab === "expertise" && (
          <div className="bg-white shadow rounded-lg">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Expertise Areas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mentor.expertise.map((skill, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-md font-medium text-gray-900">
                        {skill.area}
                      </h3>
                      {renderStars(skill.level)}
                    </div>
                    <p className="text-sm text-gray-500 mb-2">
                      {skill.years} years of experience
                    </p>
                    <p className="text-sm text-gray-700">{skill.description}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-lg font-medium text-gray-900 mt-8 mb-4">
                Publications
              </h2>
              <div className="space-y-4">
                {mentor.publications.map((pub, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
                  >
                    <h3 className="text-md font-medium text-gray-900">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-gray-600">{pub.authors}</p>
                    <p className="text-sm text-gray-600 italic">
                      {pub.venue} • {pub.year}
                    </p>
                    <p className="mt-1 text-sm text-gray-700">
                      {pub.description}
                    </p>
                    <a
                      href={pub.link}
                      className="mt-2 inline-block text-sm text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      View publication
                    </a>
                  </div>
                ))}
              </div>

              <h2 className="text-lg font-medium text-gray-900 mt-8 mb-4">
                Courses Taught
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                {mentor.coursesTaught.map((course, index) => (
                  <li key={index} className="text-gray-700">
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Mentorship Tab */}
        {activeTab === "mentorship" && (
          <div className="bg-white shadow rounded-lg">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Mentorship Approach
              </h2>
              <div className="bg-purple-50 rounded-lg p-4 mb-6">
                <p className="text-gray-700">
                  {mentor.mentorshipStyle.approach}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-md font-medium text-gray-900 mb-2">
                    Communication Style
                  </h3>
                  <p className="text-gray-700">
                    {mentor.mentorshipStyle.preferredCommunication}
                  </p>
                </div>
                <div>
                  <h3 className="text-md font-medium text-gray-900 mb-2">
                    Expectations for Mentees
                  </h3>
                  <p className="text-gray-700">
                    {mentor.mentorshipStyle.expectations}
                  </p>
                </div>
              </div>

              <h3 className="text-md font-medium text-gray-900 mb-2">
                Mentorship Strengths
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {mentor.mentorshipStyle.strengths.map((strength, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800"
                  >
                    {strength}
                  </span>
                ))}
              </div>

              <h2 className="text-lg font-medium text-gray-900 mt-8 mb-4">
                Mentorship Experience
              </h2>
              <p className="text-gray-700 mb-4">
                {mentor.mentorshipHistory.experience}
              </p>

              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-purple-500">
                <p className="text-gray-700 italic mb-2">
                  &quot;{mentor.mentorshipHistory.testimonial.quote}&quot;
                </p>
                <p className="text-sm text-gray-600">
                  — {mentor.mentorshipHistory.testimonial.author},{" "}
                  {mentor.mentorshipHistory.testimonial.relationship}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Mentees Tab */}
        {activeTab === "mentees" && (
          <div className="bg-white shadow rounded-lg">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Current Mentees
              </h2>
              {mentor.currentMentees.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {mentor.currentMentees.map((mentee, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex items-start">
                        <ProfilePlaceholder
                          size={64}
                          className="h-12 w-12 min-h-12 min-w-12 mr-4"
                        />
                        {/* <img 
                          src={mentee.profileImage} 
                          alt={mentee.name} 
                          className="h-12 w-12 rounded-full mr-4"
                        /> */}
                        <div>
                          <h3 className="text-md font-medium text-gray-900">
                            {mentee.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {mentee.title} at {mentee.organization}
                          </p>
                          <p className="text-sm text-gray-700 mt-1">
                            Focus: {mentee.focus}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            Duration: {mentee.duration}
                          </p>
                          <div className="mt-2 text-xs text-purple-600 font-medium">
                            Match reason: {mentee.matchReason}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-700 mb-8">No current mentees.</p>
              )}

              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Past Mentees & Outcomes
              </h2>
              <div className="space-y-4">
                {mentor.pastMentees.map((mentee, index) => (
                  <div
                    key={index}
                    className="flex items-start pb-4 border-b border-gray-200 last:border-b-0 last:pb-0"
                  >
                    <ProfilePlaceholder
                      size={64}
                      className="h-12 w-12 min-h-12 min-w-12 mr-4"
                    />
                    {/* <img
                      src={mentee.profileImage}
                      alt={mentee.name}
                      className="h-10 w-10 rounded-full mr-4"
                    /> */}
                    <div>
                      <h3 className="text-md font-medium text-gray-900">
                        {mentee.name}
                      </h3>
                      <p className="text-sm text-gray-700">{mentee.title}</p>
                      <p className="text-sm text-gray-600">
                        {mentee.organization}
                      </p>
                      <p className="text-sm text-gray-700 mt-1">
                        <span className="font-medium">Outcome:</span>{" "}
                        {mentee.outcome}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Mentorship period: {mentee.duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorProfile;
