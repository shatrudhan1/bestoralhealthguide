import { Helmet } from "react-helmet";

const AboutAuthorPage = () => {
  return (
    <>
      <Helmet>
        <title>About Author | Best Oral Health Guide</title>
        <meta
          name="description"
          content="Learn about Best Oral Health Guide, our mission, editorial standards, research methodology, and commitment to providing educational oral health content."
        />
        <link
          rel="canonical"
          href="https://bestoralhealthguide.com/about-author"
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="max-w-5xl mx-auto px-6 py-12">

          {/* Hero Section */}
<div className="mb-12">
  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
    About Best Oral Health Guide
  </h1>

  <p className="text-lg text-gray-600 leading-relaxed">
    Helping readers make informed oral health decisions through
    educational, research-based content, practical resources,
    and easy-to-use assessment tools.
  </p>
</div>
          <div className="bg-white border rounded-2xl p-8 shadow-sm mb-10">
  <div className="flex flex-col md:flex-row items-centre gap-6">
    
    <img
      src="/images/shatrudhan-mukhiya.png"
      alt="Shatrudhan Mukhiya"
      className="w-40 h-40 rounded-full object-cover border-4 border-blue-100 shadow-lg"
    />

    <div>
      <h2 className="text-3xl font-bold">
        Shatrudhan Mukhiya
      </h2>

      <p className="text-lg text-blue-600 font-medium mt-2">
        Founder & Publisher
      </p>
      <p className="text-sm text-gray-500 mt-1">
  Last Updated: June 2026
</p>

      <p className="text-gray-600 mt-3">
        Shatrudhan Mukhiya is the Founder and Publisher of Best Oral Health Guide. He focuses on creating educational oral health resources, dental care guides, symptom-based content, and evidence-based recommendations to help readers make informed decisions about their oral health.
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 bg-blue-50 rounded-full text-sm">
          Oral Health Education
        </span>

        <span className="px-3 py-1 bg-blue-50 rounded-full text-sm">
          Dental Resources
        </span>

        <span className="px-3 py-1 bg-blue-50 rounded-full text-sm">
          Content Publishing
        </span>
      </div>
    </div>

  </div>
</div>
          <div className="flex flex-wrap gap-3 mt-5">
  
  <a
    href="/editorial-policy"
    className="text-blue-600 hover:text-blue-800 font-medium"
  >
    Editorial Policy →
  </a>

  <a
    href="/medical-disclaimer"
    className="text-blue-600 hover:text-blue-800 font-medium"
  >
    Medical Disclaimer →
  </a>

  <a
    href="/contact"
    className="text-blue-600 hover:text-blue-800 font-medium"
  >
    Contact Author →
  </a>

</div>
      
          {/* Mission */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>

            <p className="text-gray-700 leading-8">
              Best Oral Health Guide was created to simplify oral health
              information for everyday readers. Our goal is to provide
              educational resources that help people better understand
              dental health, gum disease prevention, oral hygiene,
              bad breath management, and oral care products.
            </p>
          </section>

          {/* Story */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>

            <p className="text-gray-700 leading-8">
              The internet contains a huge amount of oral health
              information, but much of it can be difficult to understand.
              Best Oral Health Guide was developed to organise
              publicly available research and educational information into
              clear, practical, and reader-friendly content.
            </p>

            <p className="text-gray-700 leading-8 mt-4">
              We focus on making oral health topics easier to understand
              while encouraging readers to seek professional dental advice
              whenever appropriate.
            </p>
          </section>

          {/* What We Publish */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What We Publish
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-5 rounded-xl">
                Oral Health Guides
              </div>

              <div className="bg-gray-50 p-5 rounded-xl">
                Gum Disease Education
              </div>

              <div className="bg-gray-50 p-5 rounded-xl">
                Bad Breath Resources
              </div>

              <div className="bg-gray-50 p-5 rounded-xl">
                Oral Care Product Reviews
              </div>

              <div className="bg-gray-50 p-5 rounded-xl">
                Interactive Assessment Tools
              </div>

              <div className="bg-gray-50 p-5 rounded-xl">
                Oral Hygiene Best Practices
              </div>
            </div>
          </section>

          {/* Editorial Standards */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Editorial Standards
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>✓ Evidence-based educational content</li>
              <li>✓ Research-first publishing approach</li>
              <li>✓ Fact-checking using trusted sources</li>
              <li>✓ Regular content updates when necessary</li>
              <li>✓ Transparency and reader trust</li>
              <li>✓ User-focused explanations and recommendations</li>
            </ul>
          </section>

          {/* AI Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              AI-Assisted Content
            </h2>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <p className="text-gray-700 leading-8">
                Some content may be assisted by artificial intelligence
                tools for research support, content organisation,
                drafting assistance, and workflow efficiency.
                All content is reviewed before publication according to
                to our Editorial Policy and Medical Disclaimer standards.
              </p>
            </div>
          </section>

          {/* Transparency */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transparency & Trust
            </h2>

            <p className="text-gray-700 leading-8">
              Best Oral Health Guide may earn commissions from affiliate
              partnerships when readers purchase products through certain
              links. These relationships do not influence our editorial
              decisions, recommendations, or content standards.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>

            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="font-semibold text-gray-900">
                hello@bestoralhealthguide.com
              </p>

              <p className="text-gray-600 mt-2">
                For inquiries, feedback, corrections, or partnerships,
Please contact us at hello@bestoralhealthguide.com
              </p>

              <p className="text-gray-600 mt-2">
                Serving readers worldwide with educational oral health
                resources and assessment tools.
              </p>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default AboutAuthorPage;
