import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  AlertTriangle, 
  Activity, 
  ArrowRight, 
  RefreshCcw, 
  ShieldCheck,
  Stethoscope,
  HeartPulse,
  Info,
  ChevronDown
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const questions = [
  {
    id: 'q1',
    question: "Do you brush your teeth twice daily?",
    options: [
      { label: "Yes", value: 0 },
      { label: "Sometimes", value: 1 },
      { label: "No", value: 2 }
    ]
  },
  {
    id: 'q2',
    question: "Do you floss regularly?",
    options: [
      { label: "Yes", value: 0 },
      { label: "Sometimes", value: 1 },
      { label: "No", value: 2 }
    ]
  },
  {
    id: 'q3',
    question: "Do you experience bad breath?",
    options: [
      { label: "No", value: 0 },
      { label: "Sometimes", value: 1 },
      { label: "Yes", value: 2 }
    ]
  },
  {
    id: 'q4',
    question: "Do your gums bleed while brushing?",
    options: [
      { label: "No", value: 0 },
      { label: "Sometimes", value: 1 },
      { label: "Yes", value: 2 }
    ]
  },
  {
    id: 'q5',
    question: "Do you feel tooth sensitivity?",
    options: [
      { label: "No", value: 0 },
      { label: "Sometimes", value: 1 },
      { label: "Yes", value: 2 }
    ]
  },
  {
    id: 'q6',
    question: "Do you notice plaque buildup on your teeth?",
    options: [
      { label: "No", value: 0 },
      { label: "Sometimes", value: 1 },
      { label: "Yes", value: 2 }
    ]
  },
  {
    id: 'q7',
    question: "When was your last dental checkup?",
    options: [
      { label: "Less than 6 months ago", value: 0 },
      { label: "6-12 months ago", value: 1 },
      { label: "More than 1 year ago", value: 2 }
    ]
  }
];

