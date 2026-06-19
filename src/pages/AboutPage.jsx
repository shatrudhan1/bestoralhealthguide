import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Target, 
  Users, 
  ShieldCheck, 
  CheckCircle, 
  Award, 
  BookOpen, 
  Scale, 
  Lock, 
  Info, 
  AlertTriangle 
} from 'lucide-react';

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Helmet>
        <title>About Best Oral Health Guide | Trusted Gum Health & Dental Care Resource</title>
        <meta name="description" content="Learn about Best Oral Health Guide — a trusted resource for gum disease education, dental care insights, and evidence-based oral health guidance for US and UK readers." />
      </Helmet>

      <div className="bg-gray-50 min-h-screen pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-900 to-blue-800 py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              About Best Oral Health Guide
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Your trusted online resource dedicated to oral health education, gum disease awareness, and evidence-based dental care.
            </p>
          </motion.div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 space-y-12">
          
          {/* Introduction Section */}
          <motion.section 
            {...fadeInUp}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Heart className="text-blue-600 mr-4" size={32} />
              Welcome to Best Oral Health Guide
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to Best Oral Health Guide — a trusted online resource dedicated to oral health education, gum disease awareness, and evidence-based dental care information. Our mission is to provide clear, responsible, and easy-to-understand guidance for readers in the United States and the United Kingdom who want to better understand their gum health and long-term oral care.
            </p>
          </motion.section>

          {/* What We Focus On Section */}
          <motion.section 
            {...fadeInUp}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Target className="text-blue-600 mr-4" size={32} />
              What We Focus On
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Best Oral Health Guide specializes in:
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Gum disease education (gingivitis and periodontitis)",
                "Bleeding and inflamed gums awareness",
                "Dental scaling and professional cleaning information",
                "Oral microbiome research",
                "Evidence-based supplement discussions",
                "Preventive oral hygiene practices"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 italic border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r-lg">
              Our goal is to simplify complex dental topics while aligning with modern public health guidance.
            </p>
          </motion.section>

          {/* Who We Serve Section */}
          <motion.section 
            {...fadeInUp}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="text-blue-600 mr-4" size={32} />
              Who We Serve
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Our content is designed for adults who:
            </p>
            <ul className="space-y-4">
              {[
                "Are concerned about gum health",
                "Experience bleeding or sensitive gums",
                "Want prevention-focused dental guidance",
                "Research oral probiotics and supplements",
                "Prefer calm, non-alarming health education"
              ].map((item, index) => (
                <li key={index} className="flex items-center bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* E-E-A-T Commitment Section */}
          <motion.section 
            {...fadeInUp}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center border-b pb-4 border-gray-100">
              <ShieldCheck className="text-blue-600 mr-4" size={32} />
              Our E-E-A-T Commitment
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                  <Award className="text-blue-600 mr-2" size={24} />
                  Experience
                </h3>
                <p className="text-gray-700">
                  We focus specifically on real-world gum health concerns that adults commonly face.
                </p>
              </div>

              <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                  <BookOpen className="text-blue-600 mr-2" size={24} />
                  Expertise
                </h3>
                <p className="text-gray-700">
                  Our articles are research-informed and based on established dental knowledge. We avoid exaggerated claims and clearly separate educational content from medical treatment.
                </p>
              </div>

              <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                  <Scale className="text-blue-600 mr-2" size={24} />
                  Authoritativeness
                </h3>
                <p className="text-gray-700">
                  We concentrate exclusively on oral health topics to build strong topical authority.
                </p>
              </div>

              <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                  <Lock className="text-blue-600 mr-2" size={24} />
                  Trustworthiness
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={16} /> No cure claims</li>
                  <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={16} /> No fear-based messaging</li>
                  <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={16} /> Clear affiliate disclosures</li>
                  <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={16} /> Transparent monetization</li>
                  <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={16} /> Informational disclaimer included</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Editorial Standards Section */}

<motion.section
{...fadeInUp}
className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 p-8 md:p-12"

>

  <h2 className="text-3xl font-bold text-gray-900 mb-6">
    Our Editorial Standards
  </h2>

  <p className="text-lg text-gray-700 mb-4">
    Best Oral Health Guide is an independent educational website focused on oral health awareness and consumer education.
  </p>

  <p className="text-lg text-gray-700 mb-4">
    We are not a dental clinic and do not provide medical diagnosis, treatment, or professional dental services.
  </p>

  <p className="text-lg text-gray-700 mb-6">
    Our content is created using publicly available oral health resources, scientific publications, and reputable health organizations.
  </p>

  <ul className="space-y-3 text-gray-700">
    <li>✓ Evidence-based educational content</li>
    <li>✓ Regular content reviews and updates</li>
    <li>✓ Transparent affiliate disclosures</li>
    <li>✓ No unrealistic cure claims</li>
    <li>✓ User-first publishing standards</li>
  </ul>
</motion.section>

          {/* Sources We Trust Section */}

<motion.section
{...fadeInUp}
className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 p-8 md:p-12"

>

  <h2 className="text-3xl font-bold text-gray-900 mb-6">
    Sources We Trust
  </h2>

  <p className="text-lg text-gray-700 mb-6">
    Whenever possible, our content references information from recognised public health and dental organisations.
  </p>

  <ul className="space-y-3 text-gray-700 text-lg">
    <li>✓ American Dental Association (ADA)</li>
    <li>✓ National Health Service (NHS)</li>
    <li>✓ Centers for Disease Control and Prevention (CDC)</li>
    <li>✓ PubMed Research Database</li>
    <li>✓ Mayo Clinic</li>
    <li>✓ National Institute of Dental and Craniofacial Research (NIDCR)</li>
  </ul>
</motion.section>

          {/* About This Website Section */}

<motion.section
{...fadeInUp}
className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 p-8 md:p-12"

>

  <h2 className="text-3xl font-bold text-gray-900 mb-6">
    About This Website
  </h2>

  <p className="text-lg text-gray-700 mb-4">
    Best Oral Health Guide was created as an independent educational resource focused on oral health awareness, preventive care, and consumer education.
  </p>

  <p className="text-lg text-gray-700 mb-4">
    Our mission is to simplify complex oral health topics and make evidence-based information easier for everyday readers to understand.
  </p>

  <p className="text-lg text-gray-700">
    We are committed to publishing helpful, easy-to-understand content that supports informed health decisions while encouraging readers to seek professional dental care when needed.
  </p>
</motion.section>

       {/* How the Website is Supported Section */}
          <motion.section 
            {...fadeInUp}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Info className="text-blue-600 mr-4" size={32} />
              How the Website is Supported
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Best Oral Health Guide is supported through:
            </p>
            <ul className="space-y-4 mb-6 text-gray-700 text-lg">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-4 flex-shrink-0" />
                <span>Google AdSense advertising</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-4 flex-shrink-0" />
                <span>Carefully selected affiliate partnerships, including ClickBank products related to oral health supplements. We may earn a commission at no additional cost to readers when affiliate links are used. However, all product discussions remain evidence-aware and balanced.</span>
              </li>
            </ul>
          </motion.section>

          {/* Disclaimer Section */}
          <motion.section 
            {...fadeInUp}
            className="bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 p-8 md:p-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <AlertTriangle className="text-amber-500 mr-3" size={28} />
              Disclaimer
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              The information provided on Best Oral Health Guide is for informational and educational purposes only. It is not intended as medical advice, diagnosis, or treatment. Always consult a qualified dentist or healthcare professional regarding oral health concerns.
            </p>
          </motion.section>

        </div>
      </div>
    </>
  );
};

export default AboutPage;
