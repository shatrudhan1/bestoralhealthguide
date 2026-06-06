import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, ShieldCheck, Users, ArrowRight, Award } from 'lucide-react';
import AffiliateDisclosureBanner from '@/components/AffiliateDisclosureBanner';

const ResourcesPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.bestoralhealthguide.com/resources",
        "url": "https://www.bestoralhealthguide.com/resources",
        "name": "Top-Rated Gum Health Products (Quick Picks 2026)",
        "description": "Handpicked products recommended by dental experts. Quick comparison, fast checkout."
      }
    ]
  };

  const products = [
    {
      name: "ProDentim",
      rating: 4.8,
      reviewCount: "14,250",
      benefit: "Clinically proven for bleeding gums & bad breath",
      price: "$49",
      badge: "🏆 #1 Choice",
      badgeColor: "bg-amber-500",
      image: "https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/ecd876bfb86358be2e58d77c98347465.png",
      trustSignal: "10,000+ users",
      guarantee: "60-day guarantee",
      buyLink: "https://27fbbfxvuq62q89e-cla0mxa8a.hop.clickbank.net",
      reviewLink: "/reviews/prodentim"
    },
    {
      name: "ProvaDent",
      rating: 4.7,
      reviewCount: "8,430",
      benefit: "Natural formula reduces plaque & freshens breath",
      price: "$39",
      badge: "💎 Best Value",
      badgeColor: "bg-blue-500",
      image: "https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/9466f2239b5c09e163c94440246f6d75.png",
      trustSignal: "8,400+ users",
      guarantee: "Free shipping",
      buyLink: "https://ef568ku10q2-mvkauh03ezvd3w.hop.clickbank.net",
      reviewLink: "/reviews/provadent"
    },
    {
      name: "DentaSmile Pro",
      rating: 4.6,
      reviewCount: "5,120",
      benefit: "Professional-grade oral care stops bleeding gums",
      price: "$59",
      badge: "🔥 Fast Results",
      badgeColor: "bg-emerald-500",
      image: "https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/d895a65392a94556c6a3d04c3a21569a.png",
      trustSignal: "5,100+ users",
      guarantee: "Money-back",
      buyLink: "https://881f6ot7uj1ai6c6rbyi19v91f.hop.clickbank.net",
      reviewLink: "/reviews/dentasmile-pro"
    }
  ];

  const faqs = [
    {
      question: "Which product is best for bleeding gums?",
      answer: "ProDentim is our top pick with 3.5 billion CFU probiotics proven to improve gum health."
    },
    {
      question: "Do these products have guarantees?",
      answer: "Yes, all products include 60-day money-back guarantees."
    },
    {
      question: "How fast will I see results?",
      answer: "Most users report improvements within 2-4 weeks of consistent use."
    },
    {
      question: "Are these products safe?",
      answer: "Yes, all products are manufactured in FDA-registered facilities with natural ingredients."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Top-Rated Gum Health Products (Quick Picks 2026)</title>
        <meta name="description" content="Handpicked products recommended by dental experts. Quick comparison, fast checkout." />
        <link rel="canonical" href="https://www.bestoralhealthguide.com/resources" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="bg-gray-50 font-sans text-slate-900 pb-16">
        
        <div className="px-4 sm:px-6 lg:px-8 pt-4 max-w-7xl mx-auto">
          <AffiliateDisclosureBanner />
        </div>

        {/* HERO SECTION */}
        <section className="bg-white py-12 md:py-16 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
                Top-Rated Gum Health Products (Quick Picks 2026)
              </h1>
              
              <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
                Handpicked products recommended by dental experts. Quick comparison, fast checkout.
              </p>
            </motion.div>
          </div>
        </section>

        {/* PRODUCTS GRID */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="quick-card bg-white"
                >
                  <div className={`${product.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-lg inline-block self-start mb-3`}>
                    {product.badge}
                  </div>

                  <div className="h-48 flex items-center justify-center mb-4 bg-gray-50 rounded-lg p-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="max-h-full max-w-full object-contain drop-shadow-sm"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{product.name}</h3>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-gray-700">{product.rating}/5</span>
                  </div>

                  <p className="text-gray-700 font-medium mb-4 flex-grow">
                    {product.benefit}
                  </p>

                  <p className="text-2xl font-bold text-blue-600 mb-3">{product.price}</p>

                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-6">
                    <span className="flex items-center">
                      <Users size={14} className="mr-1 text-green-500" />
                      {product.trustSignal}
                    </span>
                    <span className="flex items-center">
                      <ShieldCheck size={14} className="mr-1 text-blue-500" />
                      {product.guarantee}
                    </span>
                  </div>

                  <div className="space-y-3 mt-auto">
                    <a
                      href={product.buyLink}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="quick-card-cta flex items-center justify-center"
                    >
                      Check Price <ArrowRight className="ml-2" size={16} />
                    </a>
                    <Link
                      to={product.reviewLink}
                      className="block w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-center font-bold rounded-lg transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* QUICK COMPARISON TABLE */}
        <section className="py-12 bg-white border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Quick Comparison</h2>
            
            <div className="overflow-x-auto">
              <table className="comparison-table quick-comparison">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Rating</th>
                    <th>Price</th>
                    <th>Best For</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {products.map((product, index) => (
                    <tr key={index}>
                      <td className="font-bold text-gray-900">{product.name}</td>
                      <td>
                        <div className="flex items-center gap-1">
                          <Star size={14} className="text-yellow-400 fill-current" />
                          <span className="font-semibold">{product.rating}</span>
                        </div>
                      </td>
                      <td className="font-semibold text-blue-600">{product.price}</td>
                      <td className="text-gray-600">{product.benefit}</td>
                      <td className="text-center">
                        <a
                          href={product.buyLink}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="inline-block px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded text-xs transition-colors"
                        >
                          Check Price
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* MINIMAL FAQ */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Quick Questions</h2>
            <div className="faq-quick grid md:grid-cols-2 gap-4">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <h3 className="faq-question">{faq.question}</h3>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="pt-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to improve your oral health?
              </h2>
              <a
                href="#products"
                className="cta-primary mb-4"
              >
                Shop Now <ArrowRight className="ml-2" size={20} />
              </a>
              <div className="flex justify-center items-center text-sm text-gray-500">
                <ShieldCheck size={18} className="mr-2 text-green-500" />
                Money-back guarantee on all products
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default ResourcesPage;