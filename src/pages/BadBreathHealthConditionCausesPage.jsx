import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

const BadBreathHealthConditionCausesPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bestoralhealthguide.com/" },
      { "@type": "ListItem", "position": 2, "name": "Bad Breath Hub", "item": "https://bestoralhealthguide.com/bad-breath/" },
      { "@type": "ListItem", "position": 3, "name": "Bad Breath Causes", "item": "https://bestoralhealthguide.com/bad-breath/causes/" },
      { "@type": "ListItem", "position": 4, "name": "Health Condition Causes", "item": "https://bestoralhealthguide.com/bad-breath/causes/health-condition-causes/" }
    ]
  };

  return (
    <div className="main-content-pt min-h-screen bg-[hsl(var(--background))]">
      <Helmet>
        <title>Health Conditions That Cause Bad Breath | Medical Halitosis Guide</title>
        <meta name="description" content="Explore the systemic diseases, respiratory infections, and medications that cause bad breath. Learn when to see a doctor for halitosis." />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="hub-hero relative border-b border-[hsl(var(--color-border-subtle))]">
        <div 
          className="hub-hero-image-overlay"
          style={{ backgroundColor: 'hsl(var(--hero-new-bg-start))' }}
        />
        <div className="hub-hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="w-full mb-6">
            <Breadcrumb items={[
              { label: 'Bad Breath Hub', href: '/bad-breath/' },
              { label: 'Causes', href: '/bad-breath/causes/' },
              { label: 'Health Conditions', href: '/bad-breath/causes/health-condition-causes/' }
            ]} />
          </div>
          
          <div className="text-5xl md:text-6xl mb-4" aria-hidden="true">🏥</div>
          
          <h1 className="hero-headline text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--color-text-primary))] text-center">
            Health Conditions That Cause Bad Breath
          </h1>
          
          <p className="hero-subheadline text-lg md:text-xl text-[hsl(var(--color-text-secondary))] text-center bg-white/50 p-2 rounded-lg backdrop-blur-sm">
            When impeccable hygiene isn't enough, systemic health is often to blame. Learn how diabetes, GERD, infections, and medications manifest as chronic halitosis.
          </p>
          
          <div className="mb-8">
            <Link to="/tools/bad-breath-cause-checker" className="btn-primary text-lg px-8 py-4 shadow-lg">
              Check Your Medical Risk Factors
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-[hsl(var(--color-text-secondary))] bg-white/90 px-4 py-2 rounded-full shadow-sm">
            <ShieldCheck size={18} className="text-[hsl(var(--hero-new-teal))]" />
            <span>Clinically researched medical guidance</span>
          </div>
        </div>
      </section>

      {/* Section 1: Understanding Health-Related Bad Breath */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-gray-800 text-lg">
          <p className="text-base leading-relaxed text-gray-800">
            The oral cavity is not an isolated system; it is the gateway to the respiratory and gastrointestinal tracts and is deeply integrated with the body's vascular network. Because of this interconnectivity, persistent bad breath—especially when accompanied by excellent oral hygiene—often serves as a vital clinical warning sign of underlying systemic health conditions.
          </p>
          <p className="text-base leading-relaxed text-gray-800">
            Medical halitosis (extra-oral halitosis) occurs when diseases alter the body's metabolism, introduce chronic infections into the airway, or severely compromise the mouth's natural defense mechanisms. In these scenarios, treating the breath requires treating the whole patient. Recognizing the distinct olfactory signatures of these conditions is crucial for prompting timely medical evaluation.
          </p>
        </div>
      </section>

      {/* Section 2: Systemic Health Conditions */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-2xl p-8 my-8 border border-[hsl(var(--color-border-subtle))]">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Systemic & Metabolic Conditions</h2>
        
        <div className="space-y-6 text-gray-800 text-lg">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Diabetes and Ketoacidosis</h3>
            <p className="text-base leading-relaxed text-gray-800">Uncontrolled diabetes severely impacts breath. When the body cannot utilize glucose, it burns fat for energy, producing chemicals called ketones. Exhaled ketones create a distinct, sickly-sweet, or fruity odor resembling nail polish remover. Furthermore, high blood sugar drastically increases the risk of severe gum disease.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Liver Disease (Fetor Hepaticus)</h3>
            <p className="text-base leading-relaxed text-gray-800">Advanced liver failure prevents the organ from filtering toxins from the blood. These toxins, primarily dimethyl sulfide, are exhaled through the lungs, resulting in a sweet, musty, or slightly fecal breath odor known clinically as "fetor hepaticus."</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Kidney Disease</h3>
            <p className="text-base leading-relaxed text-gray-800">Failing kidneys cannot efficiently excrete urea and other metabolic waste. This leads to a condition called uremia. As the urea breaks down in the saliva, it releases ammonia, giving the patient's breath a distinctly fishy or urine-like smell.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Respiratory & Sinus Infections</h3>
            <p className="text-base leading-relaxed text-gray-800">Chronic sinusitis, bronchitis, or pneumonia introduces heavy loads of bacteria, viruses, or fungi into the airway. The infected mucus drips down the back of the throat (post-nasal drip), providing a massive protein source for oral bacteria to convert into volatile sulfur compounds.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Acid Reflux (GERD)</h3>
            <p className="text-base leading-relaxed text-gray-800">Gastroesophageal Reflux Disease allows stomach acid and partially digested food to escape the stomach and rise up the esophagus. This not only introduces foul odors directly into the throat but the acid actively erodes tooth enamel and fosters bacterial overgrowth.</p>
          </div>
        </div>
      </section>

      {/* Section 3: Dry Mouth - Xerostomia */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Xerostomia (Severe Dry Mouth)</h2>
        <div className="space-y-6 text-gray-800 text-lg">
          <p className="text-base leading-relaxed text-gray-800"><strong className="font-semibold text-gray-900">What is Dry Mouth:</strong> Xerostomia is a clinical condition characterized by a severe reduction in saliva flow. Saliva is essential for washing away food debris and supplying antibacterial enzymes to the mouth.</p>
          <p className="text-base leading-relaxed text-gray-800"><strong className="font-semibold text-gray-900">How It Causes Bad Breath:</strong> Without the flushing action of saliva, the oral cavity becomes stagnant and acidic. Anaerobic bacteria multiply unchecked, resulting in immediate and severe halitosis.</p>
          <p className="text-base leading-relaxed text-gray-800"><strong className="font-semibold text-gray-900">Causes:</strong> Beyond dehydration, xerostomia is frequently caused by autoimmune conditions (like Sjogren's syndrome), radiation therapy for head and neck cancers, and damage to the salivary glands.</p>
          <p className="text-base leading-relaxed text-gray-800"><strong className="font-semibold text-gray-900">Solutions:</strong> Treatment involves aggressive hydration, the use of artificial saliva substitutes, parasympathomimetic medications to stimulate gland function, and sleeping with a humidifier.</p>
        </div>
      </section>

      {/* Section 4: Medication Side Effects */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-blue-50 rounded-2xl p-8 my-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Medication-Induced Halitosis</h2>
        <div className="space-y-6 text-gray-800 text-lg">
          <p className="text-base leading-relaxed text-gray-800"><strong className="font-semibold text-gray-900">Dry Mouth Medications:</strong> Over 400 commonly prescribed medications list xerostomia as a side effect. The worst offenders are antihistamines, decongestants, tricyclic antidepressants, and blood pressure medications (diuretics).</p>
          <p className="text-base leading-relaxed text-gray-800"><strong className="font-semibold text-gray-900">Other Medications:</strong> Certain drugs, including paraldehyde, inhaled anesthetics, and high doses of vitamin supplements, release potent chemicals during metabolism that are exhaled directly through the lungs.</p>
          <p className="text-base leading-relaxed text-gray-800"><strong className="font-semibold text-gray-900">Medication Review:</strong> Never stop taking prescribed medication due to bad breath. Instead, consult your physician to explore alternative prescriptions or adjusted dosages that may alleviate the xerostomic side effects.</p>
        </div>
      </section>

      {/* Section 5 & 6: Identifying & When to See a Doctor */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Diagnosis and Action Plan</h2>
        <div className="space-y-6 text-gray-800 text-lg">
          <p className="text-base leading-relaxed text-gray-800"><strong className="font-semibold text-gray-900">Signs and Symptoms:</strong> Suspect a medical cause if your halitosis persists despite perfect oral hygiene, if the odor is highly unusual (fruity, ammonia, or acidic), or if it is accompanied by other systemic symptoms like chronic fatigue, reflux, or extreme thirst.</p>
          <p className="text-base leading-relaxed text-gray-800 mt-4"><strong className="font-semibold text-gray-900">Doctor vs. Dentist:</strong> Always consult your dentist first. Since 85% of halitosis is oral, a dentist must rule out gum disease and decay. If the oral cavity is perfectly healthy, the dentist will refer you to a primary care physician or specialist (ENT, Gastroenterologist) for systemic testing.</p>
          <p className="text-base leading-relaxed text-gray-800 mt-4"><strong className="font-semibold text-gray-900">Using Assessment Tools:</strong> Unsure where to start? Our algorithmic tool cross-references your medical history and symptoms to help you determine if a doctor's visit is your next required step.</p>
          <Link to="/tools/bad-breath-cause-checker" className="btn-primary mt-6">
            Take the Risk Assessment
          </Link>
        </div>
      </section>

      {/* Section 8: Related Topics */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[hsl(var(--color-border-subtle))] mt-8 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Other Causes</h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/bad-breath/causes/bacterial-causes/" className="px-4 py-2 border border-[hsl(var(--color-border-subtle))] rounded-full text-sm font-medium hover:bg-[hsl(var(--hero-new-teal))] hover:text-white transition-colors">
            Bacterial Causes
          </Link>
          <Link to="/bad-breath/causes/lifestyle-causes/" className="px-4 py-2 border border-[hsl(var(--color-border-subtle))] rounded-full text-sm font-medium hover:bg-[hsl(var(--hero-new-teal))] hover:text-white transition-colors">
            Lifestyle Factors
          </Link>
          <Link to="/bad-breath/causes/dietary-causes/" className="px-4 py-2 border border-[hsl(var(--color-border-subtle))] rounded-full text-sm font-medium hover:bg-[hsl(var(--hero-new-teal))] hover:text-white transition-colors">
            Dietary Triggers
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BadBreathHealthConditionCausesPage;