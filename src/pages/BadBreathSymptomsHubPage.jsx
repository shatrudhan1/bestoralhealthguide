import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  ArrowRight,
  ShieldCheck,
  Sun,
  Wind,
  Frown,
  Droplets,
  Zap,
} from 'lucide-react';

// Reusable CTA component
const CTALink = ({ to, children, variant = 'primary' }) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold transition';
  const variants = {
    primary: 'bg-sky-600 text-white hover:bg-sky-700',
    secondary: 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50',
  };
  return (
    <Link to={to} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </Link>
  );
};

const BadBreathSymptomsHubPage = () => {
  const symptomCards = [
    {
      icon: <Sun size={28} aria-hidden="true" />,
      title: 'Morning Breath',
      description:
        'A common odour on waking, often linked to reduced saliva flow and overnight bacterial buildup.',
      href: '/bad-breath/symptoms/morning-breath/',
    },
    {
      icon: <Wind size={28} aria-hidden="true" />,
      title: 'White Tongue',
      description:
        'A visible white or yellow coating on the tongue that can indicate trapped bacteria and dead cells.',
      href: '/bad-breath/symptoms/white-tongue/',
    },
    {
      icon: <Frown size={28} aria-hidden="true" />,
      title: 'Bad Taste in Mouth',
      description:
        'A persistent sour, bitter, or foul taste that may be linked to reflux, gum issues, or oral infection.',
      href: '/bad-breath/symptoms/bad-taste-in-mouth/',
    },
    {
      icon: <Droplets size={28} aria-hidden="true" />,
      title: 'Dry Mouth Symptoms',
      description:
        'A sticky, dry feeling caused by low saliva, which allows odour-causing microbes to grow faster.',
      href: '/bad-breath/symptoms/dry-mouth-symptoms/',
    },
    {
      icon: <Zap size={28} aria-hidden="true" />,
      title: 'Metallic Taste',
      description:
        'A metallic or blood-like taste that can be a sign of bleeding gums, gingivitis, or certain medications.',
      href: '/bad-breath/symptoms/metallic-taste/',
    },
  ];

  const relatedLinks = [
    {
      title: 'Bad Breath Hub',
      description: 'Return to the full halitosis overview.',
      href: '/bad-breath/',
    },
    {
      title: 'Understand the Causes',
      description: 'See what may be triggering your symptoms.',
      href: '/bad-breath/causes/',
    },
    {
      title: 'Gum Health Hub',
      description: 'Learn how gums and breath odour are connected.',
      href: '/gum-health/',
    },
    {
      title: 'Oral Care Routines',
      description: 'Build habits that help reduce symptoms.',
      href: '/oral-care-routine/',
    },
  ];

  const ASSESSMENT_URL = '/tools/bad-breath-cause-checker';

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Bad Breath Symptoms: Complete Guide to Identifying Oral Odour Signs</title>
        <meta
          name="description"
          content="Explore common bad breath symptoms, from morning breath to white tongue. Learn what different symptoms mean and when to seek help."
        />
      </Helmet>

      <main>
        <section className="border-b border-gray-200 bg-gradient-to-b from-sky-50 to-white">
          <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-4 text-sm font-medium text-slate-600">
              /bad-breath / symptoms
            </div>

            <div className="mb-4 text-5xl" aria-hidden="true">
              <span role="img" aria-label="face with medical mask">😷</span>
            </div>

            <h1 className="max-w-4xl text-center text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Bad Breath Symptoms Guide
            </h1>

            <p className="mt-6 max-w-2xl text-center text-lg leading-8 text-slate-600">
              Explore the most common signs and symptoms of bad breath. Understanding your specific oral symptoms is the first crucial step toward identifying the underlying cause and finding the right solution.
            </p>

            <div className="mt-8">
              <CTALink to={ASSESSMENT_URL}>
                Take Our Assessment
                <ArrowRight size={18} />
              </CTALink>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-slate-600">
              <ShieldCheck size={18} className="text-sky-600" />
              <span>Medically reviewed accuracy • 50,000+ assessments taken</span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900">
            Understanding Bad Breath Symptoms
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-slate-700">
            <p>
              Halitosis rarely occurs in isolation. It is typically accompanied by a cluster of distinct oral symptoms that provide clues about the root cause. Whether you are experiencing an unpleasant taste, visible changes to your tongue, or a dry feeling, these symptoms can help point you in the right direction.
            </p>
            <p>
              Symptoms can vary between people. For example, a white coating on the tongue can suggest bacterial buildup, while a persistent metallic taste may be linked to bleeding gums or periodontal concerns. Correctly identifying these signs helps you choose a more targeted solution.
            </p>
            <p>
              Early identification is important. Left unchecked, the causes behind bad breath can progress into gum disease, tooth decay, and infections that may require dental treatment. Tracking exactly what you feel and when it happens can make the next step much easier.
            </p>
          </div>
        </section>

        <section className="border-y border-gray-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {symptomCards.map((item) => (
                <article
                  key={item.href} // ✅ Unique key use किया
                  className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="mb-4 w-fit rounded-xl bg-sky-50 p-3 text-sky-600">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>

                  <p className="mt-3 flex-1 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <Link
                    to={item.href}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-sky-600 hover:underline"
                  >
                    Learn more <ArrowRight size={18} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border-2 border-sky-600 bg-white p-8 text-center shadow-sm md:p-12">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Ready to Identify Your Symptoms?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-700">
              Our assessment helps match your symptoms to probable root causes so you can find the right solution faster.
            </p>

            <div className="mt-8">
              <CTALink to={ASSESSMENT_URL}>
                Take Our Bad Breath Assessment
                <ArrowRight size={18} />
              </CTALink>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900">
            Explore Related Topics
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {relatedLinks.map((item) => (
              <Link
                key={item.href} // ✅ Unique key
                to={item.href}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-sky-500 hover:shadow-md"
              >
                <h3 className="text-xl font-bold text-sky-600">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-t border-gray-200 bg-slate-50 py-20 text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Get Your Personalised Bad Breath Assessment
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Don't let bad breath symptoms control your confidence. Use our tool to find science-backed answers tailored to your situation.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTALink to={ASSESSMENT_URL}>
                Start Your Assessment Now
              </CTALink>
              <CTALink to="/bad-breath/" variant="secondary">
                Back to Hub Overview
              </CTALink>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BadBreathSymptomsHubPage;
