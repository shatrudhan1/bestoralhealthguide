import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Clock, MapPin, Globe, Send, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you within 24-48 hours.",
      duration: 5000,
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Contact Best Oral Health Guide – Get in Touch</title>
        <meta name="description" content="Contact Best Oral Health Guide for questions about oral health tips, dental supplements, reviews, and resources. We're happy to help." />
        <link rel="canonical" href="https://bestoralhealthguide.com/contact" />
      </Helmet>

      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Contact Best Oral Health Guide
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Have questions about oral health, supplements, or reviews? We're here to help you navigate your journey to a better smile.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We value your feedback and questions. Whether you're looking for clarification on a review or have a suggestion for a new topic, our team is ready to assist you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                    <Mail className="text-[#4A90E2]" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                    <a href="mailto:contact@bestoralhealthguide.com" className="text-[#4A90E2] hover:underline">
                      contact@bestoralhealthguide.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">For general inquiries and support</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                    <Globe className="text-[#4A90E2]" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Website</h3>
                    <a href="https://bestoralhealthguide.com" className="text-[#4A90E2] hover:underline">
                      https://bestoralhealthguide.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                    <Clock className="text-[#4A90E2]" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Response Time</h3>
                    <p className="text-gray-600">
                       We respond within 24–48 business hours.
                     <br />
                        Monday–Friday (excluding holidays).
                      </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                    <MapPin className="text-[#4A90E2]" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">
  Serving readers in the United States,
  United Kingdom, Canada and worldwide.
</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent transition-all outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent transition-all outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent transition-all outline-none resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#4A90E2] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#357ABD] transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Trust & Transparency Section */}
        <section className="bg-gray-50 py-12 border-y border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ShieldCheck className="w-12 h-12 text-[#4A90E2] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Trust & Transparency</h2>
            <p className="text-gray-600 leading-relaxed italic">
              "Best Oral Health Guide provides educational content and honest product reviews. We do not offer medical advice. Always consult a licensed dental professional for specific medical concerns."
            </p>
          </div>
        </section>

        {/* Contact Purpose Section */}
<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">
      Why Contact Us?
    </h2>

<ul className="space-y-3 text-gray-700">
  <li>✓ General questions about our content</li>
  <li>✓ Corrections or content updates</li>
  <li>✓ Affiliate disclosure inquiries</li>
  <li>✓ Partnership opportunities</li>
  <li>✓ Technical website issues</li>
  <li>✓ Feedback and suggestions</li>
 </ul>
</div>
</section>

        {/* Internal Linking / Quick Links */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">Explore More</h2>
            <p className="text-gray-600 mt-2">Check out our other helpful resources.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <Link to="/about" className="group p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all text-center">
              <h3 className="font-bold text-gray-900 group-hover:text-[#4A90E2] mb-2">About Us</h3>
              <p className="text-sm text-gray-500 mb-4">Learn about our mission</p>
              <span className="inline-flex items-center text-sm font-medium text-[#4A90E2]">Read More <ArrowRight size={14} className="ml-1"/></span>
            </Link>
            <Link to="/blog" className="group p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all text-center">
              <h3 className="font-bold text-gray-900 group-hover:text-[#4A90E2] mb-2">Our Blog</h3>
              <p className="text-sm text-gray-500 mb-4">Latest oral health tips</p>
              <span className="inline-flex items-center text-sm font-medium text-[#4A90E2]">Read More <ArrowRight size={14} className="ml-1"/></span>
            </Link>
            <Link to="/reviews/prodentim" className="group p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all text-center">
              <h3 className="font-bold text-gray-900 group-hover:text-[#4A90E2] mb-2">Product Reviews</h3>
              <p className="text-sm text-gray-500 mb-4">Unbiased expert analysis</p>
              <span className="inline-flex items-center text-sm font-medium text-[#4A90E2]">Read More <ArrowRight size={14} className="ml-1"/></span>
            </Link>
            <Link to="/resources" className="group p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all text-center">
              <h3 className="font-bold text-gray-900 group-hover:text-[#4A90E2] mb-2">Resources</h3>
              <p className="text-sm text-gray-500 mb-4">Guides & comparisons</p>
              <span className="inline-flex items-center text-sm font-medium text-[#4A90E2]">Read More <ArrowRight size={14} className="ml-1"/></span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
