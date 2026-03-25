'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const coreFeatures = [
  {
    icon: '🎧',
    title: 'Wearable Intelligence',
    description: 'A sleek device that rests on your ear, listening attentively to every conversation. Communicates through subtle vibrations—your private AI, always present, never intrusive.',
  },
  {
    icon: '🎯',
    title: 'Real-Time Meeting Guidance',
    description: 'ORU listens to your meetings and whispers insights when you need them most. Like having a brilliant advisor who knows exactly when to speak and when to stay silent.',
  },
  {
    icon: '🌍',
    title: 'Seamless Live Translation',
    description: 'Break language barriers instantly. ORU translates conversations in real-time, making every international meeting feel like a conversation with an old friend.',
  },
  {
    icon: '📊',
    title: 'Intelligent Calendar Mastery',
    description: 'Because ORU attends every meeting, it understands your commitments deeply. Your calendar becomes a living document, automatically organized and optimized.',
  },
  {
    icon: '✅',
    title: 'Autonomous Task Tracking',
    description: 'Action items are captured the moment they\'re spoken. Deadlines are remembered, follow-ups are scheduled, and nothing slips through the cracks.',
  },
  {
    icon: '☀️',
    title: 'Daily AI Briefings',
    description: 'Wake up to a personalized summary of what matters. Yesterday\'s achievements, today\'s priorities, and insights you might have missed—all distilled into clarity.',
  },
];

const howItWorks = [
  {
    step: '01',
    title: 'Wear',
    description: 'Place ORU on your ear like premium wireless earbuds. Elegant, comfortable, invisible to others.',
  },
  {
    step: '02',
    title: 'Live',
    description: 'Go about your day. Attend meetings, have conversations, make decisions. ORU listens and learns.',
  },
  {
    step: '03',
    title: 'Elevate',
    description: 'Receive subtle guidance through vibrations. Get AI coaching, translations, and reminders—all in real-time.',
  },
];

