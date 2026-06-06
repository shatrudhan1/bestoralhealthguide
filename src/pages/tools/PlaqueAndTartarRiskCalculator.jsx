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
  Activity,
  Droplets,
  Wind,
  Zap
} from 'lucide-react';

const questions = [
  {
    id: 1,
    question: "Do you brush your teeth twice daily?",
    options: [
      { label: "Yes", value: 0 },
      { label: "Sometimes", value: 1 },
      { label: "No", value: 2 }
    ]
  },
  {
    id: 2,
    question: "Do you floss regularly?",
    options: [
      { label: "Yes", value: 0 },
      { label: "Sometimes", value: 1 },
      { label: "No", value: 2 }
    ]
  },
  {
    id: 3,
    question: "Do you notice yellow or hard buildup on your teeth?",
    options: [
      { label: "No", value: 0 },
      { label: "Sometimes", value: 1 },
      { label: "Yes", value: 2 }
    ]
  },
  {
    id: 4,
    question: "Do you experience bad breath often?",
    options: [
      { label: "No", value: 0 },
      { label: "Sometimes", value: 1 },
      { label: "Yes", value: 2 }
    ]
  },
  {
    id: 5,
    question: "When was your last dental cleaning?",
    options: [
      { label: "Less than 6 months ago", value: 0 },
      { label: "6-12 months ago", value: 1 },
      { label: "More than 1 year ago", value: 2 }
    ]
  }
];

