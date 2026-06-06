import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

const BadBreathDietaryCausesPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bestoralhealthguide.com/" },
      { "@type": "ListItem", "position": 2, "name": "Bad Breath Hub", "item": "https://bestoralhealthguide.com/bad-breath/" },
      { "@type": "ListItem", "position": 3, "name": "Bad Breath Causes", "item": "https://bestoralhealthguide.com/bad-breath/causes/" },
      { "@type": "ListItem", "position": 4, "name": "Dietary Causes", "item": "https://bestoralhealthguide.com/bad-breath/causes/dietary-causes/" }
    ]
  };

  return (
    <div className="main-content-pt min-h-screen bg-[hsl(var(--background))]">
      <Helmet>
        <title>Dietary Causes of Bad Breath | Foods That Cause Halitosis</title>
        <meta name="description" content="Discover how specific foods, drinks, and metabolic processes create bad breath. Learn which dietary triggers to avoid and how to neutralize food-based odors." />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="hub-hero relative border-b border-[hsl(var(--color-border-subtle))]">
        <div 
          className="hub-hero-image-overlay"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1588371877559-c680d9d67c42)' }}
        />
        <div className="hub-hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="w-full mb-6">
            <Breadcrumb items={[
              { label: 'Bad Breath Hub', href: '/bad-breath/' },
              { label: 'Causes', href: '/bad-breath/causes/' },
              { label: 'Dietary', href: '/bad-breath/causes/dietary-causes/' }
            ]} />
          </div>
          
          <div className="text-5xl md:text-6xl mb-4" aria-hidden="true">🍽️</div>
          
          <h1 className="hero-headline text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--color-text-primary))] text-center">
            Dietary Causes of Bad Breath
          </h1>
          
          <p className="hero-subheadline text-lg md:text-xl text-[hsl(var(--color-text-secondary))] text-center bg-white/50 p-2 rounded-lg backdrop-blur-sm">
            What you eat dictates how your breath smells. Understand the biological pathways that transform your meals into halitosis, and learn the nutritional strategies to stop it.
          </p>
          
          <div className="mb-8">
            <Link to="/tools/bad-breath-cause-checker" className="btn-primary text-lg px-8 py-4 shadow-lg">
              Check Your Dietary Risk
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-[hsl(var(--color-text-secondary))] bg-white/90 px-4 py-2 rounded-full shadow-sm">
            <ShieldCheck size={18} className="text-[hsl(var(--hero-new-teal))]" />
            <span>Science-based nutritional guidance</span>
          </div>
        </div>
      </section>

      {/* Section 1: Understanding Dietary Bad Breath */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-gray-800 text-lg">
          <p className="text-base leading-relaxed text-gray-800">
            It is universally understood that eating garlic leads to foul breath. However, the precise biological mechanics of dietary halitosis extend far beyond the immediate residue left on your tongue. Clinical nutrition and dental science reveal that what you consume impacts your breath through multiple, complex physiological pathways.
          </p>
          <p className="text-base leading-relaxed text-gray-800">
            Dietary halitosis operates on two distinct timelines: the immediate localized effect within the oral cavity, and the delayed systemic effect that occurs during digestion and metabolism. Furthermore, your overarching diet acts as the primary fuel source for the trillions of bacteria residing in your mouth. Modifying your nutritional intake is often the most immediate and controllable variable in eliminating persistent bad breath.
          </p>
        </div>
      </section>

      {/* Section 2: How Diet Affects Breath */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-2xl p-8 my-8 border border-[hsl(var(--color-border-subtle))]">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">The Mechanisms of Food Odor</h2>
        
        <div className="space-y-6 text-gray-800 text-lg">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Sulfur Compounds in Foods</h3>
            <p className="text-base leading-relaxed text-gray-800">
              Certain foods are naturally abundant in volatile sulfur compounds. When you chew these foods, the cellular structure breaks down, immediately releasing these potent odorous gases into the oral cavity. This creates an immediate, highly noticeable localized halitosis.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Digestion and Breath Odor</h3>
            <p className="text-base leading-relaxed text-gray-800">
              The most profound dietary effect occurs post-swallowing. As highly pungent foods are broken down in the stomach and intestines, their chemical oils are absorbed into the bloodstream. This blood eventually circulates to the lungs. During gas exchange, these oils are transferred to your airways and literally exhaled with every breath until the food is fully metabolized—a process that brushing your teeth cannot affect.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Mouth Bacteria and Diet</h3>
            <p className="text-base leading-relaxed text-gray-800">
              Your diet directly dictates which strains of oral bacteria thrive. Anaerobic, halitosis-causing bacteria flourish when supplied with ample amounts of simple carbohydrates, sugars, and specific proteins. A poor diet essentially supercharges the bacterial factories producing bad breath.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Saliva Production</h3>
            <p className="text-base leading-relaxed text-gray-800">
              Saliva is nature's mouthwash; it neutralizes acids, washes away debris, and contains antibacterial enzymes. Diets lacking in crunchy, fibrous foods fail to mechanically stimulate adequate saliva flow. Additionally, highly salty or artificially processed diets can physically dehydrate the body, leading to a dry, odor-prone mouth.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Foods That Cause Bad Breath */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">The Worst Food Offenders</h2>
        
        <div className="space-y-6 text-gray-800 text-lg">
          <div>
            <h3 className="text-xl font-bold text-gray-900">1. Garlic and Onions</h3>
            <p className="text-base leading-relaxed text-gray-800">The undisputed champions of halitosis. Both belong to the allium family and contain heavy concentrations of allyl methyl sulfide. This compound is notoriously slow to metabolize, clinging to your bloodstream and breath for up to 72 hours.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">2. Spicy Foods & Curries</h3>
            <p className="text-base leading-relaxed text-gray-800">Heavy spices contain potent essential oils that follow the exact same blood-to-lung metabolic pathway as garlic, ensuring long-lasting systemic breath odor.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">3. Dairy Products</h3>
            <p className="text-base leading-relaxed text-gray-800">Milk and cheese are incredibly rich in dense proteins. Anaerobic bacteria in the mouth rapidly break down these specific dairy proteins into highly odorous sulfur compounds.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">4. Sugary Foods</h3>
            <p className="text-base leading-relaxed text-gray-800">Simple sugars do not inherently smell bad, but they are the primary fuel source for oral bacteria. A sugary snack leads to a massive, immediate spike in bacterial reproduction and subsequent acid and sulfur excretion.</p>
          </div>
        </div>
      </section>

      {/* Section 4: Drinks That Cause Bad Breath */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-blue-50 rounded-2xl p-8 my-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Beverage Triggers</h2>
        <div className="space-y-6 text-gray-800 text-lg">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Alcohol</h3>
            <p className="text-base leading-relaxed text-gray-800">Alcohol is a potent desiccant (drying agent). It severely suppresses saliva production, leading directly to a dry mouth where anaerobic bacteria multiply unhindered. Additionally, alcohol metabolism produces foul-smelling aldehydes.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Coffee</h3>
            <p className="text-base leading-relaxed text-gray-800">Coffee is highly acidic, creating an environment favored by halitosis-causing bacteria. It also possesses a strong intrinsic odor and acts as a mild diuretic, reducing saliva volume.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Sugary & Acidic Drinks</h3>
            <p className="text-base leading-relaxed text-gray-800">Sodas and energy drinks combine the worst elements: extreme acidity that erodes enamel, and massive sugar payloads that feed bacterial colonies.</p>
          </div>
        </div>
      </section>

      {/* Section 5: Identifying Dietary Bad Breath */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Diagnosis & Tracking</h2>
        <div className="space-y-6 text-gray-800 text-lg">
          <p className="text-base leading-relaxed text-gray-800"><strong className="font-semibold text-gray-900">Signs and Symptoms:</strong> Dietary bad breath is often episodic. It peaks hours after a specific meal and remains highly resistant to brushing or mouthwash since the odor originates from the lungs.</p>
          <p className="text-base leading-relaxed text-gray-800"><strong className="font-semibold text-gray-900">Tracking Your Triggers:</strong> Keep a strict food and symptom diary for two weeks. Note exactly what you ate and when the halitosis became noticeable to identify your personal metabolic triggers.</p>
          <p className="text-base leading-relaxed text-gray-800"><strong className="font-semibold text-gray-900">Using Assessment Tools:</strong> If you are unsure whether your diet or your hygiene is to blame, use our algorithmic tool to analyze your inputs and isolate the likely root cause.</p>
          <Link to="/tools/bad-breath-cause-checker" className="btn-primary inline-flex mt-4">
            Take the Assessment Tool
          </Link>
        </div>
      </section>

      {/* Section 6 & 7: Solutions and Prevention */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 border border-[hsl(var(--color-border-subtle))] rounded-2xl p-8 my-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Dietary Strategies for Fresh Breath</h2>
        <div className="space-y-6 text-gray-800 text-lg">
          <p className="text-base leading-relaxed text-gray-800"><strong className="font-semibold text-gray-900">Foods to Eat:</strong> Incorporate "detergent foods"—crisp, raw fruits and vegetables like apples, celery, and carrots. Their abrasive texture physically scrubs plaque from teeth, while the chewing action triggers massive saliva flow.</p>
          <p className="text-base leading-relaxed text-gray-800 mt-4"><strong className="font-semibold text-gray-900">Hydration Importance:</strong> Drink a minimum of 64 ounces of water daily. Consistent hydration is the only way to maintain the saliva volume necessary to continually wash away bacteria and neutralize acids.</p>
          <p className="text-base leading-relaxed text-gray-800 mt-4"><strong className="font-semibold text-gray-900">Smart Meal Timing:</strong> If you must consume garlic or heavy spices, do so during meals where you can immediately chew sugar-free gum afterward to stimulate saliva, and ensure you are highly hydrated to speed up the metabolic flushing of the oils.</p>
        </div>
      </section>

      {/* Section 8: Related Topics */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Other Causes</h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/bad-breath/causes/bacterial-causes/" className="px-4 py-2 border border-[hsl(var(--color-border-subtle))] rounded-full text-sm font-medium hover:bg-[hsl(var(--hero-new-teal))] hover:text-white transition-colors">
            Bacterial Causes
          </Link>
          <Link to="/bad-breath/causes/health-condition-causes/" className="px-4 py-2 border border-[hsl(var(--color-border-subtle))] rounded-full text-sm font-medium hover:bg-[hsl(var(--hero-new-teal))] hover:text-white transition-colors">
            Health Conditions
          </Link>
          <Link to="/oral-care-routine" className="px-4 py-2 border border-[hsl(var(--color-border-subtle))] rounded-full text-sm font-medium hover:bg-[hsl(var(--hero-new-teal))] hover:text-white transition-colors">
            Oral Care Habits
          </Link>
        </div>
      </section>

      {/* Section 9: Final CTA */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Analyze Your Dietary Impact</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/tools/bad-breath-cause-checker" className="btn-primary w-full sm:w-auto px-8">
            Start Free Assessment
          </Link>
          <Link to="/bad-breath/causes/" className="btn-secondary w-full sm:w-auto px-8">
            Back to Causes Hub
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BadBreathDietaryCausesPage;