import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, ShieldCheck, AlertTriangle, ArrowRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResultCard = ({ title, icon: Icon, colorClass, bgClass, score, children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
  >
    <div className={`${bgClass} p-8 text-center relative overflow-hidden`}>
      <Icon size={48} className={`mx-auto mb-4 ${colorClass} relative z-10`} />
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 relative z-10">{title}</h2>
      <div className="inline-block px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full text-gray-800 font-bold mt-4 relative z-10">
        Sensitivity Score: {score}/10
      </div>
    </div>
    <div className="p-8">
      {children}
      
      <div className="mt-10 p-6 bg-blue-50 rounded-xl border border-blue-100 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to find relief?</h3>
        <Link 
          to="/blog/improve-gum-health" 
          className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-colors shadow-md hover:shadow-lg"
        >
          Fix Your Tooth Sensitivity Now <ArrowRight className="ml-2" size={20} />
        </Link>
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium">
          <Link to="/tools/gum-disease-risk-calculator" className="text-blue-600 hover:underline">Check Gum Disease Risk</Link>
          <span className="hidden sm:inline text-gray-300">•</span>
          <Link to="/blog/best-toothpaste-for-gum-disease" className="text-blue-600 hover:underline">Best Toothpaste Guide</Link>
        </div>
      </div>
    </div>
  </motion.div>
);

export const LowSensitivityResult = ({ score }) => (
  <ResultCard 
    title="Low Sensitivity" 
    icon={ShieldCheck} 
    colorClass="text-green-600" 
    bgClass="bg-green-50"
    score={score}
  >
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 border-b pb-2">What This Means</h3>
        <p className="text-gray-700">Your results indicate minimal or normal tooth sensitivity. Occasional twinges to extreme temperatures are common, but your enamel and gums appear to be in good condition.</p>
      </div>
      
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 border-b pb-2">Personalized Advice</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li><strong>Maintain your routine:</strong> Continue brushing twice daily with a soft-bristled brush.</li>
          <li><strong>Don't brush too hard:</strong> Aggressive brushing can wear down your healthy enamel over time.</li>
          <li><strong>Monitor acidic foods:</strong> Enjoy citrus and sodas in moderation to protect your enamel.</li>
          <li><strong>Stay consistent:</strong> Regular flossing prevents gum recession, which is a leading cause of future sensitivity.</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
        <strong>When to see a dentist:</strong> Continue your regular 6-month checkups. If your sensitivity suddenly increases or becomes localized to one tooth, schedule a visit sooner.
      </div>
    </div>
  </ResultCard>
);

export const ModerateSensitivityResult = ({ score }) => (
  <ResultCard 
    title="Moderate Sensitivity" 
    icon={Activity} 
    colorClass="text-yellow-500" 
    bgClass="bg-yellow-50"
    score={score}
  >
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 border-b pb-2">What This Means</h3>
        <p className="text-gray-700">You are experiencing moderate tooth sensitivity. This often points to early enamel wear, mild gum recession exposing the root, or a diet high in acidic foods that temporarily soften the tooth surface.</p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 border-b pb-2">Likely Causes</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
          <li>Mild enamel erosion from acidic foods or beverages</li>
          <li>Early stages of gum recession exposing dentin</li>
          <li>Brushing too forcefully with a medium/hard brush</li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 border-b pb-2">Personalized Advice</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li><strong>Switch your toothpaste:</strong> Start using a desensitizing toothpaste containing potassium nitrate.</li>
          <li><strong>Upgrade your brush:</strong> Switch immediately to an extra-soft bristled toothbrush.</li>
          <li><strong>Adjust technique:</strong> Brush gently in circular motions, rather than sawing back and forth.</li>
          <li><strong>Wait to brush:</strong> Don't brush immediately after eating acidic foods; wait at least 30 minutes.</li>
        </ul>
      </div>

      <div className="bg-yellow-100/50 p-4 rounded-lg text-sm text-gray-800 border border-yellow-200">
        <strong>When to see a dentist:</strong> If switching to sensitivity toothpaste doesn't help after 2-4 weeks, or if the pain starts lingering long after the hot/cold trigger is gone, schedule an evaluation.
      </div>
    </div>
  </ResultCard>
);

export const HighSensitivityResult = ({ score }) => (
  <ResultCard 
    title="High Sensitivity" 
    icon={AlertCircle} 
    colorClass="text-red-500" 
    bgClass="bg-red-50"
    score={score}
  >
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 border-b pb-2">What This Means</h3>
        <p className="text-gray-700 font-medium">Your results indicate high, potentially severe tooth sensitivity. This level of discomfort usually requires professional evaluation as it significantly impacts daily life and may indicate underlying dental issues.</p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 border-b pb-2">Likely Causes</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
          <li>Significant enamel loss or tooth decay (cavities)</li>
          <li>Advanced gum recession or periodontal disease</li>
          <li>A cracked tooth or damaged dental filling</li>
          <li>Severe teeth grinding (bruxism) exposing inner dentin</li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 border-b pb-2">Personalized Advice</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li><strong>Seek professional care:</strong> A dentist can apply fluoride varnishes or resins to protect exposed roots.</li>
          <li><strong>Immediate relief:</strong> Use desensitizing toothpaste, but rub a thin layer directly onto the sore teeth before bed.</li>
          <li><strong>Avoid triggers:</strong> Temporarily eliminate highly acidic foods, ice-cold drinks, and sugary snacks.</li>
          <li><strong>Check for grinding:</strong> Ask your dentist if a nighttime mouthguard is appropriate for you.</li>
        </ul>
      </div>

      <div className="bg-red-100 p-4 rounded-lg text-sm text-red-900 border border-red-200 flex items-start">
        <AlertTriangle className="mr-3 flex-shrink-0 mt-0.5" size={18} />
        <div>
          <strong>When to see a dentist:</strong> Immediately. Sharp, lingering pain, or pain that wakes you up at night, could indicate an infection or nerve damage requiring prompt treatment.
        </div>
      </div>
    </div>
  </ResultCard>
);

export const ResultDisplay = ({ score, answers }) => {
  if (score <= 3) return <LowSensitivityResult score={score} />;
  if (score <= 7) return <ModerateSensitivityResult score={score} />;
  return <HighSensitivityResult score={score} />;
};