import React from 'react';
import HubLandingPageLayout from '@/components/HubLandingPageLayout';

const ToothSensitivityHubPage = () => {
  return (
    <HubLandingPageLayout
      metaTitle="Tooth Sensitivity Hub | Causes & Relief"
      metaDescription="Understand the root causes of tooth sensitivity and find effective relief strategies."
      hero={{
        breadcrumb: [{ label: 'Tooth Sensitivity Hub', href: '/tooth-sensitivity' }],
        icon: '🦷❄️',
        headline: 'Tooth Sensitivity Relief & Prevention',
        subheadline: 'Discover why your teeth hurt when exposed to hot, cold, or sweet stimuli, and learn how to stop the pain.',
        trustSignal: 'Trusted by 50,000+ users • Expert insights',
        cta: {
          text: 'Take Sensitivity Test',
          link: '/tools/tooth-sensitivity-test'
        }
      }}
      clusters={{
        heading: 'Explore Sensitivity Topics',
        subheading: 'Find targeted solutions for your specific sensitivity triggers.',
        cards: [
          {
            icon: '🔍',
            title: 'Sensitivity Causes',
            description: 'Understand the structural and lifestyle factors that expose sensitive dentin.',
            link: '/tooth-sensitivity/causes'
          },
          {
            icon: '⚡',
            title: 'Relief Methods',
            description: 'Immediate actions and long-term treatments to stop sensitivity pain.',
            link: '/tooth-sensitivity/treatments'
          },
          {
            icon: '🛡️',
            title: 'Prevention Strategies',
            description: 'Habits to adopt and avoid to keep enamel strong and gums healthy.',
            link: '/tooth-sensitivity/prevention'
          },
          {
            icon: '⚖️',
            title: 'Product Comparisons',
            description: 'Reviews of desensitizing toothpastes and protective treatments.',
            link: '/tooth-sensitivity/comparisons'
          }
        ]
      }}
      tools={{
        heading: 'Diagnostic Tools',
        subheading: 'Pinpoint your sensitivity triggers.',
        cards: [
          {
            title: 'Tooth Sensitivity Test',
            description: 'Discover why your teeth hurt when exposed to hot, cold, or sweet stimuli.',
            link: '/tools/tooth-sensitivity-test',
            ctaText: 'Start Test'
          }
        ]
      }}
      guides={{
        heading: 'Featured Guides',
        subheading: 'Our most helpful articles on managing sensitive teeth.',
        cards: [
          { title: 'Best Toothpaste for Sensitive Teeth', link: '/blog/best-toothpaste-for-sensitive-teeth' },
          { title: 'Teeth Sensitive All of a Sudden? Here\'s Why', link: '/blog/teeth-sensitive-all-of-a-sudden' },
          { title: 'How to Stop Tooth Sensitivity Pain Immediately', link: '/blog/stop-tooth-sensitivity-pain-immediately' },
          { title: 'Early Signs of Receding Gums', link: '/blog/early-receding-gums' }
        ]
      }}
      faqs={{
        heading: 'Common Questions',
        subheading: 'Quick answers about sensitive teeth.',
        viewAllLink: '/tooth-sensitivity/faq',
        viewAllText: 'View all sensitivity FAQs',
        items: [
          {
            question: 'What causes tooth sensitivity?',
            answer: 'Sensitivity occurs when the protective enamel wears away or gums recede, exposing the underlying dentin. This dentin contains microscopic tubules leading to the tooth nerve.'
          },
          {
            question: 'How can I relieve tooth sensitivity?',
            answer: 'Use a desensitizing toothpaste, use a soft-bristled brush, avoid highly acidic foods, and practice good oral hygiene to prevent gum recession.'
          },
          {
            question: 'Is tooth sensitivity permanent?',
            answer: 'It depends on the cause. Sensitivity from a recent whitening treatment usually fades. Sensitivity from worn enamel or receded gums requires ongoing management or dental procedures.'
          },
          {
            question: 'What\'s the best toothpaste for sensitive teeth?',
            answer: 'Toothpastes containing potassium nitrate or stannous fluoride are highly effective. They work by either soothing the nerve or blocking the exposed dentin tubules.'
          },
          {
            question: 'When should I see a dentist for sensitivity?',
            answer: 'If sensitivity is severe, lasts longer than a few weeks, or is localized to a single tooth, see a dentist. It could indicate a cavity, cracked tooth, or exposed root.'
          }
        ]
      }}
    />
  );
};

export default ToothSensitivityHubPage;