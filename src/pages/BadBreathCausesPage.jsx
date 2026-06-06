import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BadBreathCausesPage = () => {
  return (
    <div className="main-content-pt min-h-screen bg-[hsl(var(--background))]">
      <Helmet>
        <title>Bad Breath Causes: Understanding Halitosis Origins | Expert Guide</title>
        <meta name="description" content="Discover the root causes of bad breath. From bacterial imbalances to hidden medical conditions, learn exactly what triggers halitosis so you can stop it." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bestoralhealthguide.com/" },
                { "@type": "ListItem", "position": 2, "name": "Bad Breath Hub", "item": "https://bestoralhealthguide.com/bad-breath/" },
                { "@type": "ListItem", "position": 3, "name": "Causes", "item": "https://bestoralhealthguide.com/bad-breath/causes/" }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Bad Breath Causes: Understanding Halitosis Origins",
              "description": "Discover the root causes of bad breath. From bacterial imbalances to hidden medical conditions, learn exactly what triggers halitosis so you can stop it.",
              "author": {
                "@type": "Organization",
                "name": "Best Oral Health Guide"
              },
              "datePublished": "2026-05-20T08:00:00Z"
            }
          ])
        }} />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[hsl(var(--hero-new-bg-start))] to-[hsl(var(--hero-new-bg-end))] py-12 md:py-20 border-b border-[hsl(var(--color-border-subtle))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="w-full mb-6">
            <Breadcrumb items={[
              { label: 'Bad Breath Hub', href: '/bad-breath/' },
              { label: 'Causes', href: '/bad-breath/causes/' }
            ]} />
          </div>
          
          <div className="text-5xl md:text-6xl mb-4" aria-hidden="true">🔍</div>
          
          <h1 className="hero-headline text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--color-text-primary))] text-center max-w-4xl">
            Bad Breath Causes: Understanding Halitosis Origins
          </h1>
          
          <p className="hero-subheadline text-lg md:text-xl text-[hsl(var(--color-text-secondary))] text-center max-w-2xl">
            Stop masking the symptoms. Explore the exact biological, dietary, and lifestyle triggers that cause bad breath, and learn how to identify your specific root cause.
          </p>
          
          <div className="mb-8">
            <Link to="/tools/bad-breath-cause-checker" className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl">
              Identify Your Cause Now
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-[hsl(var(--color-text-secondary))]">
            <ShieldCheck size={18} className="text-[hsl(var(--hero-new-teal))]" />
            <span>Medically reviewed accuracy • 50,000+ assessments taken</span>
          </div>
        </div>
      </section>

      {/* Section 1: Why Understanding Causes Matters */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">Why Understanding Causes Matters</h2>
        <div className="space-y-6 text-gray-800 text-lg">
          <p className="text-base leading-relaxed text-gray-800">
            Treating bad breath without knowing its origin is like painting over rust; the problem will inevitably return, often worse than before. While the oral hygiene aisle is flooded with mints, sprays, and alcohol-based rinses promising instant freshness, these products are universally designed for symptom management, not root-cause resolution.
          </p>
          <p className="text-base leading-relaxed text-gray-800">
            From a clinical perspective, identifying the specific cause of your halitosis is the single most critical step in establishing a cure. Whether the odor is stemming from an overgrowth of anaerobic bacteria deep within periodontal pockets, volatile organic compounds absorbing from your diet, or a systemic metabolic issue, the required treatment pathway differs drastically. 
          </p>
          <p className="text-base leading-relaxed text-gray-800">
            By accurately isolating the source, you can abandon ineffective generalized treatments and adopt a targeted, scientifically sound regimen that eliminates the problem at its base.
          </p>
        </div>
      </section>

      {/* Section 2: Quick Overview */}
      <section className="py-[var(--section-spacing)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Bacterial</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Responsible for 85% of cases. Origins include plaque, tartar, and gum disease.</p>
                  <Link to="/bad-breath/causes/bacterial-causes/" className="text-primary flex items-center gap-1 font-medium hover:underline">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Dietary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Immediate and systemic triggers from foods, drinks, and metabolic processes.</p>
                  <Link to="/bad-breath/causes/dietary-causes/" className="text-primary flex items-center gap-1 font-medium hover:underline">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Medical</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Systemic conditions like GERD, diabetes, and sinus infections affecting breath.</p>
                  <Link to="/bad-breath/causes/health-condition-causes/" className="text-primary flex items-center gap-1 font-medium hover:underline">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Lifestyle</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Habits including smoking, stress, and mouth-breathing during sleep.</p>
                  <Link to="/bad-breath/causes/lifestyle-causes/" className="text-primary flex items-center gap-1 font-medium hover:underline">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </CardContent>
              </Card>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BadBreathCausesPage;