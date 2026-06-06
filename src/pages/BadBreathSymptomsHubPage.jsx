import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, ShieldCheck, Sun, Wind, Frown, Droplets, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BadBreathSymptomsHubPage = () => {
  const breadcrumbData = {
    itemListElement: [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bestoralhealthguide.com/" },
      { "@type": "ListItem", "position": 2, "name": "Bad Breath Hub", "item": "https://bestoralhealthguide.com/bad-breath/" },
      { "@type": "ListItem", "position": 3, "name": "Symptoms", "item": "https://bestoralhealthguide.com/bad-breath/symptoms/" }
    ]
  };

  const articleData = {
    headline: "Bad Breath Symptoms: Complete Guide to Identifying Oral Odor Signs",
    description: "Explore common bad breath symptoms, from morning breath to white tongue. Learn what different symptoms mean and when to seek help.",
    author: {
      "@type": "Organization",
      "name": "Best Oral Health Guide"
    },
    datePublished: "2026-05-22T08:00:00Z",
    dateModified: "2026-05-22T08:00:00Z",
    keywords: "bad breath symptoms, morning breath, white tongue, bad taste in mouth, dry mouth symptoms, halitosis signs"
  };

  return (
    <div className="main-content-pt min-h-screen bg-[hsl(var(--background))]">
      <Helmet>
        <title>Bad Breath Symptoms: Complete Guide to Identifying Oral Odor Signs</title>
        <meta name="description" content="Explore common bad breath symptoms, from morning breath to white tongue. Learn what different symptoms mean and when to seek help." />
      </Helmet>
      
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbData} />
      <SchemaMarkup type="Article" data={articleData} />

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[hsl(var(--hero-new-bg-start))] to-[hsl(var(--hero-new-bg-end))] py-12 md:py-20 border-b border-[hsl(var(--color-border-subtle))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="w-full mb-6">
            <Breadcrumb items={[
              { label: 'Bad Breath Hub', href: '/bad-breath/' },
              { label: 'Symptoms', href: '/bad-breath/symptoms/' }
            ]} />
          </div>
          
          <div className="text-5xl md:text-6xl mb-4" aria-hidden="true">😷</div>
          
          <h1 className="hero-headline text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--color-text-primary))] text-center max-w-4xl">
            Bad Breath Symptoms Guide
          </h1>
          
          <p className="hero-subheadline text-lg md:text-xl text-[hsl(var(--color-text-secondary))] text-center max-w-2xl mt-6">
            Explore the most common signs and symptoms of bad breath. Understanding your specific oral symptoms is the first crucial step toward identifying the underlying cause and establishing a permanent solution.
          </p>
          
          <div className="mt-8 mb-8">
            <Link to="/tools/bad-breath-cause-checker" className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl">
              Take Our Assessment
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-[hsl(var(--color-text-secondary))]">
            <ShieldCheck size={18} className="text-[hsl(var(--hero-new-teal))]" />
            <span>Medically reviewed accuracy • 50,000+ assessments taken</span>
          </div>
        </div>
      </section>

      {/* Educational Overview Section */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Understanding Bad Breath Symptoms</h2>
        <div className="space-y-6 text-gray-800 text-lg">
          <p className="text-base leading-relaxed text-gray-800">
            Halitosis rarely occurs in isolation. It is typically accompanied by a cluster of distinct oral symptoms that provide valuable clinical clues about the root cause. Whether you are experiencing an unpleasant taste, visible changes to your tongue, or a persistent dry feeling, these symptoms act as your body's early warning system indicating an imbalance in your oral microbiome or overall health.
          </p>
          <p className="text-base leading-relaxed text-gray-800">
            Symptoms can vary drastically between individuals. For example, a heavy white coating on the tongue typically indicates an overgrowth of anaerobic bacteria or fungal buildup, pointing toward hygiene or microbiome issues. Conversely, a persistent metallic taste may signal underlying periodontal disease, bleeding gums, or even systemic health conditions. Correctly identifying these nuances allows for a targeted, rather than generalized, treatment approach.
          </p>
          <p className="text-base leading-relaxed text-gray-800">
            Early identification of these symptoms is critical. Left unchecked, the bacterial imbalances responsible for bad breath can progress into severe gum disease (periodontitis), tooth decay, and infections that require extensive dental intervention. By taking note of exactly what you are experiencing—when it occurs and how it feels—you empower yourself to seek the correct, evidence-based solution.
          </p>
        </div>
      </section>

      {/* Symptom Category Cards Section */}
      <section className="py-12 bg-gray-50/50 border-y border-[hsl(var(--color-border-subtle))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="flex flex-col h-full hover:shadow-md transition-shadow duration-200">
                <CardHeader>
                  <div className="mb-4 p-3 bg-blue-50 w-fit rounded-xl text-[hsl(var(--hero-new-teal))]">
                    <Sun size={28} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Morning Breath</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    A common but sometimes severe odor upon waking. Often linked to reduced saliva flow and overnight bacterial multiplication.
                  </p>
                  <Link to="/bad-breath/symptoms/morning-breath/" className="text-[hsl(var(--hero-new-teal))] flex items-center gap-2 font-semibold hover:underline mt-auto">
                    Learn more <ArrowRight size={18} />
                  </Link>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full hover:shadow-md transition-shadow duration-200">
                <CardHeader>
                  <div className="mb-4 p-3 bg-blue-50 w-fit rounded-xl text-[hsl(var(--hero-new-teal))]">
                    <Wind size={28} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">White Tongue</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    A visible white or yellow coating on the tongue's surface, indicating a dense biofilm of trapped bacteria and dead cells.
                  </p>
                  <Link to="/bad-breath/symptoms/white-tongue/" className="text-[hsl(var(--hero-new-teal))] flex items-center gap-2 font-semibold hover:underline mt-auto">
                    Learn more <ArrowRight size={18} />
                  </Link>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full hover:shadow-md transition-shadow duration-200">
                <CardHeader>
                  <div className="mb-4 p-3 bg-blue-50 w-fit rounded-xl text-[hsl(var(--hero-new-teal))]">
                    <Frown size={28} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Bad Taste in Mouth</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    A persistent sour, bitter, or foul taste that lingers despite brushing. Frequently associated with acid reflux or oral infections.
                  </p>
                  <Link to="/bad-breath/symptoms/bad-taste-in-mouth/" className="text-[hsl(var(--hero-new-teal))] flex items-center gap-2 font-semibold hover:underline mt-auto">
                    Learn more <ArrowRight size={18} />
                  </Link>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full hover:shadow-md transition-shadow duration-200">
                <CardHeader>
                  <div className="mb-4 p-3 bg-blue-50 w-fit rounded-xl text-[hsl(var(--hero-new-teal))]">
                    <Droplets size={28} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Dry Mouth Symptoms</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    A lack of adequate saliva (xerostomia), causing a sticky feeling and rapid overgrowth of odor-producing microbes.
                  </p>
                  <Link to="/bad-breath/symptoms/dry-mouth-symptoms/" className="text-[hsl(var(--hero-new-teal))] flex items-center gap-2 font-semibold hover:underline mt-auto">
                    Learn more <ArrowRight size={18} />
                  </Link>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full hover:shadow-md transition-shadow duration-200">
                <CardHeader>
                  <div className="mb-4 p-3 bg-blue-50 w-fit rounded-xl text-[hsl(var(--hero-new-teal))]">
                    <Zap size={28} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Metallic Taste</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    A distinct metallic or blood-like taste, usually acting as a strong indicator of bleeding gums, gingivitis, or certain medications.
                  </p>
                  <Link to="/bad-breath/symptoms/metallic-taste/" className="text-[hsl(var(--hero-new-teal))] flex items-center gap-2 font-semibold hover:underline mt-auto">
                    Learn more <ArrowRight size={18} />
                  </Link>
                </CardContent>
              </Card>
           </div>
        </div>
      </section>

      {/* Middle CTA Section */}
      <section className="article-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center bg-white rounded-2xl border-2 border-[hsl(var(--hero-new-teal))] p-8 md:p-12 shadow-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Identify Your Symptoms?</h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Our clinically-designed assessment helps match your unique symptoms to their probable root causes so you can find the right solution.
          </p>
          <Link to="/tools/bad-breath-cause-checker" className="btn-primary inline-flex items-center text-lg px-8 py-4">
            Take Our Bad Breath Assessment <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="article-section max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Explore Related Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link to="/bad-breath/" className="p-6 bg-white border border-[hsl(var(--color-border-subtle))] rounded-xl hover:border-[hsl(var(--hero-new-teal))] hover:shadow-md transition-all group">
            <h3 className="text-xl font-bold mb-2 text-[hsl(var(--hero-new-teal))] group-hover:underline">Bad Breath Hub</h3>
            <p className="text-base text-[hsl(var(--color-text-secondary))]">Return to our comprehensive halitosis guide.</p>
          </Link>
          <Link to="/bad-breath/causes/" className="p-6 bg-white border border-[hsl(var(--color-border-subtle))] rounded-xl hover:border-[hsl(var(--hero-new-teal))] hover:shadow-md transition-all group">
            <h3 className="text-xl font-bold mb-2 text-[hsl(var(--hero-new-teal))] group-hover:underline">Understand the Causes</h3>
            <p className="text-base text-[hsl(var(--color-text-secondary))]">Learn exactly what triggers these symptoms.</p>
          </Link>
          <Link to="/gum-health" className="p-6 bg-white border border-[hsl(var(--color-border-subtle))] rounded-xl hover:border-[hsl(var(--hero-new-teal))] hover:shadow-md transition-all group">
            <h3 className="text-xl font-bold mb-2 text-[hsl(var(--hero-new-teal))] group-hover:underline">Gum Health Hub</h3>
            <p className="text-base text-[hsl(var(--color-text-secondary))]">Discover the connection between gums and breath odor.</p>
          </Link>
          <Link to="/oral-care-routine" className="p-6 bg-white border border-[hsl(var(--color-border-subtle))] rounded-xl hover:border-[hsl(var(--hero-new-teal))] hover:shadow-md transition-all group">
            <h3 className="text-xl font-bold mb-2 text-[hsl(var(--hero-new-teal))] group-hover:underline">Oral Care Routines</h3>
            <p className="text-base text-[hsl(var(--color-text-secondary))]">Find the daily habits needed to resolve your symptoms.</p>
          </Link>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 text-center bg-gray-50 border-t border-[hsl(var(--color-border-subtle))]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get Your Personalized Bad Breath Assessment</h2>
          <p className="text-lg md:text-xl text-[hsl(var(--color-text-secondary))] mb-10 max-w-2xl mx-auto leading-relaxed">
            Don't let bad breath symptoms control your confidence. Use our AI-powered tool to find actionable, science-backed answers tailored to your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/tools/bad-breath-cause-checker" className="btn-primary w-full sm:w-auto px-8 py-4 text-lg">
              Start Your Assessment Now
            </Link>
            <Link to="/bad-breath/" className="btn-secondary w-full sm:w-auto px-8 py-4 text-lg bg-white">
              Back to Hub Overview
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BadBreathSymptomsHubPage;