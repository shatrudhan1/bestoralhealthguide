import React from 'react';
import HubLandingPageLayout from '@/components/HubLandingPageLayout';

const GumHealthHubPage = () => {
  return (
    <HubLandingPageLayout
      metaTitle="Gum Health Hub | Disease Prevention & Care"
      metaDescription="Everything you need to know about preventing and managing gum disease, gingivitis, and periodontitis."
      hero={{
        breadcrumb: [{ label: 'Gum Health Hub', href: '/gum-health' }],
        icon: '🦷',
        headline: 'Gum Health & Disease Prevention',
        subheadline: 'Learn how to protect your gums, reverse early signs of gingivitis, and maintain a strong foundation for your teeth.',
        trustSignal: 'Trusted by 50,000+ users • Evidence-based guidance',
        cta: {
          text: 'Take Gum Disease Assessment',
          link: '/tools/gum-disease-risk-calculator'
        }
      }}
      clusters={{
        heading: 'Explore Gum Health Topics',
        subheading: 'Find targeted information for your specific gum health concerns.',
        cards: [
          {
            icon: '🦠',
            title: 'Gum Disease Types',
            description: 'Learn the differences between gingivitis and periodontitis, and their stages.',
            link: '/gum-health/gum-disease'
          },
          {
            icon: '🩸',
            title: 'Gum Symptoms',
            description: 'Understand what bleeding, swollen, or receding gums mean for your health.',
            link: '/gum-health/bleeding-gums'
          },
          {
            icon: '🛡️',
            title: 'Gum Care Strategies',
            description: 'Daily routines and habits proven to strengthen and protect gum tissue.',
            link: '/gum-health/prevention'
          },
          {
            icon: '🏥',
            title: 'Treatment Options',
            description: 'Professional procedures and at-home remedies for restoring gum health.',
            link: '/gum-health/treatments'
          }
        ]
      }}
      tools={{
        heading: 'Risk Assessment Tools',
        subheading: 'Evaluate your current gum health status.',
        cards: [
          {
            title: 'Gum Disease Risk Calculator',
            description: 'Assess your risk for gingivitis and periodontitis before they become severe issues.',
            link: '/tools/gum-disease-risk-calculator',
            ctaText: 'Calculate Risk'
          }
        ]
      }}
      guides={{
        heading: 'Featured Guides',
        subheading: 'Essential reading for healthy gums.',
        cards: [
          { title: 'The Complete Guide to Gum Disease', link: '/blog/gum-disease-complete-guide' },
          { title: 'Bleeding Gums: Causes & Treatments', link: '/blog/bleeding-gums-causes-treatment' },
          { title: 'Can Gum Disease Be Healed?', link: '/blog/can-gum-disease-be-healed' },
          { title: 'Gingivitis vs. Periodontitis Explained', link: '/blog/gingivitis-vs-periodontitis' }
        ]
      }}
      faqs={{
        heading: 'Common Questions',
        subheading: 'Quick answers about maintaining healthy gums.',
        viewAllLink: '/gum-health/faq',
        viewAllText: 'View all gum health FAQs',
        items: [
          {
            question: 'What is gum disease?',
            answer: 'Gum disease (periodontal disease) is an infection of the tissues that hold your teeth in place. It\'s typically caused by poor brushing and flossing habits that allow plaque to build up and harden.'
          },
          {
            question: 'What causes bleeding gums?',
            answer: 'The most common cause of bleeding gums is plaque buildup at the gumline. This leads to gingivitis. Other causes include brushing too hard, vitamin deficiencies, or hormonal changes.'
          },
          {
            question: 'Can gum disease be reversed?',
            answer: 'The earliest stage of gum disease (gingivitis) can usually be reversed with professional cleaning and excellent daily oral care. Advanced stages (periodontitis) cannot be fully reversed, but can be managed.'
          },
          {
            question: 'What\'s the best treatment for gum disease?',
            answer: 'Treatment ranges from non-surgical therapies like scaling and root planing to surgical approaches for advanced cases. Consistent at-home care is mandatory regardless of professional treatment.'
          },
          {
            question: 'How can I prevent gum disease?',
            answer: 'Brush twice daily with a fluoride toothpaste, floss daily to remove plaque from between teeth, use a therapeutic mouthwash, eat a balanced diet, and visit your dentist regularly.'
          }
        ]
      }}
    />
  );
};

export default GumHealthHubPage;