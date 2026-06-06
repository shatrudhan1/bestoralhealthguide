import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ShieldCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

const BadBreathDryMouthCausesPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bestoralhealthguide.com/" },
      { "@type": "ListItem", "position": 2, "name": "Bad Breath Hub", "item": "https://bestoralhealthguide.com/bad-breath/" },
      { "@type": "ListItem", "position": 3, "name": "Bad Breath Causes", "item": "https://bestoralhealthguide.com/bad-breath/causes/" },
      { "@type": "ListItem", "position": 4, "name": "Dry Mouth Causes", "item": "https://bestoralhealthguide.com/bad-breath/causes/dry-mouth-causes/" }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Dry Mouth and Bad Breath: How Xerostomia Causes Odor",
    "description": "Learn how dry mouth (xerostomia) causes bad breath, why saliva is essential, and what you can do about it.",
    "author": {
      "@type": "Organization",
      "name": "Best Oral Health Guide"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Best Oral Health Guide",
      "logo": {
        "@type": "ImageObject",
        "url": "https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/3760dc18cc550c1a89c71b4bf9253384.png"
      }
    }
  };

  return (
    <div className="main-content-pt min-h-screen bg-[hsl(var(--background))]">
      <Helmet>
        <title>Dry Mouth and Bad Breath: How Xerostomia Causes Odor</title>
        <meta name="description" content="Learn how dry mouth (xerostomia) causes bad breath, why saliva is essential, and what you can do about it." />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="hub-hero relative border-b border-[hsl(var(--color-border-subtle))]">
        <div 
          className="hub-hero-image-overlay"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1598300188904-6287d5274601)' }}
        />
        <div className="hub-hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="w-full mb-6">
            <Breadcrumb items={[
              { label: 'Bad Breath Hub', href: '/bad-breath/' },
              { label: 'Causes', href: '/bad-breath/causes/' },
              { label: 'Dry Mouth', href: '/bad-breath/causes/dry-mouth-causes/' }
            ]} />
          </div>
          
          <div className="text-5xl md:text-6xl mb-4" aria-hidden="true">💧</div>
          
          <h1 className="hero-headline text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--color-text-primary))] text-center">
            Dry Mouth as a Cause of Bad Breath
          </h1>
          
          <p className="hero-subheadline text-lg md:text-xl text-[hsl(var(--color-text-secondary))] text-center bg-white/50 p-2 rounded-lg backdrop-blur-sm">
            Discover how reduced saliva production allows odor-causing bacteria to thrive and learn evidence-based ways to restore moisture and fresh breath.
          </p>
          
          <div className="mb-8">
            <Link to="/tools/bad-breath-cause-checker" className="btn-primary text-lg px-8 py-4 shadow-lg">
              Check Your Dry Mouth Risk
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-[hsl(var(--color-text-secondary))] bg-white/90 px-4 py-2 rounded-full shadow-sm">
            <ShieldCheck size={18} className="text-[hsl(var(--hero-new-teal))]" />
            <span>Medically reviewed • Evidence-based science</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="space-y-6 text-gray-800 text-lg">
          <p className="text-base leading-relaxed text-gray-800">
            Saliva is your mouth's natural cleansing mechanism. When your salivary glands fail to produce enough saliva—a condition known medically as xerostomia—the oral environment drastically changes. Dry mouth is one of the most common and easily overlooked causes of chronic bad breath. 
          </p>
          <p className="text-base leading-relaxed text-gray-800">
            Without adequate saliva to wash away food particles, neutralize acids, and keep bacteria in check, odor-producing microbes multiply rapidly. Understanding the connection between dry mouth and halitosis is the first step toward finding lasting relief.
          </p>
        </div>
      </section>

      {/* Why Dry Mouth Causes Bad Breath */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-2xl p-8 my-8 border border-[hsl(var(--color-border-subtle))]">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Dry Mouth Causes Bad Breath</h2>
        
        <div className="space-y-6 text-gray-800 text-lg">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Saliva's Protective Role</h3>
            <p className="text-base leading-relaxed text-gray-800">
              Saliva is mostly water, but it also contains important enzymes, proteins, and minerals that help digest food and protect your teeth from decay. It acts as a constant wash, removing dead cells from the tongue, gums, and cheeks.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Bacterial Overgrowth</h3>
            <p className="text-base leading-relaxed text-gray-800">
              When saliva flow decreases, these dead cells accumulate. Anaerobic bacteria feed on these decaying proteins. Because there is less oxygenated saliva, these sulfur-producing bacteria thrive, leading to rapid bacterial overgrowth.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Xerostomia and Odor Production</h3>
            <p className="text-base leading-relaxed text-gray-800">
              The byproduct of bacteria breaking down proteins is volatile sulfur compounds (VSCs). Without saliva to dilute and wash away these compounds, they become concentrated, resulting in severe and noticeable bad breath.
            </p>
          </div>
        </div>
      </section>

      {/* Common Causes of Dry Mouth */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Common Causes of Dry Mouth</h2>
        
        <div className="space-y-6 text-gray-800 text-lg">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Medications</h3>
            <p className="text-base leading-relaxed text-gray-800">
              Over 400 medications list dry mouth as a side effect. Common culprits include antihistamines, decongestants, painkillers, antidepressants, and blood pressure medications.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Autoimmune Conditions</h3>
            <p className="text-base leading-relaxed text-gray-800">
              Conditions like Sjögren's syndrome specifically attack the body's moisture-producing glands, drastically reducing saliva output.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Cancer Treatments</h3>
            <p className="text-base leading-relaxed text-gray-800">
              Radiation therapy to the head and neck can damage salivary glands, and chemotherapy drugs can alter the nature and amount of saliva produced.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Dehydration and Lifestyle Factors</h3>
            <p className="text-base leading-relaxed text-gray-800">
              Not drinking enough water, high caffeine or alcohol intake, and tobacco use all significantly dry out the oral cavity.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Mouth Breathing</h3>
            <p className="text-base leading-relaxed text-gray-800">
              Breathing through your mouth, especially during sleep (due to sleep apnea or nasal congestion), evaporates saliva rapidly, leading to dreaded "morning breath."
            </p>
          </div>
        </div>
      </section>

      {/* Middle CTA */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <Link to="/tools/bad-breath-cause-checker" className="btn-primary inline-flex items-center text-lg px-8 py-4">
          Take our Bad Breath Assessment
        </Link>
      </section>

      {/* How to Address */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-blue-50 rounded-2xl p-8 my-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">How to Address Dry Mouth-Related Bad Breath</h2>
        
        <div className="space-y-6 text-gray-800 text-lg">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Stay Hydrated</h3>
            <p className="text-base leading-relaxed text-gray-800">
              Sip water frequently throughout the day to keep oral tissues moist and help wash away food particles.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Sugar-Free Gum and Lozenges</h3>
            <p className="text-base leading-relaxed text-gray-800">
              Chewing sugar-free gum (especially with xylitol) stimulates natural saliva flow.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Saliva Substitutes</h3>
            <p className="text-base leading-relaxed text-gray-800">
              Over-the-counter oral rinses, sprays, and gels designed specifically for dry mouth can provide immediate relief and artificial moisture.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Oral Hygiene Importance</h3>
            <p className="text-base leading-relaxed text-gray-800">
              Meticulous brushing and flossing are even more critical when you have dry mouth to manually remove the bacteria that saliva normally washes away.
            </p>
          </div>
        </div>
      </section>

      {/* When to Seek Professional Help */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">When to Seek Professional Help</h2>
        <div className="space-y-6 text-gray-800 text-lg">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Signs that Dry Mouth Needs Medical Attention</h3>
            <p className="text-base leading-relaxed text-gray-800">
              If dry mouth persists despite hydration, causes difficulty swallowing, or is accompanied by rampant tooth decay or mouth sores, it is time to consult a doctor or dentist.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Importance of Addressing Underlying Causes</h3>
            <p className="text-base leading-relaxed text-gray-800">
              Treating the root cause, such as altering a medication regimen (under medical supervision) or managing an autoimmune condition, is often necessary for long-term resolution.
            </p>
          </div>
        </div>
      </section>

      {/* Related Topics */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Other Causes</h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/bad-breath/causes/bacterial-causes/" className="px-4 py-2 border border-[hsl(var(--color-border-subtle))] rounded-full text-sm font-medium hover:bg-[hsl(var(--hero-new-teal))] hover:text-white transition-colors">
            Bacterial Causes
          </Link>
          <Link to="/bad-breath/causes/dietary-causes/" className="px-4 py-2 border border-[hsl(var(--color-border-subtle))] rounded-full text-sm font-medium hover:bg-[hsl(var(--hero-new-teal))] hover:text-white transition-colors">
            Dietary Causes
          </Link>
          <Link to="/bad-breath/causes/health-condition-causes/" className="px-4 py-2 border border-[hsl(var(--color-border-subtle))] rounded-full text-sm font-medium hover:bg-[hsl(var(--hero-new-teal))] hover:text-white transition-colors">
            Health Conditions
          </Link>
          <Link to="/bad-breath/causes/lifestyle-causes/" className="px-4 py-2 border border-[hsl(var(--color-border-subtle))] rounded-full text-sm font-medium hover:bg-[hsl(var(--hero-new-teal))] hover:text-white transition-colors">
            Lifestyle Causes
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Find the True Cause of Your Bad Breath</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/tools/bad-breath-cause-checker" className="btn-primary w-full sm:w-auto px-8">
            Get Your Personalized Bad Breath Assessment
          </Link>
          <Link to="/bad-breath/causes/" className="btn-secondary w-full sm:w-auto px-8">
            Back to All Causes
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BadBreathDryMouthCausesPage;