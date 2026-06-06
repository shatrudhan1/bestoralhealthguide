import React from 'react';
import { Helmet } from 'react-helmet';
import TestFlow from '@/components/tools/sensitivity/TestFlow';
import ContentSection from '@/components/tools/ContentSection';
import FAQSection from '@/components/tools/FAQSection';
import RelatedArticles from '@/components/RelatedArticles';
import RecommendedProducts from '@/components/RecommendedProducts';

const ToothSensitivityTest = () => {
  const faqs = [
    {
      question: "Why are my teeth suddenly sensitive?",
      answer: "Sudden tooth sensitivity is usually caused by thinning enamel, receding gums exposing the tooth root, recent dental procedures, tooth decay, or microscopic cracks in the tooth. Aggressive brushing and highly acidic foods can also trigger sudden sensitivity. If the pain is sharp and persistent, you should consult a dentist to rule out infection."
    },
    {
      question: "Is tooth sensitivity permanent?",
      answer: "Not always. While lost enamel doesn't grow back, you can remineralize and strengthen existing enamel, and exposed nerve endings can be blocked. With proper care, such as using desensitizing toothpaste, adopting gentle brushing habits, and seeking professional treatments (like fluoride varnishes), you can often eliminate or significantly reduce the sensation."
    },
    {
      question: "Can sensitive teeth heal?",
      answer: "Teeth cannot 'heal' in the way skin does by growing new tissue. However, they can remineralize. Desensitizing toothpastes work by filling the microscopic tubules in the dentin that lead to the nerve, effectively blocking the pain signals. So while the physical structure isn't strictly 'healed', the symptom of sensitivity can be fully resolved."
    },
    {
      question: "What's the best toothpaste for sensitive teeth?",
      answer: "The best toothpastes for sensitive teeth contain active ingredients like Potassium Nitrate (which soothes the nerve) or Stannous Fluoride/Strontium Chloride (which block the dentin tubules). Look for ADA-accepted brands labeled specifically for sensitivity and use them consistently for at least two weeks to see results."
    },
    {
      question: "When should I worry about tooth sensitivity?",
      answer: "You should seek prompt dental care if your sensitivity is severe, localized to a single tooth, wakes you up at night, lasts for more than an hour after the hot/cold trigger is removed, or is accompanied by swelling, redness, or pain when biting down. These can be signs of a deeper issue like an abscess or cracked tooth."
    }
  ];

  const contentWhatCauses = [
    "Tooth sensitivity occurs when the protective outer layer of your teeth (enamel) wears down, or when your gum line recedes, exposing the underlying layer called dentin. Dentin contains microscopic tubules that lead directly to the dental pulp, where the tooth's nerves are located. When these tubules are exposed, triggers like hot, cold, sweet, or acidic foods can easily reach the nerve, causing a sharp, sudden pain.",
    "Several common factors contribute to this exposure. Aggressive brushing with a hard-bristled toothbrush is a leading cause, physically wearing away enamel and forcing gums to recede. Gum disease (gingivitis or periodontitis) also causes gums to pull away from the tooth roots, which lack protective enamel entirely.",
    "Your diet plays a massive role as well. Frequent consumption of acidic foods and beverages—such as citrus fruits, tomatoes, sodas, and certain teas—can temporarily soften and permanently erode enamel over time. Additionally, grinding your teeth at night (bruxism) acts like sandpaper on your teeth, rapidly wearing down the biting surfaces.",
    "Finally, localized sensitivity might point to specific dental issues rather than general wear. A chipped tooth, a worn-down filling, or active tooth decay (a cavity) will create a direct pathway for temperature and sugar to reach the nerve, resulting in intense sensitivity."
  ];

  const contentHowToReduce = [
    "Reducing tooth sensitivity naturally starts with adjusting your daily oral hygiene habits. The most immediate and effective change is switching to a desensitizing toothpaste. These pastes contain compounds like potassium nitrate that help block the transmission of pain signals from the tooth surface to the nerve. For best results, use it twice daily, and don't rinse your mouth heavily with water afterward—let the active ingredients sit on your teeth.",
    "Next, evaluate your brushing technique. Switch to a soft or extra-soft bristled toothbrush immediately. Hold the brush at a 45-degree angle to your gums and use gentle, circular motions rather than harsh back-and-forth sawing. Think of brushing as massaging your teeth, not scrubbing them.",
    "Dietary adjustments are also crucial. Limit acidic foods and beverages. When you do consume them, use a straw to bypass your teeth, and wait at least 30 to 60 minutes before brushing. Brushing immediately after consuming acid can strip away enamel while it's in a softened state. Instead, rinse with plain water to neutralize the acid.",
    "If you suspect you grind your teeth at night, consider investing in a mouthguard to protect your enamel while you sleep. Additionally, maintaining exceptional overall oral hygiene by flossing daily prevents the gum disease that leads to gum recession, stopping sensitivity before it starts."
  ];

  const contentWhenToSeeDentist = [
    "While mild, occasional sensitivity to extreme temperatures is common and can often be managed at home, certain symptoms require professional attention. You should schedule an appointment with your dentist if your sensitivity persists for more than a few weeks despite using a desensitizing toothpaste.",
    "Severe pain that lingers long after you've finished a hot or cold drink is a red flag. Healthy teeth recover quickly from temperature changes; lingering pain often suggests that the nerve inside the tooth is inflamed or damaged. Similarly, if your sensitivity is intensely focused on a single tooth rather than spread across your mouth, you likely have a specific issue like a cavity, a loose filling, or a microscopic crack.",
    "Do not ignore sensitivity accompanied by signs of gum disease, such as red, swollen, or bleeding gums. Periodontal issues require deep cleaning and professional intervention to halt progression and save the tooth. Your dentist can accurately diagnose the root cause of your pain and offer clinical treatments—such as fluoride varnishes, bonding resins, or in severe cases, a root canal—to provide lasting relief."
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Tooth Sensitivity Test Tool",
        "applicationCategory": "HealthApplication",
        "operatingSystem": "Any",
        "description": "A free interactive assessment tool to evaluate the level and potential causes of tooth sensitivity, providing personalized oral health recommendations.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  const relatedGuidesList = [
    { id: 1, title: "Tooth Sensitivity Relief Guide", url: "/blog/stop-tooth-sensitivity-pain-immediately" },
    { id: 2, title: "Causes of Tooth Sensitivity", url: "/blog/teeth-sensitive-all-of-a-sudden" },
    { id: 3, title: "Best Toothpaste for Sensitive Teeth", url: "/blog/best-toothpaste-for-sensitive-teeth" }
  ];

  const recommendedProductsList = [
    { id: 1, title: "Best Sensitivity Relief Products", url: "/blog/best-products-for-gum-health" },
    { id: 2, title: "Best Toothpaste for Sensitive Teeth", url: "/blog/best-toothpaste-for-sensitive-teeth" }
  ];

  return (
    <>
      <Helmet>
        <title>Tooth Sensitivity Test Tool | Free Assessment & Personalized Results</title>
        <meta name="description" content="Take our free tooth sensitivity test. Get instant results, understand your sensitivity level, and receive personalized advice to reduce tooth pain naturally." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="min-h-screen bg-slate-50 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Tooth Sensitivity Test Tool <br className="hidden md:block" />
              <span className="text-blue-600 text-2xl md:text-4xl mt-2 block">Assess Your Sensitivity Level</span>
            </h1>
            
            {/* Direct Answer Box */}
            <div className="bg-white p-6 rounded-xl border-l-4 border-blue-600 shadow-sm text-left max-w-3xl mx-auto mb-10">
              <p className="text-gray-700 font-medium text-lg m-0">
                <strong>What is this tool?</strong> Our 5-question Tooth Sensitivity Test evaluates your symptoms against common triggers like hot, cold, and sweets. In under 2 minutes, you'll receive a personalized sensitivity score, identify potential root causes (like enamel wear or gum recession), and get actionable, natural steps to find relief.
              </p>
            </div>
          </div>

          {/* Test Flow Component */}
          <div className="mb-20">
            <TestFlow />
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mb-16">
            <ContentSection title="What Causes Tooth Sensitivity?" content={contentWhatCauses} />
            <div className="my-10 border-t border-gray-200" />
            <ContentSection title="How to Reduce Tooth Sensitivity Naturally" content={contentHowToReduce} />
            <div className="my-10 border-t border-gray-200" />
            <ContentSection title="When to See a Dentist" content={contentWhenToSeeDentist} />
            
            <div className="mt-12">
              <RelatedArticles articles={relatedGuidesList} title="Related Guides" />
              <RecommendedProducts products={recommendedProductsList} />
            </div>
          </div>

          <FAQSection faqs={faqs} />

          <div className="mt-12 p-6 bg-gray-100 rounded-xl text-xs text-gray-500 text-center border border-gray-200">
            <strong>Medical Disclaimer:</strong> This tooth sensitivity test is for educational and informational purposes only. It is not intended to be a substitute for professional medical or dental advice, diagnosis, or treatment. Always seek the advice of your dentist or other qualified health provider with any questions you may have regarding a medical condition.
          </div>

        </div>
      </div>
    </>
  );
};

export default ToothSensitivityTest;