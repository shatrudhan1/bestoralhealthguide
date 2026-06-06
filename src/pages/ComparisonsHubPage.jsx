import React from 'react';
import HubLandingPageLayout from '@/components/HubLandingPageLayout';

const ComparisonsHubPage = () => {
  return (
    <HubLandingPageLayout
      metaTitle="Comparisons Hub | Oral Care Products Compared"
      metaDescription="In-depth comparisons of dental products, treatments, and conditions."
      hero={{
        breadcrumb: [{ label: 'Comparisons Hub', href: '/comparisons' }],
        icon: '⚖️',
        headline: 'Product Comparisons & Reviews',
        subheadline: 'We pit top oral care products and treatments against each other so you can make informed decisions.',
        trustSignal: 'Unbiased reviews • Science-based criteria',
        cta: {
          text: 'Browse All Comparisons',
          link: '#categories'
        }
      }}
      clusters={{
        heading: 'Browse by Category',
        subheading: 'Find comparisons relevant to your specific oral health needs.',
        cards: [
          {
            icon: '🪥',
            title: 'Oral Care Products',
            description: 'Electric vs Manual brushes, floss types, and water flossers.',
            link: '/comparisons/products'
          },
          {
            icon: '👃',
            title: 'Bad Breath Solutions',
            description: 'Mouthwashes vs Probiotics, tongue scrapers compared.',
            link: '/bad-breath/comparisons'
          },
          {
            icon: '🩸',
            title: 'Gum Health Solutions',
            description: 'Treatments and products specifically for gingivitis.',
            link: '/gum-health/comparisons'
          },
          {
            icon: '⚡',
            title: 'Sensitivity Solutions',
            description: 'Comparing desensitizing toothpastes and treatments.',
            link: '/tooth-sensitivity/comparisons'
          },
          {
            icon: '💊',
            title: 'Oral Probiotics',
            description: 'Comparing top supplement brands for oral microbiome health.',
            link: '/comparisons/probiotics'
          }
        ]
      }}
      guides={{
        heading: 'Featured Comparisons',
        subheading: 'Our most read product breakdowns.',
        cards: [
          { title: 'ProDentim vs ProvaDent vs DentaSmile Pro', link: '/blog/prodentim-vs-provadent-vs-dentasmile-pro' },
          { title: 'Oral Probiotics vs Antibacterial Mouthwash', link: '/blog/oral-probiotics-vs-mouthwash' },
          { title: 'Gingivitis vs Periodontitis: Key Differences', link: '/blog/gingivitis-vs-periodontitis' },
          { title: 'Plaque vs Tartar: What You Need to Know', link: '/blog/plaque-vs-tartar' }
        ]
      }}
      tools={{
        heading: 'Personalized Recommendations',
        subheading: 'Take an assessment to see which product category fits your needs.',
        cards: [
          {
            title: 'Oral Health Score Analyzer',
            description: 'Get a full breakdown of your routine and tailored product suggestions.',
            link: '/tools/oral-health-score-analyzer',
            ctaText: 'Start Assessment'
          }
        ]
      }}
      faqs={{
        heading: 'About Our Comparisons',
        subheading: 'How we review and compare oral health solutions.',
        items: [
          {
            question: 'How do you compare products?',
            answer: 'We analyze clinical studies, ingredient lists, user reviews, and expert dental opinions to evaluate products objectively against specific criteria.'
          },
          {
            question: 'What criteria do you use for comparisons?',
            answer: 'Criteria vary by category but generally include effectiveness, safety, ease of use, cost-value ratio, and clinical evidence backing the claims.'
          },
          {
            question: 'Are your comparisons unbiased?',
            answer: 'Yes. While we may earn affiliate commissions on some products, our reviews are based on objective analysis and we frequently highlight the flaws in popular products.'
          },
          {
            question: 'How often are comparisons updated?',
            answer: 'We review our major comparison guides quarterly or whenever significant new products or clinical data enter the market.'
          },
          {
            question: 'Can I suggest a product for comparison?',
            answer: 'Absolutely. We welcome suggestions from our community. You can reach out to us via our contact page.'
          }
        ]
      }}
    />
  );
};

export default ComparisonsHubPage;