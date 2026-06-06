import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CalendarDays, Search, AlertTriangle, PenTool, CheckSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MonitoringGuide = () => {
  const steps = [
    {
      day: "Monday Morning",
      title: "Traffic & Report Review",
      icon: <CalendarDays className="w-8 h-8 text-blue-500" />,
      tasks: [
        "Log into SEO Dashboard.",
        "Check total traffic WoW changes.",
        "Review Top 10 Pages by Views.",
        "Generate Weekly Report and share with team."
      ],
      link: "/seo-dashboard",
      linkText: "Go to Dashboard"
    },
    {
      day: "Tuesday",
      title: "Keyword & Rankings Check",
      icon: <Search className="w-8 h-8 text-purple-500" />,
      tasks: [
        "Open Keyword Rankings Tracker.",
        "Identify 'Moved Down' keywords out of Top 10.",
        "Check new keywords entering Top 3.",
        "Update tracking spreadsheet if manual overrides needed."
      ],
      link: "/keyword-rankings",
      linkText: "Check Rankings"
    },
    {
      day: "Wednesday",
      title: "Issue Investigation",
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      tasks: [
        "Review Active Alerts in settings/dashboard.",
        "Investigate 'High Bounce Rate' warnings.",
        "Investigate pages with 'Low CTR' (< 2%).",
        "Check Search Console for indexing errors."
      ],
      link: "/alert-settings",
      linkText: "View Alerts"
    },
    {
      day: "Thursday",
      title: "Content Optimization",
      icon: <PenTool className="w-8 h-8 text-orange-500" />,
      tasks: [
        "Open Blog Performance Tracker.",
        "Filter for 'Needs Optimization' status.",
        "Update Meta Titles for low CTR pages.",
        "Add internal links to orphan pages."
      ],
      link: "/blog-performance",
      linkText: "Optimize Content"
    },
    {
      day: "Friday",
      title: "Summary & Planning",
      icon: <CheckSquare className="w-8 h-8 text-green-500" />,
      tasks: [
        "Verify fixes implemented on Thursday.",
        "Plan content calendar for next week based on keyword gaps.",
        "Ensure all alerts are cleared or acknowledged."
      ],
      link: "/seo-dashboard",
      linkText: "Final Review"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>SEO Monitoring Process Guide | Standard Operating Procedure</title>
        <meta name="description" content="Step-by-step weekly SEO monitoring guide and standard operating procedure for content teams." />
      </Helmet>

      {/* Header */}
      <section className="bg-slate-900 py-20 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <Badge className="bg-blue-500 text-white mb-4">SOP Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Weekly SEO Monitoring Process</h1>
          <p className="text-xl text-slate-300">
            Follow this standard operating procedure to maintain traffic growth, catch issues early, and optimize low-performing content.
          </p>
        </motion.div>
      </section>

      {/* Steps */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-6 bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm relative overflow-hidden"
            >
              <div className="md:w-1/3 border-r border-gray-200 pr-6">
                <div className="bg-white w-16 h-16 rounded-xl shadow-sm flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">{step.day}</h2>
                <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
              </div>
              <div className="md:w-2/3 flex flex-col justify-between">
                <ul className="space-y-3 mb-6">
                  {step.tasks.map((task, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mt-1 mr-3 text-blue-500 shrink-0"><CheckSquare size={16}/></div>
                      <span className="text-gray-700">{task}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <Link to={step.link} className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-4 py-2 rounded-full">
                    {step.linkText} <ArrowRight size={16} className="ml-2"/>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Best Practices */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Monitoring Best Practices</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-gray-900 mb-2">Don't Panic Over Daily Drops</h4>
              <p className="text-sm text-gray-600">Always look at week-over-week (WoW) or month-over-month (MoM) data. Daily fluctuations in SERPs are entirely normal.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-gray-900 mb-2">Focus on Intent, Not Just Keywords</h4>
              <p className="text-sm text-gray-600">If bounce rate is high, the user isn't finding what they expected. Rewrite introductions to match exactly what the query asks.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-gray-900 mb-2">Click-Through Rate (CTR) is King</h4>
              <p className="text-sm text-gray-600">Ranking #3 doesn't matter if nobody clicks. Treat meta titles like ad copy. Test brackets [ ], years (2026), and power words.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Mock Badge component for local file scope if shadcn fails to inject early
const Badge = ({ children, className }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${className}`}>
    {children}
  </span>
);

export default MonitoringGuide;