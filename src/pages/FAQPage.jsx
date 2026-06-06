import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, ChevronDown, ChevronUp, Heart, Droplet, Sparkles, 
  Wind, Sun, ArrowRight, ShieldAlert, SearchX, BookOpen, Stethoscope
} from 'lucide-react';

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const categories = [
    { id: 'All', label: 'All Questions', icon: BookOpen },
    { id: 'Gum Health', label: 'Gum Health', icon: Heart },
    { id: 'Dry Mouth', label: 'Dry Mouth', icon: Droplet },
    { id: 'Oral Probiotics', label: 'Oral Probiotics', icon: Sparkles },
    { id: 'Bad Breath', label: 'Bad Breath', icon: Wind },
    { id: 'Daily Oral Care', label: 'Daily Care', icon: Sun },
  ];

  const faqData = [
    {
      id: 1,
      category: 'Gum Health',
      question: "What causes gum disease?",
      answer: (
        <>
          <p className="mb-2">Gum disease is primarily caused by the buildup of plaque—a sticky film of bacteria that forms on your teeth. When plaque isn't removed by brushing and flossing, it hardens into tartar (calculus), which irritates the gums and causes inflammation.</p>
          <p>Other risk factors include smoking, hormonal changes, diabetes, and certain medications. If left untreated, gingivitis can progress to periodontitis, leading to potential tooth loss.</p>
        </>
      )
    },
    {
      id: 2,
      category: 'Gum Health',
      question: "How can I improve gum health naturally?",
      answer: (
        <>
          <p className="mb-2">Improving gum health starts with a strict hygiene routine: brushing twice daily with a soft-bristled brush and flossing once a day. Additionally, lifestyle changes like quitting smoking and reducing sugar intake are crucial.</p>
          <p>You can also incorporate <Link to="/blog/natural-oral-care" className="text-blue-600 hover:underline font-medium">natural oral care solutions</Link> such as warm salt water rinses to reduce inflammation or oil pulling with coconut oil to help reduce bacterial load.</p>
        </>
      )
    },
    {
      id: 3,
      category: 'Gum Health',
      question: "What's the difference between gingivitis and periodontitis?",
      answer: (
        <>
          <p className="mb-2"><strong>Gingivitis</strong> is the mildest form of gum disease. It causes red, swollen gums that may bleed easily. The key distinction is that gingivitis is <em>reversible</em> with professional treatment and good oral home care.</p>
          <p><strong>Periodontitis</strong> is an advanced stage where the infection damages the soft tissue and destroys the bone that supports your teeth. It is irreversible but can be managed. Using the <Link to="/blog/best-mouthwash-for-gum-disease" className="text-blue-600 hover:underline font-medium">best mouthwash for gum disease</Link> can help control the bacterial load in early stages.</p>
        </>
      )
    },
    {
      id: 4,
      category: 'Gum Health',
      question: "Do oral probiotics help gum health?",
      answer: (
        <>
          <p>Yes, emerging research suggests they play a significant role. Oral probiotics work by introducing beneficial bacteria like <em>Lactobacillus reuteri</em> that can crowd out the harmful pathogens responsible for gum inflammation.</p>
          <p>For a deep dive into the evidence, read our article: <Link to="/blog/can-oral-probiotics-improve-gum-health" className="text-blue-600 hover:underline font-medium">Can Oral Probiotics Really Improve Gum Health?</Link></p>
        </>
      )
    },
    {
      id: 5,
      category: 'Dry Mouth',
      question: "What causes dry mouth?",
      answer: (
        <>
          <p className="mb-2">Dry mouth (Xerostomia) is often a side effect of medications (like antihistamines and blood pressure meds), aging, dehydration, or conditions like Sjogren's syndrome.</p>
          <p>Chronic mouth breathing and stress can also contribute. Learn more about the root causes in our guide: <Link to="/blog/dry-mouth-xerostomia-causes-solutions" className="text-blue-600 hover:underline font-medium">Dry Mouth (Xerostomia): Causes, Risks & Natural Solutions</Link>.</p>
        </>
      )
    },
    {
      id: 6,
      category: 'Dry Mouth',
      question: "Is dry mouth serious?",
      answer: (
        <>
          <p>While it may seem like a mere annoyance, chronic dry mouth poses significant risks. Saliva is your mouth's primary defense against decay. Without it, your teeth are vulnerable to rapid cavity formation, gum disease, and fungal infections like thrush.</p>
        </>
      )
    },
    {
      id: 7,
      category: 'Dry Mouth',
      question: "What are natural solutions for dry mouth?",
      answer: (
        <>
          <p className="mb-2">Hydration is key, but simply drinking water often isn't enough. Chewing xylitol-sweetened gum can physically stimulate saliva flow. Avoiding alcohol-based mouthwashes is also critical.</p>
          <p>We've compiled a list of effective remedies in our article: <Link to="/blog/best-supplements-oral-probiotics-dry-mouth" className="text-blue-600 hover:underline font-medium">Best Supplements & Oral Probiotics for Dry Mouth Relief</Link>.</p>
        </>
      )
    },
    {
      id: 8,
      category: 'Dry Mouth',
      question: "Can oral probiotics help with dry mouth?",
      answer: (
        <>
          <p>Yes. While they don't directly stimulate glands like prescription drugs, oral probiotics help restore the microbiome balance that is often destroyed in a dry environment. This can prevent the bad breath and infections often associated with Xerostomia.</p>
        </>
      )
    },
    {
      id: 9,
      category: 'Oral Probiotics',
      question: "What are oral probiotics?",
      answer: (
        <>
          <p className="mb-2">Unlike gut probiotics which target digestion, oral probiotics are specific strains of beneficial bacteria (like <em>Streptococcus salivarius K12</em> and <em>M18</em>) designed to colonize the mouth, throat, and ears.</p>
          <p>They help support the immune system of the oral cavity. Discover more in <Link to="/blog/benefits-of-oral-probiotics" className="text-blue-600 hover:underline font-medium">7 Surprising Benefits of Oral Probiotics</Link>.</p>
        </>
      )
    },
    {
      id: 10,
      category: 'Oral Probiotics',
      question: "How do oral probiotics work?",
      answer: (
        <>
          <p>They work through a process called "competitive exclusion." By flooding the mouth with good bacteria, there is less food and space available for harmful bacteria to thrive. Some strains also produce natural substances (bacteriocins) that actively target bad bacteria.</p>
        </>
      )
    },
    {
      id: 11,
      category: 'Oral Probiotics',
      question: "How long do oral probiotics take to work?",
      answer: (
        <>
          <p className="mb-2">It varies by individual and condition. For breath freshness, results can be seen in as little as 1-2 weeks. For gum health improvements, it may take 30-60 days of consistent use.</p>
          <p>For a realistic breakdown of what to expect, check out: <Link to="/blog/how-long-do-oral-probiotics-take-to-work" className="text-blue-600 hover:underline font-medium">How Long Do Oral Probiotics Take to Work? (Realistic Timeline)</Link>.</p>
        </>
      )
    },
    {
      id: 12,
      category: 'Oral Probiotics',
      question: "Are oral probiotics safe?",
      answer: (
        <>
          <p>Generally, yes. Strains like K12 and M18 have excellent safety profiles in clinical studies for adults and children. However, individuals with severely compromised immune systems should always consult a doctor first.</p>
        </>
      )
    },
    {
      id: 13,
      category: 'Bad Breath',
      question: "What causes bad breath?",
      answer: (
        <>
          <p>Most bad breath (halitosis) originates in the mouth, usually from bacteria on the tongue or below the gumline producing sulfur compounds. Other causes include dry mouth, tonsil stones, or strong foods.</p>
        </>
      )
    },
    {
      id: 14,
      category: 'Bad Breath',
      question: "How can I eliminate bad breath?",
      answer: (
        <>
          <p>Good hygiene is the foundation: brush, floss, and gently clean your tongue daily. Stay hydrated to maintain saliva flow. If chronic, consider using oral probiotics to address the bacterial root cause rather than just masking the smell.</p>
        </>
      )
    },
    {
      id: 15,
      category: 'Bad Breath',
      question: "Is bad breath a sign of gum disease?",
      answer: (
        <>
          <p>It often is. Persistent bad breath or a bad taste in the mouth can be a warning sign of gum disease. Bacteria accumulate in deep gum pockets, releasing toxins that cause odor. Treating the gum infection usually resolves the breath issue.</p>
        </>
      )
    },
    {
      id: 16,
      category: 'Daily Oral Care',
      question: "What's the best oral care routine?",
      answer: (
        <>
          <p>A solid routine includes brushing twice a day for two minutes, flossing daily (preferably at night), and using a tongue scraper. Regular dental check-ups every 6 months are also non-negotiable.</p>
        </>
      )
    },
    {
      id: 17,
      category: 'Daily Oral Care',
      question: "Should I use mouthwash?",
      answer: (
        <>
          <p className="mb-2">It depends on your needs. Therapeutic mouthwashes can reduce plaque and gingivitis, but cosmetic ones only mask breath temporarily. Be cautious with alcohol-based rinses if you have dry mouth.</p>
          <p>We have a detailed guide to help you choose: <Link to="/blog/best-mouthwash-for-gum-disease" className="text-blue-600 hover:underline font-medium">Best Mouthwash for Gum Disease: Dentist-Approved Guide</Link>.</p>
        </>
      )
    },
    {
      id: 18,
      category: 'Daily Oral Care',
      question: "How do I know if I have Burning Mouth Syndrome?",
      answer: (
        <>
          <p className="mb-2">If you experience a burning sensation on the tongue or roof of the mouth without any visible sores, it might be BMS. It's often confused with dry mouth.</p>
          <p>Compare the symptoms here: <Link to="/blog/burning-mouth-syndrome-vs-dry-mouth" className="text-blue-600 hover:underline font-medium">Burning Mouth Syndrome vs Dry Mouth: Key Differences</Link>.</p>
        </>
      )
    }
  ];

  const relatedPosts = [
    {
      title: "Best Mouthwash for Gum Disease",
      excerpt: "Dentist-approved guide to choosing the right rinse for gingivitis and gum health.",
      slug: "/blog/best-mouthwash-for-gum-disease",
      category: "Gum Health"
    },
    {
      title: "Dry Mouth: Causes & Solutions",
      excerpt: "Learn why dry mouth happens and natural ways to restore moisture.",
      slug: "/blog/dry-mouth-xerostomia-causes-solutions",
      category: "Dry Mouth"
    },
    {
      title: "Oral Probiotics Timeline",
      excerpt: "A realistic look at how long it takes to see results from oral probiotics.",
      slug: "/blog/how-long-do-oral-probiotics-take-to-work",
      category: "Probiotics"
    },
    {
      title: "Natural Gum Care",
      excerpt: "Effective natural remedies and practices to strengthen your gums.",
      slug: "/blog/natural-oral-care",
      category: "Gum Health"
    },
    {
      title: "Burning Mouth vs Dry Mouth",
      excerpt: "Understanding the key differences between these confusing conditions.",
      slug: "/blog/burning-mouth-syndrome-vs-dry-mouth",
      category: "Diagnosis"
    },
    {
      title: "7 Benefits of Oral Probiotics",
      excerpt: "Beyond fresh breath: how probiotics support your entire body.",
      slug: "/blog/benefits-of-oral-probiotics",
      category: "Probiotics"
    }
  ];

  // Filtering Logic
  const filteredFAQ = useMemo(() => {
    return faqData.filter(item => {
      const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.answer.props.children.some(child => 
                              typeof child === 'string' && child.toLowerCase().includes(searchQuery.toLowerCase())
                            );
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Schema Generation
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": typeof item.answer === 'string' ? item.answer : "Please visit our website for the detailed answer containing links and resources." // Simplified for schema text requirement
      }
    })),
    "publisher": {
      "@type": "Organization",
      "name": "Best Oral Health Guide",
      "url": "https://bestoralhealthguide.com"
    }
  };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions & Help Center | Best Oral Health Guide</title>
        <meta name="description" content="Find answers to your questions about gum health, dry mouth, oral probiotics, and bad breath. Expert-reviewed educational content." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#4A90E2] to-[#357ABD] py-16 px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions & Help Center</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Answers to your most pressing questions about oral health, probiotics, and gum care.
            </p>

            {/* Disclaimer Box */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-sm text-blue-50 max-w-3xl mx-auto flex items-start text-left">
              <ShieldAlert className="flex-shrink-0 mr-3 mt-0.5" size={20} />
              <div>
                <strong>Educational Purpose Only:</strong> The content provided here is for informational purposes and complies with E-E-A-T standards. It is not intended as a substitute for professional medical diagnosis or treatment. Always consult your dentist for specific concerns.
              </div>
            </div>
          </motion.div>
        </section>

        {/* Search & Filter Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
            <div className="max-w-3xl mx-auto">
              <div className="relative mb-8">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="text-gray-400" size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Search questions (e.g., 'dry mouth', 'probiotics')..."
                  className="block w-full pl-10 pr-3 py-4 border border-gray-200 rounded-lg leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors shadow-sm text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === cat.id
                        ? 'bg-[#4A90E2] text-white shadow-md transform scale-105'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                    }`}
                  >
                    <cat.icon size={16} className="mr-2" />
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ List Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {searchQuery ? `Search Results for "${searchQuery}"` : `${selectedCategory} Questions`}
            </h2>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              Showing {filteredFAQ.length} results
            </span>
          </div>

          <div className="space-y-4">
            {filteredFAQ.length > 0 ? (
              filteredFAQ.map((item) => (
                <motion.div 
                  layout
                  key={item.id} 
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none bg-white hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <span className={`inline-block w-2 h-2 rounded-full mr-4 ${expandedId === item.id ? 'bg-[#4A90E2]' : 'bg-gray-300'}`}></span>
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
                    </div>
                    {expandedId === item.id ? (
                      <ChevronUp className="text-[#4A90E2] flex-shrink-0" size={24} />
                    ) : (
                      <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                    )}
                  </button>
                  <AnimatePresence>
                    {expandedId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100 bg-blue-50/30">
                          <div className="pl-6 border-l-2 border-[#4A90E2]/30">
                            {item.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
                <SearchX className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900">No questions found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your search or category filter.</p>
                <button 
                  onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}
                  className="mt-4 text-[#4A90E2] hover:text-[#357ABD] font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white border-y border-gray-200 py-12">
           <div className="max-w-4xl mx-auto px-4 text-center">
             <Stethoscope className="mx-auto h-12 w-12 text-[#4A90E2] mb-4" />
             <h2 className="text-2xl font-bold text-gray-900 mb-2">Still have questions?</h2>
             <p className="text-gray-600 mb-6">
               While we provide comprehensive research-based information, nothing replaces a professional exam. 
               If you have persistent symptoms, please consult your dentist.
             </p>
             <Link to="/contact" className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
               Contact Us
             </Link>
           </div>
        </section>

        {/* Related Articles Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related In-Depth Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((post, idx) => (
              <Link key={idx} to={post.slug} className="group h-full">
                <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1">
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-xs font-bold text-[#4A90E2] uppercase mb-2 tracking-wide">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#4A90E2] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="pt-4 border-t border-gray-100 mt-auto flex items-center text-[#4A90E2] font-semibold text-sm">
                      Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQPage;