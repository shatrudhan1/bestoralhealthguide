import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle, RefreshCw, CheckCircle, Info } from 'lucide-react';

const BadBreathCheckerTool = () => {
  const [q1, setQ1] = useState([]);
  const [q2, setQ2] = useState([]);
  const [q3, setQ3] = useState('');
  const [q4, setQ4] = useState('');
  const [q5, setQ5] = useState('');
  const [error, setError] = useState('');
  const [showResults, setShowResults] = useState(false);
  
  const resultsRef = useRef(null);

  const q1Options = ['Morning', 'All day', 'After eating', 'Only occasionally'];
  const q2Options = ['Dry mouth', 'Bleeding gums', 'White tongue coating', 'Tonsil stones', 'Gum swelling', 'None of these'];

  const handleQ1Change = (val, checked) => {
    if (checked) {
      setQ1([...q1, val]);
    } else {
      setQ1(q1.filter((v) => v !== val));
    }
  };

  const handleQ2Change = (val, checked) => {
    if (val === 'None of these') {
      if (checked) setQ2(['None of these']);
      else setQ2([]);
    } else {
      if (checked) {
        setQ2([...q2.filter(v => v !== 'None of these'), val]);
      } else {
        setQ2(q2.filter(v => v !== val));
      }
    }
  };

  const handleSubmit = () => {
    if (q1.length === 0 && q2.length === 0 && !q3 && !q4 && !q5) {
      setError("Please select at least one option before checking your results.");
      return;
    }
    setError('');
    setShowResults(true);
    
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleReset = () => {
    setQ1([]);
    setQ2([]);
    setQ3('');
    setQ4('');
    setQ5('');
    setError('');
    setShowResults(false);
  };

  // Determine matched results based on selection
  const matchedCauses = [];
  if (q2.includes('Dry mouth') || q5 === 'Rarely') matchedCauses.push('dryMouth');
  if (q2.includes('Bleeding gums')) matchedCauses.push('gumDisease');
  if (q2.includes('White tongue coating')) matchedCauses.push('tongueBacteria');
  if (q2.includes('Tonsil stones')) matchedCauses.push('tonsilStones');
  if (q2.includes('Gum swelling')) matchedCauses.push('gumInflammation');
  if (q3 === 'Irregularly') matchedCauses.push('plaqueBuildup');

  const resultsContent = {
    dryMouth: {
      title: "Possible Cause: Dry Mouth",
      explanation: "Dry mouth reduces saliva which normally cleans bacteria from the mouth. Low saliva allows odor-causing bacteria to grow. This is one of the most common causes of bad breath.",
      sections: [
        { title: "How dry mouth develops", content: "It can be caused by medications, dehydration, mouth breathing during sleep, or certain medical conditions." },
        { title: "Why saliva is important", content: "Saliva acts as a natural cleanser, washing away food particles and neutralizing acids produced by plaque." },
        { title: "Quick fixes for dry mouth", content: "Drink water frequently, chew sugar-free xylitol gum, and use a bedroom humidifier at night." },
        { title: "When to see a dentist", content: "If dry mouth persists despite hydration, as it dramatically increases your risk for rapid tooth decay." }
      ]
    },
    gumDisease: {
      title: "Possible Cause: Gum Disease",
      explanation: "Bleeding or swollen gums may indicate gingivitis which commonly causes bad breath. Gum disease creates pockets where bacteria thrive and produce odor.",
      sections: [
        { title: "What gingivitis is", content: "The earliest stage of gum disease, characterized by inflammation of the gums due to plaque buildup at the gumline." },
        { title: "How it causes bad breath", content: "The bacteria that cause gingivitis produce volatile sulfur compounds (VSCs) as a byproduct, smelling like rotten eggs." },
        { title: "Treatment options", content: "Professional dental scaling, improved daily brushing, and therapeutic mouthwashes." },
        { title: "Prevention strategies", content: "Floss daily, brush twice a day with a soft-bristled brush, and maintain regular dental checkups." }
      ]
    },
    tongueBacteria: {
      title: "Possible Cause: Tongue Bacteria",
      explanation: "Bacteria on the tongue are a major source of volatile sulfur compounds that cause bad breath. A white coating indicates bacterial or fungal buildup.",
      sections: [
        { title: "How tongue bacteria develop", content: "The rough surface of the tongue traps dead cells, food debris, and bacteria, allowing them to multiply undisturbed." },
        { title: "Why tongue cleaning matters", content: "Brushing your teeth alone leaves up to 50% of the bacteria in your mouth hiding on your tongue." },
        { title: "Proper tongue cleaning technique", content: "Use a stainless steel or copper tongue scraper every morning, scraping gently from the back to the front 3-5 times." },
        { title: "When to see a dentist", content: "If the white coating does not go away with scraping, or if it appears patchy and sore, which could indicate oral thrush." }
      ]
    },
    tonsilStones: {
      title: "Possible Cause: Tonsil Stones",
      explanation: "Small stones in the tonsils trap bacteria and debris and can produce strong odor. Tonsil stones are a common but often overlooked cause of halitosis.",
      sections: [
        { title: "What tonsil stones are", content: "Hard, white or yellowish calcifications that form in the crevices (crypts) of the tonsils at the back of the throat." },
        { title: "How they form", content: "Food particles, mucus, and bacteria get trapped in the tonsil crypts and gradually harden over time." },
        { title: "Removal options", content: "Gargling with warm salt water, using a water flosser on a low setting, or gentle removal with a cotton swab." },
        { title: "Prevention strategies", content: "Maintain excellent oral hygiene, gargle daily with an alcohol-free mouthwash, and stay thoroughly hydrated." }
      ]
    },
    gumInflammation: {
      title: "Possible Cause: Gum Inflammation",
      explanation: "Swollen gums indicate inflammation from bacteria and plaque buildup. This inflammation creates an environment where odor-causing bacteria thrive.",
      sections: [
        { title: "Causes of gum swelling", content: "Primarily caused by poor plaque removal, but can also be triggered by harsh brushing, hormonal changes, or dietary deficiencies." },
        { title: "Connection to bad breath", content: "Inflamed tissues trap food and bacteria easily, releasing foul-smelling toxins as the body tries to fight the localized infection." },
        { title: "Treatment approaches", content: "Switch to a specialized gum-health toothpaste and incorporate daily flossing to remove the irritants." },
        { title: "Prevention tips", content: "Balance your oral microbiome with beneficial bacteria and utilize an electric toothbrush with a pressure sensor." }
      ]
    },
    plaqueBuildup: {
      title: "Possible Cause: Plaque Buildup",
      explanation: "Irregular brushing and flossing allow plaque to accumulate on teeth and gums. Bacteria in plaque produce sulfur compounds that cause bad breath.",
      sections: [
        { title: "How plaque forms", content: "A sticky, colorless biofilm of bacteria constantly forms on your teeth as they feed on the sugars and starches you eat." },
        { title: "Why regular brushing matters", content: "Plaque can harden into tartar in as little as 24 to 72 hours. Once hardened, only a dentist can remove it." },
        { title: "Proper brushing technique", content: "Brush for a full two minutes using gentle, circular motions angled at 45 degrees toward the gumline." },
        { title: "Flossing importance", content: "Toothbrush bristles cannot reach the tight spaces between teeth where plaque loves to hide and rot." }
      ]
    }
  };

  return (
    <div className="w-full">
      {!showResults ? (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 overflow-hidden"
        >
          <div className="bg-blue-600 p-6 md:p-8 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Interactive Assessment</h2>
            <p className="text-blue-100 text-lg">Your answers are completely private.</p>
          </div>

          <div className="p-6 md:p-10 space-y-8">
            {/* Question 1 */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2">1. When is your bad breath worst? (Select all that apply)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {q1Options.map((opt) => (
                  <label key={opt} className="flex items-start space-x-3 p-4 border border-gray-200 rounded-xl hover:bg-blue-50 cursor-pointer transition-colors group">
                    <Checkbox 
                      id={`q1-${opt}`} 
                      checked={q1.includes(opt)}
                      onCheckedChange={(checked) => handleQ1Change(opt, checked)}
                      className="mt-0.5 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                    />
                    <span className="text-gray-700 font-medium group-hover:text-blue-900 transition-colors">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Question 2 */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2">2. Do you experience any of these symptoms? (Select all that apply)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {q2Options.map((opt) => (
                  <label key={opt} className="flex items-start space-x-3 p-4 border border-gray-200 rounded-xl hover:bg-blue-50 cursor-pointer transition-colors group">
                    <Checkbox 
                      id={`q2-${opt}`} 
                      checked={q2.includes(opt)}
                      onCheckedChange={(checked) => handleQ2Change(opt, checked)}
                      className="mt-0.5 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                    />
                    <span className="text-gray-700 font-medium group-hover:text-blue-900 transition-colors">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Question 3 */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2">3. How often do you brush and floss?</h3>
              <RadioGroup value={q3} onValueChange={setQ3} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['Twice daily', 'Once daily', 'Irregularly'].map((opt) => (
                  <label key={opt} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:bg-blue-50 cursor-pointer transition-colors group">
                    <RadioGroupItem value={opt} id={`q3-${opt}`} className="text-blue-600 border-gray-300" />
                    <span className="text-gray-700 font-medium group-hover:text-blue-900 transition-colors">{opt}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>

            {/* Question 4 */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2">4. Do you use mouthwash regularly?</h3>
              <RadioGroup value={q4} onValueChange={setQ4} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['Yes alcohol', 'Yes alcohol-free', 'No'].map((opt) => (
                  <label key={opt} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:bg-blue-50 cursor-pointer transition-colors group">
                    <RadioGroupItem value={opt} id={`q4-${opt}`} className="text-blue-600 border-gray-300" />
                    <span className="text-gray-700 font-medium group-hover:text-blue-900 transition-colors">{opt}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>

            {/* Question 5 */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2">5. Do you drink enough water during the day?</h3>
              <RadioGroup value={q5} onValueChange={setQ5} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['Yes', 'Sometimes', 'Rarely'].map((opt) => (
                  <label key={opt} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:bg-blue-50 cursor-pointer transition-colors group">
                    <RadioGroupItem value={opt} id={`q5-${opt}`} className="text-blue-600 border-gray-300" />
                    <span className="text-gray-700 font-medium group-hover:text-blue-900 transition-colors">{opt}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-red-50 text-red-700 border border-red-200 p-4 rounded-xl flex items-center shadow-sm mt-4"
                >
                  <AlertCircle size={20} className="mr-3 flex-shrink-0" />
                  <p className="text-sm font-semibold">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleSubmit} 
                className="w-full sm:flex-1 bg-blue-600 hover:bg-blue-800 text-white font-extrabold py-8 text-xl rounded-xl shadow-[0_4px_14px_0_rgb(37,99,235,0.39)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-1"
              >
                Check My Bad Breath Cause
              </Button>
              <Button 
                onClick={handleReset} 
                variant="outline"
                className="w-full sm:w-auto py-8 px-8 rounded-xl border-gray-300 text-gray-700 hover:bg-gray-100 flex items-center justify-center font-bold text-lg transition-colors"
              >
                <RefreshCw size={20} className="mr-2" /> Reset
              </Button>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div 
          ref={resultsRef}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="space-y-8"
        >
          {/* Results Header */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 md:p-10 text-white shadow-xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Info size={150} />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Your Bad Breath Assessment</h2>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto font-medium">
                Based on your answers, we've identified the most likely causes of your bad breath. Review the insights below to find effective solutions.
              </p>
            </div>
          </div>

          {/* Dynamic Result Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {matchedCauses.length > 0 ? (
              matchedCauses.map((causeKey) => {
                const cause = resultsContent[causeKey];
                return (
                  <Card key={causeKey} className="border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden flex flex-col h-full bg-white">
                    <div className="bg-blue-50 border-b border-blue-100 px-6 py-5">
                      <h3 className="text-xl font-bold text-blue-900">{cause.title}</h3>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <p className="text-gray-700 mb-6 font-medium leading-relaxed text-lg">
                        {cause.explanation}
                      </p>
                      <div className="space-y-4 mt-auto">
                        {cause.sections.map((sec, i) => (
                          <div key={i} className="border-l-4 border-blue-400 pl-4 py-1 bg-gray-50 rounded-r-lg pr-4">
                            <strong className="block text-gray-900 text-sm mb-1">{sec.title}:</strong>
                            <p className="text-sm text-gray-600">{sec.content}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            ) : (
              <Card className="col-span-full border-gray-200 shadow-lg rounded-xl overflow-hidden bg-white">
                <div className="bg-green-50 border-b border-green-100 px-6 py-5">
                  <h3 className="text-xl font-bold text-green-900">General Bad Breath (Halitosis)</h3>
                </div>
                <CardContent className="p-8">
                  <p className="text-gray-700 mb-4 font-medium leading-relaxed text-lg">
                    Based on your answers, you don't have the typical strong warning signs of severe gum disease, persistent dry mouth, or tonsil stones. However, occasional bad breath is common and usually stems from minor bacterial imbalances on the tongue or between teeth.
                  </p>
                  <p className="text-gray-700 text-lg">
                    Review the general solutions below to upgrade your oral hygiene routine and keep your breath consistently fresh.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Solutions Summary Section */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-8 md:p-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center border-b border-gray-100 pb-6">How to Fix Bad Breath Based on Your Results</h2>
            
            <div className="grid md:grid-cols-2 gap-10">
              {/* Immediate Solutions */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex items-center mb-6 border-b border-gray-200 pb-3">
                  <CheckCircle className="text-green-600 mr-3" size={28} />
                  <h3 className="text-2xl font-bold text-gray-900">Immediate Solutions</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1 font-bold text-lg">•</span>
                    <span className="text-gray-800 font-medium">Brush teeth twice daily with fluoride toothpaste.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1 font-bold text-lg">•</span>
                    <span className="text-gray-800 font-medium">Floss daily to remove hidden food debris and bacteria.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1 font-bold text-lg">•</span>
                    <span className="text-gray-800 font-medium">Clean your tongue thoroughly with a dedicated tongue scraper.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1 font-bold text-lg">•</span>
                    <span className="text-gray-800 font-medium">Stay hydrated by drinking water consistently throughout the day.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1 font-bold text-lg">•</span>
                    <span className="text-gray-800 font-medium">Use <Link to="/blog/best-mouthwash-for-gum-disease" className="text-blue-600 font-bold hover:underline">alcohol-free mouthwash</Link> to avoid drying out your mouth.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1 font-bold text-lg">•</span>
                    <span className="text-gray-800 font-medium">Learn <Link to="/blog/what-kills-bad-breath-instantly" className="text-blue-600 font-bold hover:underline">what kills bad breath instantly</Link> for emergency freshness.</span>
                  </li>
                </ul>
              </div>

              {/* Longer-Term Solutions */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex items-center mb-6 border-b border-gray-200 pb-3">
                  <RefreshCw className="text-blue-600 mr-3" size={28} />
                  <h3 className="text-2xl font-bold text-gray-900">Longer-Term Solutions</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1 font-bold text-lg">•</span>
                    <span className="text-gray-800 font-medium">Maintain a highly consistent daily oral hygiene routine.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1 font-bold text-lg">•</span>
                    <span className="text-gray-800 font-medium">Visit your dentist regularly for professional deep cleaning.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1 font-bold text-lg">•</span>
                    <span className="text-gray-800 font-medium">Understand the root causes if you suffer from severe <Link to="/blog/why-is-my-morning-breath-so-bad" className="text-blue-600 font-bold hover:underline">morning breath</Link>.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1 font-bold text-lg">•</span>
                    <span className="text-gray-800 font-medium">Address underlying issues like <Link to="/blog/tonsil-stones-bad-breath" className="text-blue-600 font-bold hover:underline">tonsil stones</Link> or dry mouth.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1 font-bold text-lg">•</span>
                    <span className="text-gray-800 font-medium">Improve your diet by reducing sugary foods and increasing fibrous vegetables.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1 font-bold text-lg">•</span>
                    <span className="text-gray-800 font-medium"><Link to="/blog/can-oral-probiotics-improve-gum-health" className="text-blue-600 font-bold hover:underline">Consider oral probiotics</Link> to balance your oral microbiome naturally.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 bg-red-50 border-l-4 border-red-600 p-8 rounded-r-xl shadow-sm">
              <div className="flex items-center mb-4">
                <AlertCircle className="text-red-600 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">When to See a Dentist</h3>
              </div>
              <ul className="space-y-3 text-gray-800 font-medium">
                <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> If bad breath persists after 2-3 weeks of improved hygiene.</li>
                <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> If you have <Link to="/blog/why-do-my-gums-bleed-when-i-brush" className="text-red-600 font-bold hover:underline">bleeding or swollen gums</Link>.</li>
                <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> If you notice a painful white coating on your tongue.</li>
                <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> If you suspect tonsil stones are causing throat discomfort.</li>
                <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> For professional evaluation to rule out underlying medical conditions.</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Button 
              onClick={handleReset}
              className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-6 px-10 text-lg rounded-xl flex items-center shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <RefreshCw size={20} className="mr-3" /> Start Over Again
            </Button>
          </div>

          {/* Medical Disclaimer */}
          <div className="mt-16 bg-gray-50 border border-gray-200 p-6 rounded-xl text-sm text-gray-500 text-center italic shadow-sm">
            <strong>Medical Disclaimer:</strong> This tool is for educational purposes only and does not replace professional dental advice. If you experience persistent bad breath or other oral health concerns, please consult a dentist or healthcare professional for proper diagnosis and treatment.
          </div>

        </motion.div>
      )}
    </div>
  );
};

export default BadBreathCheckerTool;