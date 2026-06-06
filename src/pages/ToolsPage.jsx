import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wind, ArrowRight, AlertCircle, Sparkles, Activity, Zap, ClipboardCheck } from 'lucide-react';

const ToolsPage = () => {
  const [hasError, setHasError] = useState(false);

  const toolsList = [
    {
      id: 'oral-health-score',
      title: 'Oral Health Score Analyzer',
      description: 'Calculate your overall oral health score. This quick assessment analyzes your daily habits and symptoms to give you a personalized dental health score.',
      icon: ClipboardCheck,
      link: '/tools/oral-health-score-analyzer',
      color: 'indigo'
    },
    {
      id: 'bad-breath-checker',
      title: 'Bad Breath Cause Checker',
      description: 'Identify what\'s causing your bad breath with our interactive checker. Get personalized insights about halitosis, tonsil stones, and dry mouth.',
      icon: Wind,
      link: '/tools/bad-breath-cause-checker',
      color: 'blue'
    },
    {
      id: 'gum-disease-calculator',
      title: 'Gum Disease Risk Calculator',
      description: 'Check your gum health risk instantly based on symptoms like bleeding gums, swelling, and oral habits. Get personalized recommendations.',
      icon: Activity,
      link: '/tools/gum-disease-risk-calculator',
      color: 'rose'
    },
    {
      id: 'tooth-sensitivity-test',
      title: 'Tooth Sensitivity Test',
      description: 'Take our free test to evaluate your tooth sensitivity level. Identify root causes and get personalized advice to reduce discomfort naturally.',
      icon: Zap,
      link: '/tools/tooth-sensitivity-test',
      color: 'purple'
    },
    {
      id: 'plaque-tartar-calculator',
      title: 'Plaque & Tartar Risk Calculator',
      description: 'Assess your plaque and tartar buildup risk with our interactive calculator. Get personalized recommendations to improve your oral health.',
      icon: AlertCircle,
      link: '/tools/plaque-tartar-risk-calculator',
      color: 'teal'
    }
  ];

  try {
    if (hasError) throw new Error("Render error in ToolsPage");

    return (
      <>
        <Helmet>
          <title>Free Oral Health Tools | Assessment & Checkers</title>
          <meta 
            name="description" 
            content="Explore our free interactive oral health tools. Use our Bad Breath Checker, Gum Disease Risk Calculator, Plaque Risk Calculator, and Tooth Sensitivity Test to get personalized insights." 
          />
        </Helmet>

        <div className="bg-slate-50 min-h-screen py-16 md:py-24 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-full mb-6 shadow-sm">
                <Sparkles size={28} />
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                Free Oral Health Tools
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Explore our free interactive tools designed to help you understand your oral health. Whether you're wondering what causes bad breath, why your gums are inflamed, or why your teeth are sensitive, these diagnostic assessments provide personalized educational insights and actionable next steps.
              </p>
            </div>

            <div className="mb-8 border-b border-gray-200 pb-4">
              <h2 className="text-3xl font-bold text-gray-900 text-center md:text-left">
                Available Tools
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {toolsList.map((tool, index) => {
                const Icon = tool.icon;
                const isBlue = tool.color === 'blue';
                const isRose = tool.color === 'rose';
                const isPurple = tool.color === 'purple';
                const isTeal = tool.color === 'teal';
                const isIndigo = tool.color === 'indigo';
                
                const bgGradient = isBlue 
                  ? 'bg-gradient-to-br from-blue-600 to-indigo-700' 
                  : isRose 
                  ? 'bg-gradient-to-br from-rose-500 to-red-700'
                  : isPurple
                  ? 'bg-gradient-to-br from-purple-500 to-fuchsia-700'
                  : isIndigo
                  ? 'bg-gradient-to-br from-indigo-500 to-blue-700'
                  : 'bg-gradient-to-br from-teal-500 to-emerald-700'; // Default to teal
                  
                const textGroupHover = isBlue 
                  ? 'group-hover:text-blue-600' 
                  : isRose 
                  ? 'group-hover:text-rose-600'
                  : isPurple
                  ? 'group-hover:text-purple-600'
                  : isIndigo
                  ? 'group-hover:text-indigo-600'
                  : 'group-hover:text-teal-600';
                  
                const btnBg = isBlue 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : isRose 
                  ? 'bg-rose-600 hover:bg-rose-700'
                  : isPurple
                  ? 'bg-purple-600 hover:bg-purple-700'
                  : isIndigo
                  ? 'bg-indigo-600 hover:bg-indigo-700'
                  : 'bg-teal-600 hover:bg-teal-700';
                
                return (
                  <motion.div 
                    key={tool.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full group">
                      <div className={`p-8 flex justify-center items-center relative overflow-hidden ${bgGradient}`}>
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                          <Icon size={100} />
                        </div>
                        <div className="bg-white/20 p-5 rounded-full backdrop-blur-sm relative z-10">
                          <Icon size={48} className="text-white group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>
                      
                      <div className="p-8 flex flex-col flex-grow">
                        <h3 className={`text-xl font-bold mb-3 transition-colors text-gray-900 ${textGroupHover}`}>
                          {tool.title}
                        </h3>
                        <p className="text-gray-600 mb-8 flex-grow leading-relaxed text-sm">
                          {tool.description}
                        </p>
                        <Link 
                          to={tool.link} 
                          className={`inline-flex items-center justify-center w-full py-3 px-4 text-white font-bold rounded-xl transition-colors text-base shadow-md ${btnBg}`}
                        >
                          Try Now <ArrowRight className="ml-2" size={18} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error("ToolsPage render error:", error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 border-t border-gray-200">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100 max-w-md w-full text-center">
          <AlertCircle className="mx-auto text-red-500 mb-6" size={64} />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Content Unavailable</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We're currently updating our tools section. Please try again in a few moments.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }
};

export default ToolsPage;