const glassStyle = {
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.06)',
};

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen" style={{ background: '#09090B' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50" style={{ background: 'rgba(9, 9, 11, 0.9)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
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
            <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a>
            <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">How It Works</a>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</Link>
          </div>
          <a 
            href="#early-access" 
            className="px-4 sm:px-6 py-2 sm:py-2.5 text-black text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(to right, #C9A962, #A88B4A)' }}
          >
            Get Early Access
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8" style={{ background: 'rgba(201, 169, 98, 0.1)', border: '1px solid rgba(201, 169, 98, 0.2)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#C9A962' }}></span>
              <span style={{ color: '#C9A962' }} className="text-xs sm:text-sm font-medium">The Future of Personal AI</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight">
              Your Meetings,<br />
              <span className="gradient-text">Quietly Elevated</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4">
              ORU is an AI-powered wearable that listens to your conversations, guides you through 
              meetings with subtle vibrations, and transforms scattered moments into organized success.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4">
              <a 
                href="#early-access" 
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-black font-semibold rounded-full hover:opacity-90 transition-all transform hover:scale-105 text-center"
                style={{ background: 'linear-gradient(to right, #C9A962, #A88B4A)' }}
              >
                Request Early Access
              </a>
              <a 
                href="#how-it-works" 
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold rounded-full hover:bg-white/10 transition-all text-center"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                See How It Works
              </a>
            </div>

            {/* Hero Visual */}
            <div className="relative max-w-3xl mx-auto px-4">
              <div className="absolute inset-0 blur-3xl rounded-full" style={{ background: 'linear-gradient(to right, rgba(201, 169, 98, 0.2), rgba(168, 139, 74, 0.2))' }}></div>
              <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12" style={glassStyle}>
                <div className="flex items-center justify-center mb-6 sm:mb-8">
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center animate-pulse-gold" style={{ background: 'linear-gradient(to bottom right, #C9A962, #A88B4A)' }}>
                      <Image 
                        src="/icon.png" 
                        alt="ORU" 
                        width={48} 
                        height={48}
                        className="rounded-full w-10 h-10 sm:w-12 sm:h-12"
                      />
                    </div>
                    {/* Vibration waves */}
                    <div className="absolute -inset-4 rounded-full animate-ping" style={{ border: '2px solid rgba(201, 169, 98, 0.3)' }}></div>
                  </div>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl text-white font-medium mb-3 sm:mb-4 italic">
                  "They're about to ask about Q3 projections. Your numbers are up 23%."
                </p>
                <p className="text-gray-500 text-sm sm:text-base">— ORU, guiding you silently through vibrations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The ORU Difference */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(to bottom, #09090B, #0F0F12)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">The ORU Difference</h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Not just another app. A physical companion that lives with you, learns from you, and elevates every interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="rounded-2xl p-6 sm:p-8" style={{ ...glassStyle, borderLeft: '4px solid #C9A962' }}>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Physical Device</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                A beautifully crafted wearable that sits on your ear. Premium materials, 
                all-day comfort, completely discreet. Your AI companion, always within reach.
              </p>
            </div>
            <div className="rounded-2xl p-6 sm:p-8" style={{ ...glassStyle, borderLeft: '4px solid #C9A962' }}>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Vibration Communication</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                No audio interruptions. ORU communicates through subtle haptic patterns 
                that only you can feel. Private, elegant, perfectly timed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#0F0F12' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Capabilities That Transform</h2>
            <p className="text-gray-400 text-base sm:text-lg px-4">Every feature designed for those who demand excellence</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {coreFeatures.map((feature, index) => (
              <div 
                key={index}
                className="rounded-2xl p-5 sm:p-6 hover:bg-white/5 transition-all group cursor-pointer"
                style={glassStyle}
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-yellow-500 transition-colors" style={{ '--tw-text-opacity': 1 } as React.CSSProperties}>
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#09090B' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Effortlessly Integrated</h2>
            <p className="text-gray-400 text-base sm:text-lg px-4">Three steps to a more elevated you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl sm:text-6xl font-bold mb-3 sm:mb-4" style={{ color: 'rgba(201, 169, 98, 0.2)' }}>{item.step}</div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed px-4">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Vision */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(to bottom, #09090B, #0F0F12)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12" style={glassStyle}>
            <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">✨</div>
            <blockquote className="text-xl sm:text-2xl md:text-3xl text-white font-medium mb-4 sm:mb-6 leading-relaxed">
              "Imagine walking into every meeting with a world-class advisor who knows your history, 
              understands the context, and guides you to your best performance."
            </blockquote>
            <p className="font-medium" style={{ color: '#C9A962' }}>That's ORU.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="early-access" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#09090B' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Be Among The First</h2>
          <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 px-4">
            ORU is crafting a limited first batch for visionaries who understand the value of 
            intelligent assistance. Join the waitlist for exclusive early access.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 sm:px-6 py-3 sm:py-4 rounded-full text-white placeholder-gray-500 focus:outline-none text-sm sm:text-base"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            />
            <button 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-black font-semibold rounded-full hover:opacity-90 transition-opacity whitespace-nowrap text-sm sm:text-base"
              style={{ background: 'linear-gradient(to right, #C9A962, #A88B4A)' }}
            >
              Join Waitlist
            </button>
          </div>
          
          <p className="text-gray-600 text-xs sm:text-sm mt-4">
            By joining, you agree to our <Link href="/privacy" className="hover:underline" style={{ color: '#C9A962' }}>Privacy Policy</Link>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
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
              <a href="mailto:hello@oru.yt1.co" className="hover:text-white transition-colors">Contact</a>
            </div>

            <p className="text-gray-500 text-xs sm:text-sm">© 2024 ORU. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Menu */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: 'rgba(15, 15, 18, 0.9)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <a href="#features" className="px-3 py-1.5 text-xs text-gray-400 hover:text-white">Features</a>
          <a href="#how-it-works" className="px-3 py-1.5 text-xs text-gray-400 hover:text-white">How</a>
          <Link href="/privacy" className="px-3 py-1.5 text-xs text-gray-400 hover:text-white">Privacy</Link>
        </div>
      </div>
    </div>
  );
}
