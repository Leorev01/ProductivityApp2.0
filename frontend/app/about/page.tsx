'use client';

import React from 'react';
import { 
  HeartIcon,
  LightBulbIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  TrophyIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { 
  HeartIcon as HeartIconSolid,
  StarIcon as StarIconSolid 
} from '@heroicons/react/24/solid';
import Navbar from '@/components/Navbars/Navbar';
import Link from 'next/link';

const About = () => {
  const values = [
    {
      icon: HeartIcon,
      title: 'Empowerment',
      description: 'We believe everyone has the power to transform their lives through consistent, positive habits.',
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      icon: UserGroupIcon,
      title: 'Community',
      description: 'Building habits is easier with friends. We foster supportive communities that celebrate success together.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We use cutting-edge technology and behavioral science to make habit formation intuitive and effective.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: TrophyIcon,
      title: 'Achievement',
      description: 'Every small step counts. We celebrate progress and help you recognize your growth along the journey.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      bio: 'Former behavioral psychologist passionate about habit formation and personal development.',
      image: '/api/placeholder/150/150',
      linkedin: '#'
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-Founder',
      bio: 'Full-stack developer with 10+ years experience building scalable apps that millions love.',
      image: '/api/placeholder/150/150',
      linkedin: '#'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Head of Design',
      bio: 'UX designer focused on creating intuitive, beautiful experiences that motivate users.',
      image: '/api/placeholder/150/150',
      linkedin: '#'
    },
    {
      name: 'David Kim',
      role: 'Head of Product',
      bio: 'Product strategist who turned his own habit struggles into insights that help millions.',
      image: '/api/placeholder/150/150',
      linkedin: '#'
    }
  ];

  const milestones = [
    {
      year: '2022',
      title: 'The Idea',
      description: 'Founded by two friends who struggled with maintaining healthy habits despite trying countless apps.',
      icon: LightBulbIcon
    },
    {
      year: '2023',
      title: 'Beta Launch',
      description: 'Released our MVP to 100 beta users. Achieved 85% daily retention rate within first month.',
      icon: RocketLaunchIcon
    },
    {
      year: '2024',
      title: 'Growing Community',
      description: 'Reached 10,000+ active users with 50,000+ habits tracked. Launched social features.',
      icon: UserGroupIcon
    },
    {
      year: '2025',
      title: 'AI Integration',
      description: 'Introduced AI-powered insights and personalized recommendations. Expanding globally.',
      icon: SparklesIcon
    }
  ];

  const stats = [
    { value: '10K+', label: 'Happy Users', icon: HeartIconSolid },
    { value: '50K+', label: 'Habits Tracked', icon: ChartBarIcon },
    { value: '85%', label: 'Success Rate', icon: StarIconSolid },
    { value: '99.9%', label: 'Uptime', icon: TrophyIcon }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                🌟 About Us
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Building Better Habits
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">
                Together
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              We&apos;re on a mission to help people build lasting, positive habits that transform their lives. 
              Through the power of community, technology, and behavioral science, we make habit formation 
              simple, social, and sustainable.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/signup" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                Join Our Community
              </Link>
              <Link href="/contact" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white/80 backdrop-blur-sm border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-3 group">
                <div className="flex justify-center">
                  <stat.icon className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
                </div>
                <div className="text-3xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            It all started with a simple frustration: why was it so hard to stick to good habits?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              From Frustration to Innovation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Like many people, our founders struggled with maintaining healthy habits. They tried countless apps, 
              journals, and systems, but nothing seemed to stick. The problem wasn&apos;t motivation—it was 
              accountability, community, and the right tools.
            </p>
            <p className="text-gray-600 leading-relaxed">
              That&apos;s when they realized: habits aren&apos;t just personal—they&apos;re social. We&apos;re more likely 
              to succeed when we have friends cheering us on, sharing the journey, and celebrating our wins.
            </p>
            <p className="text-gray-600 leading-relaxed">
              So they built ProductivityApp—not just another habit tracker, but a social platform that makes 
              building better habits fun, engaging, and sustainable.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <HeartIconSolid className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Our Mission</div>
                  </div>
                </div>
                <p className="text-lg leading-relaxed">
                  To empower people to build lasting, positive habits through the power of community, 
                  technology, and behavioral science.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Journey
          </h3>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <milestone.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {milestone.year}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900">{milestone.title}</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These principles guide everything we do and shape how we build our product.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`w-14 h-14 ${value.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className={`w-7 h-7 ${value.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re a passionate team of builders, designers, and habit enthusiasts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-blue-600 text-sm font-medium mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
              Be part of a community that&apos;s transforming lives through better habits.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/signup" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl">
                Start Your Journey
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">ProductivityApp</h3>
              <p className="text-gray-400">Building better habits, one day at a time.</p>
            </div>
            <div className="flex justify-center space-x-8 mb-8">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                © 2024 ProductivityApp. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;