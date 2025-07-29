
'use client';

import Header from '../components/Header';
import AdBanner from '../components/AdBanner';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 to-orange-600/10 dark:from-teal-600/20 dark:to-orange-600/20"></div>
        <div className="relative container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Digital Matrix: Your All-in-One Online Tools Platform
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Access 50+ powerful online tools for PDF editing, video downloading, AI content generation, SEO optimization, and more. No downloads required - everything works directly in your browser.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm font-medium">Free PDF Tools</span>
              <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">AI Content Generator</span>
              <span className="px-4 py-2 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm font-medium">YouTube Downloader</span>
              <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">SEO Tools</span>
            </div>
            <button 
              onClick={() => scrollToSection('tool-categories')}
              className="bg-gradient-to-r from-teal-600 to-orange-600 hover:from-teal-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg"
            >
              Explore All Tools
            </button>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <section className="py-8 bg-gradient-to-r from-teal-50/50 to-orange-50/50 dark:from-gray-800 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <AdBanner />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              The Ultimate Digital Toolkit for Modern Professionals
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="mb-6">
                Digital Matrix is the most comprehensive all-in-one online tools platform designed for professionals, students, content creators, and businesses. Our suite of 50+ premium tools eliminates the need for multiple subscriptions and software installations, providing everything you need in one convenient location.
              </p>
              <p className="mb-6">
                Whether you're looking for a free PDF editor online, powerful AI content generator, reliable YouTube downloader, or professional SEO optimization tools, Digital Matrix delivers enterprise-grade functionality with consumer-friendly simplicity. Our platform processes millions of files monthly, helping users worldwide streamline their digital workflows.
              </p>
              <p className="mb-6">
                Built with cutting-edge technology and powered by advanced AI algorithms, Digital Matrix offers the best free digital tools available online. From document manipulation to social media content creation, our platform ensures you have the right tool for every task, accessible instantly from any device with an internet connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 bg-gradient-to-r from-teal-50/30 to-orange-50/30 dark:from-gray-800 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Powerful Features That Set Us Apart
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-flash-line text-2xl text-teal-600 dark:text-teal-400"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Lightning Fast Processing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our optimized servers ensure rapid file processing for all tools, from PDF compression to video downloads. Most operations complete in seconds, not minutes.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-shield-check-line text-2xl text-orange-600 dark:text-orange-400"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">100% Secure & Private</h3>
              <p className="text-gray-600 dark:text-gray-300">
                All files are processed with bank-level encryption and automatically deleted after 24 hours. Your privacy and data security are our top priorities.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-smartphone-line text-2xl text-teal-600 dark:text-teal-400"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Cross-Platform Compatibility</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Works seamlessly on Windows, Mac, Linux, iOS, and Android. No software installation required - just open your browser and start working.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Advantage Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              AI-Powered Tools for Maximum Efficiency
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="mb-6">
                Digital Matrix leverages cutting-edge artificial intelligence to deliver the most advanced online tools available. Our AI content generator creates high-quality blog posts, social media content, and marketing copy in seconds, while our AI image generator produces stunning visuals from simple text prompts.
              </p>
              <p className="mb-6">
                The AI advantage extends beyond content creation. Our intelligent PDF OCR technology can extract text from scanned documents with 99.9% accuracy, while our AI-powered SEO tools analyze millions of data points to provide actionable insights for better search rankings. The voice-to-text AI tool supports over 50 languages with industry-leading accuracy.
              </p>
              <p className="mb-6">
                What makes Digital Matrix unique is our integration of AI across all tool categories. From automatic background removal in images to smart video compression algorithms, artificial intelligence enhances every aspect of our platform, delivering results that would typically require expensive software or professional services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      <section id="tool-categories" className="py-16 bg-gradient-to-br from-teal-50/50 to-orange-50/50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Complete Tool Categories for Every Need
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* PDF Tools */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-file-pdf-line text-2xl text-red-600 dark:text-red-400"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">PDF Tools</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Complete PDF editor online with compress, merge, split, convert, and OCR capabilities. Handle any PDF task without software installation.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• PDF Compressor - Reduce file size up to 90%</li>
                <li>• PDF Merger - Combine multiple PDFs</li>
                <li>• PDF Splitter - Extract specific pages</li>
                <li>• PDF to Word/Excel converter</li>
                <li>• Advanced OCR text extraction</li>
              </ul>
            </div>

            {/* Video Downloaders */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-download-line text-2xl text-blue-600 dark:text-blue-400"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Video Downloaders</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Free YouTube downloader and multi-platform video downloader supporting all major social media platforms.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• YouTube video downloader (HD/4K)</li>
                <li>• TikTok video downloader</li>
                <li>• Instagram video/photo downloader</li>
                <li>• Facebook video downloader</li>
                <li>• Pinterest image downloader</li>
              </ul>
            </div>

            {/* AI Tools */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-robot-line text-2xl text-purple-600 dark:text-purple-400"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">AI Tools</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Advanced AI content generator and creative tools powered by the latest machine learning algorithms.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• AI blog generator</li>
                <li>• AI image generator</li>
                <li>• AI video generator</li>
                <li>• Voice-to-text converter</li>
                <li>• AI copywriting assistant</li>
              </ul>
            </div>

            {/* SEO Tools */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-search-line text-2xl text-green-600 dark:text-green-400"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">SEO Tools</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Professional SEO optimization tools for keyword research, competitor analysis, and ranking improvement.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Keyword research tool</li>
                <li>• Backlink checker</li>
                <li>• Meta tags generator</li>
                <li>• Site audit tool</li>
                <li>• Rank tracking system</li>
              </ul>
            </div>

            {/* Image Tools */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-image-line text-2xl text-orange-600 dark:text-orange-400"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Image Tools</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Professional image editing tools including background remover, enhancer, and compressor.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• AI background remover</li>
                <li>• Image enhancer/upscaler</li>
                <li>• Image compressor</li>
                <li>• Format converter</li>
                <li>• Batch processing</li>
              </ul>
            </div>

            {/* Developer Tools */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-code-line text-2xl text-indigo-600 dark:text-indigo-400"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Developer Tools</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Essential developer tools for coding, debugging, and data processing tasks.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• JSON formatter/validator</li>
                <li>• Base64 encoder/decoder</li>
                <li>• Regex tester</li>
                <li>• Color picker</li>
                <li>• Code minifier</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <AdBanner />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Why Digital Matrix is the Best Choice for Online Tools
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Unmatched Quality & Reliability</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Digital Matrix maintains 99.9% uptime with enterprise-grade infrastructure. Our tools are tested by millions of users worldwide and consistently deliver professional results. Unlike other platforms, we don't compromise on quality or impose arbitrary limitations on free users.
                </p>
                
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Cost-Effective Solution</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Replace expensive software subscriptions with our comprehensive toolkit. What would cost hundreds of dollars in separate tools is available free on Digital Matrix. Our premium plans offer unlimited usage and priority processing at a fraction of traditional software costs.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Continuous Innovation</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  We regularly update our tools with the latest features and AI improvements. Our development team releases new functionality monthly, ensuring Digital Matrix stays ahead of the curve. User feedback directly influences our roadmap, making this truly a user-driven platform.
                </p>
                
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Expert Support</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our dedicated support team consists of technical experts who understand digital workflows. Get help via live chat, email, or our comprehensive knowledge base. Premium users enjoy priority support with average response times under 2 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-orange-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-teal-100">Online Tools</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10M+</div>
              <div className="text-orange-100">Files Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500K+</div>
              <div className="text-teal-100">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-orange-100">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-orange-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Streamline Your Digital Workflow?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join millions of users who trust Digital Matrix for their daily digital tasks. Start using our comprehensive toolkit today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('tool-categories')}
              className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              Start Using Tools Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors whitespace-nowrap cursor-pointer">
              Explore All Features
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-2xl font-bold mb-8 text-teal-400" style={{fontFamily: 'Pacifico, serif'}}>
              Digital Matrix
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Digital Matrix is the world's leading all-in-one online tools platform, trusted by millions of users worldwide. From PDF editing to AI content generation, video downloading to SEO optimization, we provide the best free digital tools available online.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-400">
              <div>
                <h4 className="font-semibold mb-4 text-teal-400">Popular Tools</h4>
                <ul className="space-y-2">
                  <li>PDF Editor Online</li>
                  <li>YouTube Downloader</li>
                  <li>AI Content Generator</li>
                  <li>Background Remover</li>
                  <li>SEO Keyword Tool</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-orange-400">Tool Categories</h4>
                <ul className="space-y-2">
                  <li>PDF Tools</li>
                  <li>Video Downloaders</li>
                  <li>AI Tools</li>
                  <li>SEO Tools</li>
                  <li>Developer Tools</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-teal-400">Company</h4>
                <ul className="space-y-2">
                  <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
                  <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Digital Matrix. All rights reserved. The best free online tools platform for PDF editing, video downloading, AI content generation, SEO optimization, and more.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
