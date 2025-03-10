"use client";

import CoursePlaceholder from '@/components/CoursePlaceholder';
import ProfilePlaceholder from '@/components/ProfilePlaceholder';
import Link from 'next/link';
import React, { useState } from 'react';

const CommunityHub = () => {
  const [activeTab, setActiveTab] = useState('groups');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All Topics');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  
  // Sample data for community groups
  const communityGroups = [
    {
      id: 'g1',
      name: 'Interpretability Research Circle',
      description: 'Focused on developing and sharing techniques for understanding neural network internals, with emphasis on language models.',
      members: 47,
      topics: ['Interpretability', 'Language Models', 'Neural Networks'],
      activity: 'High',
      lastActive: '2 hours ago',
      image: '/api/placeholder/80/80'
    },
    {
      id: 'g2',
      name: 'AI Governance Working Group',
      description: 'Discussing policy approaches, regulatory frameworks, and governance structures for advanced AI systems.',
      members: 38,
      topics: ['Governance', 'Policy', 'Regulation'],
      activity: 'Medium',
      lastActive: '1 day ago',
      image: '/api/placeholder/80/80'
    },
    {
      id: 'g3',
      name: 'Alignment Theory Discussion',
      description: 'Exploring theoretical approaches to aligning AI systems with human values and intentions.',
      members: 52,
      topics: ['Alignment', 'Value Learning', 'Theoretical Approaches'],
      activity: 'High',
      lastActive: '5 hours ago',
      image: '/api/placeholder/80/80'
    },
    {
      id: 'g4',
      name: 'AI Safety Beginners',
      description: 'Support group for newcomers to the field. Ask questions, share resources, and build foundational knowledge.',
      members: 124,
      topics: ['Education', 'Career Development', 'Fundamentals'],
      activity: 'Very High',
      lastActive: '20 minutes ago',
      image: '/api/placeholder/80/80'
    },
    {
      id: 'g5',
      name: 'ML Safety Engineering',
      description: 'Technical discussions on implementing safety measures in machine learning systems. Code sharing and practical approaches.',
      members: 35,
      topics: ['ML Engineering', 'Robustness', 'Testing'],
      activity: 'Medium',
      lastActive: '2 days ago',
      image: '/api/placeholder/80/80'
    },
    {
      id: 'g6',
      name: 'AI Safety Reading Group',
      description: 'Weekly discussions of key papers and books in AI safety. Current focus: mechanistic interpretability literature.',
      members: 63,
      topics: ['Literature Review', 'Research Discussion', 'Interpretability'],
      activity: 'Medium',
      lastActive: '3 days ago',
      image: '/api/placeholder/80/80'
    }
  ];
  
  // Sample upcoming events
  const upcomingEvents = [
    {
      id: 'e1',
      title: 'Interpretability Workshop: Circuit Analysis in LLMs',
      date: 'March 12, 2025',
      time: '10:00 AM - 12:00 PM (EDT)',
      organizer: 'Dr. Sarah Chen',
      attendees: 18,
      capacity: 25,
      format: 'Virtual Workshop',
      description: 'Hands-on workshop exploring techniques for identifying and understanding circuits in large language models.',
      topics: ['Interpretability', 'Language Models']
    },
    {
      id: 'e2',
      title: 'Career Paths in AI Safety: Panel Discussion',
      date: 'March 15, 2025',
      time: '1:00 PM - 2:30 PM (EDT)',
      organizer: 'BlueDot Impact Team',
      attendees: 42,
      capacity: 100,
      format: 'Virtual Panel',
      description: 'Researchers and practitioners discuss different career paths in AI safety, from technical research to policy work.',
      topics: ['Career Development', 'Professional Growth']
    },
    {
      id: 'e3',
      title: 'Governance Reading Group: International AI Regulation',
      date: 'March 18, 2025',
      time: '11:00 AM - 12:00 PM (EDT)',
      organizer: 'James Wilson',
      attendees: 12,
      capacity: 20,
      format: 'Discussion Group',
      description: 'Monthly reading group focusing on approaches to international coordination for AI regulation.',
      topics: ['Governance', 'Policy', 'Regulation']
    }
  ];
  
  // Sample discussion threads
  const discussionThreads = [
    {
      id: 't1',
      title: 'Detecting emergent capabilities during training',
      author: 'Miguel Rodriguez',
      authorRole: 'PhD Student at MIT',
      date: 'March 7, 2025',
      replies: 24,
      views: 156,
      lastReply: '3 hours ago',
      topics: ['Interpretability', 'Emergent Behavior', 'Training Dynamics'],
      preview: 'I\'ve been working on methods to track the emergence of new capabilities during language model training. Has anyone tried...'
    },
    {
      id: 't2',
      title: 'Implementing RLHF pipelines: Practical challenges',
      author: 'Dr. Anika Patel',
      authorRole: 'Research Lead at DeepMind',
      date: 'March 5, 2025',
      replies: 37,
      views: 209,
      lastReply: '1 hour ago',
      topics: ['RLHF', 'ML Engineering', 'Implementation'],
      preview: 'Our team has been implementing RLHF pipelines for alignment, and we\'ve encountered several practical challenges that aren\'t discussed in the literature...'
    },
    {
      id: 't3',
      title: 'Survey: Most important open problems in AI alignment',
      author: 'James Wilson',
      authorRole: 'Policy Researcher at GovAI',
      date: 'March 3, 2025',
      replies: 52,
      views: 312,
      lastReply: '30 minutes ago',
      topics: ['Alignment', 'Research Directions', 'Open Problems'],
      preview: 'I\'m conducting a survey on what researchers consider the most important open problems in AI alignment. If you could solve just three problems...'
    },
    {
      id: 't4',
      title: 'Best resources for newcomers to AI governance?',
      author: 'Yuki Tanaka',
      authorRole: 'Policy Researcher',
      date: 'March 1, 2025',
      replies: 19,
      views: 145,
      lastReply: '2 days ago',
      topics: ['Governance', 'Education', 'Resources'],
      preview: 'I\'m organizing a study group on AI governance and looking for the best introductory resources, particularly on international coordination...'
    },
    {
      id: 't5',
      title: 'Collaborative project: Safety benchmarks for language models',
      author: 'Dr. Sarah Chen',
      authorRole: 'Principal Research Scientist at Anthropic',
      date: 'February 28, 2025',
      replies: 41,
      views: 223,
      lastReply: '1 day ago',
      topics: ['Benchmarks', 'Evaluation', 'Language Models', 'Collaboration'],
      preview: 'I\'m starting a collaborative project to develop comprehensive safety benchmarks for language models. Looking for contributors with expertise in...'
    }
  ];
  
  // Sample AI safety topics/tags for filtering
  const topics = [
    'All Topics',
    'Alignment',
    'Interpretability',
    'Governance',
    'Policy',
    'RLHF',
    'Language Models',
    'Evaluation',
    'Benchmarks',
    'ML Engineering',
    'Robustness',
    'Education',
    'Career Development',
    'Value Learning',
    'Emergent Behavior'
  ];
  
  // Sample active community members
  const activeMembers = [
    {
      id: 'm1',
      name: 'Dr. Sarah Chen',
      role: 'Principal Research Scientist at Anthropic',
      contributions: 37,
      topics: ['Interpretability', 'Alignment', 'Language Models'],
      image: '/api/placeholder/50/50',
      expertise: 'Mentor'
    },
    {
      id: 'm2',
      name: 'Miguel Rodriguez',
      role: 'PhD Student at MIT',
      contributions: 28,
      topics: ['Interpretability', 'Emergent Behavior'],
      image: '/api/placeholder/50/50',
      expertise: 'Mentee'
    },
    {
      id: 'm3',
      name: 'James Wilson',
      role: 'Policy Researcher at GovAI',
      contributions: 42,
      topics: ['Governance', 'Policy', 'Regulation'],
      image: '/api/placeholder/50/50',
      expertise: 'Mentor'
    },
    {
      id: 'm4',
      name: 'Yuki Tanaka',
      role: 'Policy Researcher',
      contributions: 15,
      topics: ['Governance', 'International Relations'],
      image: '/api/placeholder/50/50',
      expertise: 'Mentee'
    },
    {
      id: 'm5',
      name: 'Dr. Anika Patel',
      role: 'Research Lead at DeepMind',
      contributions: 31,
      topics: ['Safety Engineering', 'Robustness', 'ML Engineering'],
      image: '/api/placeholder/50/50',
      expertise: 'Mentor'
    }
  ];
  
  // Sample resources
  const sharedResources = [
    {
      id: 'r1',
      title: 'Mechanistic Interpretability: A Comprehensive Guide',
      type: 'Guide',
      author: 'Dr. Sarah Chen',
      date: 'February 15, 2025',
      views: 312,
      downloads: 184,
      description: 'Comprehensive guide to mechanistic interpretability techniques for neural networks, with a focus on language models.',
      tags: ['Interpretability', 'Language Models', 'Guides']
    },
    {
      id: 'r2',
      title: 'Circuit Analysis Toolkit for PyTorch',
      type: 'Code Repository',
      author: 'Miguel Rodriguez',
      date: 'February 24, 2025',
      views: 145,
      downloads: 67,
      description: 'Open-source toolkit for identifying and analyzing circuits in neural networks implemented in PyTorch.',
      tags: ['Interpretability', 'Tools', 'Code', 'PyTorch']
    },
    {
      id: 'r3',
      title: 'AI Governance Frameworks: Comparative Analysis',
      type: 'Research Report',
      author: 'James Wilson',
      date: 'March 1, 2025',
      views: 203,
      downloads: 119,
      description: 'Detailed analysis of AI governance frameworks across different jurisdictions, with recommendations for international coordination.',
      tags: ['Governance', 'Policy', 'Regulation']
    }
  ];

  // Filter groups based on search term and selected topic
  const filteredGroups = communityGroups.filter(group => {
    const matchesTerm = group.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       group.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTopic = selectedTopic === 'All Topics' || group.topics.includes(selectedTopic);
    return matchesTerm && matchesTopic;
  });
  
  // Filter discussions based on search term and selected topic
  const filteredDiscussions = discussionThreads.filter(thread => {
    const matchesTerm = thread.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       thread.preview.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTopic = selectedTopic === 'All Topics' || thread.topics.includes(selectedTopic);
    return matchesTerm && matchesTopic;
  });

  // Filter events based on search term and selected topic
  const filteredEvents = upcomingEvents.filter(event => {
    const matchesTerm = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTopic = selectedTopic === 'All Topics' || event.topics.includes(selectedTopic);
    return matchesTerm && matchesTopic;
  });

  // Group Creation Modal
  const CreateGroupModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-md w-full max-h-screen overflow-y-auto p-6">
        <h2 className="text-xl font-bold mb-4">Create New Community Group</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Group Name</label>
          <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter a descriptive name" />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea className="w-full border border-gray-300 rounded px-3 py-2 h-24" placeholder="Describe the purpose and focus of this group"></textarea>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Topics (Select up to 5)</label>
          <div className="grid grid-cols-2 gap-2">
            {topics.slice(1).map((topic, index) => (
              <label key={index} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">{topic}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Privacy</label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="radio" name="privacy" className="mr-2" defaultChecked />
              <span className="text-sm">Public (Anyone can join and read content)</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="privacy" className="mr-2" />
              <span className="text-sm">Private (Approval required to join)</span>
            </label>
          </div>
        </div>
        
        <div className="flex justify-end space-x-3 mt-6">
          <button 
            className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
            onClick={() => setShowCreateModal(false)}
          >
            Cancel
          </button>
          <button 
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            onClick={() => setShowCreateModal(false)}
          >
            Create Group
          </button>
        </div>
      </div>
    </div>
  );

  // Event Creation Modal
  const CreateEventModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-md w-full max-h-screen overflow-y-auto p-6">
        <h2 className="text-xl font-bold mb-4">Create New Event</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
          <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter a descriptive title" />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea className="w-full border border-gray-300 rounded px-3 py-2 h-24" placeholder="Describe the event, its purpose and what participants will gain"></textarea>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input type="date" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
            <input type="time" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Format</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option value="workshop">Virtual Workshop</option>
            <option value="discussion">Discussion Group</option>
            <option value="presentation">Presentation</option>
            <option value="panel">Panel Discussion</option>
            <option value="hackathon">Hackathon</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Topics (Select up to 3)</label>
          <div className="grid grid-cols-2 gap-2">
            {topics.slice(1).map((topic, index) => (
              <label key={index} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">{topic}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Maximum Participants</label>
          <input type="number" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Enter max number or leave blank for unlimited" />
        </div>
        
        <div className="flex justify-end space-x-3 mt-6">
          <button 
            className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
            onClick={() => setShowEventModal(false)}
          >
            Cancel
          </button>
          <button 
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            onClick={() => setShowEventModal(false)}
          >
            Create Event
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold">
                <Link href="/"><span className="text-gray-900">BlueDot Impact</span></Link>
                <span className="text-gray-500"> | </span>
                <span className="text-purple-600">Community</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 rounded border border-gray-300 text-gray-700 text-sm">
                Dashboard
              </button>
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Community Hub</h1>
            <p className="text-gray-600">Connect, collaborate, and learn with the AI safety community</p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
            <button 
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 flex items-center"
              onClick={() => setShowCreateModal(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              Create Group
            </button>
            <button 
              className="px-4 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-50 flex items-center"
              onClick={() => setShowEventModal(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Create Event
            </button>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="sm:flex sm:items-center">
            <div className="relative flex-grow mb-3 sm:mb-0 sm:mr-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Search community groups, discussions, or events"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="sm:flex sm:items-center">
              <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mr-2 hidden sm:block">
                Filter by Topic:
              </label>
              <select
                id="topic"
                className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
              >
                {topics.map((topic, index) => (
                  <option key={index} value={topic}>{topic}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Main Content Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('groups')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'groups'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Community Groups
              </button>
              <button
                onClick={() => setActiveTab('discussions')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'discussions'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Discussions
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'events'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Events
              </button>
              <button
                onClick={() => setActiveTab('resources')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'resources'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Resources
              </button>
              <button
                onClick={() => setActiveTab('members')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'members'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Active Members
              </button>
            </nav>
          </div>
        </div>

        {/* Community Groups Tab */}
        {activeTab === 'groups' && (
          <div className="space-y-6">
            {filteredGroups.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredGroups.map((group) => (
                  <div key={group.id} className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-start mb-4">
                        <CoursePlaceholder width={85} height={64} className="mr-4" />
                        {/* <img src={group.image} alt={group.name} className="w-12 h-12 rounded-lg mr-4" /> */}
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{group.name}</h3>
                          <p className="text-sm text-gray-500">{group.members} members • {group.activity} activity</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{group.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {group.topics.map((topic, index) => (
                          <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            {topic}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                        <span className="text-xs text-gray-500">Last active: {group.lastActive}</span>
                        <button className="px-4 py-1 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700">
                          Join Group
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <svg className="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No groups found</h3>
                <p className="mt-1 text-sm text-gray-500">Try changing your search or filter criteria.</p>
                <div className="mt-6">
                  <button
                    onClick={() => setShowCreateModal(true)}
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Create a new group
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Discussions Tab */}
        {activeTab === 'discussions' && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {filteredDiscussions.length > 0 ? (
                filteredDiscussions.map((thread) => (
                  <div key={thread.id} className="p-6 hover:bg-gray-50">
                    <div className="sm:flex sm:justify-between sm:items-start">
                      <div className="sm:flex-1">
                        <h3 className="text-lg font-medium text-gray-900 hover:text-purple-600">{thread.title}</h3>
                        <div className="mt-1 flex items-center">
                          <span className="text-sm text-gray-500">Started by </span>
                          <span className="ml-1 text-sm font-medium text-gray-900">{thread.author}</span>
                          <span className="mx-1 text-sm text-gray-500">•</span>
                          <span className="text-sm text-gray-500">{thread.date}</span>
                        </div>
                        <p className="mt-3 text-sm text-gray-600">{thread.preview}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {thread.topics.map((topic, index) => (
                            <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col sm:items-end">
                        <div className="flex space-x-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <svg className="h-4 w-4 mr-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                            </svg>
                            {thread.replies} replies
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <svg className="h-4 w-4 mr-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                            {thread.views} views
                          </div>
                        </div>
                        <div className="mt-2 text-xs text-gray-500">Last reply: {thread.lastReply}</div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <svg className="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No discussions found</h3>
                  <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
                  <div className="mt-6">
                    <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                      Start a new discussion
                    </button>
                  </div>
                </div>
              )}
            </div>
            {filteredDiscussions.length > 0 && (
              <div className="bg-gray-50 px-6 py-4">
                <button className="text-center w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                  Start a new discussion
                </button>
              </div>
            )}
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="space-y-6">
            {filteredEvents.length > 0 ? (
              <div className="bg-white shadow rounded-lg overflow-hidden divide-y divide-gray-200">
                {filteredEvents.map((event) => (
                  <div key={event.id} className="p-6 hover:bg-gray-50">
                    <div className="sm:flex sm:justify-between sm:items-start">
                      <div className="sm:flex-1">
                        <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
                        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                          <div className="flex items-center text-sm text-gray-500">
                            <svg className="h-4 w-4 mr-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            {event.date}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <svg className="h-4 w-4 mr-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            {event.time}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <svg className="h-4 w-4 mr-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                            {event.attendees}/{event.capacity} attending
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-gray-600">{event.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {event.format}
                          </span>
                          {event.topics.map((topic, index) => (
                            <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col sm:items-end">
                        <div className="text-sm font-medium text-gray-900">Organized by: {event.organizer}</div>
                        <button className="mt-4 px-4 py-2 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700">
                          {event.attendees >= event.capacity ? 'Join Waitlist' : 'Register'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <svg className="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No events found</h3>
                <p className="mt-1 text-sm text-gray-500">Try changing your search or filter criteria.</p>
                <div className="mt-6">
                  <button
                    onClick={() => setShowEventModal(true)}
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Create a new event
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <div className="space-y-6">
            <div className="bg-white shadow rounded-lg overflow-hidden divide-y divide-gray-200">
              {sharedResources.map((resource) => (
                <div key={resource.id} className="p-6 hover:bg-gray-50">
                  <div className="sm:flex sm:justify-between sm:items-start">
                    <div className="sm:flex-1">
                      <div className="flex items-center">
                        <h3 className="text-lg font-medium text-gray-900">{resource.title}</h3>
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {resource.type}
                        </span>
                      </div>
                      <div className="mt-1 flex items-center">
                        <span className="text-sm text-gray-500">Shared by </span>
                        <span className="ml-1 text-sm font-medium text-gray-900">{resource.author}</span>
                        <span className="mx-1 text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">{resource.date}</span>
                      </div>
                      <p className="mt-3 text-sm text-gray-600">{resource.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {resource.tags.map((tag, index) => (
                          <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col sm:items-end">
                      <div className="flex space-x-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <svg className="h-4 w-4 mr-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                          </svg>
                          {resource.views} views
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <svg className="h-4 w-4 mr-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          {resource.downloads} downloads
                        </div>
                      </div>
                      <button className="mt-4 px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 px-6 py-4 rounded-lg shadow">
              <div className="sm:flex sm:justify-between sm:items-center">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Share your resources with the community</h3>
                  <p className="mt-1 text-sm text-gray-500">Upload guides, code, papers, or other resources to help others in their AI safety work.</p>
                </div>
                <button className="mt-3 sm:mt-0 w-full sm:w-auto px-4 py-2 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700">
                  Share Resource
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Members Tab */}
        {activeTab === 'members' && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-medium text-gray-900 mb-6">Active Community Members</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {activeMembers.map((member) => (
                  <div key={member.id} className="flex items-start border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                    <ProfilePlaceholder size={50} className="mr-4" />
                    {/* <img src={member.image} alt={member.name} className="h-12 w-12 rounded-full mr-4" /> */}
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-md font-medium text-gray-900">{member.name}</h3>
                          <p className="text-sm text-gray-600">{member.role}</p>
                        </div>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                          member.expertise === 'Mentor' 
                            ? 'bg-purple-100 text-purple-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {member.expertise}
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {member.topics.map((topic, index) => (
                          <span key={index} className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {topic}
                          </span>
                        ))}
                      </div>
                      <div className="mt-2 flex justify-between items-center">
                        <span className="text-xs text-gray-500">{member.contributions} contributions</span>
                        <button className="text-sm text-purple-600 hover:text-purple-800">View Profile</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-4">
              <button className="text-center w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                View all community members
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Show Create Group Modal if active */}
      {showCreateModal && <CreateGroupModal />}
      
      {/* Show Create Event Modal if active */}
      {showEventModal && <CreateEventModal />}
    </div>
  );
};

export default CommunityHub;