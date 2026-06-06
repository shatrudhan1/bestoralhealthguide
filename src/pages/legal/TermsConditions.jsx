import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - BestOralHealthGuide.com (2026)</title>
        <meta name="description" content="Read our complete terms and conditions. Understand your rights and responsibilities when using BestOralHealthGuide.com to improve your oral hygiene." />
        <link rel="canonical" href="https://www.bestoralhealthguide.com/terms-conditions" />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
            
            <div className="prose max-w-none text-gray-600 space-y-6">
              <p className="text-sm text-gray-500">Last Updated: January 1, 2026</p>

              <p>Welcome to BestOralHealthGuide.com. These terms and conditions outline the rules and regulations for the use of our website. Accessing our resources, such as our <Link to="/guides/gum-disease-complete-guide" className="text-blue-600 hover:underline">Gum Disease Guide</Link>, signifies acceptance of these terms.</p>

              <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Acceptance of Terms</h2>
              <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use BestOralHealthGuide.com if you do not agree to take all of the terms and conditions stated on this page.</p>

              <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Intellectual Property Rights</h2>
              <p>Other than the content you own, under these Terms, BestOralHealthGuide.com and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.</p>

              <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Restrictions</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Publishing any Website material in any other media without credit.</li>
                <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
                <li>Using this Website in any way that is or may be damaging to this Website.</li>
                <li>Using this Website in any way that impacts user access to this Website.</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Limitation of Liability</h2>
              <p>In no event shall BestOralHealthGuide.com, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website. For medical queries, please review our <Link to="/disclaimer" className="text-blue-600 hover:underline">Medical Disclaimer</Link>.</p>

              <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Governing Law & Jurisdiction</h2>
              <p>These Terms will be governed by and interpreted in accordance with the laws of the jurisdiction in which the website operates, and you submit to the non-exclusive jurisdiction of the state and federal courts located for the resolution of any disputes.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;