const PlaqueAndTartarRiskCalculator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (showResult) {
      window.scrollTo(0, 0);
    }
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

  const renderResult = () => {
    if (score <= 3) {
      return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-green-600 p-8 text-center text-white relative overflow-hidden">
            <CheckCircle className="mx-auto mb-4 opacity-90" size={64} />
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 relative z-10">Great! Your Plaque & Tartar Risk is Low</h2>
            <p className="text-green-100 font-medium relative z-10">Score: {score} out of 10 | LOW RISK</p>
            <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10"><ShieldCheck size={200} /></div>
          </div>
          <div className="p-8 md:p-10">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Your current oral hygiene habits are excellent. You're doing a great job maintaining your teeth and gums. Your low plaque and tartar risk means you're taking the right steps to prevent tooth decay and gum disease. Keep up your current routine and you'll maintain healthy teeth for years to come.
            </p>
            
            <div className="bg-green-50 rounded-xl p-6 mb-8 border border-green-100">
              <h4 className="font-bold text-green-900 mb-2">Why It's Happening:</h4>
              <p className="text-green-800 mb-4">You brush twice daily consistently, floss regularly, visit dentist regularly, have good oral hygiene habits, and avoid excessive sugar.</p>
              
              <h4 className="font-bold text-green-900 mb-3 flex items-center"><ShieldCheck className="text-green-600 mr-2" size={20}/> Action Steps:</h4>
              <ol className="space-y-2 text-green-800 list-decimal pl-5 font-medium">
                <li>Continue brushing twice daily with fluoride toothpaste</li>
                <li>Keep flossing daily</li>
                <li>Maintain regular dental checkups (every 6 months)</li>
                <li>Avoid sugary foods and drinks</li>
                <li>Use mouthwash if desired</li>
              </ol>
              <p className="mt-4 font-bold text-green-700 italic">Encouragement: You're on the right track! Keep maintaining these healthy habits.</p>
            </div>

            <div className="flex justify-center">
              <button onClick={resetQuiz} className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-colors flex items-center justify-center">
                <RefreshCcw className="mr-2" size={18} /> Retake Assessment
              </button>
            </div>
          </div>
        </div>
      );
    } else if (score <= 6) {
      return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-yellow-500 p-8 text-center text-white relative overflow-hidden">
            <AlertTriangle className="mx-auto mb-4 opacity-90" size={64} />
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 relative z-10">Moderate Plaque & Tartar Risk - Time to Improve</h2>
            <p className="text-yellow-100 font-medium relative z-10">Score: {score} out of 10 | MODERATE RISK</p>
            <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10"><Info size={200} /></div>
          </div>
          <div className="p-8 md:p-10">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              You have some risk factors for plaque and tartar buildup. This is common and very manageable with small changes to your oral care routine. By making a few adjustments, you can significantly reduce your risk and prevent more serious dental problems. The good news is that moderate risk is reversible with consistent effort.
            </p>
            
            <div className="bg-yellow-50 rounded-xl p-6 mb-8 border border-yellow-100">
              <h4 className="font-bold text-yellow-900 mb-2">Why It's Happening:</h4>
              <p className="text-yellow-800 mb-4">Inconsistent brushing or flossing, longer time since last dental cleaning, some visible buildup on teeth, occasional bad breath, room for improvement in daily habits.</p>
              
              <h4 className="font-bold text-yellow-900 mb-3 flex items-center"><Activity className="text-yellow-600 mr-2" size={20}/> Action Steps:</h4>
              <ol className="space-y-2 text-yellow-800 list-decimal pl-5 font-medium">
                <li>Commit to brushing twice daily (2 minutes each time)</li>
                <li>Start flossing daily if you haven't already</li>
                <li>Schedule a dental cleaning if overdue</li>
                <li>Reduce sugary snacks and drinks</li>
                <li>Consider using an electric toothbrush</li>
                <li>Use fluoride mouthwash daily</li>
              </ol>
              <p className="mt-4 font-bold text-yellow-700 italic">Encouragement: Small changes now prevent big problems later. You've got this!</p>
            </div>

            <div className="flex justify-center">
              <button onClick={resetQuiz} className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-colors flex items-center justify-center">
                <RefreshCcw className="mr-2" size={18} /> Retake Assessment
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-red-600 p-8 text-center text-white relative overflow-hidden">
            <Stethoscope className="mx-auto mb-4 opacity-90" size={64} />
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 relative z-10">High Plaque & Tartar Risk - Professional Help Needed</h2>
            <p className="text-red-100 font-medium relative z-10">Score: {score} out of 10 | HIGH RISK</p>
            <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10"><AlertTriangle size={200} /></div>
          </div>
          <div className="p-8 md:p-10">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              You have significant risk factors for plaque and tartar buildup. This requires immediate attention to prevent serious dental problems like gum disease, tooth decay, and tooth loss. The good news is that with professional help and consistent daily care, you can dramatically improve your oral health. Don't delay—taking action now can save your teeth and money.
            </p>
            
            <div className="bg-red-50 rounded-xl p-6 mb-8 border border-red-100">
              <h4 className="font-bold text-red-900 mb-2">Why It's Happening:</h4>
              <p className="text-red-800 mb-4">Infrequent or inconsistent brushing, not flossing regularly, visible yellow or hard buildup on teeth, persistent bad breath, long time since last dental cleaning, possible underlying gum disease.</p>
              
              <h4 className="font-bold text-red-900 mb-3 flex items-center"><AlertTriangle className="text-red-600 mr-2" size={20}/> Action Steps:</h4>
              <ol className="space-y-2 text-red-800 list-decimal pl-5 font-medium">
                <li>Schedule a dental appointment immediately</li>
                <li>Get professional plaque and tartar removal</li>
                <li>Ask dentist about gum disease screening</li>
                <li>Commit to brushing twice daily (2 minutes)</li>
                <li>Start flossing daily</li>
                <li>Reduce sugar intake significantly</li>
                <li>Consider professional cleaning every 3-4 months</li>
                <li>Use prescription mouthwash if recommended</li>
              </ol>
              <p className="mt-4 font-bold text-red-700 italic">Encouragement: Professional help + daily care = healthy teeth. Schedule that appointment today!</p>
            </div>

            <div className="flex justify-center">
              <button onClick={resetQuiz} className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-colors flex items-center justify-center">
                <RefreshCcw className="mr-2" size={18} /> Retake Assessment
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <Helmet>
        <title>Plaque & Tartar Risk Calculator | Free Oral Health Assessment</title>
        <meta name="description" content="Assess your plaque and tartar buildup risk with our interactive calculator. Get personalized recommendations to improve your oral health and prevent gum disease." />
        <link rel="canonical" href="https://www.bestoralhealthguide.com/tools/plaque-tartar-risk-calculator" />
      </Helmet>

      <div className="bg-slate-50 min-h-screen py-12 md:py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Quick Answer Section */}
          {!showResult && currentStep === 0 && (
            <div className="mb-12">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                  Plaque & Tartar Risk Calculator
                </h1>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                <p className="text-gray-800 text-lg m-0 font-medium">
                  Plaque is a sticky film of bacteria that forms on teeth daily. Tartar is hardened plaque that only a dentist can remove. Checking your plaque and tartar risk helps you understand your oral health and take preventive action. Early intervention prevents gum disease, tooth decay, and costly dental treatments.
                </p>
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
                            className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group min-h-[44px] ${
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
                    className={`flex items-center px-4 py-2 text-gray-600 font-medium transition-colors min-h-[44px] ${
                      currentStep === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:text-blue-600'
                    }`}
                  >
                    <ArrowLeft className="mr-2" size={20} /> Back
                  </button>
                  
                  <button
                    onClick={handleNext}
                    disabled={answers[currentStep] === null}
                    className={`flex items-center px-8 py-3 rounded-xl font-bold transition-all shadow-md min-h-[44px] ${
                      answers[currentStep] === null 
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5'
                    }`}
                  >
                    {currentStep === questions.length - 1 ? 'Calculate Risk' : 'Next'} 
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

          {/* Actionable Advice Section - Only show when results are visible */}
          {showResult && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10 mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Reduce Plaque & Tartar Buildup</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mr-4 mt-1">
                      <Droplets size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-2">Tip 1: Brush Twice Daily (2 minutes each)</h3>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Use fluoride toothpaste</li>
                        <li>Brush all surfaces (front, back, chewing)</li>
                        <li>Use gentle circular motions</li>
                        <li>Don't rinse immediately after brushing</li>
                        <li>Replace brush every 3 months</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mr-4 mt-1">
                      <Activity size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-2">Tip 2: Floss Daily</h3>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Floss between all teeth</li>
                        <li>Use proper technique (C-shape around tooth)</li>
                        <li>Floss before brushing</li>
                        <li>Don't skip any teeth</li>
                        <li>Use floss picks if string floss is difficult</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mr-4 mt-1">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-2">Tip 3: Use Proper Brushing Technique</h3>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Hold brush at 45-degree angle</li>
                        <li>Use gentle pressure (not aggressive)</li>
                        <li>Brush for full 2 minutes</li>
                        <li>Don't scrub horizontally</li>
                        <li>Use electric toothbrush if possible</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mr-4 mt-1">
                      <Wind size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-2">Tip 4: Reduce Sugar Intake</h3>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Limit sugary snacks and drinks</li>
                        <li>Avoid soda and energy drinks</li>
                        <li>Reduce candy and desserts</li>
                        <li>Drink water instead</li>
                        <li>Eat sugar-free alternatives</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mr-4 mt-1">
                      <Stethoscope size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-2">Tip 5: Visit Dentist Regularly</h3>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Schedule cleaning every 6 months</li>
                        <li>More frequent if high risk</li>
                        <li>Get professional plaque removal</li>
                        <li>Screen for gum disease</li>
                        <li>Catch problems early</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mr-4 mt-1">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-2">Tip 6: Use Mouthwash</h3>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Use fluoride mouthwash daily</li>
                        <li>Consider antimicrobial mouthwash</li>
                        <li>Use after brushing and flossing</li>
                        <li>Don't rinse with water after</li>
                        <li>Helps reduce bacteria</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Related Tools Section */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-200 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/tools/gum-disease-risk-calculator" className="block bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover:border-blue-300">
                <h3 className="font-bold text-blue-700 mb-2">Check your gum health &rarr;</h3>
                <p className="text-sm text-gray-600">Assess your risk for gum disease and get personalized prevention tips.</p>
              </Link>
              <Link to="/tools/bad-breath-cause-checker" className="block bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover:border-blue-300">
                <h3 className="font-bold text-blue-700 mb-2">Evaluate your bad breath risk &rarr;</h3>
                <p className="text-sm text-gray-600">Discover what might be causing your bad breath and how to fix it.</p>
              </Link>
              <Link to="/tools/tooth-sensitivity-test" className="block bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover:border-blue-300">
                <h3 className="font-bold text-blue-700 mb-2">Test your tooth sensitivity &rarr;</h3>
                <p className="text-sm text-gray-600">Find out your sensitivity level and get relief recommendations.</p>
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-gray-100 p-6 rounded-xl text-sm text-gray-500 text-center border border-gray-200">
            <strong>Disclaimer:</strong> This tool is for informational purposes only and is not a substitute for professional dental advice. Always consult with a qualified dentist for diagnosis and treatment. If you experience severe pain or symptoms, seek immediate dental care.
          </div>

        </div>
      </div>
    </>
  );
};

export default PlaqueAndTartarRiskCalculator;