import React, { useState } from 'react';
import Question from './Question';
import { ResultDisplay } from './Results';

const questions = [
  {
    id: 'cold',
    text: 'Do your teeth hurt when you eat or drink something cold (like ice cream or ice water)?',
    options: [
      { label: 'Yes, often and noticeably', value: 2 },
      { label: 'Sometimes, a mild twinge', value: 1 },
      { label: 'No, rarely or never', value: 0 }
    ]
  },
  {
    id: 'hot',
    text: 'Do your teeth feel sensitive when consuming hot drinks (like coffee or tea)?',
    options: [
      { label: 'Yes, it causes sharp pain', value: 2 },
      { label: 'Sometimes, but it passes quickly', value: 1 },
      { label: 'No, hot drinks are fine', value: 0 }
    ]
  },
  {
    id: 'sweet',
    text: 'Do you experience discomfort when eating sugary or highly acidic foods?',
    options: [
      { label: 'Yes, sweets consistently cause pain', value: 2 },
      { label: 'Occasionally, with very sweet/sour items', value: 1 },
      { label: 'No discomfort from sweets', value: 0 }
    ]
  },
  {
    id: 'brushing',
    text: 'Does brushing or flossing your teeth cause pain or sensitivity?',
    options: [
      { label: 'Yes, certain areas are very tender', value: 2 },
      { label: 'Sometimes, usually near the gumline', value: 1 },
      { label: 'No, brushing is comfortable', value: 0 }
    ]
  },
  {
    id: 'pain_type',
    text: 'When you do feel sensitivity, how would you describe the pain?',
    options: [
      { label: 'Sharp and lingering (lasts after the trigger is gone)', value: 2 },
      { label: 'Sharp but brief (stops when trigger is removed)', value: 1 },
      { label: 'Dull ache or none at all', value: 0 }
    ]
  }
];

const TestFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswer = (value) => {
    const currentQuestionId = questions[currentStep].id;
    const newAnswers = { ...answers, [currentQuestionId]: value };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateScore = () => {
    return Object.values(answers).reduce((total, val) => total + val, 0);
  };

  if (isComplete) {
    return <ResultDisplay score={calculateScore()} answers={answers} />;
  }

  const currentQuestion = questions[currentStep];

  return (
    <div className="min-h-[400px] flex items-center justify-center w-full">
      <Question
        questionText={currentQuestion.text}
        options={currentQuestion.options}
        onAnswer={handleAnswer}
        onBack={handleBack}
        currentStep={currentStep + 1}
        totalSteps={questions.length}
      />
    </div>
  );
};

export default TestFlow;