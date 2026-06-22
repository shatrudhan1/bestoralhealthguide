import React from "react";
import { Helmet } from "react-helmet";

export default function ContentReviewProcessPage() {
  return (
    <>
      <Helmet>
        <title>Content Review Process | Best Oral Health Guide</title>
        <meta
          name="description"
          content="Learn how content is researched, reviewed, updated, and published at Best Oral Health Guide."
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="max-w-5xl mx-auto px-6 pt-24 pb-16">

          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Content Review Process
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Best Oral Health Guide, we follow a structured process to
              improve content quality, accuracy, transparency, and user trust.
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-10 bg-slate-50 border rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Our Editorial Commitment
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Our goal is to publish educational oral health content that is
              clear, useful, and based on trusted public sources. Every article
              goes through a review process before publication and periodic
              updates after publication.
            </p>
          </section>

          {/* Process Steps */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">
              How We Review Content
            </h2>

            <div className="space-y-6">

              <div className="border rounded-xl p-6">
                <h3 className="font-bold text-xl mb-2">
                  1. Research Collection
                </h3>
                <p className="text-gray-600">
                  We gather information from trusted public health
                  organizations, scientific publications, and educational
                  resources.
                </p>
              </div>

              <div className="border rounded-xl p-6">
                <h3 className="font-bold text-xl mb-2">
                  2. Fact Verification
                </h3>
                <p className="text-gray-600">
                  Important claims are checked against reputable sources to
                  improve accuracy and consistency.
                </p>
              </div>

              <div className="border rounded-xl p-6">
                <h3 className="font-bold text-xl mb-2">
                  3. Content Drafting
                </h3>
                <p className="text-gray-600">
                  Content is organized into easy-to-understand educational
                  guides focused on reader value.
                </p>
              </div>

              <div className="border rounded-xl p-6">
                <h3 className="font-bold text-xl mb-2">
                  4. Editorial Review
                </h3>
                <p className="text-gray-600">
                  Articles are reviewed for clarity, readability, formatting,
                  and consistency with editorial standards.
                </p>
              </div>

              <div className="border rounded-xl p-6">
                <h3 className="font-bold text-xl mb-2">
                  5. Publication
                </h3>
                <p className="text-gray-600">
                  Once approved, content is published and made available to
                  readers.
                </p>
              </div>

              <div className="border rounded-xl p-6">
                <h3 className="font-bold text-xl mb-2">
                  6. Ongoing Updates
                </h3>
                <p className="text-gray-600">
                  Existing content may be updated periodically when new
                  information, improved explanations, or corrections become
                  available.
                </p>
              </div>

            </div>
          </section>

          {/* Transparency */}
          <section className="mb-12 bg-slate-50 border rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Transparency & Accuracy
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Best Oral Health Guide strives to provide helpful educational
              information. However, content should not be considered medical
              advice, diagnosis, or treatment.
            </p>
          </section>

          {/* Internal Links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Related Pages
            </h2>

            <ul className="space-y-3 text-blue-600">
              <li>• Editorial Policy</li>
              <li>• Sources & References</li>
              <li>• Medical Disclaimer</li>
              <li>• About Author</li>
            </ul>
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
