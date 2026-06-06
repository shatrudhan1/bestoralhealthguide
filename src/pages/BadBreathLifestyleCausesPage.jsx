import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

const BadBreathLifestyleCausesPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bestoralhealthguide.com/" },
      { "@type": "ListItem", "position": 2, "name": "Bad Breath Hub", "item": "https://bestoralhealthguide.com/bad-breath/" },
      { "@type": "ListItem", "position": 3, "name": "Bad Breath Causes", "item": "https://bestoralhealthguide.com/bad-breath/causes/" },
      { "@type": "ListItem", "position": 4, "name": "Lifestyle Causes", "item": "https://bestoralhealthguide.com/bad-breath/causes/lifestyle-causes/" }
    ]
  };

  return (
    <div className="main-content-pt min-h-screen bg-[hsl(var(--background))]">
      <Helmet>
        <title>Lifestyle Causes of Bad Breath | Smoking, Sleep & Stress</title>
        <meta name="description" content="Discover how daily habits like smoking, poor sleep, stress, and dehydration directly trigger severe bad breath, and learn how to reverse the damage." />
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
              { label: 'Lifestyle Causes', href: '/bad-breath/causes/lifestyle-causes/' }
            ]} />
          </div>
          
          <div className="text-5xl md:text-6xl mb-4" aria-hidden="true">🚭</div>
          
          <h1 className="hero-headline text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--color-text-primary))] text-center">
            Lifestyle Causes of Bad Breath
          </h1>
          
          <p className="hero-subheadline text-lg md:text-xl text-[hsl(var(--color-text-secondary))] text-center bg-white/50 p-2 rounded-lg backdrop-blur-sm">
            Your daily choices dictate your oral environment. Learn how smoking, chronic stress, poor sleep, and dehydration guarantee the return of halitosis.
          </p>
          
          <div className="mb-8">
            <Link to="/tools/bad-breath-cause-checker" className="btn-primary text-lg px-8 py-4 shadow-lg">
              Analyze Your Habits
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-[hsl(var(--color-text-secondary))] bg-white/90 px-4 py-2 rounded-full shadow-sm">
            <ShieldCheck size={18} className="text-[hsl(var(--hero-new-teal))]" />
            <span>Behavioral science & dental expertise</span>
          </div>
        </div>
      </section>

      {/* Section 1: Understanding Lifestyle Bad Breath */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-gray-800 text-lg">
          <p className="text-base leading-relaxed text-gray-800">
            When diagnosing chronic halitosis, clinicians look closely at modifiable behavioral factors. The oral cavity is a highly sensitive ecosystem that reacts violently to environmental changes. Your daily lifestyle choices—from the quality of your sleep to your stress levels and hydration habits—serve as the foundational parameters for either health or disease.
          </p>
          <p className="text-base leading-relaxed text-gray-800">
            Lifestyle factors rarely cause bad breath in isolation; rather, they act as massive multipliers for bacterial and physiological dysfunction. By addressing these behavioral root causes, you not only eliminate severe halitosis but dramatically improve your overarching systemic health.
          </p>
        </div>
      </section>

      {/* Section 2: Smoking and Tobacco */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-2xl p-8 my-8 border border-[hsl(var(--color-border-subtle))]">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Tobacco: The Ultimate Breath Destroyer</h2>
        
        <div className="space-y-6 text-gray-800 text-lg">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">How Smoking Causes Bad Breath</h3>
            <p className="text-base leading-relaxed text-gray-800">Smoking guarantees bad breath through multiple compounding mechanisms. The smoke leaves a lingering, stale ash odor. More destructively, the chemical heat and toxins severely dehydrate the oral mucosa, paralyzing salivary glands. In this dry environment, anaerobic bacteria multiply exponentially.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Gum Disease and Smoking</h3>
            <p className="text-base leading-relaxed text-gray-800">Nicotine is a potent vasoconstrictor, meaning it strangles the blood supply to the gums. This depresses the local immune system, allowing plaque bacteria to destroy gum tissue rapidly without the standard warning sign of bleeding. Smokers are twice as likely to develop severe periodontitis—a massive source of sulfur gas production.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Quitting Benefits</h3>
            <p className="text-base leading-relaxed text-gray-800">Upon quitting, oral health begins to recover within weeks. Saliva production normalizes, the heavy chemical odor dissipates, and the immune system re-engages to fight off the halitosis-causing bacterial colonies.</p>
          </div>
        </div>
      </section>

      {/* Section 4: Sleep and Stress */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Sleep Quality and Chronic Stress</h2>
        <div className="space-y-6 text-gray-800 text-lg">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Dry Mouth During Sleep</h3>
            <p className="text-base leading-relaxed text-gray-800">During normal sleep, saliva production naturally drops. If you breathe through your mouth—due to congestion, posture, or sleep apnea—the mouth completely dries out. This creates severe "morning breath" as bacteria feast in an oxygen-deprived environment all night.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Stress Effects on Saliva</h3>
            <p className="text-base leading-relaxed text-gray-800">High chronic stress locks the body into a "fight or flight" sympathetic nervous state. This physiological response literally restricts the salivary glands, creating a chronically dry, sticky mouth that breeds odor-causing bacteria throughout the day.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Sleep Apnea Connection</h3>
            <p className="text-base leading-relaxed text-gray-800">Obstructive sleep apnea forces intense, prolonged mouth-breathing. Patients with untreated sleep apnea almost universally suffer from severe chronic halitosis due to the extreme desiccation of their oral tissues overnight.</p>
          </div>
        </div>
      </section>

      {/* Section 5 & 6: Dehydration and Alcohol */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-blue-50 rounded-2xl p-8 my-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Hydration and Alcohol</h2>
        <div className="space-y-6 text-gray-800 text-lg">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Dehydration Mechanics</h3>
            <p className="text-base leading-relaxed text-gray-800">Saliva is 99% water. If you are systematically dehydrated from a lack of water intake, heavy caffeine use, or intense exercise, your body conserves fluid by halting saliva production. Without saliva, sulfur compounds build up instantly.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Alcohol's Impact</h3>
            <p className="text-base leading-relaxed text-gray-800">Alcohol is a severe diuretic and cellular desiccant. Regular consumption of beer, wine, or spirits severely dries the oral cavity while simultaneously introducing acidic, odorous metabolic byproducts into the bloodstream.</p>
          </div>
        </div>
      </section>

      {/* Section 8: Lifestyle Modifications */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Reversing the Damage</h2>
        <div className="space-y-6 text-gray-800 text-lg">
          <p className="text-base leading-relaxed text-gray-800"><strong className="font-semibold text-gray-900">Improve Oral Hygiene:</strong> Commit to 2 minutes of brushing twice daily, interdental flossing, and strict daily tongue scraping.</p>
          <p className="text-base leading-relaxed text-gray-800"><strong className="font-semibold text-gray-900">Manage Stress:</strong> Adopt mindfulness, exercise, or therapy to reduce sympathetic nervous system dominance and restore natural saliva flow.</p>
          <p className="text-base leading-relaxed text-gray-800"><strong className="font-semibold text-gray-900">Stay Hydrated:</strong> Drink water constantly throughout the day to ensure your salivary glands have the fluid required to cleanse the mouth.</p>
          <p className="text-base leading-relaxed text-gray-800"><strong className="font-semibold text-gray-900">Using Assessment Tools:</strong> Identify which habit is harming you the most by utilizing our algorithmic checker.</p>
          <Link to="/tools/bad-breath-cause-checker" className="btn-primary mt-4">
            Analyze Your Habits Now
          </Link>
        </div>
      </section>

      {/* Section 9: Related Topics */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[hsl(var(--color-border-subtle))] mt-8 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Other Causes</h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/bad-breath/causes/bacterial-causes/" className="px-4 py-2 border border-[hsl(var(--color-border-subtle))] rounded-full text-sm font-medium hover:bg-[hsl(var(--hero-new-teal))] hover:text-white transition-colors">
            Bacterial Causes
          </Link>
          <Link to="/bad-breath/causes/health-condition-causes/" className="px-4 py-2 border border-[hsl(var(--color-border-subtle))] rounded-full text-sm font-medium hover:bg-[hsl(var(--hero-new-teal))] hover:text-white transition-colors">
            Medical Conditions
          </Link>
          <Link to="/oral-care-routine" className="px-4 py-2 border border-[hsl(var(--color-border-subtle))] rounded-full text-sm font-medium hover:bg-[hsl(var(--hero-new-teal))] hover:text-white transition-colors">
            Perfecting Your Routine
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BadBreathLifestyleCausesPage;