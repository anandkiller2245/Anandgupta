'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import AdBanner from '../../components/AdBanner';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "Is Digital Matrix really free to use?",
      answer: "Yes, Digital Matrix offers a comprehensive free tier with access to all 50+ tools. Free users can process files up to certain limits without any cost. Premium plans are available for users who need unlimited processing, priority support, and advanced features."
    },
    {
      question: "How secure is my data on Digital Matrix?",
      answer: "Data security is our top priority. All files are processed with 256-bit SSL encryption, and we automatically delete all uploaded files after 24 hours. We never store, share, or access your personal files. Our servers are located in secure data centers with multiple layers of protection."
    },
    {
      question: "Do I need to install any software?",
      answer: "No installation required! Digital Matrix works entirely in your web browser. Simply visit our website and start using any tool immediately. This makes it perfect for use on public computers, work environments, or any device with internet access."
    },
    {
      question: "What file formats do you support?",
      answer: "Digital Matrix supports virtually all common file formats including PDF, DOCX, XLSX, PPTX, JPG, PNG, GIF, MP4, MP3, and many more. Our tools are designed to handle the most popular formats used in business and personal workflows."
    },
    {
      question: "Can I use Digital Matrix for commercial purposes?",
      answer: "Absolutely! Digital Matrix is designed for both personal and commercial use. Many businesses, agencies, and freelancers rely on our tools for their daily operations. Our premium plans include features specifically designed for business users, including team collaboration and API access."
    },
    {
      question: "How often do you add new tools?",
      answer: "We continuously expand our toolkit based on user feedback and market demands. On average, we add 2-3 new tools monthly and regularly update existing ones with enhanced features. Follow our blog or newsletter to stay updated on new releases."
    },
    {
      question: "What are the file size limits?",
      answer: "Free users can process files up to 50MB per file. Premium users enjoy unlimited file sizes and batch processing capabilities. Most tools can handle files much larger than typical use cases require."
    },
    {
      question: "How do I get support if I have issues?",
      answer: "We offer multiple support channels including live chat, email support, and a comprehensive knowledge base. Premium users get priority support with faster response times. Our support team is available 24/7 to help with any technical issues."
    },
    {
      question: "Can I cancel my premium subscription anytime?",
      answer: "Yes, you can cancel your premium subscription at any time. There are no cancellation fees, and you'll continue to have access to premium features until the end of your current billing period."
    },
    {
      question: "Are there any usage limits on the free plan?",
      answer: "Free users have reasonable usage limits to ensure fair access for everyone. These include file size limits, processing time limits, and a daily usage quota. Premium plans remove these restrictions for unlimited usage."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h1>
          
          <div className="mb-8">
            <AdBanner />
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.question}
                  </h3>
                  <i className={`ri-${openItems.includes(index) ? 'subtract' : 'add'}-line text-purple-600 dark:text-purple-400`}></i>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}