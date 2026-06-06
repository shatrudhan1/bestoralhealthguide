import React from 'react';
import { Helmet } from 'react-helmet';
import { Sparkles } from 'lucide-react';
import OralHealthScoreAnalyzer from './OralHealthScoreAnalyzer';

const OralHealthScoreAnalyzerPage = () => {
  return (
    <>
      <Helmet>
        <title>Oral Health Score Analyzer | Calculate Your Dental Health Score</title>
        <meta 
          name="description" 
          content="Calculate your oral health score instantly. Our free assessment analyzes your daily habits and symptoms to provide a personalized dental health score and action plan." 
        />
        <link rel="canonical" href="https://www.bestoralhealthguide.com/tools/oral-health-score-analyzer" />
      </Helmet>

      <div className="bg-slate-50 min-h-screen py-12 md:py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-full mb-4 shadow-sm">
              <Sparkles size={28} />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Oral Health Score Analyzer
            </h1>
          </div>

          {/* Embedded Tool Component */}
          <OralHealthScoreAnalyzer />

        </div>
      </div>
    </>
  );
};

export default OralHealthScoreAnalyzerPage;