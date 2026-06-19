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
          <div className="bg-slate-50 border rounded-xl p-6 mb-10">
  <h2 className="text-2xl font-bold mb-4">
    Author Information
  </h2>

  <p><strong>Name:</strong> Shatrudhan Mukhiya</p>

  <p><strong>Role:</strong> Founder & Publisher</p>

  <p><strong>Website:</strong> Best Oral Health Guide</p>

  <p><strong>Focus Areas:</strong></p>

  <ul className="list-disc ml-6 mt-2">
    <li>Oral Health Education</li>
    <li>Dental Care Resources</li>
    <li>Health Content Publishing</li>
    <li>AI-Assisted Educational Content</li>
  </ul>
</div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Helping readers make informed oral health decisions through
              educational, research-based content, practical resources,
              and easy-to-use assessment tools.
            </p>
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
                https://bestoralhealthguide.com/contact
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
