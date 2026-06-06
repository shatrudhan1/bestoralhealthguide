import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, ArrowRight, ExternalLink, ShieldCheck, Star, Users } from 'lucide-react';
import { Helmet } from 'react-helmet';
import SchemaMarkup from './SchemaMarkup';

const BlogPost = ({ title, description, date, author, readTime, children, schemaData }) => {
  const currentUrl = window.location.href;
  
  return (
    <>
      <SchemaMarkup type="Article" data={schemaData} />
      <Helmet>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="bg-blue-50/50 border-b border-blue-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link to="/blog" className="inline-flex items-center text-[#4A90E2] hover:text-[#357ABD] mb-6 transition-colors font-medium">
              <ArrowLeft size={16} className="mr-2" /> Back to Blog
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              {title}
            </motion.h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm">
              <div className="flex items-center">
                <User size={16} className="mr-2 text-[#4A90E2]" />
                {author}
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2 text-[#4A90E2]" />
                {date}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2 text-[#4A90E2]" />
                {readTime}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-8">
            <div className="prose prose-blue max-w-none prose-lg prose-headings:text-gray-900 prose-p:text-gray-600 prose-img:rounded-xl">
              {children}
            </div>

            {/* Recommended Products Section - Blog Conversion Flow */}
            <div className="mt-16 pt-10 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Recommended for You</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-4 items-start">
                    <img src="https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/ecd876bfb86358be2e58d77c98347465.png" alt="ProDentim" className="w-20 h-20 object-contain bg-gray-50 rounded-lg p-2" loading="lazy" />
                    <div>
                      <h4 className="font-bold text-gray-900">ProDentim</h4>
                      <p className="text-sm text-gray-600 mb-3">Best for balancing oral microbiome & fresh breath.</p>
                      <Link to="/reviews/prodentim" className="text-sm font-semibold text-[#4A90E2] hover:underline flex items-center">
                        Read Review <ArrowRight size={14} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-4 items-start">
                    <img src="https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/9466f2239b5c09e163c94440246f6d75.png" alt="ProvaDent" className="w-20 h-20 object-contain bg-gray-50 rounded-lg p-2" loading="lazy" />
                    <div>
                      <h4 className="font-bold text-gray-900">ProvaDent</h4>
                      <p className="text-sm text-gray-600 mb-3">Top choice for gum health & enamel strength.</p>
                      <Link to="/reviews/provadent" className="text-sm font-semibold text-[#4A90E2] hover:underline flex items-center">
                        Read Review <ArrowRight size={14} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
             <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 sticky top-24">
               <h3 className="text-xl font-bold text-gray-900 mb-4">Top Recommendations</h3>
               
               <div className="space-y-6">
                 {/* Product 1 */}
                 <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                   <div className="font-bold text-gray-900 mb-1">ProDentim</div>
                   <p className="text-xs text-gray-500 mb-3">Best for Oral Microbiome</p>
                   <div className="grid grid-cols-2 gap-2">
                     <Link to="/reviews/prodentim" className="text-xs text-center py-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-colors">
                       Read Review
                     </Link>
                     <a href="https://27fbbfxvuq62q89e-cla0mxa8a.hop.clickbank.net" target="_blank" rel="noopener noreferrer nofollow" className="text-xs text-center py-2.5 bg-[#4A90E2] hover:bg-[#357ABD] text-white rounded-lg font-bold transition-colors flex items-center justify-center shadow-sm">
                       Check Price <ExternalLink size={10} className="ml-1"/>
                     </a>
                   </div>
                 </div>

                 {/* Product 2 */}
                 <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                   <div className="font-bold text-gray-900 mb-1">ProvaDent</div>
                   <p className="text-xs text-gray-500 mb-3">Best for Gum Health</p>
                   <div className="grid grid-cols-2 gap-2">
                     <Link to="/reviews/provadent" className="text-xs text-center py-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-colors">
                       Read Review
                     </Link>
                     <a href="https://ef568ku10q2-mvkauh03ezvd3w.hop.clickbank.net" target="_blank" rel="noopener noreferrer nofollow" className="text-xs text-center py-2.5 bg-[#4A90E2] hover:bg-[#357ABD] text-white rounded-lg font-bold transition-colors flex items-center justify-center shadow-sm">
                       Check Price <ExternalLink size={10} className="ml-1"/>
                     </a>
                   </div>
                 </div>

                  {/* Product 3 */}
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                   <div className="font-bold text-gray-900 mb-1">DentaSmile Pro</div>
                   <p className="text-xs text-gray-500 mb-3">Best Tech Solution</p>
                   <div className="grid grid-cols-2 gap-2">
                     <Link to="/reviews/dentasmile-pro" className="text-xs text-center py-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-colors">
                       Read Review
                     </Link>
                     <a href="https://881f6ot7uj1ai6c6rbyi19v91f.hop.clickbank.net" target="_blank" rel="noopener noreferrer nofollow" className="text-xs text-center py-2.5 bg-[#4A90E2] hover:bg-[#357ABD] text-white rounded-lg font-bold transition-colors flex items-center justify-center shadow-sm">
                       Check Price <ExternalLink size={10} className="ml-1"/>
                     </a>
                   </div>
                 </div>
               </div>
               
               {/* Trust Badges in Sidebar */}
               <div className="mt-6 pt-6 border-t border-blue-100 space-y-2">
                 <div className="flex items-center text-xs text-gray-600">
                   <ShieldCheck size={14} className="text-green-500 mr-2" /> Research-backed
                 </div>
                 <div className="flex items-center text-xs text-gray-600">
                   <Star size={14} className="text-yellow-500 mr-2" /> Reviewed by experts
                 </div>
               </div>
               <p className="text-[10px] text-gray-400 mt-4 text-center">
                 Results may vary. Consult a professional.
               </p>

               <Link to="/resources" className="block w-full text-center mt-4 text-sm text-[#4A90E2] font-medium hover:underline">
                 Explore All Recommended Products →
               </Link>
             </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default BlogPost;