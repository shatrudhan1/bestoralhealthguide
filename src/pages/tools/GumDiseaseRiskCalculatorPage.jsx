import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  ArrowRight, 
  AlertTriangle, 
  ArrowLeft, 
  RefreshCcw, 
  CheckCircle, 
  Info, 
  Stethoscope, 
  HeartPulse, 
  Activity as ActivityIcon 
} from 'lucide-react';
import RelatedArticles from '@/components/RelatedArticles';
import RecommendedProducts from '@/components/RecommendedProducts';

const questions = [
  {
    id: 1,
    question: "Do your gums bleed while brushing?",
    options: [
      { label: "Yes, often", value: 2 },
      { label: "Sometimes", value: 1 },
      { label: "No, never", value: 0 }
    ]
  },
  {
    id: 2,
    question: "Do you have swollen or red gums?",
    options: [
      { label: "Yes", value: 2 },
      { label: "Slightly", value: 1 },
      { label: "No", value: 0 }
    ]
  },
  {
    id: 3,
    question: "Do your gums hurt or feel sensitive?",
    options: [
      { label: "Yes", value: 2 },
      { label: "Sometimes", value: 1 },
      { label: "No", value: 0 }
    ]
  },
  {
    id: 4,
    question: "Do you have persistent bad breath?",
    options: [
      { label: "Yes", value: 2 },
      { label: "Sometimes", value: 1 },
      { label: "No", value: 0 }
    ]
  },
  {
    id: 5,
    question: "Do your gums look receding (teeth look longer)?",
    options: [
      { label: "Yes", value: 2 },
      { label: "Not sure", value: 1 },
      { label: "No", value: 0 }
    ]
  },
  {
    id: 6,
    question: "How often do you brush your teeth?",
    options: [
      { label: "Irregularly", value: 2 },
      { label: "Once daily", value: 1 },
      { label: "Twice daily", value: 0 }
    ]
  },
  {
    id: 7,
    question: "Do you floss regularly?",
    options: [
      { label: "Rarely or never", value: 2 },
      { label: "Sometimes", value: 1 },
      { label: "Daily", value: 0 }
    ]
  }
];

const GumDiseaseRiskCalculatorPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [showResult]);

  const handleOptionSelect = (optionValue) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = optionValue;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (answers[currentStep] === null) return;
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateResult = () => {
    const totalScore = answers.reduce((acc, curr) => acc + (curr || 0), 0);
    setScore(totalScore);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setAnswers(Array(questions.length).fill(null));
    setCurrentStep(0);
    setShowResult(false);
    setScore(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const progressPercentage = ((currentStep + 1) / questions.length) * 100;

  const relatedGuidesList = [
    { id: 1, title: "Complete Guide to Gum Disease", url: "/blog/gum-disease-complete-guide" },
    { id: 2, title: "Gum Disease Symptoms & Signs", url: "/blog/warning-signs-gum-disease" },
    { id: 3, title: "Gum Disease Treatment Options", url: "/blog/can-gum-disease-be-healed" }
  ];

  const recommendedProductsList = [
    { id: 1, title: "Best Oral Probiotics for Gum Health", url: "/blog/oral-probiotics-gum-health" },
    { id: 2, title: "Best Mouthwashes for Gum Disease", url: "/blog/best-mouthwash-for-gum-disease" }
  ];

  const renderResult = () => {
    if (score <= 4) {
      return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-green-600 p-8 text-center text-white relative overflow-hidden">
            <CheckCircle className="mx-auto mb-4 opacity-90" size={64} />
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 relative z-10">Your Gums Look Healthy!</h2>
            <p className="text-green-100 font-medium relative z-10">LOW RISK DETECTED</p>
            <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10"><ShieldCheck size={200} /></div>
          </div>
          <div className="p-8 md:p-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What This Means For You</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Congratulations! Based on your answers, your gums appear to be in excellent condition with a very low risk of active gum disease. Healthy, firm, and pink gums indicate that your current oral hygiene routine is working effectively to keep harmful plaque and tartar at bay. It is crucial to maintain this positive momentum. Continue brushing twice a day with a soft-bristled brush and flossing daily to remove interdental bacteria. 
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Even with healthy gums, professional dental cleanings every six months are essential to remove microscopic calculus that you cannot brush away at home. Don't let your guard down; prevention is always easier than treatment. For advanced tips on maintaining your pristine smile and protecting your oral microbiome, explore our <Link to="/blog/oral-hygiene-complete-guide" className="text-blue-600 font-bold hover:underline">Oral Hygiene Complete Guide</Link>. Keep up the fantastic daily work!
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center"><ShieldCheck className="text-green-600 mr-2" size={20}/> Next Steps & Prevention</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Maintain your rigorous twice-daily brushing routine.</li>
                <li>• Keep flossing daily to prevent hidden plaque buildup.</li>
                <li>• Schedule your routine 6-month dental checkup.</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={resetQuiz} className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-colors flex items-center justify-center">
                <RefreshCcw className="mr-2" size={18} /> Retake Quiz
              </button>
              <Link to="/blog" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-green-600/30 flex items-center justify-center">
                View Related Articles <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      );
    } else if (score <= 9) {
      return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-yellow-500 p-8 text-center text-white relative overflow-hidden">
            <AlertTriangle className="mx-auto mb-4 opacity-90" size={64} />
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 relative z-10">Early Signs of Gum Disease</h2>
            <p className="text-yellow-100 font-medium relative z-10">MEDIUM RISK DETECTED</p>
            <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10"><Info size={200} /></div>
          </div>
          <div className="p-8 md:p-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What This Means For You</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              You are showing classic symptoms of early-stage gum disease, clinically known as gingivitis. The occasional bleeding, swelling, or sensitivity you are experiencing means bacterial plaque has started irritating your gum tissue. The exceptionally good news? At this stage, the damage is completely 100% reversible. However, you must take immediate, targeted action to improve your daily oral hygiene routine.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Upgrade to an ultra-soft toothbrush, ensure you are flossing every single night, and use an anti-inflammatory, alcohol-free mouthwash. If you stay consistent, you can reverse these symptoms within two to four weeks. We strongly recommend scheduling a professional cleaning soon to remove hardened tartar. Learn exactly how this stage differs from permanent damage in our guide on <Link to="/blog/gingivitis-vs-periodontitis" className="text-blue-600 font-bold hover:underline">Gingivitis vs Periodontitis</Link>.
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center"><ActivityIcon className="text-yellow-600 mr-2" size={20}/> Next Steps for Reversal</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Upgrade your brushing technique—be gentle around the gum line.</li>
                <li>• Begin flossing every single day without exception.</li>
                <li>• Read our review of the <Link to="/blog/best-mouthwash-for-gum-disease" className="text-blue-600 hover:underline">Best Mouthwash for Gum Disease</Link>.</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={resetQuiz} className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-colors flex items-center justify-center">
                <RefreshCcw className="mr-2" size={18} /> Retake Quiz
              </button>
              <Link to="/guides/gum-disease-complete-guide" className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-xl transition-colors shadow-lg shadow-yellow-500/30 flex items-center justify-center">
                Read Complete Guide <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-red-600 p-8 text-center text-white relative overflow-hidden">
            <Stethoscope className="mx-auto mb-4 opacity-90" size={64} />
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 relative z-10">Possible Gum Disease Detected</h2>
            <p className="text-red-100 font-medium relative z-10">HIGH RISK DETECTED</p>
            <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10"><HeartPulse size={200} /></div>
          </div>
          <div className="p-8 md:p-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What This Means For You</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your answers strongly indicate a high risk for advanced gum disease, or periodontitis. Persistent bleeding, visible recession, pain, and chronic bad breath are severe warning signs that a bacterial infection is actively attacking the bone and connective tissues supporting your teeth. This level of persistent inflammation requires immediate professional intervention. Do not attempt to treat this exclusively at home, as aggressive brushing could actually worsen your gum recession.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              We urgently recommend scheduling an appointment with a dentist or periodontist for a comprehensive evaluation and a deep cleaning (scaling and root planing). Delaying treatment could lead to irreversible bone loss or loose teeth. While you wait for your appointment, switch to exceptionally gentle hygiene practices. Please review the <Link to="/blog/stages-of-gum-disease-explained" className="text-blue-600 font-bold hover:underline">Stages of Gum Disease</Link> to prepare for your dental visit and understand your condition.
            </p>
            
            <div className="bg-red-50 rounded-xl p-6 mb-8 border border-red-100">
              <h4 className="font-bold text-red-900 mb-3 flex items-center"><AlertTriangle className="text-red-600 mr-2" size={20}/> Urgent Next Steps</h4>
              <ul className="space-y-2 text-red-800">
                <li>• Schedule an appointment with a dentist immediately.</li>
                <li>• Stop aggressive brushing; use an ultra-soft brush only.</li>
                <li>• Read our comprehensive <Link to="/blog/gum-disease-complete-guide" className="font-bold underline hover:text-red-700">Gum Disease Complete Guide</Link>.</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={resetQuiz} className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-colors flex items-center justify-center">
                <RefreshCcw className="mr-2" size={18} /> Retake Quiz
              </button>
              <Link to="/blog/why-do-my-gums-bleed-when-i-brush" className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-red-600/30 flex items-center justify-center">
                Learn About Bleeding Gums <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <Helmet>
        <title>Gum Disease Risk Calculator – Check Your Gum Health Instantly (2026)</title>
        <meta name="description" content="Check your gum disease risk with this free calculator. Identify early signs of gingivitis and improve your gum health. Get personalized recommendations." />
        <link rel="canonical" href="https://www.bestoralhealthguide.com/tools/gum-disease-risk-calculator" />
      </Helmet>

      <div className="bg-slate-50 min-h-screen py-12 md:py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Intro Section */}
          {!showResult && currentStep === 0 && (
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="md:w-1/2">
                  <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2 block">Free Diagnostic Tool</span>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                    Gum Disease Risk Calculator
                  </h1>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Gum disease is incredibly common, yet millions remain completely unaware of the early symptoms until permanent damage occurs. Ignoring minor signs like occasional bleeding or slight swelling can lead to irreversible bone loss. 
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our free Risk Calculator helps you evaluate your daily habits and identify potential warning signs before they escalate. By answering 7 simple questions, you'll receive customized, actionable recommendations to protect your foundation.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1679136287096-cb864ebf9b10?auto=format&fit=crop&q=80&w=800" 
                    alt="Healthy teeth and gums checkup" 
                    className="rounded-xl shadow-lg w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Quiz Container */}
          {!showResult ? (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-16">
              {/* Progress Bar */}
              <div className="bg-gray-100 h-2 w-full">
                <motion.div 
                  className="bg-blue-600 h-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              <div className="p-8 md:p-12">
                <div className="text-sm font-bold text-gray-400 mb-6 uppercase tracking-wider">
                  Question {currentStep + 1} of {questions.length}
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                      {questions[currentStep].question}
                    </h2>
                    
                    <div className="space-y-4">
                      {questions[currentStep].options.map((option, index) => {
                        const isSelected = answers[currentStep] === option.value;
                        return (
                          <button
                            key={index}
                            onClick={() => handleOptionSelect(option.value)}
                            className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${
                              isSelected 
                                ? 'border-blue-600 bg-blue-50 shadow-md' 
                                : 'border-gray-200 hover:border-blue-400 hover:bg-gray-50'
                            }`}
                          >
                            <span className={`text-lg font-medium ${isSelected ? 'text-blue-900' : 'text-gray-700 group-hover:text-gray-900'}`}>
                              {option.label}
                            </span>
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              isSelected ? 'border-blue-600' : 'border-gray-300'
                            }`}>
                              {isSelected && <div className="w-3 h-3 bg-blue-600 rounded-full" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-10 flex justify-between items-center pt-6 border-t border-gray-100">
                  <button
                    onClick={handlePrev}
                    disabled={currentStep === 0}
                    className={`flex items-center px-4 py-2 text-gray-600 font-medium transition-colors ${
                      currentStep === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:text-blue-600'
                    }`}
                  >
                    <ArrowLeft className="mr-2" size={20} /> Previous
                  </button>
                  
                  <button
                    onClick={handleNext}
                    disabled={answers[currentStep] === null}
                    className={`flex items-center px-8 py-3 rounded-xl font-bold transition-all shadow-md ${
                      answers[currentStep] === null 
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5'
                    }`}
                  >
                    {currentStep === questions.length - 1 ? 'Check My Gum Health' : 'Next Question'} 
                    {currentStep !== questions.length - 1 && <ArrowRight className="ml-2" size={20} />}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              {renderResult()}
            </motion.div>
          )}

          {/* Post-Quiz Content Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 prose max-w-none text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Improve Your Gum Health</h2>
            <p>
              Whether you scored low or high on our risk calculator, proactive daily care is your best defense against periodontal disease. Reversing inflammation and maintaining healthy connective tissue requires consistent, proper hygiene techniques. Follow these crucial steps:
            </p>
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li><strong>Brush Twice Daily:</strong> Use a soft-bristled brush and fluoride toothpaste. Angle the bristles at 45 degrees towards the gum line to gently sweep away plaque without causing recession.</li>
              <li><strong>Floss Daily:</strong> Brushing alone misses 40% of your tooth's surface. Flossing removes the sticky biofilm wedged between teeth before it hardens into destructive tartar.</li>
              <li><strong>Clean Your Tongue:</strong> The back of your tongue harbors millions of bacteria. Using a tongue scraper reduces the bacterial load that contributes to halitosis and gum infections.</li>
              <li><strong>Use Therapeutic Mouthwash:</strong> Incorporate an alcohol-free rinse to soothe inflammation. Discover our top recommendations in the <Link to="/blog/best-mouthwash-for-gum-disease" className="text-blue-600 hover:underline">Best Mouthwash for Gum Disease</Link> guide.</li>
              <li><strong>Visit Your Dentist:</strong> Schedule professional cleanings every 6 months to remove the calculus (tartar) that you cannot brush away at home.</li>
            </ul>

            <img 
              src="https://images.unsplash.com/photo-1694678459294-da579f249296?auto=format&fit=crop&q=80&w=1200" 
              alt="Patient receiving a dental checkup" 
              className="w-full h-80 object-cover rounded-xl my-10 shadow-sm"
            />

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Signs of Gum Disease</h2>
            <p>
              Gum disease often progresses painlessly, making it easy to ignore until severe damage is done. Be vigilant and monitor your mouth for these common warning signs:
            </p>
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li><strong>Bleeding Gums:</strong> Healthy gums never bleed. If you notice a pink tint in the sink, it is a sign of an active infection. Learn more in <Link to="/blog/why-do-my-gums-bleed-when-i-brush" className="text-blue-600 hover:underline">Why Do My Gums Bleed When I Brush?</Link>.</li>
              <li><strong>Swollen or Red Gums:</strong> Inflammation causes gums to appear puffy, dark red, and tender rather than firm and light pink.</li>
              <li><strong>Gum Sensitivity:</strong> Pain while brushing or eating hot/cold foods.</li>
              <li><strong>Bad Breath:</strong> Deep periodontal pockets trap bacteria, resulting in persistent halitosis that doesn't disappear with mints.</li>
              <li><strong>Receding Gums:</strong> Teeth appearing longer because the gum tissue is pulling away.</li>
              <li><strong>Loose Teeth:</strong> Advanced bone loss causes teeth to shift or feel unstable.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">When to See a Dentist</h2>
            <p>
              While upgrading your home care routine is essential, certain symptoms require immediate professional evaluation. You should schedule an appointment with a dentist if you experience persistent bleeding that lasts for more than two weeks despite improved hygiene. Furthermore, severe pain, visible pus, sudden tooth mobility, or rapidly receding gums are dental emergencies.
            </p>
            <p className="mb-8">
              A professional evaluation includes measuring your periodontal pockets to assess bone loss accurately. Do not let embarrassment or fear delay your treatment; modern dentistry offers highly effective, comfortable solutions to halt disease progression. Read our <Link to="/blog/gum-disease-complete-guide" className="text-blue-600 hover:underline">Gum Disease Complete Guide</Link> to understand your treatment options fully.
            </p>

            <div className="bg-gray-100 p-6 rounded-xl text-sm text-gray-600 italic border border-gray-200 mt-12 mb-12">
              <strong>Medical Disclaimer:</strong> This tool is for educational purposes only and does not replace professional medical or dental advice. The scores generated are based on general symptoms and should not be used as a definitive diagnosis. Always consult a licensed dentist or healthcare professional for the proper diagnosis and treatment of gum disease or any other oral health concerns.
            </div>

            <RelatedArticles articles={relatedGuidesList} title="Related Guides" />
            <RecommendedProducts products={recommendedProductsList} />

          </div>
        </div>
      </div>
    </>
  );
};

export default GumDiseaseRiskCalculatorPage;