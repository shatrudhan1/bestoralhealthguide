import { Helmet } from "react-helmet";

const EditorialPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Editorial Policy | Best Oral Health Guide</title>
        <meta
          name="description"
          content="Learn how Best Oral Health Guide creates, reviews, updates, and maintains educational oral health content."
        />
        <link
          rel="canonical"
          href="https://bestoralhealthguide.com/editorial-policy"
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Editorial Policy
          </h1>

          <p className="text-gray-500 mb-10">
            Last Updated: June 2026
          </p>

          <div className="space-y-10 text-gray-700 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Our Mission
              </h2>
              <p>
                Best Oral Health Guide is dedicated to providing educational,
                research-based, and easy-to-understand information about oral
                health, dental care, gum disease prevention, bad breath
                management, and oral hygiene products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Content Creation Process
              </h2>
              <p>
                Our content is created using publicly available research,
                educational resources, scientific publications, and products
                information, and industry best practices.
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Topic research and planning</li>
                <li>Fact verification from trusted sources</li>
                <li>Content writing and editing</li>
                <li>Readability and accuracy review</li>
                <li>Periodic updates when necessary</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Editorial Independence
              </h2>
              <p>
                Our editorial decisions are independent. Advertising,
                sponsorships, affiliate partnerships, or commercial
                relationships do not influence our content, recommendations, or
                conclusions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Product Reviews & Recommendations
              </h2>
              <p>
                Product reviews may consider ingredients, features, pricing,
                customer feedback, publicly available research, and overall
                value. Individual experiences may vary.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Accuracy & Updates
              </h2>
              <p>
                We strive to keep our content accurate and up to date.
                Information may be reviewed and updated as new research,
                products or industry developments become available.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Sources & References
              </h2>
              <p>
                We rely on information from reputable health organisations,
                scientific publications, academic resources, manufacturer
                disclosures, and publicly available research whenever
                appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                AI-Assisted Content
              </h2>
              <p>
                Some content may be assisted by artificial intelligence tools as
                part of our editorial workflow. All content is reviewed before
                publication to ensure clarity, usefulness, and quality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Medical Disclaimer
              </h2>
              <p>
                The information on this website is provided for educational and 
                informational purposes only and should not replace professional
                dental or medical advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Contact Us
              </h2>
              <p>
                For questions regarding our editorial standards or policies,
                Please contact:
              </p>

              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="font-semibold">
                  hello@bestoralhealthguide.com
                </p>
                <p>https://bestoralhealthguide.com</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
};

export default EditorialPolicyPage;
