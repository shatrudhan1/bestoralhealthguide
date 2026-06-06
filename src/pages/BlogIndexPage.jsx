import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar, AlertCircle } from 'lucide-react';

const BlogIndexPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogPosts, setBlogPosts] = useState([]);
  
  const v = "20260410-7";

  const postsData = [
    {
      id: 'how-to-remove-plaque-from-teeth-naturally',
      title: "How to Remove Plaque from Teeth Naturally",
      slug: '/blog/how-to-remove-plaque-from-teeth-naturally',
      excerpt: "Learn the most effective, science-backed methods on how to remove plaque from teeth naturally before it hardens into tartar. Step-by-step guide included.",
      date: 'Apr 2, 2026',
      readTime: '12 min read',
      category: 'Oral Health',
      published: true,
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/0e1c127a2f69a89a0ef5522fec01007d.webp',
      imageAlt: 'Plaque Test Results interface showing tooth with colored plaque areas'
    },
    {
      id: 'what-happens-if-you-dont-remove-plaque',
      title: "What Happens If You Don't Remove Plaque? (Shocking Effects + Risk Calculator)",
      slug: '/blog/what-happens-if-you-dont-remove-plaque',
      excerpt: "Discover exactly what happens if you don't remove plaque from your teeth. A complete timeline of tartar formation, gum disease, and tooth loss.",
      date: 'Apr 2, 2026',
      readTime: '15 min read',
      category: 'Oral Health',
      published: true,
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/8926312188446cd8b9f61e41f6dc1ca4.webp',
      imageAlt: 'Effects of plaque buildup illustration showing tooth with yellow plaque and inflamed red gums'
    },
    {
      id: 'do-i-have-plaque-on-my-teeth',
      title: "Do I Have Plaque on My Teeth? 5 Signs You Can't Ignore",
      slug: '/blog/do-i-have-plaque-on-my-teeth',
      excerpt: "Wondering 'do I have plaque on my teeth?' Discover the common signs, what plaque looks like, and how to prevent it from turning into tartar. Plus, take our free plaque risk assessment.",
      date: 'Apr 1, 2026',
      readTime: '8 min read',
      category: 'Oral Health',
      published: true,
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/30e7fc313f5e5ef86678e1c27cf407db.webp',
      imageAlt: 'Signs of plaque on teeth illustration showing yellow buildup, bad breath, and gum irritation'
    },
    {
      id: 'best-toothpaste-for-sensitive-teeth',
      title: 'Best Toothpaste for Sensitive Teeth: Top 5 Dentist-Recommended Brands',
      slug: '/blog/best-toothpaste-for-sensitive-teeth',
      excerpt: 'Discover the best toothpaste for sensitive teeth. Expert reviews of Sensodyne, Crest, and Colgate with active ingredients that work in 3-7 days.',
      date: 'Apr 1, 2026',
      readTime: '12 min read',
      category: 'Tooth Sensitivity',
      published: true,
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/619d747410a19014b5e79783df974e34.webp',
      imageAlt: 'Toothpaste for Sensitive Teeth comparison showing 3 toothpaste tubes labeled Regular, Sensitive with shield icon, and Extra Sensitive with SOOTHING text'
    },
    {
      id: 'stop-tooth-sensitivity-pain-immediately',
      title: 'How to Stop Tooth Sensitivity Pain Immediately: Fast Relief',
      slug: '/blog/stop-tooth-sensitivity-pain-immediately',
      excerpt: 'Stop tooth sensitivity pain instantly with these proven methods. Learn 4 fast remedies, natural solutions, and when to see a dentist for lasting relief.',
      date: 'Mar 31, 2026',
      readTime: '10 min read',
      category: 'Tooth Sensitivity',
      published: true,
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/acf96885d80fc8ae88f55399eee2c1db.webp',
      imageAlt: 'Immediate tooth sensitivity relief infographic showing 4 remedies'
    },
    {
      id: 'teeth-sensitive-all-of-a-sudden',
      title: 'Why Are My Teeth Sensitive All of a Sudden? (Causes + Quick Fix + Free Test)',
      slug: '/blog/teeth-sensitive-all-of-a-sudden',
      excerpt: 'Sudden tooth sensitivity has identifiable causes. Learn what triggers it, quick fixes that work in 3-7 days, and when to see a dentist.',
      date: 'Mar 30, 2026',
      readTime: '12 min read',
      category: 'Tooth Sensitivity',
      published: true,
      featuredImage: "https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/a083f228856b8c3c8061d353921fef90.webp",
      imageAlt: "Tooth sensitivity illustration showing tooth with red pain area triggered by cold drink and ice cube"
    },
    {
      id: 'prevent-gum-disease-naturally',
      title: "How to Prevent Gum Disease Naturally: 7 Expert Steps",
      excerpt: "Learn 7 natural steps to prevent gum disease. Expert-backed prevention methods, warning signs to watch, and a free risk assessment tool.",
      date: "Mar 29, 2026",
      readTime: "12 min read",
      slug: "/blog/prevent-gum-disease-naturally",
      featuredImage: "https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/37fbf1ef69a23ddb238206c8aaad5ecc.webp",
      imageAlt: "Daily routine to prevent gum disease showing essential steps",
      category: "Gum Health",
      published: true
    },
    {
      id: '7-warning-signs-gum-disease',
      title: "7 Warning Signs of Gum Disease You Should Never Ignore",
      excerpt: "Discover the 7 critical warning signs of gum disease, why you can't afford to ignore them, and exactly what to do to protect your smile and health.",
      date: "Mar 28, 2026",
      readTime: "12 min read",
      slug: "/blog/7-warning-signs-gum-disease",
      featuredImage: "https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/efdd839f6b57778c8f95a1574d7ebfc5.jpg",
      imageAlt: "Healthy gums showing ideal oral health with pink firm gums and white clean teeth",
      category: "Gum Health",
      published: true
    },
    {
      id: 'gum-disease-risk-check',
      title: "Am I at Risk of Gum Disease? Check Early Signs & Free Calculator (2026)",
      excerpt: "Check if you're at risk of gum disease. Learn early warning signs and use our free gum disease risk calculator to assess your gum health instantly.",
      date: "Mar 27, 2026",
      readTime: "8 min read",
      slug: "/blog/gum-disease-risk-check",
      featuredImage: "https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/befb47736b9822aaa10b9e2650da3ed8.webp",
      imageAlt: "Comparison of healthy gums vs gum disease symptoms",
      category: "Risk Assessment",
      published: true
    },
    {
      id: 'do-i-have-bad-breath',
      title: "Do I Have Bad Breath? Check Instantly with This Simple Online Tool (2026)",
      excerpt: "Wondering if you have bad breath? Learn the signs and use our free online checker tool to find out instantly. Simple, honest answers inside.",
      date: "Mar 25, 2026",
      readTime: "14 min read",
      slug: "/blog/do-i-have-bad-breath",
      featuredImage: "https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/9259477b71de426d19bcdc56b447e676.png",
      imageAlt: "Woman smiling confidently holding toothbrush and floss with text Fresh Breath Starts Here",
      category: "Testing & Diagnosis",
      published: true
    },
    {
      id: 'bad-breath-test-at-home',
      title: "Bad Breath Test: Find the Real Cause of Your Halitosis at Home (Free Tool)",
      excerpt: "Learn how to test bad breath at home with simple methods. Use our free halitosis checker tool to identify the real cause instantly. Expert tips included.",
      date: "Mar 25, 2026",
      readTime: "12 min read",
      slug: "/blog/bad-breath-test-at-home",
      featuredImage: "https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/4ba9640c4ce9015ad7c679c598706e78.png",
      imageAlt: "Woman with concerned expression checking breath, showing Do I Have Bad Breath text with green odor visualization",
      category: "Testing",
      published: true
    },
    {
      id: 'what-causes-bad-breath',
      title: "What Causes Bad Breath? Try This Free Checker Tool (2026 Guide)",
      excerpt: "Bad breath can be embarrassing, but it's often a sign of an underlying issue. Discover the hidden causes of halitosis and use our free checker tool to find your personalized solution.",
      date: "Mar 25, 2026",
      readTime: "18 min read",
      slug: "/blog/what-causes-bad-breath",
      featuredImage: "https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/76b1b4682b25dfd01d691a09ce5017ef.png",
      imageAlt: "Man checking breath with bacteria visualization showing what causes bad breath",
      category: "Bad Breath Solutions",
      published: true
    },
    {
      id: 'best-mouthwash-for-swollen-gums',
      title: "Best Mouthwash for Swollen Gums and Gingivitis (Dentist Recommended Guide 2026)",
      excerpt: "Discover the best mouthwash for swollen gums and gingivitis. Expert guide with 7 dentist-recommended products, ingredient breakdown, and practical solutions for gum health.",
      date: "Mar 15, 2026",
      readTime: "15 min read",
      slug: "/blog/best-mouthwash-for-swollen-gums",
      featuredImage: "https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/f54745c4682935b6800c0bef49fadec1.png",
      imageAlt: "Man examining swollen gums in bathroom mirror with mouthwash bottle and oral care products",
      category: "Gum Health Guide",
      published: true
    },
    {
      id: 'what-kills-bad-breath-instantly',
      title: "What Kills Bad Breath Instantly? 10 Dentist-Recommended Solutions (2026)",
      excerpt: "Discover what kills bad breath instantly with these 10 dentist-recommended solutions for fresh breath.",
      date: "Mar 14, 2026",
      readTime: "12 min read",
      slug: "/blog/what-kills-bad-breath-instantly",
      featuredImage: "https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/8c77c24a10e8faab8b6428704dbb51a6.png",
      imageAlt: "Man concerned about bad breath with oral care products in bathroom",
      category: "Bad Breath Solutions",
      published: true
    },
    {
      id: 'why-do-my-gums-bleed-when-i-brush',
      title: "Why Do My Gums Bleed When I Brush? 7 Common Causes and Fixes (2026)",
      excerpt: "Discover 7 common causes of bleeding gums when brushing and learn practical solutions to stop gum bleeding and improve your oral health.",
      date: "Mar 13, 2026",
      readTime: "12 min read",
      slug: "/blog/why-do-my-gums-bleed-when-i-brush",
      featuredImage: "https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/8bf8aee3172d921e10050a9ebb8e2aa4.png",
      imageAlt: "Man in bathroom with bleeding gums while brushing teeth",
      category: "Gum Health",
      published: true
    },
    {
      id: 'why-is-my-morning-breath-so-bad',
      title: "Why Is My Morning Breath So Bad? 9 Hidden Causes Dentists Explain (2026)",
      excerpt: "Discover 9 hidden causes of severe morning breath and learn practical solutions from dentists. Understand why your morning breath is so bad and how to fix it.",
      date: "Mar 12, 2026",
      readTime: "8 min read",
      slug: "/blog/why-is-my-morning-breath-so-bad",
      featuredImage: "https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/596a51adf356d62d43874927f2f7ea71.png",
      imageAlt: "Man in bathroom experiencing morning breath with concerned expression",
      category: "Oral Health",
      published: true
    },
    
    { 
      id: 'bad-breath-complete-guide', 
      title: 'The Ultimate Guide to Curing Bad Breath', 
      slug: '/blog/bad-breath-complete-guide', 
      excerpt: 'A massive resource covering every cause and treatment for chronic halitosis.', 
      date: 'Oct 10, 2025', 
      category: 'Guides',
      readTime: '20 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/76b1b4682b25dfd01d691a09ce5017ef.png',
      imageAlt: 'Complete guide to curing bad breath showing breath testing and solutions'
    },
    { 
      id: 'dental-care-basics-guide', 
      title: 'Dental Care Basics: A Beginner\'s Guide', 
      slug: '/blog/dental-care-basics-guide', 
      excerpt: 'Building a strong foundation for lifelong oral health from scratch.', 
      date: 'Sep 25, 2025', 
      category: 'Guides',
      readTime: '18 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/619d747410a19014b5e79783df974e34.webp',
      imageAlt: 'Dental care basics guide showing proper brushing and oral hygiene tools'
    },
    { 
      id: 'gum-disease-complete-guide', 
      title: 'The Complete Guide to Gum Disease', 
      slug: '/blog/gum-disease-complete-guide', 
      excerpt: 'Everything you need to know about periodontal health in one comprehensive pillar guide.', 
      date: 'Oct 15, 2025', 
      category: 'Guides',
      readTime: '25 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/efdd839f6b57778c8f95a1574d7ebfc5.jpg',
      imageAlt: 'Complete guide to gum disease showing healthy vs diseased gums comparison'
    },
    { 
      id: 'oral-hygiene-complete-guide', 
      title: 'The Ultimate Oral Hygiene Masterclass', 
      slug: '/blog/oral-hygiene-complete-guide', 
      excerpt: 'Master the daily habits required for a perfect smile and healthy gums.', 
      date: 'Oct 1, 2025', 
      category: 'Guides',
      readTime: '22 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/37fbf1ef69a23ddb238206c8aaad5ecc.webp',
      imageAlt: 'Oral hygiene masterclass showing complete daily routine steps'
    },
    { 
      id: 'oral-probiotics-complete-guide', 
      title: 'The Complete Guide to Oral Probiotics', 
      slug: '/blog/oral-probiotics-complete-guide', 
      excerpt: 'How beneficial bacteria can completely transform your dental health.', 
      date: 'Oct 5, 2025', 
      category: 'Guides',
      readTime: '16 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/845cfa46035067cd63cb8a6315c91946.png',
      imageAlt: 'Complete guide to oral probiotics showing beneficial bacteria and oral health benefits'
    },

    { 
      id: 'best-oral-probiotics', 
      title: 'Best Oral Probiotics Guide', 
      slug: '/blog/best-oral-probiotics', 
      excerpt: 'Discover the top-rated oral probiotics for healthier gums and fresher breath.', 
      date: 'Feb 28, 2026', 
      category: 'Oral Probiotics',
      readTime: '14 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/845cfa46035067cd63cb8a6315c91946.png',
      imageAlt: 'Best oral probiotics comparison showing top-rated products for gum health'
    },
    { 
      id: 'improve-gum-health', 
      title: 'How to Improve Gum Health', 
      slug: '/blog/improve-gum-health', 
      excerpt: 'Actionable steps to strengthen your gums and reverse early signs of gingivitis.', 
      date: 'Feb 26, 2026', 
      category: 'Gum Health',
      readTime: '10 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/c93f45dec177cfae9b51e0e6973a59f6.png',
      imageAlt: 'Steps to improve gum health showing healthy pink gums and proper care techniques'
    },
    { 
      id: 'dental-supplements-guide', 
      title: 'The Ultimate Dental Supplements Guide', 
      slug: '/blog/dental-supplements-guide', 
      excerpt: 'Which vitamins and minerals actually help your teeth and gums? Find out here.', 
      date: 'Feb 25, 2026', 
      category: 'Supplements',
      readTime: '13 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/51faa91dcd75cedf4c6a2d504ae0e2f9.png',
      imageAlt: 'Dental supplements guide showing vitamins and minerals for oral health'
    },
    { 
      id: 'oral-health-tips-for-beginners', 
      title: 'Oral Health Tips for Beginners', 
      slug: '/blog/oral-health-tips-for-beginners', 
      excerpt: 'Start your journey to a better smile with these simple, effective tips.', 
      date: 'Feb 24, 2026', 
      category: 'Oral Health',
      readTime: '8 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/619d747410a19014b5e79783df974e34.webp',
      imageAlt: 'Oral health tips for beginners showing basic brushing and flossing techniques'
    },
    { 
      id: 'best-oral-probiotics-for-bad-breath', 
      title: 'Best Oral Probiotics for Bad Breath', 
      slug: '/blog/best-oral-probiotics-for-bad-breath', 
      excerpt: 'Stop halitosis at the source using specific bacterial strains.', 
      date: 'Feb 22, 2026', 
      category: 'Oral Probiotics',
      readTime: '11 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/9259477b71de426d19bcdc56b447e676.png',
      imageAlt: 'Best oral probiotics for bad breath showing fresh breath results'
    },
    { 
      id: 'oral-probiotics-vs-mouthwash', 
      title: 'Oral Probiotics vs. Mouthwash: Which is Better?', 
      slug: '/blog/oral-probiotics-vs-mouthwash', 
      excerpt: 'Comparing the long-term benefits of probiotics versus traditional antibacterial rinses.', 
      date: 'Feb 20, 2026', 
      category: 'Oral Probiotics',
      readTime: '12 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/f54745c4682935b6800c0bef49fadec1.png',
      imageAlt: 'Comparison of oral probiotics vs mouthwash showing benefits and differences'
    },
    { 
      id: 'how-long-do-oral-probiotics-take-to-work', 
      title: 'How Long Do Oral Probiotics Take to Work?', 
      slug: '/blog/how-long-do-oral-probiotics-take-to-work', 
      excerpt: 'A realistic timeline for seeing results from oral probiotic supplements.', 
      date: 'Feb 18, 2026', 
      category: 'Oral Probiotics',
      readTime: '9 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/845cfa46035067cd63cb8a6315c91946.png',
      imageAlt: 'Timeline showing how long oral probiotics take to work with week-by-week results'
    },
    { 
      id: 'signs-oral-microbiome-unhealthy', 
      title: 'Signs Your Oral Microbiome is Unhealthy', 
      slug: '/blog/signs-oral-microbiome-unhealthy', 
      excerpt: 'Learn to spot the symptoms of a bacterial imbalance in your mouth.', 
      date: 'Feb 15, 2026', 
      category: 'Microbiome',
      readTime: '10 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/30e7fc313f5e5ef86678e1c27cf407db.webp',
      imageAlt: 'Signs of unhealthy oral microbiome showing bacterial imbalance symptoms'
    },
    { 
      id: 'why-mouthwash-harming-microbiome', 
      title: 'Why Your Mouthwash Might Be Harming Your Microbiome', 
      slug: '/blog/why-mouthwash-harming-microbiome', 
      excerpt: 'How alcohol-based rinses destroy both good and bad bacteria.', 
      date: 'Feb 14, 2026', 
      category: 'Oral Health',
      readTime: '11 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/f54745c4682935b6800c0bef49fadec1.png',
      imageAlt: 'How mouthwash harms oral microbiome showing bacteria destruction'
    },
    { 
      id: 'can-oral-probiotics-improve-gum-health', 
      title: 'Can Oral Probiotics Really Improve Gum Health?', 
      slug: '/blog/can-oral-probiotics-improve-gum-health', 
      excerpt: 'The science behind using probiotics to fight periodontal disease.', 
      date: 'Feb 12, 2026', 
      category: 'Gum Health',
      readTime: '13 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/c93f45dec177cfae9b51e0e6973a59f6.png',
      imageAlt: 'Oral probiotics improving gum health showing healthy gum tissue'
    },
    { 
      id: 'are-oral-probiotics-safe-daily-use', 
      title: 'Are Oral Probiotics Safe for Daily Use?', 
      slug: '/blog/are-oral-probiotics-safe-daily-use', 
      excerpt: 'Understanding the safety profile and side effects of daily probiotic consumption.', 
      date: 'Feb 10, 2026', 
      category: 'Oral Probiotics',
      readTime: '9 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/845cfa46035067cd63cb8a6315c91946.png',
      imageAlt: 'Safety of oral probiotics for daily use showing safe supplement usage'
    },
    { 
      id: 'morning-breath-causes-solutions', 
      title: 'Morning Breath: Causes and Effective Solutions', 
      slug: '/blog/morning-breath-causes-solutions', 
      excerpt: 'Wake up with fresher breath by implementing these nighttime routines.', 
      date: 'Feb 8, 2026', 
      category: 'Bad Breath Solutions',
      readTime: '10 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/596a51adf356d62d43874927f2f7ea71.png',
      imageAlt: 'Morning breath causes and solutions showing nighttime oral care routine'
    },
    { 
      id: 'dry-mouth-xerostomia-causes-solutions', 
      title: 'Dry Mouth (Xerostomia): Causes and Solutions', 
      slug: '/blog/dry-mouth-xerostomia-causes-solutions', 
      excerpt: 'How to stimulate saliva production and protect your teeth from decay.', 
      date: 'Feb 5, 2026', 
      category: 'Oral Health',
      readTime: '12 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/30e7fc313f5e5ef86678e1c27cf407db.webp',
      imageAlt: 'Dry mouth causes and solutions showing saliva production and hydration'
    },
    { 
      id: 'best-supplements-oral-probiotics-dry-mouth', 
      title: 'Best Supplements and Probiotics for Dry Mouth', 
      slug: '/blog/best-supplements-oral-probiotics-dry-mouth', 
      excerpt: 'Our top picks for combating xerostomia naturally.', 
      date: 'Feb 3, 2026', 
      category: 'Supplements',
      readTime: '11 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/51faa91dcd75cedf4c6a2d504ae0e2f9.png',
      imageAlt: 'Best supplements for dry mouth showing hydration and saliva stimulation products'
    },
    { 
      id: 'burning-mouth-syndrome', 
      title: 'Understanding Burning Mouth Syndrome', 
      slug: '/blog/burning-mouth-syndrome', 
      excerpt: 'Diagnosing and managing the chronic burning sensation in your mouth.', 
      date: 'Feb 1, 2026', 
      category: 'Oral Health',
      readTime: '14 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/30e7fc313f5e5ef86678e1c27cf407db.webp',
      imageAlt: 'Burning mouth syndrome diagnosis and treatment showing oral health assessment'
    },
    { 
      id: 'best-mouthwash-for-gum-disease', 
      title: 'The Best Mouthwashes for Gum Disease', 
      slug: '/blog/best-mouthwash-for-gum-disease', 
      excerpt: 'Top-rated rinses specifically formulated to fight gingivitis and periodontitis.', 
      date: 'Jan 28, 2026', 
      category: 'Gum Health',
      readTime: '13 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/f54745c4682935b6800c0bef49fadec1.png',
      imageAlt: 'Best mouthwash for gum disease showing therapeutic rinse products'
    },
    { 
      id: 'best-toothpaste-for-gum-disease', 
      title: 'Best Toothpaste for Gum Disease Prevention', 
      slug: '/blog/best-toothpaste-for-gum-disease', 
      excerpt: 'Protect your gums with these highly recommended toothpastes.', 
      date: 'Jan 26, 2026', 
      category: 'Gum Health',
      readTime: '12 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/619d747410a19014b5e79783df974e34.webp',
      imageAlt: 'Best toothpaste for gum disease showing gum protection formulas'
    },
    { 
      id: 'bleeding-gums-causes-treatment', 
      title: 'Bleeding Gums: Causes and Comprehensive Treatment', 
      slug: '/blog/bleeding-gums-causes-treatment', 
      excerpt: 'Everything you need to know about why your gums bleed and how to stop it.', 
      date: 'Jan 25, 2026', 
      category: 'Gum Health',
      readTime: '15 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/b3ce20e699a000b50ea9af13e59cae7f.png',
      imageAlt: 'Bleeding gums causes and treatment showing gum care techniques'
    },
    { 
      id: 'gingivitis-vs-periodontitis', 
      title: 'Gingivitis vs. Periodontitis: What\'s the Difference?', 
      slug: '/blog/gingivitis-vs-periodontitis', 
      excerpt: 'Understanding the stages of gum disease and their respective treatments.', 
      date: 'Jan 22, 2026', 
      category: 'Gum Health',
      readTime: '11 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/befb47736b9822aaa10b9e2650da3ed8.webp',
      imageAlt: 'Gingivitis vs periodontitis comparison showing gum disease stages'
    },
    { 
      id: 'early-signs-gum-disease-ignore', 
      title: 'Early Signs of Gum Disease You Shouldn\'t Ignore', 
      slug: '/blog/early-signs-gum-disease-ignore', 
      excerpt: 'Catch gum disease early before it causes irreversible damage.', 
      date: 'Jan 20, 2026', 
      category: 'Gum Health',
      readTime: '10 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/efdd839f6b57778c8f95a1574d7ebfc5.jpg',
      imageAlt: 'Early signs of gum disease showing warning symptoms'
    },
    { 
      id: 'gum-pain-without-bleeding', 
      title: 'Gum Pain Without Bleeding: Potential Causes', 
      slug: '/blog/gum-pain-without-bleeding', 
      excerpt: 'What it means when your gums hurt but aren\'t bleeding during brushing.', 
      date: 'Jan 18, 2026', 
      category: 'Gum Health',
      readTime: '9 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/8bf8aee3172d921e10050a9ebb8e2aa4.png',
      imageAlt: 'Gum pain without bleeding showing pain assessment and causes'
    },
    { 
      id: 'gums-hurt-when-eating', 
      title: 'Why Do My Gums Hurt When Eating?', 
      slug: '/blog/gums-hurt-when-eating', 
      excerpt: 'Identifying the root causes of pain while chewing your favorite foods.', 
      date: 'Jan 15, 2026', 
      category: 'Gum Health',
      readTime: '10 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/8bf8aee3172d921e10050a9ebb8e2aa4.png',
      imageAlt: 'Gums hurt when eating showing food sensitivity and gum pain triggers'
    },
    { 
      id: 'is-gingivitis-reversible', 
      title: 'Is Gingivitis Completely Reversible?', 
      slug: '/blog/is-gingivitis-reversible', 
      excerpt: 'The short answer is yes. Learn exactly what steps to take.', 
      date: 'Jan 12, 2026', 
      category: 'Gum Health',
      readTime: '8 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/c93f45dec177cfae9b51e0e6973a59f6.png',
      imageAlt: 'Reversing gingivitis showing gum healing process'
    },
    { 
      id: 'stages-of-gum-disease', 
      title: 'The 4 Stages of Gum Disease Explained', 
      slug: '/blog/stages-of-gum-disease', 
      excerpt: 'From early inflammation to advanced bone loss: a complete breakdown.', 
      date: 'Jan 10, 2026', 
      category: 'Gum Health',
      readTime: '14 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/befb47736b9822aaa10b9e2650da3ed8.webp',
      imageAlt: 'Four stages of gum disease showing progression from healthy to advanced'
    },
    { 
      id: 'bleeding-gums-while-brushing', 
      title: 'How to Stop Bleeding Gums While Brushing', 
      slug: '/blog/bleeding-gums-while-brushing', 
      excerpt: 'Adjust your technique to prevent irritation and protect your tissue.', 
      date: 'Jan 8, 2026', 
      category: 'Gum Health',
      readTime: '9 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/8bf8aee3172d921e10050a9ebb8e2aa4.png',
      imageAlt: 'Stop bleeding gums while brushing showing proper technique'
    },
    { 
      id: 'bleeding-gums-when-flossing', 
      title: 'Why Do My Gums Bleed When Flossing?', 
      slug: '/blog/bleeding-gums-when-flossing', 
      excerpt: 'And why you absolutely shouldn\'t stop flossing when it happens.', 
      date: 'Jan 5, 2026', 
      category: 'Gum Health',
      readTime: '8 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/8bf8aee3172d921e10050a9ebb8e2aa4.png',
      imageAlt: 'Bleeding gums when flossing showing proper flossing technique'
    },
    { 
      id: 'bleeding-gums-in-the-morning', 
      title: 'Waking Up With Bleeding Gums: Causes', 
      slug: '/blog/bleeding-gums-in-the-morning', 
      excerpt: 'Exploring nocturnal causes of gum bleeding, including grinding and dry mouth.', 
      date: 'Jan 3, 2026', 
      category: 'Gum Health',
      readTime: '10 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/8bf8aee3172d921e10050a9ebb8e2aa4.png',
      imageAlt: 'Morning bleeding gums showing nighttime causes and solutions'
    },
    { 
      id: 'early-receding-gums', 
      title: 'Spotting the Signs of Early Receding Gums', 
      slug: '/blog/early-receding-gums', 
      excerpt: 'How to identify gum recession before it leads to root exposure.', 
      date: 'Jan 1, 2026', 
      category: 'Gum Health',
      readTime: '11 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/37fbf1ef69a23ddb238206c8aaad5ecc.webp',
      imageAlt: 'Early receding gums showing gum recession signs and prevention'
    },
    { 
      id: 'plaque-vs-tartar', 
      title: 'Plaque vs. Tartar: What You Need to Know', 
      slug: '/blog/plaque-vs-tartar', 
      excerpt: 'Understanding the difference and why tartar requires professional removal.', 
      date: 'Dec 28, 2025', 
      category: 'Oral Health',
      readTime: '10 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/8926312188446cd8b9f61e41f6dc1ca4.webp',
      imageAlt: 'Plaque vs tartar comparison showing buildup stages'
    },
    { 
      id: 'can-tartar-be-removed-at-home', 
      title: 'Can Tartar Be Safely Removed at Home?', 
      slug: '/blog/can-tartar-be-removed-at-home', 
      excerpt: 'The truth about DIY tartar removal tools and their severe risks.', 
      date: 'Dec 25, 2025', 
      category: 'Oral Health',
      readTime: '9 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/0e1c127a2f69a89a0ef5522fec01007d.webp',
      imageAlt: 'DIY tartar removal risks showing professional vs home care'
    },
    { 
      id: 'how-often-dental-cleaning', 
      title: 'How Often Should You Get a Dental Cleaning?', 
      slug: '/blog/how-often-dental-cleaning', 
      excerpt: 'Why the 6-month rule exists and who might need more frequent visits.', 
      date: 'Dec 20, 2025', 
      category: 'Oral Health',
      readTime: '8 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/619d747410a19014b5e79783df974e34.webp',
      imageAlt: 'Dental cleaning frequency showing professional cleaning schedule'
    },
    { 
      id: 'after-dental-scaling', 
      title: 'What to Expect After Dental Scaling', 
      slug: '/blog/after-dental-scaling', 
      excerpt: 'Managing sensitivity and promoting healing after a deep clean.', 
      date: 'Dec 18, 2025', 
      category: 'Dental Care',
      readTime: '10 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/acf96885d80fc8ae88f55399eee2c1db.webp',
      imageAlt: 'After dental scaling care showing post-treatment recovery'
    },
    { 
      id: 'scaling-vs-deep-cleaning', 
      title: 'Scaling vs. Deep Cleaning: What\'s Required?', 
      slug: '/blog/scaling-vs-deep-cleaning', 
      excerpt: 'Decoding dental terminology so you know exactly what you are paying for.', 
      date: 'Dec 15, 2025', 
      category: 'Dental Care',
      readTime: '11 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/0e1c127a2f69a89a0ef5522fec01007d.webp',
      imageAlt: 'Scaling vs deep cleaning comparison showing dental procedures'
    },
    { 
      id: 'after-deep-cleaning', 
      title: 'Aftercare Instructions for Deep Dental Cleaning', 
      slug: '/blog/after-deep-cleaning', 
      excerpt: 'The critical first 48 hours following periodontal root planing.', 
      date: 'Dec 12, 2025', 
      category: 'Dental Care',
      readTime: '9 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/acf96885d80fc8ae88f55399eee2c1db.webp',
      imageAlt: 'Deep cleaning aftercare showing post-procedure instructions'
    },
    { 
      id: 'can-gum-disease-be-cured', 
      title: 'Can Advanced Gum Disease Be Cured?', 
      slug: '/blog/can-gum-disease-be-cured', 
      excerpt: 'Management vs. curing: understanding the long-term reality of periodontitis.', 
      date: 'Dec 10, 2025', 
      category: 'Gum Health',
      readTime: '12 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/befb47736b9822aaa10b9e2650da3ed8.webp',
      imageAlt: 'Curing gum disease showing treatment and management options'
    },
    { 
      id: 'best-brushing-routine-healthy-gums', 
      title: 'The Best Brushing Routine for Healthy Gums', 
      slug: '/blog/best-brushing-routine-healthy-gums', 
      excerpt: 'Optimize your daily routine with these dentist-approved techniques.', 
      date: 'Dec 8, 2025', 
      category: 'Oral Hygiene',
      readTime: '10 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/37fbf1ef69a23ddb238206c8aaad5ecc.webp',
      imageAlt: 'Best brushing routine for healthy gums showing proper technique'
    },
    { 
      id: 'proper-flossing-healthy-gums', 
      title: 'The Proper Way to Floss for Healthy Gums', 
      slug: '/blog/proper-flossing-healthy-gums', 
      excerpt: 'A step-by-step guide to removing interdental plaque effectively.', 
      date: 'Dec 5, 2025', 
      category: 'Oral Hygiene',
      readTime: '8 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/37fbf1ef69a23ddb238206c8aaad5ecc.webp',
      imageAlt: 'Proper flossing technique for healthy gums showing step-by-step guide'
    },
    { 
      id: 'prodentim-review-2026', 
      title: 'ProDentim Review: Does It Really Work?', 
      slug: '/blog/prodentim-review-2026', 
      excerpt: 'An in-depth look at the popular oral probiotic supplement.', 
      date: 'Dec 1, 2025', 
      category: 'Reviews',
      readTime: '16 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/845cfa46035067cd63cb8a6315c91946.png',
      imageAlt: 'ProDentim review showing product effectiveness and results'
    },
    { 
      id: 'prodentim-vs-mouthwash', 
      title: 'ProDentim vs. Traditional Mouthwash', 
      slug: '/blog/prodentim-vs-mouthwash', 
      excerpt: 'Which approach is better for your long-term oral health?', 
      date: 'Nov 28, 2025', 
      category: 'Comparisons',
      readTime: '11 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/f54745c4682935b6800c0bef49fadec1.png',
      imageAlt: 'ProDentim vs mouthwash comparison showing benefits and differences'
    },
    { 
      id: 'is-prodentim-scam-legit', 
      title: 'Is ProDentim a Scam or Legit?', 
      slug: '/blog/is-prodentim-scam-legit', 
      excerpt: 'We analyze the clinical backing and customer feedback behind the brand.', 
      date: 'Nov 25, 2025', 
      category: 'Reviews',
      readTime: '13 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/845cfa46035067cd63cb8a6315c91946.png',
      imageAlt: 'ProDentim legitimacy review showing product analysis and verification'
    },
    { 
      id: 'prodentim-vs-provadent-vs-dentasmile-pro', 
      title: 'ProDentim vs ProvaDent vs DentaSmile Pro', 
      slug: '/blog/prodentim-vs-provadent-vs-dentasmile-pro', 
      excerpt: 'Comparing the top three dental supplements on the market today.', 
      date: 'Nov 20, 2025', 
      category: 'Comparisons',
      readTime: '15 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/845cfa46035067cd63cb8a6315c91946.png',
      imageAlt: 'ProDentim vs ProvaDent vs DentaSmile Pro comparison showing product rankings'
    },
    { 
      id: 'prodentim-side-effects-safety', 
      title: 'ProDentim Side Effects and Safety Profile', 
      slug: '/blog/prodentim-side-effects-safety', 
      excerpt: 'What you need to know before adding this supplement to your routine.', 
      date: 'Nov 18, 2025', 
      category: 'Reviews',
      readTime: '10 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/845cfa46035067cd63cb8a6315c91946.png',
      imageAlt: 'ProDentim side effects and safety showing safety profile analysis'
    },
    { 
      id: 'where-to-buy-prodentim', 
      title: 'Where to Buy ProDentim Safely', 
      slug: '/blog/where-to-buy-prodentim', 
      excerpt: 'Avoiding counterfeits and securing the best price online.', 
      date: 'Nov 15, 2025', 
      category: 'Reviews',
      readTime: '7 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/845cfa46035067cd63cb8a6315c91946.png',
      imageAlt: 'Where to buy ProDentim safely showing official sources'
    },
    { 
      id: 'how-long-does-prodentim-take-to-work', 
      title: 'ProDentim Timeline: When Will You See Results?', 
      slug: '/blog/how-long-does-prodentim-take-to-work', 
      excerpt: 'Week-by-week breakdown of what to expect when taking ProDentim.', 
      date: 'Nov 12, 2025', 
      category: 'Reviews',
      readTime: '9 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/845cfa46035067cd63cb8a6315c91946.png',
      imageAlt: 'ProDentim timeline showing week-by-week results'
    },
    { 
      id: 'prodentim-for-bad-breath', 
      title: 'Can ProDentim Cure Chronic Bad Breath?', 
      slug: '/blog/prodentim-for-bad-breath', 
      excerpt: 'Investigating the supplement\'s impact on halitosis-causing bacteria.', 
      date: 'Nov 10, 2025', 
      category: 'Reviews',
      readTime: '11 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/9259477b71de426d19bcdc56b447e676.png',
      imageAlt: 'ProDentim for bad breath showing halitosis treatment results'
    },
    { 
      id: 'tonsil-stones-bad-breath', 
      title: 'Tonsil Stones: The Hidden Cause of Bad Breath', 
      slug: '/blog/tonsil-stones-bad-breath', 
      excerpt: 'How to identify, remove, and prevent tonsil stones at home.', 
      date: 'Nov 5, 2025', 
      category: 'Bad Breath Solutions',
      readTime: '12 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/4ba9640c4ce9015ad7c679c598706e78.png',
      imageAlt: 'Tonsil stones causing bad breath showing identification and removal'
    },
    { 
      id: 'best-supplement-for-bleeding-gums', 
      title: 'The Best Supplement for Bleeding Gums', 
      slug: '/blog/best-supplement-for-bleeding-gums', 
      excerpt: 'Our top recommendation for reducing gum inflammation naturally.', 
      date: 'Nov 1, 2025', 
      category: 'Supplements',
      readTime: '10 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/51faa91dcd75cedf4c6a2d504ae0e2f9.png',
      imageAlt: 'Best supplement for bleeding gums showing natural gum health products'
    },
    { 
      id: 'provadent-vs-prodentim', 
      title: 'ProvaDent vs. ProDentim: Head-to-Head Comparison', 
      slug: '/blog/provadent-vs-prodentim', 
      excerpt: 'Which probiotic complex offers the best value and efficacy?', 
      date: 'Oct 28, 2025', 
      category: 'Comparisons',
      readTime: '14 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/845cfa46035067cd63cb8a6315c91946.png',
      imageAlt: 'ProvaDent vs ProDentim head-to-head comparison showing product analysis'
    },
    { 
      id: 'best-products-for-gum-health', 
      title: 'Top Dentist-Recommended Products for Gum Health', 
      slug: '/blog/best-products-for-gum-health', 
      excerpt: 'The ultimate buyer\'s guide for toothbrushes, floss, and rinses.', 
      date: 'Oct 25, 2025', 
      category: 'Oral Health',
      readTime: '16 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/c93f45dec177cfae9b51e0e6973a59f6.png',
      imageAlt: 'Best products for gum health showing dentist-recommended oral care items'
    },
    { 
      id: 'how-to-reverse-gingivitis-naturally', 
      title: 'How to Reverse Gingivitis Naturally', 
      slug: '/blog/how-to-reverse-gingivitis-naturally', 
      excerpt: 'Proven holistic methods to soothe and heal inflamed gums.', 
      date: 'Oct 20, 2025', 
      category: 'Gum Health',
      readTime: '13 min read',
      featuredImage: 'https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/c93f45dec177cfae9b51e0e6973a59f6.png',
      imageAlt: 'Reversing gingivitis naturally showing holistic gum healing methods'
    },
  ];

  useEffect(() => {
    try {
      const sortedPosts = [...postsData].sort((a, b) => {
        const dateA = new Date(a.date || 'Jan 1, 2020').getTime();
        const dateB = new Date(b.date || 'Jan 1, 2020').getTime();
        return dateB - dateA;
      });
      
      setBlogPosts(sortedPosts);
    } catch (error) {
      console.error("Error loading blog posts:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Oral Health Blog - Expert Articles & Guides | Best Oral Health Guide</title>
        <meta name="description" content="Read expert articles on gum health, oral probiotics, bad breath solutions, and natural dental care. Stay informed with our latest oral health guides." />
        <meta property="og:site_name" content="Best Oral Health Guide" />
        <meta property="og:title" content="Oral Health Blog - Expert Articles & Guides | Best Oral Health Guide" />
        <meta property="og:description" content="Read expert articles on gum health, oral probiotics, bad breath solutions, and natural dental care. Stay informed with our latest oral health guides." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bestoralhealthguide.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BestOralHealth" />
        <meta name="twitter:title" content="Oral Health Blog - Expert Articles & Guides | Best Oral Health Guide" />
        <meta name="twitter:description" content="Read expert articles on gum health, oral probiotics, bad breath solutions, and natural dental care." />
      </Helmet>

      <div className="bg-white min-h-screen">
        <section className="bg-blue-50/50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Oral Health Insights
            </motion.h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert advice, comprehensive guides, and the latest research to help you achieve your best smile.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : blogPosts.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 rounded-xl border border-gray-200">
              <AlertCircle size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Please check back later for new oral health content.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => {
                return (
                  <motion.article 
                    key={post.id || `${post.slug}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full group"
                  >
                    {post.featuredImage && (
                      <Link to={post.slug} className="block aspect-video overflow-hidden relative">
                        <img 
                          src={post.featuredImage} 
                          alt={post.imageAlt || post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    )}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-semibold text-[#4A90E2] bg-blue-50 px-2.5 py-1 rounded-full">
                          {post.category || 'Oral Health'}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center">
                          <Clock size={12} className="mr-1.5" /> {post.readTime || '10 min read'}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#4A90E2] transition-colors leading-tight">
                        <Link to={post.slug} className="block">{post.title}</Link>
                      </h2>
                      <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                        {post.excerpt || 'Read our expert guide to learn more about improving your daily oral health routine.'}
                      </p>
                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                        <span className="text-xs text-gray-500 flex items-center">
                          <Calendar size={12} className="mr-1.5" /> {post.date || 'Jan 1, 2026'}
                        </span>
                        <Link to={post.slug} className="text-[#4A90E2] font-semibold text-sm flex items-center group/link hover:underline">
                          Read More <ArrowRight size={14} className="ml-1 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default BlogIndexPage;