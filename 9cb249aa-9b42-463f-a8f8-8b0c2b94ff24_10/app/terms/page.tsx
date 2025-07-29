'use client';

import Header from '../../components/Header';
import AdBanner from '../../components/AdBanner';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Terms and Conditions
          </h1>
          
          <div className="mb-8">
            <AdBanner />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 dark:text-gray-300 space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
                  <p>By accessing and using Digital Matrix, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Use License</h2>
                  <p>Permission is granted to temporarily download one copy of the materials on Digital Matrix for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>modify or copy the materials</li>
                    <li>use the materials for any commercial purpose or for any public display</li>
                    <li>attempt to reverse engineer any software contained on Digital Matrix</li>
                    <li>remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Disclaimer</h2>
                  <p>The materials on Digital Matrix are provided on an 'as is' basis. Digital Matrix makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Limitations</h2>
                  <p>In no event shall Digital Matrix or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Digital Matrix, even if Digital Matrix or its authorized representative has been notified orally or in writing of the possibility of such damage.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Privacy Policy</h2>
                  <p>Your privacy is important to us. We collect minimal personal information and never share your data with third parties. All uploaded files are automatically deleted after 24 hours. We use industry-standard encryption to protect your data during transmission and processing.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. User Conduct</h2>
                  <p>You agree not to use Digital Matrix to:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Upload or process illegal content</li>
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Abuse or overload our services</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Premium Services</h2>
                  <p>Premium subscriptions provide additional features and higher usage limits. Subscriptions are billed monthly or annually and can be cancelled at any time. Refunds are available within 30 days of purchase for unused premium features.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Modifications</h2>
                  <p>Digital Matrix may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Contact Information</h2>
                  <p>If you have any questions about these Terms and Conditions, please contact us at support@digitalmatrix.com.</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}