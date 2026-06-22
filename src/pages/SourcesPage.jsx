import React from "react";
import { Helmet } from "react-helmet";

export default function SourcesPage() {
  return (
    <>
      <Helmet>
        <title>Sources & References | Best Oral Health Guide</title>
        <meta
          name="description"
          content="Trusted oral health sources and references used by Best Oral Health Guide, including NIH, CDC, PubMed, ADA, WHO, NHS, Mayo Clinic, and more."
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="max-w-5xl mx-auto px-6 pt-24 pb-16">

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sources & References
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Best Oral Health Guide, we strive to provide educational,
              research-based oral health information supported by trusted
              public health organizations, scientific literature, and
              recognized medical resources.
            </p>
          </div>

          {/* Mission */}
          <section className="mb-10 bg-slate-50 border rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Our Commitment to Accuracy
            </h2>

            <p className="text-gray-700 leading-relaxed">
              We use reputable health organizations, government institutions,
              peer-reviewed studies, and recognized dental authorities to
              support the educational content published on Best Oral Health
              Guide.
            </p>
          </section>

          {/* Trusted Sources */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Trusted Sources We Reference
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="border rounded-xl p-6">
                <h3 className="font-semibold text-xl mb-2">
                  National Institutes of Health (NIH)
                </h3>
                <p className="text-gray-600">
                  Research-based health information and medical studies.
                </p>
              </div>

              <div className="border rounded-xl p-6">
                <h3 className="font-semibold text-xl mb-2">
                  PubMed
                </h3>
                <p className="text-gray-600">
                  Peer-reviewed scientific and medical research database.
                </p>
              </div>

              <div className="border rounded-xl p-6">
                <h3 className="font-semibold text-xl mb-2">
                  MedlinePlus
                </h3>
                <p className="text-gray-600">
                  Trusted consumer health information from NIH.
                </p>
              </div>

              <div className="border rounded-xl p-6">
                <h3 className="font-semibold text-xl mb-2">
                  CDC
                </h3>
                <p className="text-gray-600">
                  Public health guidance and disease prevention resources.
                </p>
              </div>

              <div className="border rounded-xl p-6">
                <h3 className="font-semibold text-xl mb-2">
                  American Dental Association (ADA)
                </h3>
                <p className="text-gray-600">
                  Professional dental recommendations and oral care guidance.
                </p>
              </div>

              <div className="border rounded-xl p-6">
                <h3 className="font-semibold text-xl mb-2">
                  National Health Service (NHS)
                </h3>
                <p className="text-gray-600">
                  Evidence-based oral health and medical information.
                </p>
              </div>

              <div className="border rounded-xl p-6">
                <h3 className="font-semibold text-xl mb-2">
                  Mayo Clinic
                </h3>
                <p className="text-gray-600">
                  Clinical guidance and patient education resources.
                </p>
              </div>

              <div className="border rounded-xl p-6">
                <h3 className="font-semibold text-xl mb-2">
                  World Health Organization (WHO)
                </h3>
                <p className="text-gray-600">
                  Global public health recommendations and research.
                </p>
              </div>

            </div>
          </section>

          {/* Content Review */}
          <section className="mb-12 bg-slate-50 border rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Content Review Process
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>✓ Research Collection</li>
              <li>✓ Fact Verification</li>
              <li>✓ Editorial Review</li>
              <li>✓ Content Publishing</li>
              <li>✓ Periodic Updates</li>
            </ul>
          </section>

          {/* Transparency */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Transparency Statement
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Best Oral Health Guide is an educational resource. Content is
              intended for informational purposes only and should not be
              considered medical advice, diagnosis, or treatment.
            </p>
          </section>

          {/* Last Updated */}
          <section className="border-t pt-6">
            <p className="text-sm text-gray-500">
              Last Updated: June 2026
            </p>
          </section>

        </div>
      </div>
    </>
  );
}
