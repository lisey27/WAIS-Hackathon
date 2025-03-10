"use client";

import ProfilePlaceholder from "@/components/ProfilePlaceholder";
import React, { useState } from "react";

const MenteeProfile = () => {
  const [activeTab, setActiveTab] = useState("about");

  // Mentee data
  const mentee = {
    name: "Miguel Rodriguez",
    title: "PhD Student",
    organization: "Massachusetts Institute of Technology",
    profileImage: "/api/placeholder/150/150",
    location: "Cambridge, USA (Originally from Madrid, Spain)",
    timezone: "GMT-5 (Eastern Time)",
    languages: ["English (Fluent)", "Spanish (Native)"],
    memberSince: "September 2024",
    lookingForMentor: true,
    contactInfo: {
      email: "miguel.rodriguez@example.com",
    },
    about: `I'm a second-year PhD student at MIT's Computer Science & Artificial Intelligence Laboratory (CSAIL), focusing on neural network interpretability methods for large language models. My research aims to develop techniques for understanding how these models form internal representations and how we can better track their reasoning processes.

I became interested in AI safety during my master's studies after completing the AI Alignment Fast-Track course. I'm particularly fascinated by mechanistic interpretability and how it might help us understand and align increasingly capable language models. My work combines technical approaches from machine learning with insights from neuroscience about how biological systems represent information.

Prior to my PhD, I worked briefly as a machine learning engineer at a computer vision startup, which gave me practical experience with deploying ML systems. This experience made me more aware of the gap between theoretical understanding and practical deployment of AI, which is part of what motivates my focus on interpretability.

I'm seeking mentorship to help refine my research direction and connect with the broader AI safety community. While I have strong technical skills, I'm looking for guidance on which interpretability approaches are most promising from an alignment perspective.`,
    career: {
      current: "PhD Student in Computer Science, MIT (2023-present)",
      previous: [
        {
          role: "Machine Learning Engineer",
          organization: "VisionTech AI",
          period: "2022-2023",
          description:
            "Developed computer vision models for autonomous navigation systems. Implemented robustness testing frameworks for deployed models.",
        },
        {
          role: "Research Assistant",
          organization: "Technical University of Madrid",
          period: "2020-2022",
          description:
            "Assisted with research on deep learning architectures for natural language processing. Co-authored two papers on attention mechanisms in transformer models.",
        },
      ],
    },
    education: [
      {
        degree: "Ph.D. in Computer Science (in progress)",
        institution: "Massachusetts Institute of Technology",
        year: "2023-present",
        focus: "Neural Network Interpretability and AI Safety",
      },
      {
        degree: "M.S. in Artificial Intelligence",
        institution: "Technical University of Madrid",
        year: "2022",
        focus: "Deep Learning and Natural Language Processing",
      },
      {
        degree: "B.S. in Computer Engineering",
        institution: "University of Barcelona",
        year: "2020",
        focus: "Software Systems and Machine Learning",
      },
    ],
    skills: {
      technical: [
        {
          skill: "Deep Learning",
          level: 4,
          description:
            "Extensive experience with PyTorch, neural architecture design, and training pipelines",
        },
        {
          skill: "Natural Language Processing",
          level: 4,
          description:
            "Work with transformer models, embedding analysis, and language model behavior",
        },
        {
          skill: "Interpretability Methods",
          level: 3,
          description:
            "Experience with visualization techniques, feature attribution, and circuit analysis",
        },
        {
          skill: "AI Alignment",
          level: 2,
          description:
            "Theoretical understanding of alignment challenges and approaches from coursework",
        },
        {
          skill: "Reinforcement Learning",
          level: 2,
          description:
            "Basic understanding of RL frameworks and RLHF for language model alignment",
        },
      ],
      seeking: [
        "Advanced interpretability techniques for transformer models",
        "Research methodology for alignment-relevant work",
        "Publication strategy for AI safety research",
        "Circuit analysis in language models",
        "Evaluation frameworks for interpretability research",
      ],
    },
    aiSafetyCourses: [
      {
        name: "AI Alignment Fast-Track",
        provider: "BlueDot Impact",
        completed: "March 2023",
        description:
          "8-week intensive course on technical AI alignment approaches",
        certificate: true,
      },
      {
        name: "Machine Learning Safety Scholars Program",
        provider: "Center for AI Safety",
        completed: "June 2023",
        description:
          "12-week program focused on technical approaches to AI safety",
        certificate: true,
      },
      {
        name: "Interpretability for Language Models",
        provider: "Anthropic Workshop",
        completed: "January 2024",
        description:
          "3-day workshop on mechanistic interpretability for large language models",
        certificate: false,
      },
    ],
    researchInterests: [
      {
        area: "Mechanistic Interpretability",
        description:
          "Understanding internal representations in large language models, particularly how abstract concepts are encoded and manipulated",
        priority: "Primary focus",
      },
      {
        area: "Transparency Tools",
        description:
          "Developing interactive tools for analyzing and visualizing neural network behavior",
        priority: "Active research area",
      },
      {
        area: "Emergent Capabilities",
        description:
          "Tracking how capabilities emerge during training and across model scales",
        priority: "Growing interest",
      },
      {
        area: "Alignment Techniques",
        description:
          "Exploring how interpretability insights can inform better alignment methods",
        priority: "Future direction",
      },
    ],
    publications: [
      {
        title: "Interpreting Attention Mechanisms in LLMs",
        venue: "ICLR Workshop on Interpretability",
        year: "2024",
        authors: "Rodriguez, M., Kim, J., & Patel, S.",
        link: "#",
        description:
          "Developed a method to analyze how attention heads in language models process different types of information, with implications for understanding factual recall.",
      },
      {
        title: "Feature Attribution in Transformer-Based Models",
        venue: "NeurIPS Student Workshop",
        year: "2023",
        authors: "Rodriguez, M. & Garcia, A.",
        link: "#",
        description:
          "Compared different attribution methods for understanding token importance in transformer predictions.",
      },
    ],
    currentProjects: [
      {
        title: "Interpretability Tool for In-context Learning",
        description:
          "Developing a visualization system to analyze how language models process in-context examples and apply them to new instances.",
        status: "Active research - 6 months in",
        collaborators:
          "Working with 2 lab colleagues under Prof. Li at MIT CSAIL",
      },
      {
        title: "Circuit Analysis of Factual Recall",
        description:
          "Attempting to identify and characterize circuits responsible for factual recall in large language models.",
        status: "Early stages - 2 months in",
        collaborators: "Solo project with guidance from department advisor",
      },
    ],
    mentorshipGoals: {
      shortTerm: [
        "Refine current research direction to maximize alignment relevance",
        "Develop stronger methodology for evaluating interpretability results",
        "Improve technical writing for upcoming paper submissions",
      ],
      longTerm: [
        "Build connections within the AI safety research community",
        "Prepare for a research career focused on AI alignment",
        "Develop expertise in mechanistic interpretability that contributes meaningfully to alignment",
      ],
      idealMentor:
        "Someone with experience in interpretability research who can provide guidance on research direction and methodology. Ideally someone connected to the broader alignment community who can help me understand which questions are most important to pursue.",
    },
    careerGoals:
      "After completing my PhD, I aim to join a research organization focused on AI alignment and safety, such as Anthropic, Redwood Research, or DeepMind's safety teams. I want to contribute to developing interpretability techniques that can be practically applied to make AI systems more transparent and aligned with human values.",
    availability: {
      schedule: "Flexible, with most availability on evenings and weekends",
      commitment: "Can dedicate 3-5 hours per week to mentorship activities",
      preferredFormat:
        "Video calls every 2-3 weeks with asynchronous communication between sessions",
      startDate: "Available immediately",
    },
    communityInvolvement: [
      "Organizer of AI Safety Reading Group at MIT (15 regular participants)",
      "Contributor to the Alignment Forum (3 posts)",
      "Volunteer at Interpretability Hackathon (2024)",
      "Participant in MATS Program (2023)",
    ],
    recommendedMentors: [
      {
        name: "Dr. Sarah Chen",
        title: "Principal Research Scientist at Anthropic",
        matchScore: "95% match",
        expertise: ["Interpretability Research", "AI Alignment", "ML Safety"],
        matchReason:
          "Strong alignment between your interpretability interests and Dr. Chen's expertise in mechanistic interpretability for large language models. Her experience guiding PhD students in alignment-relevant research is also highly relevant to your goals.",
        profileImage: "/api/placeholder/60/60",
      },
      {
        name: "Dr. James Wilson",
        title: "Research Scientist at DeepMind",
        matchScore: "82% match",
        expertise: ["Neural Networks", "Transparency", "Evaluation Methods"],
        matchReason:
          "Dr. Wilson's work on evaluation frameworks for interpretability research matches your interest in improving methodology. His background bridging academic and industry research is also relevant to your career goals.",
        profileImage: "/api/placeholder/60/60",
      },
      {
        name: "Dr. Maya Patel",
        title: "Assistant Professor at UC Berkeley",
        matchScore: "78% match",
        expertise: ["NLP", "Emergent Capabilities", "Alignment Theory"],
        matchReason:
          "Dr. Patel's work on emergent capabilities in language models aligns with your growing interest in this area. Her academic position provides perspective on research and publication strategy in academia.",
        profileImage: "/api/placeholder/60/60",
      },
    ],
    currentMentor: null, // This would be populated if they had an active mentor
  };

  // Render stars for skill level
  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`h-4 w-4 mr-0.5 rounded-full ${
              i < level ? "bg-green-400" : "bg-gray-200"
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
                  src={mentee.profileImage}
                  alt={mentee.name}
                /> */}
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 md:flex-1">
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      {mentee.name}
                    </h1>
                    <p className="text-sm text-gray-600">
                      {mentee.title} at {mentee.organization}
                    </p>
                    <div className="mt-1 flex items-center">
                      <span className="text-sm text-gray-500 mr-4">
                        {mentee.location}
                      </span>
                      <span className="text-sm text-gray-500">
                        {mentee.timezone}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {mentee.languages.map((language, index) => (
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
                      Member since {mentee.memberSince}
                    </div>
                    <div className="mt-1">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {mentee.lookingForMentor
                          ? "Actively Seeking Mentor"
                          : "Not Currently Seeking Mentor"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-green-50 p-3 rounded-md">
                  <h3 className="text-sm font-semibold text-green-800">
                    Primary Research Interests
                  </h3>
                  <div className="mt-2 grid grid-cols-1 gap-2">
                    {mentee.researchInterests
                      .slice(0, 2)
                      .map((interest, index) => (
                        <div key={index}>
                          <span className="text-sm font-medium text-gray-700">
                            {interest.area}
                          </span>
                          <p className="text-xs text-gray-600">
                            {interest.description}
                          </p>
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
                onClick={() => setActiveTab("skills")}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === "skills"
                    ? "border-b-2 border-purple-500 text-purple-700"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Skills & Education
              </button>
              <button
                onClick={() => setActiveTab("research")}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === "research"
                    ? "border-b-2 border-purple-500 text-purple-700"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Research & Projects
              </button>
              <button
                onClick={() => setActiveTab("mentorship")}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === "mentorship"
                    ? "border-b-2 border-purple-500 text-purple-700"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Mentorship Goals
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
                {mentee.about.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <h2 className="text-lg font-medium text-gray-900 mt-8 mb-4">
                Career Experience
              </h2>
              <div className="mb-4">
                <h3 className="text-md font-medium text-gray-900">Current</h3>
                <p className="text-gray-700">{mentee.career.current}</p>
              </div>

              <h3 className="text-md font-medium text-gray-900 mb-3">
                Previous Roles
              </h3>
              <div className="space-y-6">
                {mentee.career.previous.map((job, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 mt-1">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                        <div className="h-4 w-4 rounded-full bg-green-600"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-md font-medium text-gray-900">
                        {job.role}
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
                {mentee.education.map((edu, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 mt-1">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                        <div className="h-4 w-4 rounded-full bg-green-600"></div>
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

              <h2 className="text-lg font-medium text-gray-900 mt-8 mb-4">
                Community Involvement
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                {mentee.communityInvolvement.map((activity, index) => (
                  <li key={index} className="text-gray-700">
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Skills & Education Tab */}
        {activeTab === "skills" && (
          <div className="bg-white shadow rounded-lg">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {mentee.skills.technical.map((skill, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-md font-medium text-gray-900">
                        {skill.skill}
                      </h3>
                      {renderSkillLevel(skill.level)}
                    </div>
                    <p className="text-sm text-gray-700">{skill.description}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Skills Seeking to Develop
              </h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {mentee.skills.seeking.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-purple-100 text-purple-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h2 className="text-lg font-medium text-gray-900 mb-4">
                AI Safety Courses Completed
              </h2>
              <div className="space-y-4">
                {mentee.aiSafetyCourses.map((course, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex justify-between">
                      <h3 className="text-md font-medium text-gray-900">
                        {course.name}
                      </h3>
                      {course.certificate && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Certificate
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">
                      {course.provider} • Completed {course.completed}
                    </p>
                    <p className="mt-1 text-sm text-gray-700">
                      {course.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Research & Projects Tab */}
        {activeTab === "research" && (
          <div className="bg-white shadow rounded-lg">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Research Interests
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {mentee.researchInterests.map((interest, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex justify-between">
                      <h3 className="text-md font-medium text-gray-900">
                        {interest.area}
                      </h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        {interest.priority}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-700">
                      {interest.description}
                    </p>
                  </div>
                ))}
              </div>

              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Current Projects
              </h2>
              <div className="space-y-4 mb-8">
                {mentee.currentProjects.map((project, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <h3 className="text-md font-medium text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {project.status}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Collaborators: {project.collaborators}
                    </p>
                    <p className="mt-2 text-sm text-gray-700">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>

              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Publications
              </h2>
              <div className="space-y-4">
                {mentee.publications.map((pub, index) => (
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
            </div>
          </div>
        )}

        {/* Mentorship Goals Tab */}
        {activeTab === "mentorship" && (
          <div className="bg-white shadow rounded-lg">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-900">
                  Mentorship Goals
                </h2>
                {mentee.lookingForMentor && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Actively Seeking Mentor
                  </span>
                )}
              </div>

              <div className="bg-purple-50 rounded-lg p-4 mb-6">
                <h3 className="text-md font-medium text-gray-900 mb-2">
                  Ideal Mentor
                </h3>
                <p className="text-gray-700">
                  {mentee.mentorshipGoals.idealMentor}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-md font-medium text-gray-900 mb-2">
                    Short-term Goals
                  </h3>
                  <ul className="space-y-2">
                    {mentee.mentorshipGoals.shortTerm.map((goal, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 mr-2 mt-1">
                          <div className="h-4 w-4 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-700">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-md font-medium text-gray-900 mb-2">
                    Long-term Goals
                  </h3>
                  <ul className="space-y-2">
                    {mentee.mentorshipGoals.longTerm.map((goal, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 mr-2 mt-1">
                          <div className="h-4 w-4 rounded-full bg-purple-500"></div>
                        </div>
                        <span className="text-gray-700">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <h3 className="text-md font-medium text-gray-900 mb-2">
                Career Goals
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-gray-700">{mentee.careerGoals}</p>
              </div>

              <h3 className="text-md font-medium text-gray-900 mb-2">
                Availability & Commitment
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="border border-gray-200 rounded-lg p-3">
                  <span className="text-sm font-medium text-gray-700">
                    Schedule
                  </span>
                  <p className="text-sm text-gray-600">
                    {mentee.availability.schedule}
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-3">
                  <span className="text-sm font-medium text-gray-700">
                    Time Commitment
                  </span>
                  <p className="text-sm text-gray-600">
                    {mentee.availability.commitment}
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-3">
                  <span className="text-sm font-medium text-gray-700">
                    Preferred Format
                  </span>
                  <p className="text-sm text-gray-600">
                    {mentee.availability.preferredFormat}
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-3">
                  <span className="text-sm font-medium text-gray-700">
                    Start Date
                  </span>
                  <p className="text-sm text-gray-600">
                    {mentee.availability.startDate}
                  </p>
                </div>
              </div>

              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Recommended Mentors
              </h2>
              <div className="space-y-4">
                {mentee.recommendedMentors.map((mentor, index) => (
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
                        src={mentor.profileImage} 
                        alt={mentor.name} 
                        className="h-12 w-12 rounded-full mr-4"
                      /> */}
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="text-md font-medium text-gray-900">
                            {mentor.name}
                          </h3>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {mentor.matchScore}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{mentor.title}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {mentor.expertise.map((area, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                        <p className="mt-2 text-sm text-gray-700">
                          <span className="font-medium">Match reason:</span>{" "}
                          {mentor.matchReason}
                        </p>
                        <button className="mt-3 px-3 py-1 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700 transition">
                          View Profile
                        </button>
                      </div>
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

export default MenteeProfile;
