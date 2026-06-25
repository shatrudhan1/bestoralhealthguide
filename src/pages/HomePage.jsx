import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import {
  ArrowRight,
  ShieldCheck,
  Microscope,
  Users,
  BookOpen,
  Activity,
  Sparkles,
  HeartPulse,
  CheckCircle2,
  Search,
  FileText
} from 'lucide-react';

import HeroSection from '@/components/HeroSection';

const FeaturedToolsSection = lazy(() => import('@/components/FeaturedToolsSection'));

const HomePage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Fix Bleeding Gums & Bad Breath Fast | Best Oral Health Guide",
    "url": "https://www.bestoralhealthguide.com",
    "description": "Science-backed solutions, interactive tools, and trusted product recommendations to restore your oral health, fix bleeding gums, and cure bad breath fast.",
    "publisher": {
      "@type": "Organization",
      "name": "Best Oral Health Guide",
      "logo": {
        "@type": "ImageObject",
        "url": "https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/3760dc18cc550c1a89c71b4bf9253384.png"
      }
    }
  };
  const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Best Oral Health Guide",
  "url": "https://bestoralhealthguide.com",
  "founder": {
    "@type": "Person",
    "name": "Shatrudhan Mukhiya"
  }
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Shatrudhan Mukhiya",
  "jobTitle": "Founder & Publisher",
  "url": "https://bestoralhealthguide.com/about-author",
  "worksFor": {
    "@type": "Organization",
    "name": "Best Oral Health Guide"
  }
};

  const productCards = [
    {
      title: "Best Toothpaste for Gum Health",
      description: "Clinically formulated to stop bleeding gums, reduce inflammation, and rebuild enamel fast.",
      benefitLine: "Stops bleeding gums in 7 days and reduces inflammation fast.",
      badge: "Dentist Recommended",
      badgeColor: "#3498DB",
      trust: "Dentist-recommended",
      link: "/resources",
      image: "https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/a30646c64be1cc7c3231ad2f5ac31f55.png"
    },
    {
      title: "Best Mouthwash for Gum Disease",
      description: "Targeted antimicrobial rinses that eliminate deep-pocket bacteria without drying your mouth.",
      benefitLine: "Kills harmful bacteria while protecting your oral microbiome.",
      badge: "Clinically Tested",
      badgeColor: "#27AE60",
      trust: "Clinically tested",
      link: "/resources",
      image: "https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/e84af3940b532163eb540c003f4eea24.png"
    },
    {
      title: "Best Oral Probiotics",
      description: "Restore your oral microbiome to naturally cure bad breath and protect periodontal health.",
      benefitLine: "Restores healthy bacteria balance and eliminates bad breath naturally.",
      badge: "Top Rated 2026",
      badgeColor: "#FFD700",
      trust: "Science-backed",
      link: "/resources",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const startHereArticles = [
    {
      title: "How to Stop Bleeding Gums Fast: 7 Proven Methods",
      excerpt: "Learn the exact daily routine and natural remedies to halt gum recession and restore periodontal health.",
      link: "/blog/bleeding-gums-causes-treatment",
      image: "https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/e6c0ca8f813476ac2bcb0cd3099884ff.png"
    },
    {
      title: "Bad Breath Causes & Solutions: Complete 2026 Guide",
      excerpt: "Discover what causes bad breath at the root level and how to fix it permanently without harsh chemicals.",
      link: "/blog/bad-breath-complete-guide",
      image: "https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/30e7fc313f5e5ef86678e1c27cf407db.webp"
    },
    {
      title: "Tooth Sensitivity Relief: 5 Fast-Acting Solutions",
      excerpt: "Stop the sharp pain. Rebuild your enamel and protect exposed roots with these science-backed treatments.",
      link: "/blog/stop-tooth-sensitivity-pain-immediately",
      image: "https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/0e1c127a2f69a89a0ef5522fec01007d.webp"
    }
  ];

  const trustPoints = [
    { icon: <ShieldCheck className="text-blue-600" size={24} />, title: "Reviewed by dental experts" },
    { icon: <Microscope className="text-blue-600" size={24} />, title: "Proven solutions that deliver real results" },
    { icon: <Users className="text-blue-600" size={24} />, title: "Trusted by 10,000+ readers" },
    { icon: <Search className="text-blue-600" size={24} />, title: "Treat the root cause, not just symptoms" },
    { icon: <FileText className="text-blue-600" size={24} />, title: "Transparent affiliate disclosures" },
    { icon: <CheckCircle2 className="text-blue-600" size={24} />, title: "No sponsored content" }
  ];

  return (
    <>
      <Helmet>
        <title>Fix Bleeding Gums & Bad Breath Fast | Best Oral Health Guide</title>
        <meta name="description" content="Science-backed solutions, interactive tools, and trusted product recommendations to restore your oral health, fix bleeding gums, and cure bad breath fast." />
        <link rel="canonical" href="https://www.bestoralhealthguide.com/" />
        <meta property="og:title" content="Fix Bleeding Gums & Bad Breath Fast | Best Oral Health Guide" />
        <meta property="og:description" content="Science-backed solutions, interactive tools, and trusted product recommendations to restore your oral health." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bestoralhealthguide.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">
  {JSON.stringify(organizationSchema)}
</script>

<script type="application/ld+json">
  {JSON.stringify(personSchema)}
</script>
      </Helmet>

      <div className="bg-white font-sans text-slate-900 main-content-pt">
        
        {/* HERO SECTION COMPONENT */}
        <HeroSection />

        {/* PRODUCTS SECTION */}
        <section id="products" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Best Solutions for Healthy Gums</h2>
              <p className="text-lg text-slate-600">
                Stop guessing. We've reviewed the <Link to="/resources" className="text-blue-600 hover:underline">best gum health products</Link> proven to reduce plaque, stop gum recession, and balance oral bacteria.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {productCards.map((product, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 overflow-hidden bg-white">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-2">
                      <span 
                        className="inline-block text-white text-[11px] md:text-[13px] font-bold px-2 py-1 rounded shadow-sm"
                        style={{ backgroundColor: product.badgeColor }}
                      >
                        {product.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{product.title}</h3>
                    <p className="text-slate-600 mb-3">{product.description}</p>
                    <p className="text-blue-800 text-sm font-semibold mb-6 flex-grow bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                      {product.benefitLine}
                    </p>
                    <div className="flex flex-col items-center w-full mt-auto">
                      <Link 
                        to={product.link}
                        className="inline-flex items-center justify-center w-full py-4 bg-orange-500 text-white hover:bg-orange-600 font-bold rounded-xl transition-colors shadow-md text-center px-4"
                      >
                        See Top-Rated Gum Fixes That Actually Work →
                      </Link>
                      <p className="text-[12px] md:text-[13px] text-gray-500 mt-2 text-center">
                        Used by 10,000+ users
                      </p>
                      <Link 
                        to="/blog/gum-disease-complete-guide"
                        className="mt-3 text-blue-600 font-bold hover:underline text-sm bg-transparent"
                      >
                        Read Full Guide →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST SECTION */}
        <section className="py-16 bg-blue-50 border-y border-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Trusted Oral Health Education & Resources</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We provide science-backed, dentist-reviewed solutions that actually work — no hype, no gimmicks.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="flex-shrink-0 mr-4 bg-blue-50 p-2 rounded-lg">
                    {point.icon}
                  </div>
                  <span className="font-bold text-slate-800">{point.title}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-lg md:text-xl font-bold text-blue-800 bg-white/60 inline-block px-6 py-3 rounded-full shadow-sm border border-blue-100">
                Helping thousands fix gum disease and bad breath naturally.
              </p>
            </div>
          </div>
        </section>
    
       {/* SOCIAL PROOF BANNER */}
        <div className="bg-blue-600 py-6 text-center border-y border-blue-700">
          <p className="text-white font-bold text-lg md:text-xl flex items-center justify-center">
            <Users className="mr-3 text-blue-200" size={24} /> Trusted by 10,000+ readers worldwide to improve their oral health.
          </p>
        </div>

        {/* ARTICLES SECTION */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Start Here: Fix Your Oral Health Fast</h2>
              <p className="text-lg text-slate-600">
                Dive into our most popular, dentist-reviewed guides to find exact protocols for restoring your gums and freshening your breath.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {startHereArticles.map((article, index) => (
                <article key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-slate-200 overflow-hidden flex flex-col h-full">
                  <div className="h-52 overflow-hidden bg-slate-100">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors">
                      <Link to={article.link}>{article.title}</Link>
                    </h3>
                    <p className="text-slate-600 mb-6 flex-grow">{article.excerpt}</p>
                    <Link 
                      to={article.link}
                      className="text-blue-600 font-bold flex items-center hover:underline mt-auto"
                    >
                      Read Now <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/blog" className="inline-flex items-center justify-center px-8 py-3 text-slate-700 bg-white border border-slate-300 font-bold rounded-xl hover:bg-slate-50 transition-colors">
                View All Articles
              </Link>
            </div>
          </div>
        </section>

        {/* NEW FEATURED TOOLS SECTION COMPONENT */}
        <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
  <FeaturedToolsSection />
</Suspense>

        {/* EMAIL CAPTURE SECTION */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <BookOpen size={120} />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Free 5-Step Plan to Stop Bleeding Gums Naturally (Download Now)</h2>
                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                  Join 10,000+ people who fixed their gum health without expensive treatments.
                </p>
                <div className="flex flex-col items-center">
                  <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto w-full" onSubmit={(e) => { e.preventDefault(); window.location.href='/resources'; }}>
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      className="flex-1 px-4 py-3 rounded-xl text-slate-900 bg-white border-0 focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="flex-1 px-4 py-3 rounded-xl text-slate-900 bg-white border-0 focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                    <button 
                      type="submit"
                      className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors whitespace-nowrap"
                    >
                      Get My Free Plan →
                    </button>
                  </form>
                  <p className="text-[12px] md:text-[14px] text-slate-400 mt-3">Limited free access</p>
                </div>
                <p className="text-xs text-slate-500 mt-4">We respect your privacy. No spam, ever.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default HomePage;
