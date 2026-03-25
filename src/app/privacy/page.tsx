import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - ORU',
  description: 'Privacy Policy for ORU AI Assistant',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#09090B]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#09090B]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A962] to-[#A88B4A] flex items-center justify-center">
              <span className="text-xl font-bold text-black">O</span>
            </div>
            <span className="text-xl font-semibold text-white">ORU</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-400">Last updated: March 25, 2024</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                Welcome to ORU ("we," "our," or "us"). We are committed to protecting your personal information 
                and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and 
                safeguard your information when you use our mobile application and related services.
              </p>
            </section>

            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <h3 className="text-lg font-medium text-white">2.1 Personal Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name and email address when you create an account</li>
                  <li>Profile information you choose to provide</li>
                  <li>Authentication data from Google or Apple Sign-In</li>
                </ul>

                <h3 className="text-lg font-medium text-white mt-6">2.2 Voice and Audio Data</h3>
                <p>
                  When you use our voice features, we process your voice input to provide AI assistance. 
                  Voice data is transmitted securely to OpenAI for processing and is not permanently stored 
                  on our servers.
                </p>

                <h3 className="text-lg font-medium text-white mt-6">2.3 Connected Services Data</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Calendar data when you connect Google Calendar</li>
                  <li>Email metadata and content when you connect email services</li>
                  <li>This data is used solely to provide the requested features</li>
                </ul>

                <h3 className="text-lg font-medium text-white mt-6">2.4 Usage Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>App usage patterns and feature interactions</li>
                  <li>Device information and operating system</li>
                  <li>Crash reports and performance data</li>
                </ul>
              </div>
            </section>

            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>To provide and maintain our AI assistant services</li>
                <li>To process your voice commands and queries</li>
                <li>To sync and manage your calendar and email integrations</li>
                <li>To create and manage your tasks, notes, and mind maps</li>
                <li>To improve and personalize your experience</li>
                <li>To send you important updates about the service</li>
                <li>To detect and prevent fraud or abuse</li>
              </ul>
            </section>

            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">4. Data Sharing and Disclosure</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>We do not sell your personal information. We may share data with:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Service Providers:</strong> OpenAI for AI processing, cloud hosting providers</li>
                  <li><strong>Connected Services:</strong> Google, Apple, and email providers you authorize</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect rights</li>
                </ul>
              </div>
            </section>

            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement industry-standard security measures including encryption in transit (TLS/SSL) 
                and at rest, secure authentication, and regular security audits. However, no method of 
                transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights and Choices</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                <li><strong>Disconnect:</strong> Revoke access to connected services at any time</li>
                <li><strong>Opt-out:</strong> Disable optional data collection in app settings</li>
              </ul>
            </section>

            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">7. Data Retention</h2>
              <p className="text-gray-300 leading-relaxed">
                We retain your data for as long as your account is active or as needed to provide services. 
                You can request deletion at any time. Some data may be retained for legal compliance or 
                legitimate business purposes.
              </p>
            </section>

            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">8. Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                ORU is not intended for users under 13 years of age. We do not knowingly collect personal 
                information from children under 13. If we learn we have collected such information, we will 
                delete it promptly.
              </p>
            </section>

            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">9. International Data Transfers</h2>
              <p className="text-gray-300 leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place to protect your data in accordance with 
                this Privacy Policy.
              </p>
            </section>

            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">11. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have questions about this Privacy Policy or our practices, please contact us at:
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
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
