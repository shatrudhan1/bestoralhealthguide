import React from 'react';
import HubLandingPageLayout from '@/components/HubLandingPageLayout';

const BestProductsHubPage = () => {
  return (
    <HubLandingPageLayout
      metaTitle="Best Oral Care Products | Expert Recommendations"
      metaDescription="Curated lists of top-rated oral care products reviewed by our experts."
      hero={{
        breadcrumb: [{ label: 'Best Products Hub', href: '/best-products' }],
        icon: '⭐',
        headline: 'Best Oral Care Products & Recommendations',
        subheadline: 'Discover expertly curated selections of toothpastes, brushes, and supplements to elevate your oral hygiene routine.',
        trustSignal: 'Curated by experts • Evidence-based selections',
        cta: {
          text: 'Browse All Categories',
          link: '#categories'
        }
      }}
      clusters={{
        heading: 'Shop by Category',
        subheading: 'Find the best tools for your specific needs.',
        cards: [
          {
            icon: '🪥',
            title: 'Daily Care Tools',
            description: 'Top-rated toothbrushes, floss, and water flossers.',
            link: '/best-products/tools'
          },
          {
            icon: '👃',
            title: 'Bad Breath Solutions',
            description: 'Mouthwashes, scrapers, and lozenges for fresh breath.',
            link: '/best-products/bad-breath'
          },
          {
            icon: '🩸',
            title: 'Gum Health Products',
            description: 'Specialty pastes and rinses to fight gingivitis.',
            link: '/best-products/gum-health'
          },
          {
            icon: '⚡',
            title: 'Sensitivity Relief',
            description: 'The most effective desensitizing toothpastes.',
            link: '/best-products/sensitivity'
          },
          {
            icon: '💊',
            title: 'Supplements & Probiotics',
            description: 'Vitamins and oral microbiome support.',
            link: '/best-products/supplements'
          }
        ]
      }}
      guides={{
        heading: 'Featured Product Guides',
        subheading: 'Our most popular recommendation lists.',
        cards: [
          { title: 'Best Oral Probiotics of 2026', link: '/blog/best-oral-probiotics' },
          { title: 'Best Mouthwash for Gum Disease', link: '/blog/best-mouthwash-gum-disease' },
          { title: 'Best Toothpaste for Sensitive Teeth', link: '/blog/best-toothpaste-for-sensitive-teeth' },
          { title: 'Best Supplements for Bleeding Gums', link: '/blog/best-supplement-for-bleeding-gums' }
        ]
      }}
      tools={{
        heading: 'Find Your Perfect Product',
        subheading: 'Use our tools to identify what your routine is missing.',
        cards: [
          {
            title: 'Oral Health Score Analyzer',
            description: 'Identify gaps in your routine and get tailored product recommendations.',
            link: '/tools/oral-health-score-analyzer',
            ctaText: 'Analyze Routine'
          }
        ]
      }}
      faqs={{
        heading: 'About Our Recommendations',
        subheading: 'How we choose the "Best" products.',
        items: [
          {
            question: 'How do you select products to recommend?',
            answer: 'We look for clinical efficacy, high-quality ingredients, positive user consensus, and value. Products must solve a specific problem reliably.'
          },
          {
            question: 'Are your recommendations unbiased?',
            answer: 'Yes. Our primary goal is to provide accurate health information. We do not accept payment to artificially boost a product\'s rating.'
          },
          {
            question: 'Do you get commissions from product sales?',
            answer: 'We may earn a small affiliate commission if you purchase through our links, at no extra cost to you. This helps fund the site and our free tools.'
          },
          {
            question: 'How often are recommendations updated?',
            answer: 'We review the market continuously and update our "Best of" guides at least twice a year to reflect new releases and reformulations.'
          },
          {
            question: 'Can I suggest a product for review?',
            answer: 'Yes! We love hearing about products that work well for our readers. Contact us with your suggestions.'
          }
        ]
      }}
    />
  );
};

export default BestProductsHubPage;