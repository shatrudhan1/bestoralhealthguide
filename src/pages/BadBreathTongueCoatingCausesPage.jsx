import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ShieldCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

const BadBreathTongueCoatingCausesPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bestoralhealthguide.com/" },
      { "@type": "ListItem", "position": 2, "name": "Bad Breath Hub", "item": "https://bestoralhealthguide.com/bad-breath/" },
      { "@type": "ListItem", "position": 3, "name": "Bad Breath Causes", "item": "https://bestoralhealthguide.com/bad-breath/causes/" },
      { "@type": "ListItem", "position": 4, "name": "Tongue Coating Causes", "item": "https://bestoralhealthguide.com/bad-breath/causes/tongue-coating-causes/" }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tongue Coating and Bad Breath: Causes, Types, and Solutions",
    "description": "Discover why tongue coating causes bad breath, what different coatings mean, and how to clean your tongue effectively.",
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
        <title>Tongue Coating and Bad Breath: Causes, Types, and Solutions</title>
        <meta name="description" content="Discover why tongue coating causes bad breath, what different coatings mean, and how to clean your tongue effectively." />
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
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1598300188488-842211116631)' }}
        />
        <div className="hub-hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="w-full mb-6">
            <Breadcrumb items={[
              { label: 'Bad Breath Hub', href: '/bad-breath/' },
              { label: 'Causes', href: '/bad-breath/causes/' },
              { label: 'Tongue Coating', href: '/bad-breath/causes/tongue-coating-causes/' }
            ]} />
          </div>
          
          <div className="text-5xl md:text-6xl mb-4" aria-hidden="true">👅</div>
          
          <h1 className="hero-headline text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--color-text-primary))] text-center">
            Tongue Coating as a Cause of Bad Breath
          </h1>
          
          <p className="hero-subheadline text-lg md:text-xl text-[hsl(var(--color-text-secondary))] text-center bg-white/50 p-2 rounded-lg backdrop-blur-sm">
            Uncover the primary source of morning breath and chronic halitosis. Learn how to safely remove the bacterial biofilm resting on your tongue.
          </p>
          
          <div className="mb-8">
            <Link to="/tools/bad-breath-cause-checker" className="btn-primary text-lg px-8 py-4 shadow-lg">
              Check Your Tongue Health Risk
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
            For many people suffering from chronic bad breath, the primary source of the odor is hiding in plain sight: the tongue. The surface of your tongue is not smooth; it is covered in tiny bumps called papillae, which create a highly textured landscape that traps bacteria, food particles, and dead cells.
          </p>
          <p className="text-base leading-relaxed text-gray-800">
            When this debris accumulates, it forms a visible white, yellow, or even brown coating. This coating is a dense biofilm teeming with anaerobic bacteria. Understanding how this coating forms and how to safely eliminate it is often the key to permanently resolving halitosis.
          </p>
        </div>
      </section>

      {/* What is Tongue Coating */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-2xl p-8 my-8 border border-[hsl(var(--color-border-subtle))]">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">What Is Tongue Coating and Why It Causes Bad Breath</h2>
        
        <div className="space-y-6 text-gray-800 text-lg">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Buildup on the Papillae</h3>
            <p className="text-base leading-relaxed text-gray-800">
              The papillae on your tongue can occasionally become inflamed or overgrown. When this happens, they create deeper crevices where debris easily becomes lodged, forming a visible coating.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Bacterial Colonization</h3>
            <p className="text-base leading-relaxed text-gray-800">
              The back third of the tongue is the most common site for this buildup because it is less exposed to the cleansing action of saliva and the roof of the mouth during speaking and swallowing. Bacteria flock to this undisturbed area to feed and reproduce safely.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Volatile Sulfur Compounds</h3>
            <p className="text-base leading-relaxed text-gray-800">
              As bacteria break down the proteins trapped in the tongue coating, they emit volatile sulfur compounds (VSCs). These are the foul-smelling gases directly responsible for halitosis.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">A Major Odor Source</h3>
            <p className="text-base leading-relaxed text-gray-800">
              Studies show that the tongue coating is the primary origin of volatile sulfur compounds in a significant majority of non-dental halitosis cases. Ignoring the tongue while brushing your teeth guarantees the odor will return quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Tongue Coating */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Types of Tongue Coating</h2>
        
        <div className="space-y-6 text-gray-800 text-lg">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">White Coating</h3>
            <p className="text-base leading-relaxed text-gray-800">
              The most common type, usually caused by a harmless overgrowth of bacteria and dead cells from poor hygiene. However, it can also indicate oral thrush (a yeast infection) or leukoplakia.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Yellow Coating</h3>
            <p className="text-base leading-relaxed text-gray-800">
              Often an early stage of a more severe buildup, associated with poor oral hygiene, smoking, dry mouth, or dehydration.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Brown or Black Coating</h3>
            <p className="text-base leading-relaxed text-gray-800">
              Typically linked to tobacco use, heavy coffee or tea consumption, or a harmless but alarming condition known as "black hairy tongue," where papillae grow unusually long and trap dark pigments.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Gray Coating</h3>
            <p className="text-base leading-relaxed text-gray-800">
              A rarer presentation that can indicate certain oral health issues, including more severe fungal infections or underlying systemic conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Causes of Tongue Coating */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-blue-50 rounded-2xl p-8 my-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Causes of Tongue Coating</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Poor Oral Hygiene</h3>
            <p className="text-base">Failing to clean the tongue allows the daily buildup of biofilm to mature and thicken.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Oral Thrush</h3>
            <p className="text-base">An overgrowth of Candida fungus causes a cottage-cheese-like white coating.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Dehydration</h3>
            <p className="text-base">Lack of fluids reduces saliva, stopping the natural washing away of debris.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Smoking & Tobacco</h3>
            <p className="text-base">Irritates the papillae, causing them to enlarge and trap more bacteria and stains.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Mouth Breathing</h3>
            <p className="text-base">Dries out the tongue, rapidly increasing bacterial density on the surface.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Medications</h3>
            <p className="text-base">Drugs that cause dry mouth or alter oral flora (like antibiotics) frequently result in coated tongues.</p>
          </div>
        </div>
      </section>

      {/* Middle CTA */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <Link to="/tools/bad-breath-cause-checker" className="btn-primary inline-flex items-center text-lg px-8 py-4">
          Take our Bad Breath Assessment
        </Link>
      </section>

      {/* How to Remove */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Remove Tongue Coating and Reduce Bad Breath</h2>
        <div className="space-y-6 text-gray-800 text-lg">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Tongue Scraping</h3>
            <p className="text-base leading-relaxed text-gray-800">
              Using a dedicated metal or plastic tongue scraper is the most effective method. Start from the very back of the tongue and pull forward gently. Rinse the scraper and repeat until clean.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Tongue Brushing</h3>
            <p className="text-base leading-relaxed text-gray-800">
              You can gently brush your tongue with a soft-bristled toothbrush. While slightly less effective at removing dense biofilm than scraping, it is better than doing nothing.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Hydration & Hygiene</h3>
            <p className="text-base leading-relaxed text-gray-800">
              Drink plenty of water to maintain saliva flow. Ensure you are brushing and flossing twice daily to minimize overall oral bacteria.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Antifungal Treatments</h3>
            <p className="text-base leading-relaxed text-gray-800">
              If the coating is diagnosed as oral thrush, antifungal medications prescribed by a doctor will be necessary to clear the infection.
            </p>
          </div>
        </div>
      </section>

      {/* When Professional Treatment Is Needed */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 border border-[hsl(var(--color-border-subtle))] rounded-2xl p-8 my-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">When Professional Treatment Is Needed</h2>
        <div className="space-y-6 text-gray-800 text-lg">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Signs of Oral Thrush</h3>
            <p className="text-base leading-relaxed text-gray-800">
              If the white coating can be scraped off but leaves behind red, sore, or bleeding patches, suspect oral thrush and seek medical advice.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">When to See a Dentist or Doctor</h3>
            <p className="text-base leading-relaxed text-gray-800">
              If the coating persists despite diligent cleaning, is painful, or is accompanied by other unusual symptoms (like fever or difficulty swallowing), professional evaluation is required.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Treatment Options</h3>
            <p className="text-base leading-relaxed text-gray-800">
              A healthcare provider can offer prescription medications to treat fungal or bacterial infections, or adjust existing medications causing dry mouth to prevent recurrence.
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
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Discover What's Behind Your Halitosis</h2>
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

export default BadBreathTongueCoatingCausesPage;