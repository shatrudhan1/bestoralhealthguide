import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedToolsSection = () => {
  const tools = [
    {
      title: "Oral Health Score Analyzer",
      description: "Get a comprehensive analysis of your overall oral health and personalized recommendations.",
      icon: "🦷",
      trust: "⭐ 4.8/5 (2,500+ users) • Science-backed",
      link: "/tools/oral-health-score-analyzer"
    },
    {
      title: "Bad Breath Cause Checker",
      description: "Identify the root cause of halitosis based on your symptoms and daily habits.",
      icon: "🌬️",
      trust: "⭐ 4.8/5 (2,500+ users) • Science-backed",
      link: "/tools/bad-breath-cause-checker"
    },
    {
      title: "Gum Disease Risk Calculator",
      description: "Assess your risk for gingivitis and periodontitis before they become severe.",
      icon: "🩸",
      trust: "⭐ 4.8/5 (2,500+ users) • Science-backed",
      link: "/tools/gum-disease-risk-calculator"
    },
    {
      title: "Tooth Sensitivity Test",
      description: "Discover why your teeth hurt when exposed to hot, cold, or sweet stimuli.",
      icon: "⚡",
      trust: "⭐ 4.8/5 (2,500+ users) • Science-backed",
      link: "/tools/tooth-sensitivity-test"
    },
    {
      title: "Plaque & Tartar Risk",
      description: "See how fast plaque is calcifying and learn how to stop tartar buildup.",
      icon: "🦠",
      trust: "⭐ 4.8/5 (2,500+ users) • Science-backed",
      link: "/tools/plaque-tartar-risk-calculator"
    }
  ];

  return (
    <section className="featured-tools-section">
      <div className="max-w-7xl mx-auto">
        <h2 className="featured-tools-headline">AI-Powered Oral Health Tools</h2>
        <p className="featured-tools-subheadline">
          Get personalized insights in minutes. Trusted by 50,000+ users for accurate, science-backed assessments.
        </p>
        
        <div className="featured-tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="card flex flex-col h-full">
              <div className="tool-icon">{tool.icon}</div>
              <h3 className="tool-title">{tool.title}</h3>
              <p className="tool-description">{tool.description}</p>
              <div className="tool-trust">{tool.trust}</div>
              <Link to={tool.link} className="btn-primary mt-auto w-full">
                Start Free Assessment
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedToolsSection;