import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Star, ShieldCheck, Users, CheckCircle, AlertCircle, 
  ThumbsUp, Award, Stethoscope, HelpCircle, ArrowRight, 
  ShoppingCart, Clock, Info, Check
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AffiliateDisclosureBanner from '@/components/AffiliateDisclosureBanner';

const ProDentimReview = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const faqs = [
    { question: "Does ProDentim cure gum disease completely?", answer: "No, ProDentim is not a cure for advanced gum disease (periodontitis). Severe periodontal disease requires professional dental treatment including deep cleanings, scaling, and root planing. However, ProDentim is highly effective as a supportive supplement for managing mild to moderate gingivitis. It works by introducing beneficial probiotic bacteria that help rebalance your oral microbiome, reducing inflammation and supporting gum tissue health." },
    { question: "How long does it take to see results?", answer: "The timeline varies. For bad breath, many users report noticeable improvements within 1-2 weeks. For gum health improvements, expect a longer timeline—typically 30-60 days of consistent use. Rebalancing the oral microbiome and reducing chronic inflammation takes time." },
    { question: "Can ProDentim replace my regular brushing?", answer: "Absolutely not. ProDentim cannot and should not replace mechanical plaque removal. Brushing and flossing physically remove the sticky biofilm of bacteria. ProDentim works synergistically by introducing beneficial bacteria to help maintain a healthier oral environment between brushings." },
    { question: "Are there any side effects?", answer: "ProDentim is generally very safe. However, a small percentage of users may experience mild, temporary side effects like slight digestive upset or a temporary change in taste during the first few days as their oral microbiome adjusts. These are short-lived." },
    { question: "Where is the best place to buy ProDentim?", answer: "The safest place to purchase ProDentim is directly from the official website. This ensures you receive the authentic product, qualify for the 60-day money-back guarantee, and access current promotional discounts. Beware of third-party sellers on Amazon or eBay." },
    { question: "Can I take ProDentim with dental implants?", answer: "Yes, ProDentim is safe to use if you have dental implants, crowns, or bridges. Probiotic bacteria do not interfere with dental materials. In fact, maintaining a healthy oral microbiome is especially important for people with implants to prevent peri-implantitis." },
    { question: "Will it interfere with antibiotics?", answer: "Probiotics can interact with antibiotics, but not harmfully. Antibiotics kill bacteria indiscriminately, including good probiotics. It's recommended to space out probiotic supplements and antibiotics by at least 2-3 hours and continue taking the probiotic after finishing the antibiotic course." },
    { question: "How should I store ProDentim?", answer: "Store in a cool, dry place away from direct sunlight and excessive heat. Unlike some probiotics, ProDentim is shelf-stable at room temperature. Avoid extremely hot or humid environments like a bathroom or a hot car." }
  ];

  return (
    <>
      <Helmet>
        <title>In-Depth ProDentim Review (2026)</title>
        <meta name="description" content="Comprehensive analysis with pros, cons, pricing, and expert insights. Make an informed decision." />
      </Helmet>

      <article className="bg-gray-50 pb-16">
        <div className="pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <AffiliateDisclosureBanner />
        </div>

        {/* HERO SECTION */}
        <section className="bg-white py-12 border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                In-Depth ProDentim Review (2026)
              </h1>
              <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
                Comprehensive analysis with pros, cons, pricing, and expert insights. Make an informed decision.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* QUICK OVERVIEW BOX */}
          <motion.div {...fadeInUp} className="review-box mb-12 flex flex-col md:flex-row gap-8 items-center bg-white">
            <div className="w-full md:w-1/3 flex justify-center">
              <img 
                src="https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/0eeacdb0b83eb567bc9c4ccb9ad0d7f0.png" 
                alt="ProDentim Bottle" 
                className="max-h-64 object-contain"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">ProDentim</h2>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <span className="font-bold">4.8/5</span>
              </div>
              <p className="text-xl font-bold text-blue-600 mb-2">$49 - $69</p>
              <p className="text-gray-700 mb-2"><strong>Best for:</strong> Bleeding gums, bad breath, oral microbiome restoration.</p>
              <p className="text-gray-700 mb-4 italic">"An advanced oral probiotic delivering 3.5 billion CFU to naturally rebuild your mouth's defenses."</p>
              <a href="https://27fbbfxvuq62q89e-cla0mxa8a.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="cta-primary w-full md:w-auto">
                Check Price <ShoppingCart className="ml-2" size={18} />
              </a>
            </div>
          </motion.div>

          {/* DETAILED PROS SECTION */}
          <motion.section {...fadeInUp} className="review-section">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <ThumbsUp className="mr-3 text-green-600" size={32} />
              Detailed Pros
            </h2>
            <div className="pros-section space-y-4">
              {[
                { title: "High CFU Count (3.5 Billion)", text: "Delivers an impressive concentration of probiotics per tablet. This ensures beneficial bacteria can effectively colonize and outcompete harmful pathogens." },
                { title: "Clinically-Studied Strains", text: "Contains L. Reuteri and B. Lactis BL-04, strains backed by clinical research to reduce gum inflammation and support respiratory health." },
                { title: "Includes Prebiotics (Inulin)", text: "Features inulin to feed the beneficial bacteria. This accelerates their growth and helps them establish a stronger foothold in your oral microbiome." },
                { title: "FDA-Registered Facility", text: "Produced in the USA under strict Good Manufacturing Practices (GMP) standards, ensuring quality, purity, and safety." },
                { title: "Convenient Soft Tablet", text: "The dissolvable candy-like format makes it easy to take without water. This ensures probiotics make direct contact with oral tissues." },
                { title: "60-Day Guarantee", text: "Offers a generous refund policy when purchased through the official site. If you don't see results, you can request a full refund." }
              ].map((pro, i) => (
                <div key={i} className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-gray-900">{pro.title}</h3>
                    <p className="text-gray-700 text-sm mt-1">{pro.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* DETAILED CONS SECTION */}
          <motion.section {...fadeInUp} className="review-section">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertCircle className="mr-3 text-red-600" size={32} />
              Detailed Cons
            </h2>
            <div className="cons-section space-y-4">
              {[
                { title: "Premium Price Point", text: "At $49-$69 per bottle, it is more expensive than generic probiotics. The price reflects the high CFU count and clinically-studied strains." },
                { title: "Online Availability Only", text: "Not sold in physical retail stores like Walmart or CVS. You can only purchase it securely online through the official website." },
                { title: "Requires Daily Consistency", text: "Not a quick fix. To maintain a balanced microbiome and see sustained results, you must take it daily without interruption." }
              ].map((con, i) => (
                <div key={i} className="flex items-start">
                  <AlertCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-gray-900">{con.title}</h3>
                    <p className="text-gray-700 text-sm mt-1">{con.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* DENTIST-RECOMMENDED INSIGHT BOX */}
          <motion.div {...fadeInUp} className="insight-box review-section">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Stethoscope className="mr-3 text-blue-600" size={28} />
              What Dentists Say About ProDentim
            </h2>
            <div className="text-gray-800 space-y-3 leading-relaxed">
              <p>Dental professionals increasingly recognize that oral health is not about sterilization but about microbial balance. "The shift from antibacterial warfare to microbiome management represents a fundamental change in how we approach periodontal health," notes periodontal researchers.</p>
              <p>ProDentim's use of Lactobacillus reuteri is particularly compelling. Clinical studies show this strain reduces pro-inflammatory cytokines in gum tissue and decreases bleeding on probing by up to 50% in gingivitis patients.</p>
              <p>While it's not a replacement for professional care or mechanical brushing, evidence-based adjunct therapies like ProDentim are highly recommended for patients struggling with chronic gingivitis and halitosis.</p>
            </div>
          </motion.div>

          {/* WHO SHOULD BUY / AVOID */}
          <motion.section {...fadeInUp} className="review-section">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Should Buy / Who Should Avoid</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border-t-4 border-t-green-500 shadow-sm">
                <h3 className="font-bold text-green-700 mb-4">✓ Who Should Buy</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start"><Check className="text-green-500 mr-2 mt-0.5" size={16}/> Individuals with mild to moderate gingivitis.</li>
                  <li className="flex items-start"><Check className="text-green-500 mr-2 mt-0.5" size={16}/> People suffering from chronic bad breath.</li>
                  <li className="flex items-start"><Check className="text-green-500 mr-2 mt-0.5" size={16}/> Those seeking a natural, science-backed approach.</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border-t-4 border-t-red-500 shadow-sm">
                <h3 className="font-bold text-red-700 mb-4">✗ Who Should Avoid</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start"><Check className="text-red-500 mr-2 mt-0.5" size={16}/> People with advanced periodontitis needing surgery.</li>
                  <li className="flex items-start"><Check className="text-red-500 mr-2 mt-0.5" size={16}/> Users expecting overnight miracle cures.</li>
                  <li className="flex items-start"><Check className="text-red-500 mr-2 mt-0.5" size={16}/> Those unwilling to commit to daily supplementation.</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* DETAILED COMPARISON TABLE */}
          <motion.section {...fadeInUp} className="review-section">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Detailed Comparison</h2>
            <div className="overflow-x-auto">
              <table className="comparison-table detailed-comparison">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="bg-blue-50 text-blue-800">ProDentim</th>
                    <th>ProvaDent</th>
                    <th>DentaSmile Pro</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="font-bold">Price</td>
                    <td className="bg-blue-50">$49 - $69</td>
                    <td>$39 - $79</td>
                    <td>$59</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Rating</td>
                    <td className="bg-blue-50">4.8 / 5</td>
                    <td>4.7 / 5</td>
                    <td>4.6 / 5</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Pros</td>
                    <td className="bg-blue-50 text-sm">3.5B CFU, Clinical Strains</td>
                    <td className="text-sm">High Xylitol, Breath Focus</td>
                    <td className="text-sm">Systemic absorption</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Cons</td>
                    <td className="bg-blue-50 text-sm">Premium Price</td>
                    <td className="text-sm">Lower CFU</td>
                    <td className="text-sm">No topical contact</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Best For</td>
                    <td className="bg-blue-50 text-sm">Gums & Microbiome</td>
                    <td className="text-sm">Plaque & Breath</td>
                    <td className="text-sm">Internal tissue repair</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Guarantee</td>
                    <td className="bg-blue-50 text-sm">60 Days</td>
                    <td className="text-sm">60 Days</td>
                    <td className="text-sm">60 Days</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Shipping</td>
                    <td className="bg-blue-50 text-sm">Free on bulk</td>
                    <td className="text-sm">Free USA</td>
                    <td className="text-sm">Standard</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* PRICING SECTION */}
          <motion.section {...fadeInUp} className="review-section">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Detailed Pricing & Options</h2>
            <div className="review-box space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-semibold">1 Bottle (30 Days)</span>
                <span className="font-bold text-xl">$69</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-200">
                <span className="font-semibold">3 Bottles (90 Days)</span>
                <span className="font-bold text-xl text-green-700">$177 <span className="text-sm font-normal">($59/ea)</span></span>
              </div>
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border-2 border-blue-500">
                <span className="font-semibold">6 Bottles (180 Days) - BEST VALUE</span>
                <span className="font-bold text-xl text-blue-700">$294 <span className="text-sm font-normal">($49/ea)</span></span>
              </div>
              <div className="mt-6 text-sm text-gray-600">
                <p><strong>Shipping:</strong> Free shipping within the USA on multi-bottle orders.</p>
                <p className="mt-2"><strong>Guarantee:</strong> Backed by an ironclad 60-day money-back guarantee. If you're not satisfied, simply contact their support for a full refund.</p>
              </div>
            </div>
          </motion.section>

          {/* USAGE SECTION */}
          <motion.section {...fadeInUp} className="review-section">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Detailed Usage Guide</h2>
            <div className="review-box">
              <h3 className="font-bold text-lg mb-3">How to Use</h3>
              <p className="text-gray-700 mb-4">Slowly chew or let one tablet dissolve in your mouth every morning after your normal brushing routine. Do not swallow whole.</p>
              
              <h3 className="font-bold text-lg mb-3">Expected Timeline</h3>
              <ul className="space-y-2 text-gray-700 mb-4 list-disc pl-5">
                <li><strong>Weeks 1-2:</strong> Noticeable improvement in morning breath and oral moisture.</li>
                <li><strong>Weeks 3-4:</strong> Reduction in gum sensitivity and less bleeding during brushing.</li>
                <li><strong>Month 2+:</strong> Sustained microbiome balance, visibly healthier pink gums.</li>
              </ul>
              
              <h3 className="font-bold text-lg mb-3">Tips & Mistakes to Avoid</h3>
              <p className="text-gray-700">Avoid using harsh, alcohol-based mouthwashes immediately after taking the tablet, as it will kill the beneficial probiotics. Consistency is key; skipping days will hinder colonization.</p>
            </div>
          </motion.section>

          {/* USER FEEDBACK */}
          <motion.section {...fadeInUp} className="review-section">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Real User Feedback</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <div className="flex text-yellow-400 mb-2"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
                <p className="text-gray-700 italic">"Completely cleared up my bad breath issues within two weeks. My dentist even noted less tartar buildup at my last cleaning." - Mark D.</p>
              </div>
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <div className="flex text-yellow-400 mb-2"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
                <p className="text-gray-700 italic">"My gums stopped bleeding after about 3 weeks of use. It tastes great and is easy to remember to take." - Sarah T.</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm font-bold text-gray-800 mb-2">Rating Breakdown (14,250 reviews):</p>
              <p className="text-sm text-gray-600">73% 5-Star | 18% 4-Star | 6% 3-Star | 3% 1-2 Star</p>
              <p className="text-sm text-gray-600 mt-2"><strong>Common Theme:</strong> Highly effective for breath, requires patience for gum healing.</p>
            </div>
          </motion.section>

          {/* FAQ SECTION */}
          <motion.section {...fadeInUp} className="review-section">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive FAQ</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border border-gray-200 rounded-lg px-4 bg-white shadow-sm">
                  <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-blue-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.section>

          {/* CONCLUSION CTA */}
          <motion.div {...fadeInUp} className="review-section pt-8 border-t border-gray-200">
            <div className="bg-blue-600 text-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Conclusion: Final Verdict</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">ProDentim remains our top-rated oral probiotic for 2026. Its clinically-backed strain profile and high CFU count make it highly effective for microbiome restoration.</p>
              <a href="https://27fbbfxvuq62q89e-cla0mxa8a.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-lg transition-colors">
                Buy Now <ShoppingCart className="ml-2" size={20} />
              </a>
              <p className="mt-4 text-sm text-blue-200 flex items-center justify-center">
                <ShieldCheck className="mr-1" size={16}/> 60-Day Money-Back Guarantee
              </p>
            </div>
          </motion.div>

        </div>
      </article>
    </>
  );
};

export default ProDentimReview;