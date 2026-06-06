import React from 'react';
import HubLandingPageLayout from '@/components/HubLandingPageLayout';

const FAQHubPage = () => {
  return (
    <HubLandingPageLayout
      metaTitle="Oral Health FAQ Hub | Expert Answers"
      metaDescription="Answers to the most common oral health questions, backed by dental professionals."
      hero={{
        breadcrumb: [{ label: 'FAQ Hub', href: '/faq' }],
        icon: '❓',
        headline: 'Oral Health FAQ',
        subheadline: 'Find clear, evidence-based answers to your most pressing dental and oral health questions.',
        trustSignal: 'Expert-reviewed • Science-backed answers',
        cta: {
          text: 'Browse All Categories',
          link: '#categories'
        }
      }}
      clusters={{
        heading: 'Browse by Topic',
        subheading: 'Select a category to find specific answers.',
        cards: [
          {
            icon: '🦷',
            title: 'General Oral Health',
            description: 'Basics of maintaining a healthy mouth.',
            link: '/faq/general-health'
          },
          {
            icon: '👃',
            title: 'Bad Breath',
            description: 'Questions about halitosis causes and cures.',
            link: '/bad-breath/faq'
          },
          {
            icon: '🩸',
            title: 'Gum Health',
            description: 'Answers regarding gingivitis and bleeding gums.',
            link: '/gum-health/faq'
          },
          {
            icon: '⚡',
            title: 'Tooth Sensitivity',
            description: 'Why teeth hurt and how to stop it.',
            link: '/tooth-sensitivity/faq'
          },
          {
            icon: '🪥',
            title: 'Oral Care Routine',
            description: 'Questions about brushing, flossing, and habits.',
            link: '/oral-care-routine/faq'
          },
          {
            icon: '⭐',
            title: 'Products & Recommendations',
            description: 'Which tools and pastes actually work.',
            link: '/best-products/faq'
          }
        ]
      }}
      faqs={{
        heading: 'Most Popular Questions',
        subheading: 'The top questions asked by our community.',
        items: [
          {
            question: 'What causes bad breath?',
            answer: 'Most bad breath is caused by poor oral hygiene, food choices, dry mouth, or tobacco use. Bacteria break down food particles and produce sulfur compounds. Less commonly, it\'s linked to medical conditions.'
          },
          {
            question: 'What is gum disease?',
            answer: 'Gum disease is an infection of the tissues supporting the teeth. It starts as gingivitis (reversible inflammation) and can progress to periodontitis (bone loss).'
          },
          {
            question: 'How can I relieve tooth sensitivity?',
            answer: 'Using a desensitizing toothpaste containing potassium nitrate is the first step. Avoid acidic foods, use a soft brush, and see a dentist if pain persists to rule out cavities.'
          },
          {
            question: 'How often should I brush my teeth?',
            answer: 'Twice daily for two minutes each time, using a fluoride toothpaste and a soft-bristled brush.'
          },
          {
            question: 'Is flossing really necessary?',
            answer: 'Absolutely. Flossing removes plaque from about 40% of the tooth surface that a brush cannot reach, preventing cavities between teeth and gum disease.'
          },
          {
            question: 'What\'s the best toothpaste?',
            answer: 'The "best" toothpaste depends on your needs (sensitivity, whitening, gum health), but always choose one containing fluoride to protect against cavities.'
          },
          {
            question: 'When should I see a dentist?',
            answer: 'Visit a dentist every 6 months for regular checkups and cleanings, or immediately if you experience pain, persistent bleeding, swelling, or changes in your bite.'
          },
          {
            question: 'Can gum disease be reversed?',
            answer: 'Early gum disease (gingivitis) is entirely reversible with good oral hygiene and professional cleanings. Advanced gum disease (periodontitis) cannot be reversed, only managed.'
          },
          {
            question: 'What causes tooth sensitivity?',
            answer: 'Worn enamel, receding gums exposing the tooth root, tooth decay, cracked teeth, or recent dental work can all trigger sensitivity to hot, cold, or sweet stimuli.'
          },
          {
            question: 'How can I improve my overall oral health?',
            answer: 'Brush twice daily, floss once daily, limit sugary snacks, stay hydrated, avoid tobacco, and maintain regular dental visits.'
          }
        ]
      }}
      tools={{
        heading: 'Assess Your Health',
        subheading: 'Use our AI-powered tools to get personalized answers.',
        cards: [
          {
            title: 'Bad Breath Cause Checker',
            description: 'Find out what\'s causing your halitosis.',
            link: '/tools/bad-breath-cause-checker'
          },
          {
            title: 'Gum Disease Risk Calculator',
            description: 'Check your risk for gingivitis.',
            link: '/tools/gum-disease-risk-calculator'
          }
        ]
      }}
    />
  );
};

export default FAQHubPage;