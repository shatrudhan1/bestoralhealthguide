import { Helmet } from "react-helmet";

const MedicalDisclaimerPage = () => {
  return (
    <>
      <Helmet>
        <title>Medical Disclaimer | Best Oral Health Guide</title>
        <meta
          name="description"
          content="Medical Disclaimer for Best Oral Health Guide. Educational oral health information only. Not professional medical or dental advice."
        />
        <link
          rel="canonical"
          href="https://bestoralhealthguide.com/medical-disclaimer"
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Medical Disclaimer
          </h1>

          <p className="text-gray-600 mb-8">
            Last Updated: June 2026
          </p>

          <div className="prose prose-lg max-w-none">

            <h2>Educational Purposes Only</h2>
            <p>
              The information provided on Best Oral Health Guide is intended
              solely for educational and informational purposes. The content
              published on this website should not be considered medical,
              dental, diagnostic, treatment, or professional healthcare advice.
            </p>

            <h2>Not a Licensed Dental Professional</h2>
            <p>
              The owner and contributors of Best Oral Health Guide are not
              licensed dentists, physicians, or healthcare providers unless
              explicitly stated. Content is based on research, publicly
              available sources, product information, and personal analysis.
            </p>

            <h2>No Doctor–Patient Relationship</h2>
            <p>
              Your use of this website does not establish a doctor–patient,
              dentist–patient, or healthcare professional relationship of any
              kind.
            </p>

            <h2>Always Consult a Qualified Professional</h2>
            <p>
              Before making decisions regarding your oral health, dental care,
              supplements, medications, treatments, or medical conditions,
              consult a licensed dentist, physician, or qualified healthcare professional
              professional.
            </p>

            <h2>Accuracy of Information</h2>
            <p>
              While we strive to provide accurate and up-to-date information,
              we make no guarantees regarding the completeness, reliability,
              accuracy, or suitability of any content published on this
              website.
            </p>

            <h2>Supplement and Product Reviews</h2>
            <p>
              Product reviews, comparisons, recommendations, and ratings
              represent opinions based on research and publicly available
              information. Individual experiences and results may vary.
            </p>

            <h2>Affiliate Disclosure</h2>
            <p>
              Some pages may contain affiliate links. If you purchase through
              these links, we may earn a commission at no additional cost to
              you. Affiliate relationships do not influence our editorial
              opinions.
            </p>

            <h2>Emergency Situations</h2>
            <p>
              If you believe you are experiencing a dental emergency, severe
              pain, infection, swelling, bleeding, or any serious medical
              condition, seek immediate assistance from a qualified healthcare professional
              provider or emergency medical service.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              By using this website, you agree that Best Oral Health Guide,
              its owner, contributors, and affiliates shall not be held liable
              for any direct or indirect damages resulting from the use of
              information provided on this website.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions regarding this disclaimer, please contact us
              us at:
              <br />
              <strong>hello@bestoralhealthguide.com</strong>
            </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalDisclaimerPage;
