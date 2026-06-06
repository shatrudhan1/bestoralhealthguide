import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Medical Disclaimer - BestOralHealthGuide.com (2026)</title>
        <meta name="description" content="Important medical disclaimer. Our content is for informational purposes only and not a substitute for professional medical advice." />
        <link rel="canonical" href="https://www.bestoralhealthguide.com/disclaimer" />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Medical Disclaimer</h1>
            
            <div className="prose max-w-none text-gray-600 space-y-6">
              <p className="text-sm text-gray-500">Last Updated: January 1, 2026</p>

              <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Not Medical Advice</h2>
              <p>The content provided on BestOralHealthGuide.com, including text, graphics, images, tools like the <Link to="/tools/bad-breath-cause-checker" className="text-blue-600 hover:underline">Bad Breath Checker</Link>, and other material, is for informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your dentist, physician, or other qualified health provider.</p>

              <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">No Warranties</h2>
              <p>This website is provided "as is" without any representations or warranties, express or implied. BestOralHealthGuide.com makes no representations or warranties in relation to this website or the information and materials provided here.</p>

              <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Product Reviews and Results</h2>
              <p>Our reviews of products such as <Link to="/reviews/prodentim" className="text-blue-600 hover:underline">ProDentim</Link> or other supplements are based on research. However, individual results may vary. Testimonials used on this website do not guarantee that anyone will achieve the same results.</p>

              <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">External Links</h2>
              <p>This website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy or relevance of any information on external sites.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;