import React from 'react';
import { Helmet } from 'react-helmet';
import BlogTemplate from '@/components/BlogTemplate';
import { Link } from 'react-router-dom';
import { ShieldCheck, Info, AlertTriangle, CheckCircle, HelpCircle, Activity } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const StagesOfGumDiseaseExplained = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What are the 4 stages of gum disease?", "acceptedAnswer": { "@type": "Answer", "text": "Stage 1 is gingivitis (reversible, gums bleed). Stage 2 is early periodontitis (bone loss begins). Stage 3 is moderate periodontitis (significant bone loss). Stage 4 is advanced periodontitis (severe bone loss, teeth may loosen). Early intervention prevents progression." } },
      { "@type": "Question", "name": "Can gum disease be reversed at any stage?", "acceptedAnswer": { "@type": "Answer", "text": "Gingivitis (Stage 1) is completely reversible with proper oral hygiene. Early periodontitis (Stage 2) may be partially reversible with professional treatment. Advanced stages require ongoing professional management but cannot be fully reversed." } },
      { "@type": "Question", "name": "How long does it take to progress from gingivitis to periodontitis?", "acceptedAnswer": { "@type": "Answer", "text": "Progression varies but can occur within weeks to months if gingivitis is untreated. Factors like smoking, poor hygiene, and weak immune response accelerate progression. Early intervention prevents this progression." } },
      { "@type": "Question", "name": "What are the signs of each gum disease stage?", "acceptedAnswer": { "@type": "Answer", "text": "Stage 1: Bleeding, swelling, redness. Stage 2: Persistent bleeding, deeper pockets, slight bone loss. Stage 3: Loose teeth, pus, significant bone loss. Stage 4: Severe looseness, extensive bone loss, possible tooth loss. See a dentist immediately if you notice these signs." } },
      { "@type": "Question", "name": "When should I see a dentist for gum disease?", "acceptedAnswer": { "@type": "Answer", "text": "See a dentist immediately if you notice bleeding that persists for 2+ weeks, swelling, or pain. Schedule regular checkups every 6 months for prevention. Early detection prevents progression to advanced stages." } }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Stages of Gum Disease 2026: Early Signs to Advanced</title>
        <meta name="description" content="Learn the 4 stages of gum disease from gingivitis to advanced periodontitis. Recognize early signs and understand treatment at each stage." />
      </Helmet>
      <BlogTemplate
        title="Stages of Gum Disease 2026: Early Signs to Advanced"
        description="Learn the 4 stages of gum disease from gingivitis to advanced periodontitis."
        publishDate="Mar 26, 2026"
        updateDate="Mar 28, 2026"
        author="Dr. Sarah Mitchell, DDS"
        readTime="14 min read"
        category="Gum Health"
        image="https://images.unsplash.com/photo-1687811290550-8df69cb94718"
        imageAlt="Progression of gum disease"
        schemaData={schemaData}
      >
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl my-8 shadow-sm">
          <p className="text-gray-900 font-bold text-lg">
            Gum disease progresses through 4 stages: Stage 1 is gingivitis (reversible, gums bleed), Stage 2 is early periodontitis (bone loss begins), Stage 3 is moderate periodontitis (significant bone loss), Stage 4 is advanced periodontitis (severe bone loss, teeth may loosen). Early intervention prevents progression.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-10">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <CheckCircle className="text-green-500 mr-2" size={24} /> Quick Summary
          </h3>
          <ul className="space-y-2 text-gray-700 list-disc pl-6 marker:text-blue-500">
            <li>Gum disease has 4 progressive stages</li>
            <li>Stage 1 (gingivitis) is completely reversible</li>
            <li>Stages 2-4 require professional treatment</li>
            <li>Early detection prevents progression</li>
            <li>Regular checkups catch problems early</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center"><Activity className="mr-3 text-blue-500"/> Expert Insight</h2>
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8 italic text-gray-700 border-l-4 border-l-indigo-500">
          According to the American Dental Association, early intervention is crucial for gum disease management. Dr. Sarah Mitchell, DDS, emphasizes that "most gum problems are preventable with consistent oral hygiene and regular professional care. The key is catching issues early before they progress to advanced stages."
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center"><Info className="mr-3 text-blue-500"/> When to See a Dentist</h2>
        <p className="mb-4 text-gray-700">See a dentist immediately if:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>Bleeding persists for 2+ weeks despite good oral care</li>
          <li>You have severe pain or swelling</li>
          <li>You notice loose teeth</li>
          <li>You see pus between teeth</li>
          <li>You have signs of advanced gum disease</li>
        </ul>
        <p className="mb-4 text-gray-700">Schedule a regular appointment if:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>You haven't had a professional cleaning in 6+ months</li>
          <li>You want to rule out underlying conditions</li>
          <li>You have mild but consistent symptoms</li>
          <li>You want professional guidance on your routine</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center"><AlertTriangle className="mr-3 text-orange-500"/> Signs You Should Not Ignore</h2>
        <p className="mb-4 text-gray-700">Do not ignore these warning signs:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>Bleeding that persists for 2+ weeks</li>
          <li>Severe pain or swelling</li>
          <li>Loose or shifting teeth</li>
          <li>Pus or discharge from gums</li>
          <li>Receding gums exposing tooth roots</li>
          <li>Persistent bad breath despite good hygiene</li>
          <li>Difficulty chewing or eating</li>
          <li>Fever accompanying gum symptoms</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-8 flex items-center">
          <HelpCircle className="text-blue-600 mr-3" size={32} />
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-4 mb-10">
          {schemaData.mainEntity.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg bg-white px-4 shadow-sm">
              <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-blue-600">{faq.name}</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                {faq.acceptedAnswer.text}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-sm text-gray-600 mb-4">
            <strong>Medical Disclaimer:</strong> This content is for informational purposes only and is not a substitute for professional dental advice, diagnosis, or treatment. Always consult with a qualified dentist before starting any new oral care routine or if you have concerns about your dental health.
          </div>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-sm text-gray-600">
            <strong>Affiliate Disclaimer:</strong> This article may contain affiliate links. We may earn a commission at no extra cost to you if you make a purchase through these links. We only recommend products we genuinely believe in.
          </div>
        </div>
      </BlogTemplate>
    </>
  );
};

export default StagesOfGumDiseaseExplained;