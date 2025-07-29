'use client';

import Header from '../../components/Header';
import AdBanner from '../../components/AdBanner';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Privacy Policy
          </h1>
          
          <div className="mb-8">
            <AdBanner />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 dark:text-gray-300 space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
                  <p>Digital Matrix collects minimal information to provide our services effectively:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Files you upload for processing (automatically deleted after 24 hours)</li>
                    <li>Usage statistics and analytics data</li>
                    <li>Account information for premium users</li>
                    <li>Technical information like IP address and browser type</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
                  <p>We use collected information for:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Processing your files and providing our services</li>
                    <li>Improving our tools and user experience</li>
                    <li>Providing customer support</li>
                    <li>Sending service-related communications</li>
                    <li>Analyzing usage patterns to optimize performance</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Data Security</h2>
                  <p>We implement industry-standard security measures to protect your data:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>256-bit SSL encryption for all data transmission</li>
                    <li>Secure servers with multiple layers of protection</li>
                    <li>Automatic file deletion after 24 hours</li>
                    <li>Regular security audits and updates</li>
                    <li>No permanent storage of user files</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Third-Party Services</h2>
                  <p>We may use third-party services for analytics and payment processing. These services have their own privacy policies and we encourage you to review them. We do not share your personal files with any third parties.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Cookies</h2>
                  <p>We use cookies to enhance your experience on our website. Cookies help us remember your preferences and improve our services. You can disable cookies in your browser settings, but this may affect some functionality.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Data Retention</h2>
                  <p>We retain data only as long as necessary to provide our services:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Uploaded files: Automatically deleted after 24 hours</li>
                    <li>Usage analytics: Retained for up to 2 years</li>
                    <li>Account information: Retained until account deletion</li>
                    <li>Support communications: Retained for 3 years</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Request access to your personal data</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Withdraw consent for data processing</li>
                    <li>Export your data in a portable format</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Changes to Privacy Policy</h2>
                  <p>We may update this privacy policy from time to time. We will notify users of any significant changes via email or website notification. Continued use of our services constitutes acceptance of the updated policy.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h2>
                  <p>If you have any questions about this privacy policy or our data practices, please contact us at privacy@digitalmatrix.com or through our contact form.</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}