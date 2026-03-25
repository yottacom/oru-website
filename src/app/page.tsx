'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const intelligenceFeatures = [
  {
    icon: '🧠',
    title: 'Adaptive Intelligence',
    description: 'ORU learns your communication style, work patterns, and preferences. Over time, it anticipates your needs before you ask.',
  },
  {
    icon: '🎯',
    title: 'Meeting Mastery',
    description: 'Real-time insights during conversations. ORU listens, analyzes context, and guides you with perfectly-timed suggestions through subtle haptics.',
  },
  {
    icon: '🌍',
    title: 'Instant Translation',
    description: 'Break language barriers effortlessly. Real-time translation in 50+ languages, delivered seamlessly so every conversation feels natural.',
  },
  {
    icon: '📋',
    title: 'Action Capture',
    description: 'Every commitment, deadline, and action item is captured the moment it\'s spoken. Nothing escapes, nothing is forgotten.',
  },
  {
    icon: '📅',
    title: 'Calendar Intelligence',
    description: 'Because ORU attends every meeting with you, your schedule becomes intelligently organized, optimized, and always up to date.',
  },
  {
    icon: '📝',
    title: 'Meeting Summaries',
    description: 'Comprehensive meeting notes generated automatically. Key decisions, action items, and insights—delivered minutes after you finish.',
  },
];

const selfImprovementFeatures = [
  {
    icon: '👁️',
    title: 'Presence Coaching',
    description: 'Gentle reminders to maintain eye contact and engaged body language during important conversations.',
  },
  {
    icon: '🎤',
    title: 'Speech Refinement',
    description: 'Real-time feedback on speaking pace, tone, and clarity. Become a more compelling communicator.',
  },
  {
    icon: '🧘',
    title: 'Mindfulness Moments',
    description: 'Detects elevated stress and gently guides you through breathing exercises to stay composed.',
  },
  {
    icon: '💪',
    title: 'Confidence Insights',
    description: 'Analyzes voice patterns and physiological cues to help you project confidence in high-stakes moments.',
  },
  {
    icon: '📊',
    title: 'Progress Tracking',
    description: 'Set personal development goals and receive daily insights on your journey toward becoming your best self.',
  },
  {
    icon: '🎯',
    title: 'Focus Enhancement',
    description: 'Monitors your environment and suggests focus modes when you need deep concentration.',
  },
];

