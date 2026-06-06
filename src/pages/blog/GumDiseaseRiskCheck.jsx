import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowRight, CheckCircle2, Info, Activity } from 'lucide-react';
import BlogTemplate from '@/components/BlogTemplate';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const GumDiseaseRiskCheck = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can gum disease be reversed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Early-stage gingivitis can be reversed with proper oral hygiene and professional cleaning. Advanced periodontitis requires ongoing management. Early intervention is crucial—the sooner you address symptoms, the better your chances of recovery."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to improve gum health?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most people see improvement within 2-4 weeks of consistent oral care. Significant healing may take 3-6 months. Results depend on disease severity and adherence to prevention habits. Professional treatment accelerates recovery."
        }
      },
      {
        "@type": "Question",
        "name": "Is gum disease contagious?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gum disease itself isn't contagious, but the bacteria causing it can spread through saliva. You can't 'catch' gum disease from someone, but sharing utensils or toothbrushes may transfer harmful bacteria. Maintain good hygiene."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Am I at Risk of Gum Disease? Check Early Signs & Free Calculator (2026)</title>
        <meta name="description" content="Check if you're at risk of gum disease. Learn early warning signs and use our free gum disease risk calculator to assess your gum health instantly." />
        <link rel="canonical" href="https://www.bestoralhealthguide.com/blog/gum-disease-risk-check" />
      </Helmet>

      <BlogTemplate
        title="Am I at Risk of Gum Disease? Check Early Signs & Use This Free Calculator (2026)"
        description="Check if you're at risk of gum disease. Learn early warning signs and use our free gum disease risk calculator to assess your gum health instantly."
        publishDate="Mar 27, 2026"
        updateDate="Mar 27, 2026"
        author="Dr. Sarah Mitchell, DDS"
        readTime="8 min read"
        category="Risk Assessment"
        image="https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/befb47736b9822aaa10b9e2650da3ed8.webp"
        imageAlt="Comparison of healthy gums vs gum disease symptoms"
        schemaData={schemaData}
        relatedPostSlug="gum-disease-complete-guide"
        relatedPostTitle="Gum Disease Complete Guide"
      >
        {/* Quick Answer Section */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl my-8 shadow-sm">
          <h2 className="text-xl font-bold text-blue-900 mb-2 flex items-center">
            <Info className="mr-2" size={24} /> Quick Answer
          </h2>
          <p className="text-gray-800 font-medium">
            Yes, many people are at risk of gum disease without knowing it. Early warning signs include bleeding gums, swelling, and bad breath. Age, smoking, poor hygiene, genetics, and stress increase risk. Use our free calculator to assess your gum health instantly and take preventive action today.
          </p>
        </div>

        {/* Intro Section */}
        <p className="lead text-xl text-gray-800 font-medium leading-relaxed mb-6">
          Gum disease is often called a "silent" condition because the early symptoms are easy to overlook. You might notice a little pink in the sink when brushing and think nothing of it. The problem is that many people don't recognize these early signs until the disease has progressed to a more serious stage.
        </p>
        <p className="mb-8 text-gray-700 leading-relaxed">
          The good news? By identifying your personal risk factors early, you can take control of your oral health. This post breaks down the warning signs you shouldn't ignore and provides a simple way to evaluate your situation. We've even built a free calculator to help you assess your current gum health instantly.
        </p>

        {/* H2: What Is Gum Disease? */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What Is Gum Disease?</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Gum disease, or periodontal disease, is an infection of the tissues that hold your teeth in place. It typically starts when sticky, bacteria-filled plaque builds up on teeth and hardens.
        </p>
        <p className="mb-4 text-gray-700 leading-relaxed">
          The condition occurs in two main stages. The early stage, known as <strong>gingivitis</strong>, involves inflammation of the gums—making them red, swollen, and prone to bleeding. Fortunately, this stage is entirely reversible. If left untreated, it can advance into <strong>periodontitis</strong>. At this stage, the gums pull away from the teeth, forming infected pockets that can destroy the underlying bone, leading to tooth loss.
        </p>
        <p className="mb-8 text-gray-700 leading-relaxed">
          Understanding this progression is vital not just for your smile, but for your overall wellness. Research strongly links advanced gum disease to systemic health issues, including heart disease and diabetes. For a deeper dive into how this develops, check out our <Link to="/blog/gum-disease-complete-guide" className="text-[#4A90E2] font-semibold hover:underline">Gum Disease Complete Guide</Link>.
        </p>

        {/* Image Integration */}
        <figure className="my-10">
          <img 
            src="https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/befb47736b9822aaa10b9e2650da3ed8.webp" 
            alt="Comparison of healthy gums vs gum disease symptoms" 
            className="w-full rounded-xl shadow-lg border border-gray-200"
            loading="lazy"
          />
          <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
            Recognizing the visual differences between healthy gums and early-stage inflammation is key to prevention.
          </figcaption>
        </figure>

        {/* H2: Early Warning Signs */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Early Warning Signs</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Catching the disease early is your best defense. Pay close attention to these common symptoms:
        </p>
        <ul className="space-y-3 text-gray-700 mb-8 pl-2">
          <li className="flex items-start">
            <AlertTriangle className="mr-3 text-amber-500 mt-1 flex-shrink-0" size={20} />
            <span><strong>Bleeding gums:</strong> Especially when brushing, flossing, or eating hard foods.</span>
          </li>
          <li className="flex items-start">
            <AlertTriangle className="mr-3 text-amber-500 mt-1 flex-shrink-0" size={20} />
            <span><strong>Swollen or red gums:</strong> Healthy gums should be firm and pale pink.</span>
          </li>
          <li className="flex items-start">
            <AlertTriangle className="mr-3 text-amber-500 mt-1 flex-shrink-0" size={20} />
            <span><strong>Tooth sensitivity:</strong> Experiencing pain when consuming hot or cold items.</span>
          </li>
          <li className="flex items-start">
            <AlertTriangle className="mr-3 text-amber-500 mt-1 flex-shrink-0" size={20} />
            <span><strong>Persistent bad breath:</strong> A foul taste or odor that won't go away, even after brushing.</span>
          </li>
          <li className="flex items-start">
            <AlertTriangle className="mr-3 text-amber-500 mt-1 flex-shrink-0" size={20} />
            <span><strong>Receding gums:</strong> Teeth that appear longer than they used to.</span>
          </li>
          <li className="flex items-start">
            <AlertTriangle className="mr-3 text-amber-500 mt-1 flex-shrink-0" size={20} />
            <span><strong>Loose teeth:</strong> A shift in how your teeth fit together when you bite.</span>
          </li>
          <li className="flex items-start">
            <AlertTriangle className="mr-3 text-amber-500 mt-1 flex-shrink-0" size={20} />
            <span><strong>Pus between teeth and gums:</strong> A clear sign of an active infection.</span>
          </li>
        </ul>

        {/* H2: Who Is at Risk? */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Who Is at Risk?</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          While anyone can develop gum issues, certain factors significantly increase your likelihood. You may be at higher risk due to:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 mb-8 pl-2">
          <li className="flex items-start bg-gray-50 p-3 rounded-lg border border-gray-100">
            <CheckCircle2 className="mr-3 text-blue-500 mt-0.5 flex-shrink-0" size={18} />
            <span><strong>Age:</strong> Older adults naturally have a higher risk profile.</span>
          </li>
          <li className="flex items-start bg-gray-50 p-3 rounded-lg border border-gray-100">
            <CheckCircle2 className="mr-3 text-blue-500 mt-0.5 flex-shrink-0" size={18} />
            <span><strong>Smoking & Tobacco:</strong> One of the most significant risk factors for severe disease.</span>
          </li>
          <li className="flex items-start bg-gray-50 p-3 rounded-lg border border-gray-100">
            <CheckCircle2 className="mr-3 text-blue-500 mt-0.5 flex-shrink-0" size={18} />
            <span><strong>Poor oral hygiene:</strong> Inconsistent brushing and flossing habits.</span>
          </li>
          <li className="flex items-start bg-gray-50 p-3 rounded-lg border border-gray-100">
            <CheckCircle2 className="mr-3 text-blue-500 mt-0.5 flex-shrink-0" size={18} />
            <span><strong>Genetics:</strong> A family history of dental problems.</span>
          </li>
          <li className="flex items-start bg-gray-50 p-3 rounded-lg border border-gray-100">
            <CheckCircle2 className="mr-3 text-blue-500 mt-0.5 flex-shrink-0" size={18} />
            <span><strong>Chronic stress:</strong> Which can lower your body's ability to fight infection.</span>
          </li>
          <li className="flex items-start bg-gray-50 p-3 rounded-lg border border-gray-100">
            <CheckCircle2 className="mr-3 text-blue-500 mt-0.5 flex-shrink-0" size={18} />
            <span><strong>Hormonal changes:</strong> Such as those during pregnancy or menopause.</span>
          </li>
          <li className="flex items-start bg-gray-50 p-3 rounded-lg border border-gray-100">
            <CheckCircle2 className="mr-3 text-blue-500 mt-0.5 flex-shrink-0" size={18} />
            <span><strong>Medications:</strong> Certain drugs that reduce saliva flow.</span>
          </li>
          <li className="flex items-start bg-gray-50 p-3 rounded-lg border border-gray-100">
            <CheckCircle2 className="mr-3 text-blue-500 mt-0.5 flex-shrink-0" size={18} />
            <span><strong>Weakened immunity:</strong> Conditions that affect immune response.</span>
          </li>
        </ul>

        {/* H2: Check Your Risk Instantly */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Check Your Risk Instantly</h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Wondering how these risk factors stack up for you? We've built an interactive calculator that takes less than 2 minutes to complete. It analyzes your daily habits, current symptoms, and background to give you a personalized risk profile. Taking this step can build your confidence and guide your next move toward a healthier smile.
        </p>
        
        <div className="bg-gradient-to-br from-[#4A90E2] to-blue-800 rounded-2xl shadow-xl p-8 text-center my-10">
          <Activity className="text-white mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold text-white mb-4">Evaluate Your Gum Health Today</h3>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Skip the guesswork. Answer a few simple questions to instantly see your risk level and receive actionable tips tailored to your specific situation.
          </p>
          <Link 
            to="/tools/gum-disease-risk-calculator" 
            className="inline-flex items-center px-8 py-4 bg-white text-[#4A90E2] font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:-translate-y-1"
          >
            Check Your Gum Disease Risk Now <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>

        {/* H2: Prevention Tips */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Prevention Tips</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Protecting your gums requires a proactive, daily commitment. Here are actionable prevention strategies you can implement immediately:
        </p>
        <ul className="space-y-4 text-gray-700 mb-8 list-disc pl-6">
          <li><strong>Brush twice daily:</strong> Use a soft-bristled brush and fluoride toothpaste. Consistency is key to removing plaque before it hardens.</li>
          <li><strong>Floss daily:</strong> Flossing reaches the spaces your toothbrush misses, stopping tartar buildup at the gum line.</li>
          <li><strong>Clean your tongue:</strong> Gently scraping your tongue removes excess bacteria that contribute to both plaque and bad breath. For a thorough routine, see our <Link to="/blog/oral-hygiene-complete-guide" className="text-[#4A90E2] font-semibold hover:underline">Oral Hygiene Complete Guide</Link>.</li>
          <li><strong>Use an antimicrobial mouthwash:</strong> A therapeutic rinse can help reduce bacterial load. Read our guide on the <Link to="/blog/best-mouthwash-for-gum-disease" className="text-[#4A90E2] font-semibold hover:underline">best mouthwash for gum disease</Link> to find the right formulation.</li>
          <li><strong>Schedule regular dental visits:</strong> Aim for professional cleanings every 6 months to remove hardened calculus.</li>
          <li><strong>Maintain a healthy diet:</strong> Eat foods rich in vitamins C and D to support tissue repair and immune function.</li>
          <li><strong>Manage stress:</strong> Incorporate exercise and relaxation techniques, as stress can lower your resistance to infection.</li>
          <li><strong>Avoid smoking and tobacco:</strong> Quitting drastically improves blood flow to your gums, speeding up healing.</li>
        </ul>

        {/* H2: When to See a Dentist */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">When to See a Dentist</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          While stepping up your at-home care is essential, it doesn't replace the need for professional oversight. If you notice persistent symptoms—such as bleeding when you brush, swelling, or foul breath—that last for more than two weeks, it is time to schedule a professional evaluation.
        </p>
        <p className="mb-8 text-gray-700 leading-relaxed">
          Severe pain, visible pus, or teeth that suddenly feel loose require immediate dental attention. Remember, seeking help early is empowering, not scary. A regular checkup frequency (usually every 6 months) ensures that any minor issues are caught and treated long before they become serious, irreversible problems. Be proactive; your smile is worth it.
        </p>

        {/* FAQ Section */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full space-y-4 mb-10">
          {schemaData.mainEntity.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-4 bg-white shadow-sm hover:border-blue-200 transition-colors">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-[#4A90E2] text-left">
                {faq.name}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pt-2 pb-4">
                {faq.acceptedAnswer.text}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </BlogTemplate>
    </>
  );
};

export default GumDiseaseRiskCheck;