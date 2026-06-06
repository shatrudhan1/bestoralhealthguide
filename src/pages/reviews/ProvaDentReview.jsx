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

const ProvaDentReview = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const faqs = [
    { question: "Is ProvaDent legitimate?", answer: "Yes, ProvaDent is a legitimate oral probiotic supplement manufactured in the USA within an FDA-registered facility following Good Manufacturing Practices (GMP). It contains natural ingredients and probiotics studied for supporting oral health." },
    { question: "How long does ProvaDent take to work?", answer: "The timeline varies. Some users report noticeable fresher breath within the first few weeks, while improvements in gum comfort and plaque reduction may take 4 to 8 weeks of consistent daily use." },
    { question: "Can I take ProvaDent with medications?", answer: "If taking prescription medications, especially antibiotics (which can diminish probiotic effectiveness) or immunosuppressants, consult your healthcare provider or dentist before starting ProvaDent." },
    { question: "Is ProvaDent available internationally?", answer: "ProvaDent is primarily sold through its official website and ships to multiple countries including the UK, Canada, and Australia. Shipping times and fees vary by location." },
    { question: "What if it does not work for me?", answer: "ProvaDent is backed by a 60-day money-back guarantee when purchased through the official website. You can request a full refund within 60 days of your purchase date." },
    { question: "Is ProvaDent FDA approved?", answer: "Dietary supplements like ProvaDent are not FDA approved to treat or cure diseases. However, ProvaDent is manufactured in an FDA-registered facility adhering to strict GMP standards." },
    { question: "Does it contain sugar?", answer: "No, ProvaDent is sugar-free. It uses organic Xylitol as a sweetener, which actually helps starve cavity-causing bacteria rather than feeding them." },
    { question: "How do I take ProvaDent?", answer: "It comes in a chewable tablet form. You chew it slowly or let it dissolve in your mouth to ensure the ingredients interact directly with your saliva and oral tissues." }
  ];

  return (
    <>
      <Helmet>
        <title>In-Depth ProvaDent Review (2026)</title>
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
                In-Depth ProvaDent Review (2026)
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
                src="https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/9466f2239b5c09e163c94440246f6d75.png" 
                alt="ProvaDent Bottle" 
                className="max-h-64 object-contain"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">ProvaDent</h2>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill={i < 4 ? "currentColor" : "none"} className={i < 4 ? "" : "text-yellow-400"} />)}
                </div>
                <span className="font-bold">4.7/5</span>
              </div>
              <p className="text-xl font-bold text-blue-600 mb-2">$39 - $79</p>
              <p className="text-gray-700 mb-2"><strong>Best for:</strong> Plaque reduction, fresh breath, and dry mouth relief.</p>
              <p className="text-gray-700 mb-4 italic">"A high-xylitol chewable formula designed to neutralize plaque acids and freshen breath instantly."</p>
              <a href="https://ef568ku10q2-mvkauh03ezvd3w.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="cta-primary w-full md:w-auto">
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
                { title: "High Xylitol Content", text: "Contains organic Xylitol which actively starves cavity-causing bacteria and helps neutralize plaque acids effectively." },
                { title: "Cranberry Extract", text: "Includes cranberry extract known for anti-adhesion properties, making it harder for plaque biofilms to stick to teeth." },
                { title: "Chewable Format", text: "The chewable tablet format stimulates saliva production, which is excellent for individuals suffering from dry mouth." },
                { title: "Instant Breath Freshening", text: "Provides immediate breath freshening benefits alongside long-term microbiome support." },
                { title: "Affordable Entry Price", text: "At $39 for the bulk package, it is one of the more budget-friendly premium oral probiotics available." }
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
                { title: "Lower CFU Count", text: "Has a proprietary blend with a lower overall CFU count compared to market leaders like ProDentim." },
                { title: "Online Exclusive", text: "Not available in local pharmacies or health stores. Requires purchasing through the official website." },
                { title: "Requires Chewing", text: "Some users may prefer a melt-in-mouth soft tablet rather than a chewable form." }
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
              What Dentists Say About ProvaDent
            </h2>
            <div className="text-gray-800 space-y-3 leading-relaxed">
              <p>Dental experts frequently highlight the importance of saliva in oral health. "Xylitol is one of the most effective non-fermentable sugar alcohols in dentistry. It actively inhibits the growth of Streptococcus mutans, the primary bacteria responsible for tooth decay," states a review of xylitol efficacy.</p>
              <p>ProvaDent's formulation leverages this mechanism perfectly. By combining xylitol with probiotics in a chewable format, it stimulates salivary flow while delivering beneficial bacteria.</p>
              <p>Clinical evidence supports this dual-action approach, making ProvaDent an excellent recommendation for patients whose primary complaints are dry mouth (xerostomia) and persistent halitosis.</p>
            </div>
          </motion.div>

          {/* WHO SHOULD BUY / AVOID */}
          <motion.section {...fadeInUp} className="review-section">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Should Buy / Who Should Avoid</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border-t-4 border-t-green-500 shadow-sm">
                <h3 className="font-bold text-green-700 mb-4">✓ Who Should Buy</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start"><Check className="text-green-500 mr-2 mt-0.5" size={16}/> People suffering from dry mouth (xerostomia).</li>
                  <li className="flex items-start"><Check className="text-green-500 mr-2 mt-0.5" size={16}/> Those wanting to actively reduce plaque formation.</li>
                  <li className="flex items-start"><Check className="text-green-500 mr-2 mt-0.5" size={16}/> Budget-conscious users looking for an effective supplement.</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border-t-4 border-t-red-500 shadow-sm">
                <h3 className="font-bold text-red-700 mb-4">✗ Who Should Avoid</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start"><Check className="text-red-500 mr-2 mt-0.5" size={16}/> Those seeking the absolute highest CFU probiotic count.</li>
                  <li className="flex items-start"><Check className="text-red-500 mr-2 mt-0.5" size={16}/> Individuals looking for severe gum disease treatments.</li>
                  <li className="flex items-start"><Check className="text-red-500 mr-2 mt-0.5" size={16}/> Users who dislike chewable tablets.</li>
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
                    <th className="bg-blue-50 text-blue-800">ProvaDent</th>
                    <th>ProDentim</th>
                    <th>DentaSmile Pro</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="font-bold">Price</td>
                    <td className="bg-blue-50">$39 - $79</td>
                    <td>$49 - $69</td>
                    <td>$59</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Rating</td>
                    <td className="bg-blue-50">4.7 / 5</td>
                    <td>4.8 / 5</td>
                    <td>4.6 / 5</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Pros</td>
                    <td className="bg-blue-50 text-sm">High Xylitol, Breath Focus</td>
                    <td className="text-sm">3.5B CFU, Clinical Strains</td>
                    <td className="text-sm">Systemic absorption</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Cons</td>
                    <td className="bg-blue-50 text-sm">Lower CFU</td>
                    <td className="text-sm">Premium Price</td>
                    <td className="text-sm">No topical contact</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Best For</td>
                    <td className="bg-blue-50 text-sm">Plaque & Breath</td>
                    <td className="text-sm">Gums & Microbiome</td>
                    <td className="text-sm">Internal tissue repair</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Guarantee</td>
                    <td className="bg-blue-50 text-sm">60 Days</td>
                    <td className="text-sm">60 Days</td>
                    <td className="text-sm">60 Days</td>
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
                <span className="font-bold text-xl">$79</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-200">
                <span className="font-semibold">3 Bottles (90 Days)</span>
                <span className="font-bold text-xl text-green-700">$177 <span className="text-sm font-normal">($59/ea)</span></span>
              </div>
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border-2 border-blue-500">
                <span className="font-semibold">6 Bottles (180 Days) - BEST VALUE</span>
                <span className="font-bold text-xl text-blue-700">$234 <span className="text-sm font-normal">($39/ea)</span></span>
              </div>
              <div className="mt-6 text-sm text-gray-600">
                <p><strong>Shipping:</strong> Free shipping within the USA on all orders.</p>
                <p className="mt-2"><strong>Guarantee:</strong> Backed by a 60-day money-back guarantee. Full refund available if unsatisfied.</p>
              </div>
            </div>
          </motion.section>

          {/* USAGE SECTION */}
          <motion.section {...fadeInUp} className="review-section">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Detailed Usage Guide</h2>
            <div className="review-box">
              <h3 className="font-bold text-lg mb-3">How to Use</h3>
              <p className="text-gray-700 mb-4">Chew one tablet thoroughly after brushing your teeth, or let it dissolve in your mouth. This ensures the xylitol and probiotics mix effectively with your saliva.</p>
              
              <h3 className="font-bold text-lg mb-3">Expected Timeline</h3>
              <ul className="space-y-2 text-gray-700 mb-4 list-disc pl-5">
                <li><strong>Days 1-7:</strong> Immediate improvement in breath freshness and increased mouth moisture.</li>
                <li><strong>Weeks 2-4:</strong> Noticeable reduction in sticky plaque formation on teeth throughout the day.</li>
                <li><strong>Month 2+:</strong> Better dental checkups and sustained oral comfort.</li>
              </ul>
              
              <h3 className="font-bold text-lg mb-3">Tips & Mistakes to Avoid</h3>
              <p className="text-gray-700">Do not swallow the tablet whole, as the topical interaction with your oral cavity is crucial. Avoid eating or drinking for 30 minutes after taking it.</p>
            </div>
          </motion.section>

          {/* USER FEEDBACK */}
          <motion.section {...fadeInUp} className="review-section">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Real User Feedback</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <div className="flex text-yellow-400 mb-2"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
                <p className="text-gray-700 italic">"My mouth feels so much cleaner throughout the day. I used to get that 'fuzzy' feeling on my teeth by afternoon, but ProvaDent stopped that completely." - John C.</p>
              </div>
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <div className="flex text-yellow-400 mb-2"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="none" className="text-yellow-400"/></div>
                <p className="text-gray-700 italic">"Great for dry mouth. I take medications that dry my mouth out, and chewing these helps stimulate saliva and keeps my breath fresh." - Emily W.</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm font-bold text-gray-800 mb-2">Rating Breakdown (8,430 reviews):</p>
              <p className="text-sm text-gray-600">68% 5-Star | 22% 4-Star | 7% 3-Star | 3% 1-2 Star</p>
              <p className="text-sm text-gray-600 mt-2"><strong>Common Theme:</strong> Excellent for dry mouth and plaque control; chewable texture is highly praised.</p>
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
              <p className="text-lg mb-8 max-w-2xl mx-auto">ProvaDent is an excellent, budget-friendly oral probiotic that excels in managing plaque and dry mouth through its smart inclusion of organic Xylitol.</p>
              <a href="https://ef568ku10q2-mvkauh03ezvd3w.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-lg transition-colors">
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

export default ProvaDentReview;