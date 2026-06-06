import React from 'react';

const ContentSection = ({ title, content }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="prose prose-blue max-w-none text-gray-700 text-lg leading-relaxed">
        {Array.isArray(content) ? (
          content.map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))
        ) : (
          <p>{content}</p>
        )}
      </div>
    </section>
  );
};

export default ContentSection;