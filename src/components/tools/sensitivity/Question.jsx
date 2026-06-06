import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

const Question = ({ questionText, options, onAnswer, onBack, currentStep, totalSteps }) => {
  const progressPercentage = ((currentStep) / totalSteps) * 100;

  return (
    <motion.div
      key={currentStep}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8"
    >
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Step {currentStep} of {totalSteps}
          </span>
          {currentStep > 1 && (
            <button
              onClick={onBack}
              className="text-gray-500 hover:text-blue-600 flex items-center text-sm font-medium transition-colors"
              aria-label="Go back to previous question"
            >
              <ChevronLeft size={16} className="mr-1" /> Back
            </button>
          )}
        </div>
        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
          <div
            className="bg-blue-600 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-tight">
        {questionText}
      </h2>

      <div className="space-y-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option.value)}
            className="w-full text-left p-4 md:p-5 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 text-lg font-medium text-gray-800 min-h-[60px] flex items-center"
          >
            <span className="w-8 h-8 rounded-full border-2 border-gray-300 mr-4 flex items-center justify-center text-gray-400 group-hover:border-blue-500 group-hover:text-blue-500 flex-shrink-0">
              {String.fromCharCode(65 + index)}
            </span>
            {option.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default Question;