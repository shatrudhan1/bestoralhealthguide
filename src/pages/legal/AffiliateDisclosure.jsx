import React from 'react';
import { Helmet } from 'react-helmet';
import { Mail, ShieldCheck, HeartHandshake, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const AffiliateDisclosure = () => {
  return (
    <>
      <Helmet>
        <title>Affiliate Disclosure | Best Oral Health Guide</title>
        <meta name="description" content="Read our affiliate disclosure to understand how we fund our research and reviews through platforms like ClickBank while keeping our content free." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="bg-gray-50 min-h-screen py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6 mx-auto">
              <HeartHandshake size={32} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">Affiliate Disclosure</h1>
            
            <div className="prose prose-blue max-w-none text-gray-700">
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-8 text-sm md:text-base text-gray-800">
                <strong>Standard Disclosure:</strong> Some of the links on this website are affiliate links, which means we may earn a commission if you choose to make a purchase through them. We promote products from trusted platforms like ClickBank. This comes at no extra cost to you and helps support our work. We only recommend products we believe provide real value.
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                <FileText className="mr-2 text-blue-500" size={24} /> Our Commitment to Transparency
              </h2>
              <p>
                At BestOralHealthGuide.com, our primary goal is to provide you with reliable, evidence-based information regarding dental health, oral probiotics, and hygiene best practices. Operating this website, conducting research, and maintaining our content requires significant time and resources. To help fund these efforts and keep our content completely free for our readers, we participate in various affiliate marketing programs.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                <ShieldCheck className="mr-2 text-blue-500" size={24} /> How Affiliate Links Work
              </h2>
              <p>
                When you click on an affiliate link on our site and make a purchase, we may receive a small commission from the retailer or affiliate network. <strong>This commission comes at absolutely no additional cost to you.</strong> The price you pay for the product remains exactly the same whether you use our affiliate link or go directly to the vendor's website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Platforms We Partner With</h2>
              <p>
                We primarily partner with established and trusted affiliate networks to bring you highly-rated oral health supplements and products. Currently, we participate in affiliate programs through:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>ClickBank:</strong> A global digital retailer and affiliate network. Many of the premium oral probiotic supplements we review (such as ProDentim and ProvaDent) are sold securely through the ClickBank platform.</li>
                <li>Other select direct-to-consumer oral health brands that meet our quality standards.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Recommendation Standards</h2>
              <p>
                We value your trust above all else. Our participation in affiliate programs does not influence our editorial integrity. We adhere to the following standards when recommending products:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>We only recommend products, supplements, or services that we have thoroughly researched or genuinely believe will add value to our readers.</li>
                <li>We clearly highlight both the pros and cons of products to help you make an informed decision.</li>
                <li>We are not paid directly by manufacturers to write favorable reviews. Our opinions are our own.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Responsibility</h2>
              <p>
                While we strive to provide accurate and up-to-date information, it is important that you conduct your own due diligence before purchasing any product or supplement online. Always consult with your dentist or healthcare provider before starting any new dietary supplement, especially if you have pre-existing medical conditions or are taking medications.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mt-10 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Mail className="mr-2 text-gray-500" size={20} /> Questions About Our Affiliate Relationships?
                </h3>
                <p className="mb-4">
                  If you have any questions regarding this affiliate disclosure or our relationship with any specific company or product mentioned on this website, please do not hesitate to contact us.
                </p>
                <Link to="/contact" className="inline-flex items-center text-blue-600 font-bold hover:underline">
                  Reach out to us via our Contact Page →
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AffiliateDisclosure;