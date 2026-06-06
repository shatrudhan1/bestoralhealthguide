import React from 'react';
import { Helmet } from 'react-helmet';
import BlogTemplate from '@/components/BlogTemplate';
import { Link } from 'react-router-dom';
import { ShieldCheck, Info, AlertTriangle, CheckCircle, HelpCircle, Activity } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WhatCausesBadBreath = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What are the main causes of bad breath?", "acceptedAnswer": { "@type": "Answer", "text": "Main causes include poor oral hygiene, gum disease, dry mouth, food debris, tongue bacteria, and systemic issues like diabetes or acid reflux. Oral causes account for 90% of bad breath cases. Identifying the cause is key to treatment." } },
      { "@type": "Question", "name": "How does gum disease cause bad breath?", "acceptedAnswer": { "@type": "Answer", "text": "Gum disease creates pockets where bacteria accumulate and produce volatile sulfur compounds (VSCs) that cause odor. The more severe the gum disease, the worse the bad breath. Professional treatment of gum disease reduces bad breath." } },
      { "@type": "Question", "name": "Can bad breath indicate a serious health problem?", "acceptedAnswer": { "@type": "Answer", "text": "Persistent bad breath despite good oral hygiene may indicate gum disease, dry mouth, or systemic issues like diabetes, kidney disease, or acid reflux. See a dentist first to rule out oral causes, then see a doctor if needed." } },
      { "@type": "Question", "name": "What's the difference between morning breath and chronic bad breath?", "acceptedAnswer": { "@type": "Answer", "text": "Morning breath is temporary and resolves after brushing. Chronic bad breath persists despite good oral hygiene and indicates an underlying problem like gum disease or systemic issues. Chronic bad breath requires professional evaluation." } },
      { "@type": "Question", "name": "How can I determine the cause of my bad breath?", "acceptedAnswer": { "@type": "Answer", "text": "Use our free Bad Breath Cause Checker tool to identify potential causes. See a dentist to rule out gum disease. If oral causes are ruled out, see a doctor to check for systemic issues. Proper diagnosis enables effective treatment." } }
    ]
  };

  return (
    <>
      <Helmet>
        <title>What Causes Bad Breath? Complete Guide 2026</title>
        <meta name="description" content="Learn what causes bad breath from bacteria, gum disease, dry mouth, and more. Expert guide with solutions. Dentist-recommended treatments included." />
      </Helmet>
      <BlogTemplate
        title="What Causes Bad Breath? Complete Guide 2026"
        description="Learn what causes bad breath from bacteria, gum disease, dry mouth, and more."
        publishDate="Mar 26, 2026"
        updateDate="Mar 28, 2026"
        author="Dr. Sarah Mitchell, DDS"
        readTime="15 min read"
        category="Bad Breath Solutions"
        image="https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/76b1b4682b25dfd01d691a09ce5017ef.png"
        imageAlt="Man checking breath with bacteria visualization"
        schemaData={schemaData}
      >
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl my-8 shadow-sm">
          <p className="text-gray-900 font-bold text-lg">
            Main causes include poor oral hygiene, gum disease, dry mouth, food debris, tongue bacteria, and systemic issues like diabetes or acid reflux. Oral causes account for 90% of bad breath cases. Identifying the cause is key to effective treatment and prevention.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-10">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <CheckCircle className="text-green-500 mr-2" size={24} /> Quick Summary
          </h3>
          <ul className="space-y-2 text-gray-700 list-disc pl-6 marker:text-blue-500">
            <li>Poor oral hygiene is the most common cause</li>
            <li>Gum disease produces odor-causing bacteria</li>
            <li>Dry mouth reduces natural antibacterial saliva</li>
            <li>Systemic issues can cause bad breath</li>
            <li>Professional evaluation helps identify the cause</li>
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

export default WhatCausesBadBreath;