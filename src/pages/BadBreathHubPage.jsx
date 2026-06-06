import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BadBreathHubPage = () => {
  return (
    <div className="main-content-pt min-h-screen bg-[hsl(var(--background))]">
      <Helmet>
        <title>Bad Breath Solutions & Prevention | Expert Halitosis Guide</title>
        <meta name="description" content="Comprehensive, science-backed guide to understanding, diagnosing, and treating bad breath. Discover the root causes and effective solutions for lasting fresh breath." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bestoralhealthguide.com/" },
              { "@type": "ListItem", "position": 2, "name": "Bad Breath Hub", "item": "https://bestoralhealthguide.com/bad-breath/" }
            ]
          })}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="hub-hero relative">
        <div 
          className="hub-hero-image-overlay"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1695820632971-28cd17651b41)' }}
        />
        <div className="hub-hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="w-full mb-6">
            <Breadcrumb items={[{ label: 'Bad Breath Hub', href: '/bad-breath/' }]} />
          </div>
          
          <div className="text-5xl md:text-6xl mb-4" aria-hidden="true">👃</div>
          
          <h1 className="hero-headline text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--color-text-primary))] text-center">
            Bad Breath Solutions & Prevention
          </h1>
          
          <p className="hero-subheadline text-lg md:text-xl text-[hsl(var(--color-text-secondary))] text-center">
            Discover the exact reasons behind halitosis and find evidence-based, reliable solutions to reclaim your confidence and oral health forever.
          </p>
          
          <div className="mb-8">
            <Link to="/tools/bad-breath-cause-checker" className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl">
              Take Bad Breath Assessment
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-[hsl(var(--color-text-secondary))] bg-white/80 px-4 py-2 rounded-full backdrop-blur-sm shadow-sm">
            <ShieldCheck size={18} className="text-[hsl(var(--hero-new-teal))]" />
            <span>Trusted by 50,000+ users • Science-backed • Free assessment available</span>
          </div>
        </div>
      </section>

      {/* Section 1: Understanding Bad Breath */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">Understanding Bad Breath (Halitosis)</h2>
        <div className="space-y-6 text-gray-800 text-lg">
          <p className="text-base leading-relaxed text-gray-800">
            Bad breath, medically known as halitosis, is a widespread condition affecting up to 25% of the global population. While it is often dismissed as a temporary annoyance caused by a garlicky meal or a poor night's sleep, persistent halitosis can be a complex condition rooted in specific biological and physiological mechanisms.
          </p>
          <p className="text-base leading-relaxed text-gray-800">
            At its core, bad breath is primarily the result of volatile sulfur compounds (VSCs) produced by anaerobic bacteria residing in the oral cavity. When these bacteria break down proteins from food particles, dead cells, and nasal drip, they release foul-smelling gases. However, understanding that bacteria are the culprits is only the first step. The true challenge lies in identifying exactly <em className="italic text-gray-800">why</em> these bacteria are thriving in your specific case.
          </p>
          <p className="text-base leading-relaxed text-gray-800">
            In this comprehensive hub, we move beyond generic advice like "brush more often." Our evidence-based approach helps you pinpoint the underlying causes—whether they are bacterial imbalances, dietary triggers, hidden health conditions, or lifestyle factors—and guides you toward targeted, lasting solutions developed through rigorous dental science.
          </p>
        </div>
      </section>

      {/* Section 2: Quick Overview (Cluster Cards) */}
      <section className="py-[var(--section-spacing)] bg-[hsl(var(--hub-accent-bg))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Explore Our Bad Breath Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/bad-breath/causes/" className="block group h-full">
              <Card className="h-full hover:border-[hsl(var(--hero-new-teal))] transition-all duration-300">
                <CardHeader>
                  <div className="text-4xl mb-2">🔍</div>
                  <CardTitle className="group-hover:text-[hsl(var(--hero-new-teal))] transition-colors flex items-center justify-between">
                    Bad Breath Causes
                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[hsl(var(--color-text-secondary))]">
                    Deep dive into the bacterial, dietary, medical, and lifestyle roots of halitosis to find your trigger.
                  </p>
                </CardContent>
              </Card>
            </Link>
            
            <div className="block group h-full cursor-default">
              <Card className="h-full opacity-80">
                <CardHeader>
                  <div className="text-4xl mb-2">✨</div>
                  <CardTitle className="flex items-center justify-between">
                    Bad Breath Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[hsl(var(--color-text-secondary))]">
                    Review clinically proven treatments, from specialized mouthwashes to advanced oral probiotics. (Coming Soon)
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="block group h-full cursor-default">
              <Card className="h-full opacity-80">
                <CardHeader>
                  <div className="text-4xl mb-2">🛡️</div>
                  <CardTitle className="flex items-center justify-between">
                    Prevention Strategies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[hsl(var(--color-text-secondary))]">
                    Learn daily habits, hygiene techniques, and dietary adjustments to keep your breath fresh permanently. (Coming Soon)
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="block group h-full cursor-default">
              <Card className="h-full opacity-80">
                <CardHeader>
                  <div className="text-4xl mb-2">❓</div>
                  <CardTitle className="flex items-center justify-between">
                    Common Questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[hsl(var(--color-text-secondary))]">
                    Find quick, expert answers to the most frequently asked questions regarding halitosis management. (Coming Soon)
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Bad Breath Matters */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Why Bad Breath Matters</h2>
        <div className="space-y-6 text-gray-800 text-lg">
          <p className="text-base leading-relaxed text-gray-800">
            The impact of bad breath extends far beyond physical health; it profoundly influences psychological well-being, social interactions, and professional confidence. Numerous psychological studies have shown that individuals suffering from chronic halitosis often experience heightened social anxiety, social avoidance, and a noticeable decrease in overall quality of life. The constant fear of offending others can lead to subtle behavioral changes, such as maintaining physical distance during conversations or avoiding speaking altogether.
          </p>
          <p className="text-base leading-relaxed text-gray-800">
            From a clinical perspective, bad breath is often a critical diagnostic indicator. It acts as an early warning system for your body. Dental professionals frequently identify the early stages of periodontal (gum) disease primarily through the detection of specific breath odors. If left unaddressed, the bacteria causing bad breath can destroy gum tissue, lead to tooth loss, and even enter the bloodstream, potentially exacerbating systemic conditions like cardiovascular disease.
          </p>
          <p className="text-base leading-relaxed text-gray-800">
            Ignoring halitosis means ignoring a symptom that your body is trying to communicate. Addressing it is not merely about achieving social comfort; it is a vital component of maintaining holistic, long-term health.
          </p>
        </div>
      </section>

      {/* Section 4: Common Bad Breath Causes */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-2xl p-8 my-8 border border-[hsl(var(--color-border-subtle))]">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Common Categories of Bad Breath</h2>
        <div className="space-y-6 text-gray-800 text-lg">
          <p className="text-base leading-relaxed text-gray-800">
            To effectively eliminate halitosis, you must first categorize the root cause. Dental experts generally divide the origins of bad breath into four primary categories:
          </p>
          <ul className="space-y-2 text-base text-gray-800 list-disc list-inside mt-6">
            <li className="text-base text-gray-800">
              <strong className="font-semibold text-gray-900">Bacterial Causes:</strong> This is the most common source, accounting for nearly 85% of halitosis cases. Anaerobic bacteria thrive in oxygen-depleted areas of the mouth—such as beneath the gumline and in the deep crevices of the tongue—producing odorous volatile sulfur compounds.
            </li>
            <li className="text-base text-gray-800">
              <strong className="font-semibold text-gray-900">Dietary Causes:</strong> Foods like garlic, onions, and certain spices contain potent oils that enter your bloodstream during digestion. These oils are eventually carried to your lungs and exhaled. High-sugar diets also actively feed the bacteria that cause bacterial halitosis.
            </li>
            <li className="text-base text-gray-800">
              <strong className="font-semibold text-gray-900">Health Conditions:</strong> Systemic issues can manifest as bad breath. Conditions like chronic sinus infections, post-nasal drip, acid reflux (GERD), diabetes, and even specific liver or kidney diseases produce distinct breath odors that brushing cannot solve.
            </li>
            <li className="text-base text-gray-800">
              <strong className="font-semibold text-gray-900">Lifestyle Causes:</strong> Habits such as smoking significantly reduce saliva flow (causing dry mouth or xerostomia), introduce foul-smelling compounds directly into the mouth, and severely impair the immune system's ability to fight off odor-causing oral infections.
            </li>
          </ul>
        </div>
      </section>

      {/* Section 5: Bad Breath Solutions */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Evidence-Based Solutions</h2>
        <div className="space-y-6 text-gray-800 text-lg">
          <p className="text-base leading-relaxed text-gray-800">
            Overcoming bad breath requires a strategic, multi-faceted approach. Temporary fixes like mints and standard alcohol-based mouthwashes merely mask the odor for a short period and can actually worsen the problem by drying out the oral mucosa.
          </p>
          <p className="text-base leading-relaxed text-gray-800">
            <strong className="font-semibold text-gray-900">Targeted Oral Hygiene:</strong> The foundation of treatment involves disrupting bacterial colonies. This means moving beyond standard brushing to include meticulous flossing and, crucially, daily tongue scraping to remove the biofilm that harbors VSC-producing bacteria.
          </p>
          <p className="text-base leading-relaxed text-gray-800">
            <strong className="font-semibold text-gray-900">Advanced Over-The-Counter Products:</strong> Experts recommend mouthwashes containing active ingredients like Chlorine Dioxide or Zinc. Unlike alcohol, these compounds actively neutralize sulfur compounds at a molecular level without disrupting the delicate balance of the oral microbiome.
          </p>
          <p className="text-base leading-relaxed text-gray-800">
            <strong className="font-semibold text-gray-900">Oral Probiotics:</strong> One of the most promising advancements in modern dental care is the use of targeted oral probiotics (such as strains <em className="italic text-gray-800">S. salivarius K12</em> and <em className="italic text-gray-800">M18</em>). These beneficial bacteria crowd out odor-causing strains, establishing a healthy, balanced oral environment that prevents bad breath from returning.
          </p>
          <p className="text-base leading-relaxed text-gray-800">
            <strong className="font-semibold text-gray-900">Professional Intervention:</strong> If at-home care proves insufficient, a dental professional can perform deep cleaning (scaling and root planing) to remove hardened tartar and bacteria from beneath the gumline, directly treating the periodontal disease that often fuels chronic halitosis.
          </p>
        </div>
      </section>

      {/* Section 6: Assessment Tool */}
      <section className="py-[var(--section-spacing)] bg-gradient-to-r from-[hsl(var(--hero-new-bg-start))] to-[hsl(var(--hub-accent-bg))] border-y border-[hsl(var(--color-border-subtle))] my-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Exact Root Cause</h2>
          <p className="text-lg text-[hsl(var(--color-text-secondary))] mb-8 max-w-2xl mx-auto">
            Stop guessing and start treating. Our AI-driven Bad Breath Cause Checker analyzes your specific symptoms, daily habits, and medical history to pinpoint the most likely origin of your halitosis in under 2 minutes.
          </p>
          <Link to="/tools/bad-breath-cause-checker" className="btn-primary text-lg px-10 py-4 shadow-md hover:shadow-lg inline-flex items-center">
            Take Your Free Assessment <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Section 7: Related Resources */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Further Reading & Related Hubs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/bad-breath/causes/" className="p-4 border border-[hsl(var(--color-border-subtle))] rounded-lg hover:border-[hsl(var(--hero-new-teal))] transition-colors">
            <h3 className="text-xl font-bold mb-1 text-[hsl(var(--hero-new-teal))]">Deep Dive: Causes</h3>
            <p className="text-sm text-[hsl(var(--color-text-secondary))]">Understand every factor that creates bad breath.</p>
          </Link>
          <Link to="/oral-care-routine" className="p-4 border border-[hsl(var(--color-border-subtle))] rounded-lg hover:border-[hsl(var(--hero-new-teal))] transition-colors">
            <h3 className="text-xl font-bold mb-1 text-[hsl(var(--hero-new-teal))]">Oral Care Routine Hub</h3>
            <p className="text-sm text-[hsl(var(--color-text-secondary))]">Master the daily habits needed for a healthy mouth.</p>
          </Link>
          <Link to="/gum-health" className="p-4 border border-[hsl(var(--color-border-subtle))] rounded-lg hover:border-[hsl(var(--hero-new-teal))] transition-colors">
            <h3 className="text-xl font-bold mb-1 text-[hsl(var(--hero-new-teal))]">Gum Health Hub</h3>
            <p className="text-sm text-[hsl(var(--color-text-secondary))]">Learn how gum disease connects directly to your breath.</p>
          </Link>
          <Link to="/best-products" className="p-4 border border-[hsl(var(--color-border-subtle))] rounded-lg hover:border-[hsl(var(--hero-new-teal))] transition-colors">
            <h3 className="text-xl font-bold mb-1 text-[hsl(var(--hero-new-teal))]">Recommended Products</h3>
            <p className="text-sm text-[hsl(var(--color-text-secondary))]">Discover the best tools and pastes for halitosis.</p>
          </Link>
        </div>
      </section>

      {/* Section 8: Trust Signals (EEAT) */}
      <section className="py-[var(--section-spacing)] bg-gray-50 border-t border-[hsl(var(--color-border-subtle))] mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck size={48} className="mx-auto mb-4 text-[hsl(var(--hero-new-teal))]" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Accuracy</h2>
          <div className="text-[hsl(var(--color-text-secondary))] space-y-4 text-base max-w-3xl mx-auto">
            <p className="text-base leading-relaxed text-gray-800">
              At Best Oral Health Guide, our commitment is to your health, not to corporate sponsors. Every piece of information in this hub is rigorously researched, cross-referenced with peer-reviewed dental literature, and grounded in clinical science. 
            </p>
            <p className="text-base leading-relaxed text-gray-800">
              We pride ourselves on offering unbiased, expert-reviewed content that has empowered over 50,000 users to take control of their oral hygiene. We do not accept sponsored content, ensuring our assessments and recommendations remain entirely focused on what genuinely works for patients suffering from halitosis.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: Final CTA */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Conquer Bad Breath?</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/tools/bad-breath-cause-checker" className="btn-primary w-full sm:w-auto px-8">
            Take the Free Assessment
          </Link>
          <Link to="/bad-breath/causes/" className="btn-secondary w-full sm:w-auto px-8">
            Explore Exact Causes
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BadBreathHubPage;