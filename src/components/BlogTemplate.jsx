import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, ArrowRight, ExternalLink, ShieldCheck, Star, RefreshCw, AlertTriangle } from 'lucide-react';
import SchemaMarkup from './SchemaMarkup';

const BlogTemplate = ({ 
  title, 
  description, 
  publishDate, 
  updateDate,
  author, 
  readTime, 
  children, 
  schemaData,
  category,
  image,
  imageAlt,
  relatedReviewSlug, 
  relatedReviewName,
  relatedPostSlug,
  relatedPostTitle
}) => {
  const currentUrl =
  typeof window !== 'undefined'
    ? window.location.href.split('?')[0]
    : '';
  const [ctaText, setCtaText] = useState("Check Official Price");

  const hasContent = React.Children.count(children) > 0;

  useEffect(() => {
    if (!hasContent) {
      console.warn(`[BlogTemplate Warning]: Missing content for article "${title}". Please ensure children are passed to the component.`);
    }
  }, [hasContent, title]);

  useEffect(() => {
    const variations = ["See Full Benefits", "Visit Official Website", "Check Price Now", "Discover How It Works"];
    const randomVariation = variations[Math.floor(Math.random() * variations.length)];
    setCtaText(randomVariation);
  }, []);

  const getProductLink = (slug) => {
    switch(slug) {
      case 'prodentim': return "https://27fbbfxvuq62q89e-cla0mxa8a.hop.clickbank.net";
      case 'provadent': return "https://ef568ku10q2-mvkauh03ezvd3w.hop.clickbank.net";
      case 'dentasmile-pro': return "https://881f6ot7uj1ai6c6rbyi19v91f.hop.clickbank.net";
      default: return "/resources";
    }
  };

  const productLink = getProductLink(relatedReviewSlug);
  const reviewLink = relatedReviewSlug ? `/reviews/${relatedReviewSlug}` : '/resources';
  const productName = relatedReviewName || "Top Recommended Product";
  
  // STRICT 1:1 BINDING - EXACT FIELD MATCH
  const featuredImage = image;

  return (
    <>
      <SchemaMarkup type="Article" data={{
        ...schemaData,
        "dateModified": updateDate || publishDate,
        "image": featuredImage ? [featuredImage] : [],
        "publisher": {
          "@type": "Organization",
          "name": "Best Oral Health Guide",
          "logo": {
            "@type": "ImageObject",
            "url": "https://bestoralhealthguide.com/logo.png" 
          }
        }
      }} />
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={currentUrl} />
        <meta property="og:site_name" content="Best Oral Health Guide" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        {featuredImage && <meta property="og:image" content={featuredImage} />}
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time" content={updateDate || publishDate} />
        <meta property="article:author" content={author} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BestOralHealth" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {featuredImage && <meta name="twitter:image" content={featuredImage} />}
      </Helmet>

      <div className="bg-white min-h-screen">
        {/* Header Section */}
        <div className="bg-blue-50/50 border-b border-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link to="/blog" className="inline-flex items-center text-[#4A90E2] hover:text-[#357ABD] mb-6 transition-colors font-medium">
              <ArrowLeft size={16} className="mr-2" /> Back to Blog
            </Link>
            <div className="max-w-4xl mx-auto text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-[#4A90E2] text-xs font-bold mb-4 uppercase tracking-wider">
                  {category || "Oral Health"}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {title}
                </h1>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-gray-600 text-sm border-t border-blue-100 pt-6 mt-6">
                  <div className="flex items-center">
                    <User size={16} className="mr-2 text-[#4A90E2]" />
                    <span className="font-medium">{author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 text-[#4A90E2]" />
                    {publishDate}
                  </div>
                  <div className="flex items-center text-gray-500 italic">
                    <RefreshCw size={14} className="mr-2" />
                    Updated: {updateDate || publishDate}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2 text-[#4A90E2]" />
                    {readTime}
                  </div>
                  <div className="flex items-center text-green-600 bg-green-50 px-2 py-1 rounded-md text-xs font-bold">
                     <ShieldCheck size={14} className="mr-1" /> Fact-Checked
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Full-width Hero Image - Conditional Rendering, No Grey Box */}
        {featuredImage && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-12">
            <div className="relative w-full overflow-hidden rounded-xl shadow-lg aspect-[3/1]">
               <img 
                 className="absolute inset-0 w-full h-full object-cover" 
                 alt={imageAlt || title} 
                 src={featuredImage} 
                 loading="eager"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Area */}
          <article className="lg:col-span-8" data-testid="blog-content">
            {/* Medical Disclaimer Top */}
            <div className="bg-gray-50 p-4 rounded-lg text-xs text-gray-500 mb-8 border border-gray-200">
              <strong>Medical Disclaimer:</strong> The information provided in this article is for educational purposes only. We're here to share evidence-based insights, but nothing replaces professional dental advice. Always chat with your dentist before starting any new health regimen.
            </div>

            {!hasContent ? (
               <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center text-red-800">
                 <AlertTriangle size={48} className="mx-auto mb-4 text-red-500" />
                 <h2 className="text-xl font-bold mb-2">Content Unavailable</h2>
                 <p>We apologize, but the content for this article is currently missing or failed to load. Please try refreshing the page.</p>
               </div>
            ) : (
              <div className="prose prose-blue max-w-none prose-lg prose-headings:text-gray-900 prose-p:text-gray-600 prose-img:rounded-xl">
                {children}
              </div>
            )}

            {/* Mid-Content CTA Block (Dynamic) */}
            <div className="my-12 p-6 bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Curious about what actually works?</h3>
              <p className="text-gray-600 mb-4 text-sm">Based on our research, our top-rated recommendation for {category?.toLowerCase() || "oral health"} is <strong>{productName}</strong>.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to={reviewLink} className="flex-1 text-center py-3 px-4 bg-white border border-[#4A90E2] text-[#4A90E2] rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Read Full Review
                </Link>
                <a href={productLink} target="_blank" rel="noopener noreferrer nofollow" className="flex-1 text-center py-3 px-4 bg-[#4A90E2] text-white rounded-lg font-bold hover:bg-[#357ABD] transition-colors shadow-sm flex items-center justify-center">
                  {ctaText} <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>

            {/* Related Articles & Internal Links */}
            <div className="mt-16 pt-10 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Keep Reading</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPostSlug && (
                  <Link to={`/blog/${relatedPostSlug}`} className="group block bg-gray-50 rounded-xl p-5 hover:shadow-md transition-all border border-transparent hover:border-gray-200">
                    <span className="text-xs font-bold text-[#4A90E2] uppercase mb-1 block">Up Next</span>
                    <h4 className="font-bold text-gray-900 group-hover:text-[#4A90E2] transition-colors">{relatedPostTitle || "More Oral Health Tips"}</h4>
                    <span className="text-sm text-gray-500 mt-2 flex items-center">Read Article <ArrowRight size={14} className="ml-1" /></span>
                  </Link>
                )}
                <Link to="/resources" className="group block bg-gray-50 rounded-xl p-5 hover:shadow-md transition-all border border-transparent hover:border-gray-200">
                  <span className="text-xs font-bold text-green-600 uppercase mb-1 block">Resources</span>
                  <h4 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">Compare All Top Products</h4>
                  <span className="text-sm text-gray-500 mt-2 flex items-center">View Resources <ArrowRight size={14} className="ml-1" /></span>
                </Link>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
             <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm sticky top-24">
               <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Top Recommendation</h3>
               
               <div className="mb-6">
                 <div className="bg-gray-50 rounded-lg p-4 text-center mb-4">
                    <img 
                      src="https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/ecd876bfb86358be2e58d77c98347465.png" 
                      alt="ProDentim oral probiotic supplement bottle" 
                      className="w-24 h-24 object-contain mx-auto mb-2 mix-blend-multiply"
                      loading="lazy"
                    />
                    <div className="font-bold text-gray-900">ProDentim</div>
                    <div className="flex justify-center text-yellow-400 my-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                 </div>
                 <a href="https://27fbbfxvuq62q89e-cla0mxa8a.hop.clickbank.net" target="_blank" rel="noopener noreferrer nofollow" className="block w-full text-center py-3 bg-[#4A90E2] text-white rounded-lg font-bold hover:bg-[#357ABD] transition-colors shadow-md mb-3">
                   {ctaText}
                 </a>
                 <Link to="/reviews/prodentim" className="block w-full text-center text-sm text-gray-500 hover:text-[#4A90E2] underline">
                   Read Full Review
                 </Link>
               </div>

               <div className="space-y-3 pt-4 border-t border-gray-100">
                 <div className="flex items-center text-xs text-gray-600">
                   <ShieldCheck size={14} className="text-green-500 mr-2 flex-shrink-0" /> Research-backed ingredients
                 </div>
                 <div className="flex items-center text-xs text-gray-600">
                   <Star size={14} className="text-yellow-500 mr-2 flex-shrink-0" /> Reviewed by dental professionals
                 </div>
                 <div className="flex items-center text-xs text-gray-600">
                   <RefreshCw size={14} className="text-blue-500 mr-2 flex-shrink-0" /> Updated Monthly
                 </div>
               </div>
             </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default BlogTemplate;