const howItWorks = [
  {
    step: '01',
    title: 'Wear',
    description: 'Place the ORU device comfortably behind your ear—or simply use your existing AirPods. Premium hardware, familiar comfort.',
  },
  {
    step: '02',
    title: 'Connect',
    description: 'Seamlessly pairs with the ORU app on your phone. Your personal AI activates, learning and adapting to your world.',
  },
  {
    step: '03',
    title: 'Elevate',
    description: 'Live your life, amplified. Receive guidance through subtle vibrations, capture insights effortlessly, and grow every day.',
  },
];

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-[#09090B]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <Image 
              src="/icon.png" 
              alt="ORU" 
              width={40} 
              height={40} 
              className="rounded-xl w-8 h-8 sm:w-10 sm:h-10"
            />
            <span className="text-lg sm:text-xl font-semibold text-white">ORU</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#device" className="text-gray-400 hover:text-white transition-colors text-sm">Device</a>
            <a href="#intelligence" className="text-gray-400 hover:text-white transition-colors text-sm">Intelligence</a>
            <a href="#growth" className="text-gray-400 hover:text-white transition-colors text-sm">Growth</a>
            <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">How It Works</a>
          </div>
          <a 
            href="#early-access" 
            className="px-4 sm:px-6 py-2 sm:py-2.5 gold-gradient text-black text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
          >
            Get Early Access
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#C9A962]/10 border border-[#C9A962]/20 mb-6 sm:mb-8">
                <span className="w-2 h-2 rounded-full bg-[#C9A962] animate-pulse"></span>
                <span className="text-[#C9A962] text-xs sm:text-sm font-medium">AI-Powered Wearable Intelligence</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight">
                Your Personal<br />
                <span className="gradient-text">AI Companion</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed">
                ORU is a revolutionary bone conduction wearable that transforms how you work, communicate, and grow. 
                An AI that listens, learns, and elevates every moment of your day.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8">
                <a 
                  href="#early-access" 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 gold-gradient text-black font-semibold rounded-full hover:opacity-90 transition-all transform hover:scale-105 text-center"
                >
                  Request Early Access
                </a>
                <a 
                  href="#device" 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all text-center"
                >
                  Explore the Device
                </a>
              </div>

              {/* Trust indicator */}
              <p className="text-gray-500 text-sm">
                Works with ORU Device • AirPods • Any Bluetooth Earbuds
              </p>
            </div>

            {/* Right: Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#C9A962]/20 to-[#A88B4A]/20 blur-3xl rounded-full"></div>
              <div className="relative">
                <Image 
                  src="/images/device-hero.png" 
                  alt="ORU Wearable Device" 
                  width={600} 
                  height={600}
                  className="w-full h-auto rounded-3xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Device Section */}
      <section id="device" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#09090B] to-[#0F0F12]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Crafted for <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
              The ORU device is a masterpiece of engineering—bone conduction technology that sits elegantly behind your ear, 
              communicating through subtle vibrations only you can feel.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <Image 
                src="/images/person-wearing.png" 
                alt="Person wearing ORU device" 
                width={600} 
                height={450}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            {/* Features */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="glass-card gold-border rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Bone Conduction Technology</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Crystal-clear audio transmitted through your mastoid bone, leaving your ears open to the world around you. 
                  Stay aware while staying connected.
                </p>
              </div>
              
              <div className="glass-card gold-border rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Haptic Communication</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  ORU speaks through subtle vibrations—your private channel to AI guidance that no one else can detect. 
                  Perfectly discreet, perfectly timed.
                </p>
              </div>

              <div className="glass-card gold-border rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">All-Day Comfort</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Lightweight, ergonomic design with premium materials. An innovative patch system ensures 
                  secure, comfortable wear from morning meetings to evening events.
                </p>
              </div>
            </div>
          </div>

          {/* Compatibility note */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-3xl">🎧</span>
              <span className="text-3xl">📱</span>
              <span className="text-3xl">⌚</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">Start Today with What You Have</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              While the ORU device unlocks the full premium experience, our intelligent app works beautifully 
              with your existing AirPods, earbuds, or any Bluetooth audio device. 
              <span className="text-[#C9A962]"> The ORU device is a premium upgrade—not a requirement.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Intelligence Features */}
      <section id="intelligence" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0F0F12]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Intelligence That <span className="gradient-text">Amplifies You</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Powered by advanced AI that understands context, anticipates needs, and delivers value precisely when you need it most.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {intelligenceFeatures.map((feature, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl p-5 sm:p-6 hover:bg-white/5 transition-all group cursor-pointer"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-[#C9A962] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App + Device Visual */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0F0F12] to-[#09090B]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Seamlessly <span className="gradient-text">Connected</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                The ORU app serves as your command center—where AI insights are stored, preferences are refined, 
                and your personal growth journey is visualized. The device captures; the app transforms.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#C9A962]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#C9A962]">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Smart Voice Control</h4>
                    <p className="text-gray-400 text-sm">Control your phone, manage tasks, and navigate your day—all hands-free.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#C9A962]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#C9A962]">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Siri & Assistant Integration</h4>
                    <p className="text-gray-400 text-sm">Works harmoniously with your existing voice assistants for expanded capability.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#C9A962]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#C9A962]">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Productivity Analytics</h4>
                    <p className="text-gray-400 text-sm">Understand how you spend your time and receive personalized optimization suggestions.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#C9A962]/10 to-[#A88B4A]/10 blur-3xl rounded-full"></div>
              <Image 
                src="/images/device-with-phone.png" 
                alt="ORU device with smartphone app" 
                width={600} 
                height={400}
                className="relative w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Self-Improvement Section */}
      <section id="growth" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#09090B]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Personal <span className="gradient-text">Evolution</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
              ORU isn't just a tool—it's a coach dedicated to your continuous improvement. 
              Small nudges, consistent feedback, transformative results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {selfImprovementFeatures.map((feature, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl p-5 sm:p-6 hover:bg-white/5 transition-all group"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-[#C9A962] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Lifestyle Image */}
          <div className="max-w-4xl mx-auto">
            <Image 
              src="/images/lifestyle.png" 
              alt="Professional using ORU in meeting" 
              width={1200} 
              height={675}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#09090B] to-[#0F0F12]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Effortlessly <span className="gradient-text">Integrated</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg px-4">Three steps to a more elevated you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl sm:text-6xl font-bold text-[#C9A962]/20 mb-3 sm:mb-4">{item.step}</div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed px-4">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Quote */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0F0F12]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card gold-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
            <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">✨</div>
            <blockquote className="text-xl sm:text-2xl md:text-3xl text-white font-medium mb-4 sm:mb-6 leading-relaxed">
              "Imagine walking into every room with a brilliant advisor who knows your history, 
              understands the moment, and guides you toward excellence—silently, seamlessly, always."
            </blockquote>
            <p className="text-[#C9A962] font-semibold text-lg">That's ORU.</p>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0F0F12] to-[#09090B]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Built For Those Who <span className="gradient-text">Demand More</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="text-lg font-semibold text-white mb-2">Executives</h3>
              <p className="text-gray-400 text-sm">Navigate high-stakes meetings with confidence and comprehensive recall.</p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-semibold text-white mb-2">Entrepreneurs</h3>
              <p className="text-gray-400 text-sm">Capture every idea, track every commitment, scale your impact.</p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-lg font-semibold text-white mb-2">Global Professionals</h3>
              <p className="text-gray-400 text-sm">Break language barriers and connect across cultures effortlessly.</p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-lg font-semibold text-white mb-2">Growth-Minded</h3>
              <p className="text-gray-400 text-sm">Continuous improvement, powered by AI coaching and personal analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="early-access" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#09090B]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Be Among <span className="gradient-text">The First</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 px-4">
            ORU is crafting a limited first batch for visionaries who understand the value of 
            intelligent assistance. Join the waitlist for exclusive early access and founding member pricing.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-lg mx-auto mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A962]/50 text-sm sm:text-base"
            />
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 gold-gradient text-black font-semibold rounded-full hover:opacity-90 transition-opacity whitespace-nowrap text-sm sm:text-base">
              Join Waitlist
            </button>
          </div>
          
          <p className="text-gray-600 text-xs sm:text-sm">
            By joining, you agree to our{' '}
            <Link href="/privacy" className="text-[#C9A962] hover:underline">Privacy Policy</Link>
            {' '}and{' '}
            <Link href="/terms" className="text-[#C9A962] hover:underline">Terms of Service</Link>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/icon.png" 
                alt="ORU" 
                width={32} 
                height={32} 
                className="rounded-lg"
              />
              <span className="text-lg font-semibold text-white">ORU</span>
            </Link>
            
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-gray-400 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <a href="mailto:hello@oru.ai" className="hover:text-white transition-colors">Contact</a>
            </div>

            <p className="text-gray-500 text-xs sm:text-sm">© 2025 ORU. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Menu */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-1 px-3 py-2 glass-nav rounded-full border border-white/10">
          <a href="#device" className="px-2.5 py-1.5 text-xs text-gray-400 hover:text-white">Device</a>
          <a href="#intelligence" className="px-2.5 py-1.5 text-xs text-gray-400 hover:text-white">AI</a>
          <a href="#growth" className="px-2.5 py-1.5 text-xs text-gray-400 hover:text-white">Growth</a>
          <a href="#early-access" className="px-2.5 py-1.5 text-xs text-[#C9A962]">Join</a>
        </div>
      </div>
    </div>
  );
}
