'use client';

import React from 'react';
import { 
  CheckCircleIcon, 
  UserGroupIcon, 
  TrophyIcon, 
  ChartBarIcon,
  CalendarDaysIcon,
  BellIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  LockClosedIcon,
  SparklesIcon,
  FireIcon,
  CogIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import Navbar from '@/components/Navbars/Navbar';
import Link from 'next/link';

const Features = () => {
  const features = [
    {
      icon: CheckCircleIcon,
      title: 'Habit Tracking',
      description: 'Build and maintain healthy habits with our intuitive tracking system. Set daily goals, track progress, and celebrate milestones.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100'
    },
    {
      icon: UserGroupIcon,
      title: 'Friend Network',
      description: 'Connect with friends, share progress, and motivate each other. Build accountability partnerships that drive success.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100'
    },
    {
      icon: TrophyIcon,
      title: 'Achievement System',
      description: 'Earn XP, unlock achievements, and level up your productivity. Gamify your journey to better habits.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      hoverColor: 'hover:bg-yellow-100'
    },
    {
      icon: ChartBarIcon,
      title: 'Progress Analytics',
      description: 'Visualize your journey with detailed charts and insights. Track streaks, completion rates, and performance trends.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100'
    },
    {
      icon: CalendarDaysIcon,
      title: 'Smart Scheduling',
      description: 'Plan your habits with intelligent scheduling. Set reminders, create routines, and optimize your daily workflow.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      hoverColor: 'hover:bg-indigo-100'
    },
    {
      icon: BellIcon,
      title: 'Smart Notifications',
      description: 'Stay on track with personalized reminders and motivational messages. Never miss an important habit again.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-100'
    },
    {
      icon: FireIcon,
      title: 'Streak Tracking',
      description: 'Maintain momentum with visual streak counters. Build consistency and celebrate your dedication.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100'
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile Optimized',
      description: 'Access your habits anywhere with our responsive design. Perfect for on-the-go productivity.',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
      hoverColor: 'hover:bg-gray-100'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Sync',
      description: 'Your data is automatically synced across all devices. Start on mobile, continue on desktop.',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      hoverColor: 'hover:bg-cyan-100'
    },
    {
      icon: LockClosedIcon,
      title: 'Privacy First',
      description: 'Your personal data is encrypted and secure. We prioritize your privacy and data protection.',
      color: 'text-slate-600',
      bgColor: 'bg-slate-50',
      hoverColor: 'hover:bg-slate-100'
    },
    {
      icon: SparklesIcon,
      title: 'AI Insights',
      description: 'Get personalized recommendations and insights powered by AI to optimize your habit-building journey.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      hoverColor: 'hover:bg-pink-100'
    },
    {
      icon: CogIcon,
      title: 'Customizable',
      description: 'Tailor the app to your needs with custom categories, themes, and notification preferences.',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      hoverColor: 'hover:bg-emerald-100'
    }
  ];

  const stats = [
    { value: '10K+', label: 'Active Users', color: 'text-blue-600' },
    { value: '50K+', label: 'Habits Tracked', color: 'text-green-600' },
    { value: '85%', label: 'Success Rate', color: 'text-purple-600' },
    { value: '24/7', label: 'Support', color: 'text-orange-600' }
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
                🚀 Powerful Features
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Life with
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">
                Better Habits
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Discover all the tools and features designed to help you build lasting habits, 
              stay motivated, and achieve your goals with friends by your side.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/signup" className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2">
                Get Started Free
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/demo" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md">
                View Demo
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
                <div className={`text-4xl font-bold ${stat.color} group-hover:scale-110 transition-transform duration-200`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From habit tracking to social features, we&apos;ve built everything you need 
            to create lasting positive change in your life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${feature.bgColor} ${feature.hoverColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
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
              Ready to Transform Your Habits?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
              Join thousands of users who are already building better habits and achieving their goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/signup" className="group bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2">
                Start Your Journey
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
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

export default Features;