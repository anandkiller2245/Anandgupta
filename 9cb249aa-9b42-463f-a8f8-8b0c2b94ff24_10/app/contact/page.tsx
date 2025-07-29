
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import AdBanner from '../../components/AdBanner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('Thank you for your message! We will get back to you within 24 hours.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 transition-all duration-300">
      <Header />
      
      <section className="relative py-16 bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-purple-600/10 dark:from-purple-600/20 dark:via-pink-600/20 dark:to-purple-600/20">
        <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=modern%20professional%20contact%20us%20workspace%20with%20purple%20and%20pink%20gradients%2C%20minimalist%20design%2C%20soft%20lighting%2C%20elegant%20atmosphere%2C%20clean%20aesthetic%2C%20contemporary%20office%20environment&width=1200&height=400&seq=contact-hero&orientation=landscape')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Have questions about our tools or need support? We're here to help you succeed with your digital projects.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="px-6 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full text-purple-600 dark:text-purple-400 font-medium shadow-lg">
              <i className="ri-time-line mr-2"></i>
              24/7 Support
            </div>
            <div className="px-6 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full text-purple-600 dark:text-purple-400 font-medium shadow-lg">
              <i className="ri-flash-line mr-2"></i>
              Quick Response
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className="ri-mail-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">Email Support</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                Get detailed help with any questions or issues you're experiencing.
              </p>
              <div className="text-center">
                <a href="mailto:support@digitalmatrix.com" className="text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                  support@digitalmatrix.com
                </a>
              </div>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className="ri-chat-3-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">Live Chat</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                Connect with our support team instantly for immediate assistance.
              </p>
              <div className="text-center">
                <span className="text-green-600 dark:text-green-400 font-medium">
                  Available 24/7
                </span>
              </div>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className="ri-phone-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">Priority Support</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                Premium users get priority support with faster response times.
              </p>
              <div className="text-center">
                <span className="text-orange-600 dark:text-orange-400 font-medium">
                  Under 2 Hour Response
                </span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Send us a Message
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 dark:bg-gray-700/80 text-gray-900 dark:text-white backdrop-blur-sm transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 dark:bg-gray-700/80 text-gray-900 dark:text-white backdrop-blur-sm transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 dark:bg-gray-700/80 text-gray-900 dark:text-white backdrop-blur-sm transition-all duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="feature">Feature Request</option>
                    <option value="bug">Bug Report</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={500}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 dark:bg-gray-700/80 text-gray-900 dark:text-white resize-none backdrop-blur-sm transition-all duration-200"
                    placeholder="Please describe your question or issue in detail..."
                  />
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {formData.message.length}/500 characters
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      <i className="ri-lock-line mr-1"></i>
                      Your data is secure
                    </span>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-purple-400 disabled:to-pink-400 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <i className="ri-send-plane-line mr-2"></i>
                      Send Message
                    </div>
                  )}
                </button>
                
                {submitStatus && (
                  <div className="p-4 bg-green-50/80 dark:bg-green-900/80 border border-green-200 dark:border-green-700 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center">
                      <i className="ri-checkbox-circle-line text-green-600 dark:text-green-400 mr-3"></i>
                      <p className="text-green-800 dark:text-green-200">{submitStatus}</p>
                    </div>
                  </div>
                )}
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="ri-map-pin-line text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Address</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        123 Digital Avenue<br />
                        Tech City, TC 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="ri-time-line text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Support Hours</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="ri-customer-service-line text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Response Time</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Email: Within 24 hours<br />
                        Live Chat: Instant<br />
                        Premium: Under 2 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl shadow-2xl p-8">
                <AdBanner />
              </div>

              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Quick Help
                </h3>
                <div className="space-y-4">
                  <a href="/faq" className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors duration-200 group">
                    <i className="ri-question-line text-purple-600 dark:text-purple-400 mr-3 group-hover:scale-110 transition-transform"></i>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Frequently Asked Questions</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Find answers to common questions</p>
                    </div>
                  </a>
                  
                  <a href="/terms" className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors duration-200 group">
                    <i className="ri-file-text-line text-purple-600 dark:text-purple-400 mr-3 group-hover:scale-110 transition-transform"></i>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Terms of Service</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Read our terms and conditions</p>
                    </div>
                  </a>
                  
                  <a href="/privacy" className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors duration-200 group">
                    <i className="ri-shield-check-line text-purple-600 dark:text-purple-400 mr-3 group-hover:scale-110 transition-transform"></i>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Privacy Policy</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Learn how we protect your data</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