const OralHealthScoreAnalyzer = () => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (showResults) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showResults]);

  const handleSelect = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateScore = () => {
    const totalPoints = Object.values(answers).reduce((sum, val) => sum + val, 0);
    // Max points = 14. 0 points = 100%, 14 points = 0%
    const calculatedScore = Math.round(100 - (totalPoints / 14) * 100);
    setScore(calculatedScore);
    setShowResults(true);
  };

  const resetTest = () => {
    setAnswers({});
    setShowResults(false);
    setScore(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const allAnswered = questions.every(q => answers[q.id] !== undefined);

  const getScoreLevel = (s) => {
    if (s >= 90) return { text: "Excellent", color: "bg-green-600", lightBg: "bg-green-50", icon: ShieldCheck, textColor: "text-green-800" };
    if (s >= 70) return { text: "Good", color: "bg-emerald-500", lightBg: "bg-emerald-50", icon: CheckCircle, textColor: "text-emerald-800" };
    if (s >= 50) return { text: "Moderate", color: "bg-yellow-500", lightBg: "bg-yellow-50", icon: Info, textColor: "text-yellow-800" };
    if (s >= 30) return { text: "Fair", color: "bg-orange-500", lightBg: "bg-orange-50", icon: AlertTriangle, textColor: "text-orange-800" };
    return { text: "Poor", color: "bg-red-600", lightBg: "bg-red-50", icon: HeartPulse, textColor: "text-red-800" };
  };

  const scoreData = getScoreLevel(score);
  const ScoreIcon = scoreData.icon;

  return (
    <div className="max-w-4xl mx-auto">
      {/* INTRO SECTION */}
      {!showResults && (
        <div className="text-center mb-10">
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Your oral health score reveals how well you're caring for your teeth and gums. This quick assessment analyzes your daily habits and symptoms to give you a personalized health score. Based on your results, you'll get actionable tips to improve your oral health. Take the test in less than 2 minutes.
          </p>
        </div>
      )}

      {/* FORM SECTION */}
      {!showResults ? (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-10 mb-12">
          <div className="space-y-8">
            {questions.map((q, index) => (
              <div key={q.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {index + 1}. {q.question}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {q.options.map((opt) => {
                    const isSelected = answers[q.id] === opt.value;
                    return (
                      <button
                        key={opt.label}
                        onClick={() => handleSelect(q.id, opt.value)}
                        className={`p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center justify-between ${
                          isSelected 
                            ? 'border-blue-600 bg-blue-50 shadow-sm' 
                            : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                        }`}
                      >
                        <span className={`font-medium ${isSelected ? 'text-blue-900' : 'text-gray-700'}`}>
                          {opt.label}
                        </span>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          isSelected ? 'border-blue-600' : 'border-gray-300'
                        }`}>
                          {isSelected && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center pt-6 border-t border-gray-100">
            <button
              onClick={calculateScore}
              disabled={!allAnswered}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-md flex items-center ${
                !allAnswered 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5'
              }`}
            >
              Calculate Score <Activity className="ml-2" size={20} />
            </button>
          </div>
          {!allAnswered && (
            <p className="text-center text-sm text-gray-500 mt-3">Please answer all questions to calculate your score.</p>
          )}
        </div>
      ) : (
        /* RESULTS SECTION */
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 mb-12"
        >
          {/* Score Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className={`${scoreData.color} p-10 text-center text-white relative overflow-hidden`}>
              <ScoreIcon className="mx-auto mb-4 opacity-90" size={64} />
              <h2 className="text-5xl md:text-7xl font-extrabold mb-2 relative z-10">{score}</h2>
              <p className="text-xl font-medium relative z-10 opacity-90">out of 100</p>
              <h3 className="text-2xl md:text-3xl font-bold mt-4 relative z-10">Your Oral Health Score: {scoreData.text}</h3>
              <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10">
                <ScoreIcon size={250} />
              </div>
            </div>
            
            <div className="p-8 md:p-10">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {score >= 90 ? "Outstanding! Your habits are perfectly aligned with optimal oral health. You are actively preventing decay, gum disease, and maintaining a bright smile. Keep up the excellent work and continue your regular dental visits." : 
                 score >= 70 ? "Good job! You have a solid foundation of oral hygiene. However, there is slight room for improvement. By fine-tuning a few daily habits, you can easily push your score into the excellent range and fully protect your teeth." :
                 score >= 50 ? "Your oral health requires attention. While you are doing some things right, significant gaps in your routine are leaving you vulnerable to plaque buildup, cavities, and early gum disease. Small changes will make a big difference." :
                 score >= 30 ? "Warning: Your oral health is at risk. Your current habits are likely allowing bacterial plaque to thrive, which can lead to irreversible damage. Immediate improvements in brushing, flossing, and professional care are necessary." :
                 "Critical Alert: Your score indicates severe risk for dental complications. Poor daily habits combined with neglected professional care strongly increase your chances of tooth loss and severe gum disease. Please consult a dentist immediately."}
              </p>

              {/* Personalized Suggestions */}
              <div className={`${scoreData.lightBg} rounded-xl p-6 border border-gray-200 mb-8`}>
                <h4 className={`font-bold text-xl mb-4 ${scoreData.textColor}`}>Personalized Action Plan:</h4>
                <ul className="space-y-3">
                  {answers['q1'] > 0 && (
                    <li className="flex items-start">
                      <ArrowRight className={`mr-2 mt-1 flex-shrink-0 ${scoreData.textColor}`} size={18} />
                      <span><strong>Improve Brushing:</strong> Upgrade your brushing routine to twice daily for 2 full minutes. <Link to="/blog/best-brushing-routine-healthy-gums" className="underline font-medium hover:text-blue-700">Learn proper technique.</Link></span>
                    </li>
                  )}
                  {answers['q2'] > 0 && (
                    <li className="flex items-start">
                      <ArrowRight className={`mr-2 mt-1 flex-shrink-0 ${scoreData.textColor}`} size={18} />
                      <span><strong>Start Flossing:</strong> Floss daily to remove plaque between teeth where your brush can't reach. <Link to="/blog/proper-flossing-healthy-gums" className="underline font-medium hover:text-blue-700">See flossing guide.</Link></span>
                    </li>
                  )}
                  {answers['q3'] > 0 && (
                    <li className="flex items-start">
                      <ArrowRight className={`mr-2 mt-1 flex-shrink-0 ${scoreData.textColor}`} size={18} />
                      <span><strong>Address Bad Breath:</strong> Persistent halitosis may indicate deeper plaque or gum issues. <Link to="/tools/bad-breath-cause-checker" className="underline font-medium hover:text-blue-700">Check bad breath causes.</Link></span>
                    </li>
                  )}
                  {answers['q4'] > 0 && (
                    <li className="flex items-start">
                      <ArrowRight className={`mr-2 mt-1 flex-shrink-0 ${scoreData.textColor}`} size={18} />
                      <span><strong>Stop Gum Bleeding:</strong> Bleeding gums need immediate attention—improve hygiene and see a dentist. <Link to="/tools/gum-disease-risk-calculator" className="underline font-medium hover:text-blue-700">Calculate gum disease risk.</Link></span>
                    </li>
                  )}
                  {answers['q5'] > 0 && (
                    <li className="flex items-start">
                      <ArrowRight className={`mr-2 mt-1 flex-shrink-0 ${scoreData.textColor}`} size={18} />
                      <span><strong>Manage Sensitivity:</strong> Sensitivity may indicate enamel erosion or gum recession. <Link to="/tools/tooth-sensitivity-test" className="underline font-medium hover:text-blue-700">Test your sensitivity level.</Link></span>
                    </li>
                  )}
                  {answers['q6'] > 0 && (
                    <li className="flex items-start">
                      <ArrowRight className={`mr-2 mt-1 flex-shrink-0 ${scoreData.textColor}`} size={18} />
                      <span><strong>Control Plaque:</strong> Visible plaque hardens into tartar quickly and needs immediate attention. <Link to="/tools/plaque-tartar-risk-calculator" className="underline font-medium hover:text-blue-700">Assess plaque risk.</Link></span>
                    </li>
                  )}
                  {answers['q7'] > 0 && (
                    <li className="flex items-start">
                      <ArrowRight className={`mr-2 mt-1 flex-shrink-0 ${scoreData.textColor}`} size={18} />
                      <span><strong>Schedule Checkup:</strong> You are overdue for a professional cleaning. Schedule a dental appointment soon.</span>
                    </li>
                  )}
                  {score === 100 && (
                    <li className="flex items-start">
                      <CheckCircle className={`mr-2 mt-1 flex-shrink-0 ${scoreData.textColor}`} size={18} />
                      <span><strong>Maintain Perfection:</strong> Keep up your flawless routine and never skip a 6-month cleaning!</span>
                    </li>
                  )}
                </ul>
              </div>

              <div className="flex justify-center">
                <button onClick={resetTest} className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-colors flex items-center justify-center">
                  <RefreshCcw className="mr-2" size={18} /> Retake Assessment
                </button>
              </div>
            </div>
          </div>

          {/* Internal Linking Section */}
          <div className="pt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Deep Dive Into Your Oral Health</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/tools/gum-disease-risk-calculator" className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-rose-300 transition-all flex items-center justify-between group">
                <div>
                  <h4 className="font-bold text-rose-700 mb-1">Check your gum health</h4>
                  <p className="text-sm text-gray-600">Assess gingivitis & periodontitis risk</p>
                </div>
                <ArrowRight className="text-gray-400 group-hover:text-rose-600 transition-colors" size={20} />
              </Link>
              <Link to="/tools/plaque-tartar-risk-calculator" className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-teal-300 transition-all flex items-center justify-between group">
                <div>
                  <h4 className="font-bold text-teal-700 mb-1">Test your plaque buildup</h4>
                  <p className="text-sm text-gray-600">Measure tartar accumulation risk</p>
                </div>
                <ArrowRight className="text-gray-400 group-hover:text-teal-600 transition-colors" size={20} />
              </Link>
              <Link to="/tools/tooth-sensitivity-test" className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all flex items-center justify-between group">
                <div>
                  <h4 className="font-bold text-purple-700 mb-1">Analyze your tooth sensitivity</h4>
                  <p className="text-sm text-gray-600">Find causes for hot/cold pain</p>
                </div>
                <ArrowRight className="text-gray-400 group-hover:text-purple-600 transition-colors" size={20} />
              </Link>
              <Link to="/tools/bad-breath-cause-checker" className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex items-center justify-between group">
                <div>
                  <h4 className="font-bold text-blue-700 mb-1">Check your bad breath risk</h4>
                  <p className="text-sm text-gray-600">Identify root causes of halitosis</p>
                </div>
                <ArrowRight className="text-gray-400 group-hover:text-blue-600 transition-colors" size={20} />
              </Link>
            </div>
          </div>
        </motion.div>
      )}

      {/* SUPPORT CONTENT SECTIONS */}
      <div className="space-y-8 mb-16">
        <Card>
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is a Good Oral Health Score?</h2>
            <p className="text-gray-700 mb-4">
              Your oral health score is a comprehensive reflection of your daily hygiene habits and clinical symptoms. A score of <strong>70 or higher</strong> is considered "Good," indicating that you are actively managing plaque and protecting your enamel. Scores of <strong>90 to 100</strong> are "Excellent," representing an optimal routine that prevents long-term dental issues.
            </p>
            <p className="text-gray-700">
              Conversely, scores below 50 suggest that your current routine is inadequate. It means bacterial colonies are likely multiplying faster than you are removing them, setting the stage for tooth decay, receding gums, and eventual tooth loss. Interpreting this score accurately is your first step toward meaningful prevention.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Improve Your Oral Health</h2>
            <p className="text-gray-700 mb-4">
              Improving your score is entirely within your control. Follow these fundamental steps to dramatically boost your oral health:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li><strong>Daily Habits:</strong> Commit strictly to brushing twice a day for two full minutes using a fluoride toothpaste.</li>
              <li><strong>Interdental Cleaning:</strong> Floss every single night. Your toothbrush cannot reach the 40% of the tooth surface hidden between your teeth.</li>
              <li><strong>Dietary Choices:</strong> Drastically reduce snacking on sugary and highly acidic foods, which fuel bacterial growth and erode enamel.</li>
              <li><strong>Professional Care:</strong> Schedule professional dental cleanings every 6 months to remove the hardened calculus (tartar) that home brushing cannot remove.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Daily Habits for Healthy Teeth</h2>
            <p className="text-gray-700 mb-4">
              A robust daily routine is the bedrock of dental longevity. Your <strong>morning routine</strong> should involve brushing after breakfast to remove overnight plaque and food debris. Your <strong>evening routine</strong> is even more critical: you must floss thoroughly and brush meticulously before bed so bacteria do not feast on sugars while your saliva production drops overnight.
            </p>
            <p className="text-gray-700">
              Throughout the day, drink plenty of water to naturally rinse your mouth. Avoid sticky candies, sodas, and constant snacking. Instead, focus on eating crunchy fruits and vegetables, which naturally stimulate saliva flow, and dairy products that help remineralize your enamel.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* FAQ SECTION */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
          <AccordionItem value="item-1" className="border-b border-gray-200 px-6">
            <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-blue-600">What is a normal oral health score?</AccordionTrigger>
            <AccordionContent className="text-gray-700 pb-4">
              A score of 70 or higher is considered good. Scores 90+ are excellent. Most people fall in the 50-80 range. The goal is to improve your score over time through better habits.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-b border-gray-200 px-6">
            <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-blue-600">How can I improve my oral health score?</AccordionTrigger>
            <AccordionContent className="text-gray-700 pb-4">
              Brush twice daily, floss every day, reduce sugar intake, and see your dentist every 6 months. Small improvements in daily habits lead to significant score improvements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b border-gray-200 px-6">
            <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-blue-600">Is this tool accurate?</AccordionTrigger>
            <AccordionContent className="text-gray-700 pb-4">
              This tool provides a general assessment based on your answers. It's not a substitute for professional dental evaluation. For accurate diagnosis, consult your dentist.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-b border-gray-200 px-6">
            <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-blue-600">How often should I check my score?</AccordionTrigger>
            <AccordionContent className="text-gray-700 pb-4">
              Check your score every 3 months to track progress. After making habit changes, retest to see improvement. Regular testing keeps you motivated.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="border-b-0 px-6">
            <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-blue-600">When should I see a dentist?</AccordionTrigger>
            <AccordionContent className="text-gray-700 pb-4">
              See a dentist every 6 months for routine checkups. If your score is below 50 or you have symptoms like pain or bleeding, schedule an appointment sooner.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* DISCLAIMER */}
      <div className="bg-gray-50 p-6 rounded-xl text-sm text-gray-500 text-center border border-gray-200">
        <strong>Medical Disclaimer:</strong> This tool provides general guidance and does not replace professional dental advice. Always consult with a qualified dentist for accurate diagnosis and treatment. If you experience severe pain or symptoms, seek immediate dental care.
      </div>
    </div>
  );
};

export default OralHealthScoreAnalyzer;