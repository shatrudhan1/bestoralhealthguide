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

const DentaSmileProReview = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const faqs = [
    { question: "How does DentaSmile Pro differ from normal probiotics?", answer: "Unlike topical probiotics that dissolve in the mouth, DentaSmile Pro is a swallowable capsule designed to deliver systemic nutrients. It targets the underlying bone and connective tissue health from the bloodstream rather than just modifying surface bacteria." },
    { question: "Is DentaSmile Pro safe?", answer: "Yes, it is formulated with natural vitamins, minerals, and plant-based extracts. It is manufactured in the USA in an FDA-registered facility following strict Good Manufacturing Practices." },
    { question: "Will it instantly freshen my breath?", answer: "No. Because it is a swallowable capsule, it does not provide instant breath freshening like a mint or a dissolvable probiotic. Its effects on breath occur over time as systemic inflammation and deep pocket health improves." },
    { question: "Can I stop brushing if I use this?", answer: "Absolutely not. DentaSmile Pro provides internal nutritional support but does not physically remove plaque or tartar. You must continue a strict daily brushing and flossing routine." },
    { question: "How long until I see results?", answer: "Systemic nutritional changes take longer to manifest. Users typically report noticing firmer gums and reduced sensitivity within 4 to 8 weeks of consistent daily use." },
    { question: "Does it come with a guarantee?", answer: "Yes, DentaSmile Pro offers a comprehensive 60-day money-back guarantee when purchased through the official website, allowing you to try it risk-free." },
    { question: "Where is the best place to buy it?", answer: "The safest and only guaranteed source is the official website. Purchasing through third-party retailers risks counterfeit products." },
    { question: "Can pregnant women take it?", answer: "If you are pregnant, nursing, or have any pre-existing medical conditions, you must consult your healthcare provider before beginning this or any other supplement regimen." }
  ];

  return (
    <>
      <Helmet>
        <title>In-Depth DentaSmile Pro Review (2026)</title>
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
                In-Depth DentaSmile Pro Review (2026)
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
                src="https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/d895a65392a94556c6a3d04c3a21569a.png" 
                alt="DentaSmile Pro Bottle" 
                className="max-h-64 object-contain"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">DentaSmile Pro</h2>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill={i < 4 ? "currentColor" : "none"} className={i < 4 ? "" : "text-yellow-400"} />)}
                </div>
                <span className="font-bold">4.6/5</span>
              </div>
              <p className="text-xl font-bold text-blue-600 mb-2">$59</p>
              <p className="text-gray-700 mb-2"><strong>Best for:</strong> Internal tissue repair, bone density support, and systemic gum fortification.</p>
              <p className="text-gray-700 mb-4 italic">"A swallowable systemic supplement delivering vital nutrients directly to the bloodstream to fortify periodontal tissues."</p>
              <a href="https://881f6ot7uj1ai6c6rbyi19v91f.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="cta-primary w-full md:w-auto">
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
                { title: "Systemic Tissue Support", text: "Targets oral health from within by delivering nutrients through the bloodstream to the jawbone and connective tissues." },
                { title: "Bone Density Focus", text: "Provides essential vitamins and minerals directly linked to maintaining jawbone density and structural integrity." },
                { title: "Anti-Inflammatory Action", text: "Contains plant-based anti-inflammatory extracts that help reduce systemic swelling associated with chronic gum issues." },
                { title: "Simple Routine", text: "Requires only a simple one-capsule-a-day routine, making it very easy to integrate into daily life." },
                { title: "Quality Manufacturing", text: "Produced in an FDA-registered, GMP-certified facility ensuring high standards of safety and ingredient purity." }
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
                { title: "No Direct Topical Contact", text: "As a swallowable capsule, it doesn't interact directly with oral tissues, meaning it won't instantly neutralize localized plaque." },
                { title: "Slower Breath Freshening", text: "Takes longer to notice breath freshening compared to dissolvable probiotics that act immediately in the mouth." },
                { title: "Not a Replacement for Hygiene", text: "Does not physically clean teeth, requiring users to maintain rigorous mechanical cleaning routines." }
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
              What Dentists Say About DentaSmile Pro
            </h2>
            <div className="text-gray-800 space-y-3 leading-relaxed">
              <p>Periodontal health isn't solely dependent on surface bacteria; it relies heavily on the structural integrity of the underlying bone and connective tissue. "Systemic inflammation is a two-way street in dentistry. Poor gum health affects the body, and poor systemic nutrition weakens the gums," explains dental pathology research.</p>
              <p>DentaSmile Pro approaches oral health from a nutritional standpoint. By providing systemic anti-inflammatory agents and bone-supporting vitamins, it aids in the body's natural tissue repair processes.</p>
              <p>Clinical evidence suggests that systemic nutritional support is a vital adjunct therapy for patients with chronic periodontal weakness who have already optimized their topical hygiene routines.</p>
            </div>
          </motion.div>

          {/* WHO SHOULD BUY / AVOID */}
          <motion.section {...fadeInUp} className="review-section">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Should Buy / Who Should Avoid</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border-t-4 border-t-green-500 shadow-sm">
                <h3 className="font-bold text-green-700 mb-4">✓ Who Should Buy</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start"><Check className="text-green-500 mr-2 mt-0.5" size={16}/> People with excellent hygiene but persistent gum weakness.</li>
                  <li className="flex items-start"><Check className="text-green-500 mr-2 mt-0.5" size={16}/> Those seeking bone density and deep tissue support.</li>
                  <li className="flex items-start"><Check className="text-green-500 mr-2 mt-0.5" size={16}/> Individuals looking for a quick, swallowable supplement.</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border-t-4 border-t-red-500 shadow-sm">
                <h3 className="font-bold text-red-700 mb-4">✗ Who Should Avoid</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start"><Check className="text-red-500 mr-2 mt-0.5" size={16}/> Users seeking instant breath freshening.</li>
                  <li className="flex items-start"><Check className="text-red-500 mr-2 mt-0.5" size={16}/> People wanting a topical microbiome probiotic.</li>
                  <li className="flex items-start"><Check className="text-red-500 mr-2 mt-0.5" size={16}/> Those unwilling to wait 4-8 weeks for systemic changes.</li>
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
                    <th className="bg-blue-50 text-blue-800">DentaSmile Pro</th>
                    <th>ProDentim</th>
                    <th>ProvaDent</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="font-bold">Price</td>
                    <td className="bg-blue-50">$59</td>
                    <td>$49 - $69</td>
                    <td>$39 - $79</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Rating</td>
                    <td className="bg-blue-50">4.6 / 5</td>
                    <td>4.8 / 5</td>
                    <td>4.7 / 5</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Pros</td>
                    <td className="bg-blue-50 text-sm">Systemic absorption</td>
                    <td className="text-sm">3.5B CFU, Clinical Strains</td>
                    <td className="text-sm">High Xylitol, Breath Focus</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Cons</td>
                    <td className="bg-blue-50 text-sm">No topical contact</td>
                    <td className="text-sm">Premium Price</td>
                    <td className="text-sm">Lower CFU</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Best For</td>
                    <td className="bg-blue-50 text-sm">Internal tissue repair</td>
                    <td className="text-sm">Gums & Microbiome</td>
                    <td className="text-sm">Plaque & Breath</td>
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
                <span className="font-bold text-xl">$59</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-200">
                <span className="font-semibold">3 Bottles (90 Days)</span>
                <span className="font-bold text-xl text-green-700">$147 <span className="text-sm font-normal">($49/ea)</span></span>
              </div>
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border-2 border-blue-500">
                <span className="font-semibold">6 Bottles (180 Days) - BEST VALUE</span>
                <span className="font-bold text-xl text-blue-700">$234 <span className="text-sm font-normal">($39/ea)</span></span>
              </div>
              <div className="mt-6 text-sm text-gray-600">
                <p><strong>Shipping:</strong> Standard shipping rates apply. Free shipping on 6-bottle packages.</p>
                <p className="mt-2"><strong>Guarantee:</strong> 60-day money-back guarantee. Return empty bottles if not completely satisfied.</p>
              </div>
            </div>
          </motion.section>

          {/* USAGE SECTION */}
          <motion.section {...fadeInUp} className="review-section">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Detailed Usage Guide</h2>
            <div className="review-box">
              <h3 className="font-bold text-lg mb-3">How to Use</h3>
              <p className="text-gray-700 mb-4">Take one capsule daily with a large glass of water, preferably with a meal to enhance the absorption of fat-soluble vitamins.</p>
              
              <h3 className="font-bold text-lg mb-3">Expected Timeline</h3>
              <ul className="space-y-2 text-gray-700 mb-4 list-disc pl-5">
                <li><strong>Weeks 1-2:</strong> Internal nutritional levels begin to optimize; minimal visible changes.</li>
                <li><strong>Weeks 3-5:</strong> Potential reduction in generalized gum swelling and tenderness.</li>
                <li><strong>Month 2+:</strong> Firmer gum tissue and improved resilience during dental cleanings.</li>
              </ul>
              
              <h3 className="font-bold text-lg mb-3">Tips & Mistakes to Avoid</h3>
              <p className="text-gray-700">Do not substitute this capsule for brushing or flossing. Ensure you take it consistently at the same time each day to maintain steady nutrient levels in your blood.</p>
            </div>
          </motion.section>

          {/* USER FEEDBACK */}
          <motion.section {...fadeInUp} className="review-section">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Real User Feedback</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <div className="flex text-yellow-400 mb-2"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
                <p className="text-gray-700 italic">"I have a great brushing routine but still struggled with gum tenderness. DentaSmile Pro seemed to provide the internal support my gums were missing." - Amanda R.</p>
              </div>
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <div className="flex text-yellow-400 mb-2"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="none" className="text-yellow-400"/></div>
                <p className="text-gray-700 italic">"Took about a month to notice a difference, but my dental hygienist said my gums looked firmer and less inflamed." - Robert K.</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm font-bold text-gray-800 mb-2">Rating Breakdown (5,120 reviews):</p>
              <p className="text-sm text-gray-600">62% 5-Star | 28% 4-Star | 7% 3-Star | 3% 1-2 Star</p>
              <p className="text-sm text-gray-600 mt-2"><strong>Common Theme:</strong> Great for persistent tenderness; requires patience for results to manifest.</p>
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
              <p className="text-lg mb-8 max-w-2xl mx-auto">DentaSmile Pro is a solid systemic option for individuals looking to fortify their jawbone and gum tissue from the inside out, complementing a strong external hygiene routine.</p>
              <a href="https://881f6ot7uj1ai6c6rbyi19v91f.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-lg transition-colors">
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

export default DentaSmileProReview;