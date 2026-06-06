import React from 'react';
import HubLandingPageLayout from '@/components/HubLandingPageLayout';

const OralCareRoutineHubPage = () => {
  return (
    <HubLandingPageLayout
      metaTitle="Oral Care Routine Hub | Daily Dental Hygiene"
      metaDescription="Optimize your daily dental hygiene with evidence-based routines and best practices."
      hero={{
        breadcrumb: [{ label: 'Oral Care Routine Hub', href: '/oral-care-routine' }],
        icon: '🪥',
        headline: 'Daily Oral Care Routine Guide',
        subheadline: 'Master the habits, techniques, and products needed to maintain a healthy, bright smile for life.',
        trustSignal: 'Trusted by 50,000+ users • Dentist-approved routines',
        cta: {
          text: 'Get Your Oral Health Score',
          link: '/tools/oral-health-score-analyzer'
        }
      }}
      clusters={{
        heading: 'Explore Routine Topics',
        subheading: 'Build the perfect daily habit for your teeth and gums.',
        cards: [
          {
            icon: '⏰',
            title: 'Daily Routine',
            description: 'Step-by-step guides for morning and evening oral care.',
            link: '/oral-care-routine/daily-routine'
          },
          {
            icon: '🛍️',
            title: 'Product Guide',
            description: 'How to choose the right brush, paste, floss, and rinse.',
            link: '/oral-care-routine/product-guide'
          },
          {
            icon: '🥗',
            title: 'Healthy Habits',
            description: 'Dietary choices and lifestyle habits that support oral health.',
            link: '/oral-care-routine/healthy-habits'
          },
          {
            icon: '📋',
            title: 'Techniques',
            description: 'Proper methods for brushing, flossing, and tongue scraping.',
            link: '/oral-care-routine/techniques'
          }
        ]
      }}
      tools={{
        heading: 'Routine Assessment',
        subheading: 'See how your current habits stack up.',
        cards: [
          {
            title: 'Oral Health Score Analyzer',
            description: 'Get a comprehensive analysis of your overall oral health and personalized recommendations.',
            link: '/tools/oral-health-score-analyzer',
            ctaText: 'Analyze Routine'
          }
        ]
      }}
      guides={{
        heading: 'Featured Guides',
        subheading: 'Essential reading for perfecting your daily routine.',
        cards: [
          { title: 'The Complete Oral Hygiene Guide', link: '/blog/oral-hygiene-complete-guide' },
          { title: 'Best Brushing Routine for Healthy Gums', link: '/blog/best-brushing-routine-healthy-gums' },
          { title: 'Proper Flossing Techniques', link: '/blog/proper-flossing-healthy-gums' },
          { title: 'Dental Care Basics Guide', link: '/blog/dental-care-basics-guide' }
        ]
      }}
      faqs={{
        heading: 'Common Questions',
        subheading: 'Quick answers about daily oral care.',
        viewAllLink: '/oral-care-routine/faq',
        viewAllText: 'View all routine FAQs',
        items: [
          {
            question: 'How often should I brush my teeth?',
            answer: 'Dentists recommend brushing twice a day, ideally morning and night, for two full minutes each time.'
          },
          {
            question: 'What\'s the correct brushing technique?',
            answer: 'Use a soft-bristled brush. Hold it at a 45-degree angle to the gums and use short, gentle, back-and-forth or circular strokes. Don\'t forget the inner surfaces and chewing surfaces.'
          },
          {
            question: 'Do I really need to floss?',
            answer: 'Yes. Flossing removes plaque and food particles from between teeth and under the gumline where a toothbrush simply cannot reach.'
          },
          {
            question: 'Should I floss before or after brushing?',
            answer: 'Recent studies suggest flossing before brushing is more effective. It loosens debris, which the toothbrush then sweeps away, allowing fluoride from toothpaste to better penetrate between teeth.'
          },
          {
            question: 'How often should I replace my toothbrush?',
            answer: 'Replace your toothbrush or electric brush head every 3 to 4 months, or sooner if the bristles become frayed or if you\'ve been sick.'
          }
        ]
      }}
    />
  );
};

export default OralCareRoutineHubPage;