import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Terms of Service - ORU',
  description: 'Terms of Service for ORU AI-Powered Wearable Companion',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#09090B]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#09090B]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
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
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</Link>
            <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Terms of Service</h1>
            <p className="text-gray-400 text-sm sm:text-base">Last updated: March 25, 2024</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing or using ORU ("the App," "Service," "we," "us," or "our"), you agree to be bound 
                by these Terms of Service. If you do not agree to these terms, please do not use our Service.
              </p>
            </section>

            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
              <p className="text-gray-300 leading-relaxed">
                ORU is an AI-powered personal assistant application that provides:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mt-4">
                <li>Voice-based AI interaction and assistance</li>
                <li>Calendar management and scheduling</li>
                <li>Email integration and management</li>
                <li>Task and note management</li>
                <li>Mind mapping and organization tools</li>
                <li>Real-time translation services</li>
              </ul>
            </section>

            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">3. Account Registration</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>To use certain features, you must create an account. You agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete registration information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Promptly notify us of any unauthorized account access</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>
                <p className="mt-4">
                  You must be at least 13 years old to use ORU. Users under 18 should have parental consent.
                </p>
              </div>
            </section>

            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">4. User Conduct</h2>
              <p className="text-gray-300 leading-relaxed mb-4">You agree NOT to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Use the Service for any illegal or unauthorized purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Transmit malware, viruses, or harmful code</li>
                <li>Harass, abuse, or harm others through the Service</li>
                <li>Impersonate any person or entity</li>
                <li>Interfere with or disrupt the Service's operation</li>
                <li>Use automated systems to access the Service without permission</li>
                <li>Reverse engineer or attempt to extract source code</li>
              </ul>
            </section>

            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">5. Third-Party Services</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  ORU integrates with third-party services including Google Calendar, Gmail, and Apple services. 
                  Your use of these integrations is subject to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The respective third party's terms of service</li>
                  <li>Your authorization and consent for data access</li>
                  <li>Our limited use of data as described in our Privacy Policy</li>
                </ul>
                <p className="mt-4">
                  We are not responsible for the availability, accuracy, or content of third-party services.
                </p>
              </div>
            </section>

            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">6. AI Services and Limitations</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>Our AI features are powered by OpenAI. You acknowledge that:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>AI responses may not always be accurate or complete</li>
                  <li>AI should not be relied upon for medical, legal, or financial advice</li>
                  <li>You are responsible for verifying important information</li>
                  <li>AI performance may vary and is subject to continuous improvement</li>
                </ul>
              </div>
            </section>

            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">7. Intellectual Property</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  The Service, including its design, features, and content, is owned by ORU and protected by 
                  intellectual property laws. You may not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Copy, modify, or distribute our proprietary content</li>
                  <li>Use our trademarks without written permission</li>
                  <li>Create derivative works based on the Service</li>
                </ul>
                <p className="mt-4">
                  You retain ownership of content you create using ORU (tasks, notes, etc.).
                </p>
              </div>
            </section>

            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">8. Subscription and Payments</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>Some features may require a paid subscription:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Subscription fees are billed in advance</li>
                  <li>Subscriptions auto-renew unless cancelled</li>
                  <li>Refunds are subject to our refund policy and app store terms</li>
                  <li>We may change pricing with reasonable notice</li>
                </ul>
              </div>
            </section>

            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">9. Disclaimer of Warranties</h2>
              <p className="text-gray-300 leading-relaxed">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR 
                IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY 
                SECURE. YOUR USE OF THE SERVICE IS AT YOUR OWN RISK.
              </p>
            </section>

            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, ORU SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL, 
                ARISING FROM YOUR USE OF THE SERVICE.
              </p>
            </section>

            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">11. Indemnification</h2>
              <p className="text-gray-300 leading-relaxed">
                You agree to indemnify and hold harmless ORU and its affiliates from any claims, damages, 
                losses, or expenses arising from your use of the Service or violation of these Terms.
              </p>
            </section>

            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">12. Termination</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>We may suspend or terminate your access to the Service if you:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Violate these Terms of Service</li>
                  <li>Engage in fraudulent or illegal activity</li>
                  <li>Abuse or misuse the Service</li>
                </ul>
                <p className="mt-4">
                  You may terminate your account at any time through the app settings or by contacting support.
                </p>
              </div>
            </section>

            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">13. Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of significant 
                changes through the app or email. Continued use of the Service after changes constitutes 
                acceptance of the modified Terms.
              </p>
            </section>

            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">14. Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable laws, without 
                regard to conflict of law principles. Any disputes shall be resolved in the appropriate courts.
              </p>
            </section>

            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">15. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-white/5 rounded-xl">
                <p className="text-[#C9A962]">support@oru.yt1.co</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2024 ORU. All rights reserved.</p>
          <div className="flex items-center gap-6 text-gray-400 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
