'use client';

import Link from 'next/link';
import { useState } from 'react';

const features = [
  {
    icon: '🎙️',
    title: 'Voice-First AI',
    description: 'Natural conversations with real-time voice AI. Just speak, and ORU understands.',
  },
  {
    icon: '📅',
    title: 'Smart Calendar',
    description: 'Seamless Google Calendar integration. Schedule, reschedule, and manage events effortlessly.',
  },
  {
    icon: '📧',
    title: 'Email Intelligence',
    description: 'Connect Gmail or any IMAP email. Get summaries, drafts, and smart replies.',
  },
  {
    icon: '✅',
    title: 'Task Management',
    description: 'AI-powered task creation and tracking. Never miss a deadline again.',
  },
  {
    icon: '🧠',
    title: 'Mind Mapping',
    description: 'Organize your thoughts visually. ORU helps you connect ideas and insights.',
  },
  {
    icon: '🌐',
    title: 'Live Translation',
    description: 'Real-time translation mode for seamless multilingual conversations.',
  },
];

const modes = [
  { name: 'Interactive', desc: 'Chat & get help with any task', icon: '💬' },
  { name: 'Translation', desc: 'Real-time language translation', icon: '🌍' },
  { name: 'Meeting', desc: 'Subtle guidance during calls', icon: '👥' },
  { name: 'Notes', desc: 'Silent note-taking mode', icon: '📝' },
];

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-[#09090B]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#09090B]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A962] to-[#A88B4A] flex items-center justify-center">
              <span className="text-xl font-bold text-black">O</span>
            </div>
            <span className="text-xl font-semibold text-white">ORU</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#modes" className="text-gray-400 hover:text-white transition-colors">AI Modes</a>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
          </div>
          <a 
            href="https://apps.apple.com" 
            className="px-5 py-2.5 bg-gradient-to-r from-[#C9A962] to-[#A88B4A] text-black font-semibold rounded-full hover:opacity-90 transition-opacity"
          >
            Download App
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A962]/10 border border-[#C9A962]/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#C9A962] animate-pulse"></span>
            <span className="text-[#C9A962] text-sm font-medium">Powered by OpenAI Realtime API</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your AI-Powered<br />
            <span className="gradient-text">Life Assistant</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            ORU is your intelligent companion for productivity, communication, and personal growth. 
            Voice-first, always ready, infinitely capable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a 
              href="https://apps.apple.com" 
              className="px-8 py-4 bg-gradient-to-r from-[#C9A962] to-[#A88B4A] text-black font-semibold rounded-full hover:opacity-90 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download for iOS
            </a>
            <a 
              href="https://play.google.com" 
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Get for Android
            </a>
          </div>

          {/* Hero Visual */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#C9A962]/20 to-[#A88B4A]/20 blur-3xl rounded-full"></div>
            <div className="relative glass-card rounded-3xl p-8 md:p-12">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C9A962] to-[#A88B4A] flex items-center justify-center animate-pulse-gold">
                  <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
              </div>
              <p className="text-2xl text-white font-medium mb-4">"Schedule a meeting with the design team for tomorrow at 2pm"</p>
              <p className="text-gray-400">ORU processes your voice in real-time and takes action instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-[#0F0F12]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Everything You Need</h2>
            <p className="text-gray-400 text-lg">Powerful features designed for modern productivity</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl p-6 hover:bg-white/5 transition-all group"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#C9A962] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Modes Section */}
      <section id="modes" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Four Intelligent Modes</h2>
            <p className="text-gray-400 text-lg">Adapt to any situation with specialized AI modes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modes.map((mode, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl p-6 text-center hover:border-[#C9A962]/30 transition-all"
              >
                <div className="text-5xl mb-4">{mode.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{mode.name}</h3>
                <p className="text-gray-400 text-sm">{mode.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#0F0F12] to-[#09090B]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Productivity?</h2>
          <p className="text-gray-400 text-lg mb-8">Join thousands of users who have already elevated their daily workflow with ORU.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email for updates"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-auto px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A962]/50"
            />
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#C9A962] to-[#A88B4A] text-black font-semibold rounded-full hover:opacity-90 transition-opacity">
              Get Early Access
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C9A962] to-[#A88B4A] flex items-center justify-center">
                <span className="text-sm font-bold text-black">O</span>
              </div>
              <span className="text-lg font-semibold text-white">ORU</span>
            </div>
            
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <a href="mailto:support@oru.yt1.co" className="hover:text-white transition-colors">Contact</a>
            </div>

            <p className="text-gray-500 text-sm">© 2024 ORU. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
