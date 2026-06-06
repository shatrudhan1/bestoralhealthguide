import React from 'react';
import { Helmet } from 'react-helmet';
import BlogTemplate from '@/components/BlogTemplate';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, AlertTriangle, Lightbulb, CheckCircle2, Info, Activity } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const GingivitisVsPeriodontitis = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What's the main difference between gingivitis and periodontitis?", "acceptedAnswer": { "@type": "Answer", "text": "Gingivitis is early-stage gum disease affecting only the gums and is reversible. Periodontitis is advanced gum disease that damages the bone supporting teeth and is not fully reversible. Both cause bleeding and swelling, but periodontitis requires professional treatment." } },
      { "@type": "Question", "name": "Can gingivitis turn into periodontitis?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, if left untreated, gingivitis can progress to periodontitis within weeks to months. The progression depends on oral hygiene, immune response, and risk factors like smoking. Early intervention prevents this progression." } },
      { "@type": "Question", "name": "Is gingivitis reversible?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, gingivitis is completely reversible with proper oral hygiene, daily flossing, and antimicrobial mouthwash. Most people see improvement within 1-2 weeks of consistent care. However, periodontitis requires professional treatment." } },
      { "@type": "Question", "name": "How long does it take to reverse gingivitis?", "acceptedAnswer": { "@type": "Answer", "text": "With consistent care, most people notice improvement within 3-7 days. Complete reversal typically takes 1-2 weeks. However, if bleeding persists beyond 2 weeks, see a dentist as it may indicate periodontitis." } },
      { "@type": "Question", "name": "When should I see a dentist for gum disease?", "acceptedAnswer": { "@type": "Answer", "text": "See a dentist immediately if bleeding persists for 2+ weeks despite good oral care, if you have severe pain, or if you notice loose teeth. Schedule regular checkups every 6 months for prevention." } }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Gingivitis vs Periodontitis 2026: Key Differences</title>
        <meta name="description" content="What's the difference between gingivitis and periodontitis? Learn stages, symptoms, treatment, and reversibility. Expert comparison guide." />
      </Helmet>
      
      <BlogTemplate
        title="Gingivitis vs Periodontitis 2026: Key Differences"
        description="Learn the key differences between gingivitis and periodontitis to protect your smile."
        publishDate="Mar 26, 2026"
        updateDate="Mar 28, 2026"
        author="Dr. Sarah Mitchell, DDS"
        readTime="15 min read"
        category="Gum Health"
        image="https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/e6c0ca8f813476ac2bcb0cd3099884ff.png"
        imageAlt="Gingivitis vs Periodontitis comparison"
        schemaData={schemaData}
      >
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl my-8 shadow-sm">
          <p className="text-gray-900 font-bold text-lg">
            Gingivitis is early-stage gum disease affecting only the gums and is reversible. Periodontitis is advanced gum disease that damages the bone supporting teeth and is not fully reversible. Both cause bleeding and swelling, but periodontitis requires professional treatment.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-10">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <CheckCircle2 className="text-green-500 mr-2" size={24} /> Quick Summary
          </h3>
          <ul className="space-y-2 text-gray-700 list-disc pl-6 marker:text-blue-500">
            <li>Key differences between gingivitis and periodontitis</li>
            <li>Gingivitis is reversible; periodontitis is not</li>
            <li>Both require professional evaluation</li>
            <li>Early intervention prevents progression</li>
            <li>Proper oral hygiene is essential</li>
          </ul>
        </div>

        <p className="lead text-xl text-gray-800 font-medium leading-relaxed mb-6">
          Understanding the distinction between these two conditions is the difference between keeping your teeth and losing them. Let's clarify the confusion and map out your recovery plan.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center"><Activity className="mr-3 text-blue-500"/> Expert Insight</h2>
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8 italic text-gray-700 border-l-4 border-l-indigo-500">
          According to the American Dental Association, early intervention is crucial for gum disease management. Dr. Sarah Mitchell, DDS, emphasizes that "most gum problems are preventable with consistent oral hygiene and regular professional care. The key is catching issues early before they progress to advanced stages."
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center"><AlertTriangle className="mr-3 text-red-500"/> Common Mistakes People Make</h2>
        <ul className="space-y-4 text-gray-700 mb-8 list-disc pl-6">
          <li>Thinking they're the same disease.</li>
          <li>Not recognizing early signs like <Link to="/blog/bleeding-gums-while-brushing" className="text-blue-600 hover:underline">bleeding gums</Link>.</li>
          <li>Delaying treatment until teeth feel loose.</li>
          <li>Ignoring professional diagnosis and relying on internet hacks.</li>
        </ul>

        <p className="mb-6 text-gray-700">
          If you are experiencing any warning signs, you should <Link to="/tools/gum-disease-risk-calculator" className="text-blue-600 font-semibold hover:underline">assess your gum disease risk</Link> today to figure out if you're dealing with easily reversible gingivitis or more serious periodontitis.
        </p>

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
        <p className="mb-6 text-gray-700">
          <strong>What to expect:</strong> Professional examination and diagnosis, Professional cleaning (scaling) if needed, X-rays to assess bone health, Treatment plan if gum disease is present, Preventive recommendations. Regular checkups every 6 months help catch problems early and prevent progression.
        </p>

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
        <p className="mb-8 text-gray-700">
          These signs indicate advanced gum disease requiring professional treatment. Do not delay—see a dentist immediately. Early intervention prevents tooth loss and more serious complications. While home care helps, professional treatment is essential for these symptoms.
        </p>

        <div className="bg-gradient-to-br from-rose-600 to-red-900 rounded-2xl shadow-xl p-8 text-center my-10">
          <h3 className="text-2xl font-bold text-white mb-4">Try This Free Tool</h3>
          <p className="text-red-100 mb-6">Determine your likelihood of having periodontitis by using our interactive <Link to="/tools/gum-disease-risk-calculator" className="font-bold underline hover:text-white">gum health calculator</Link> to get tailored recommendations.</p>
          <Link to="/tools/gum-disease-risk-calculator" className="inline-flex items-center px-8 py-4 bg-white text-red-700 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg">
            Determine Your Stage <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full space-y-4 mb-10">
          {schemaData.mainEntity.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-4 bg-white shadow-sm">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-blue-600 text-left">{faq.name}</AccordionTrigger>
              <AccordionContent className="text-gray-600">{faq.acceptedAnswer.text}</AccordionContent>
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

export default GingivitisVsPeriodontitis;