import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - BestOralHealthGuide.com (2026)</title>
        <meta name="description" content="Our privacy policy explains how we collect, use, and protect your personal data. Your privacy is our priority while exploring oral health resources." />
        <link rel="canonical" href="https://www.bestoralhealthguide.com/privacy-policy" />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <div className="prose max-w-none text-gray-600 space-y-6">
              <p className="text-sm text-gray-500">Last Updated: January 1, 2026</p>

              <p>At BestOralHealthGuide.com, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website, read our <Link to="/blog" className="text-blue-600 hover:underline">blog</Link>, or use our <Link to="/tools/bad-breath-cause-checker" className="text-blue-600 hover:underline">tools</Link>.</p>

              <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Information We Collect</h2>
              <p>We may collect personal identification information from Users in a variety of ways, including when Users visit our site, subscribe to the newsletter, fill out a form, or use interactive tools. Users may visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information.</p>

              <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Web Browser Cookies</h2>
              <p>Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. Users may choose to set their web browser to refuse cookies.</p>

              <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">How We Use Collected Information</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>To improve customer service: Information you provide helps us respond to requests effectively.</li>
                <li>To personalize user experience: We use aggregated information to understand user interaction.</li>
                <li>To send periodic emails: We may use the email address to send User information and updates.</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Changes to This Privacy Policy</h2>
              <p>BestOralHealthGuide.com has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. If you have questions, please <Link to="/contact" className="text-blue-600 hover:underline">contact us</Link>.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;