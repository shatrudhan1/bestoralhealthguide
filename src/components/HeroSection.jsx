import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1 className="hero-headline">
        Stop Bleeding Gums & Bad Breath Naturally
      </h1>
      
      <p className="hero-subheadline">
        Science-backed guides, free oral health tools, and trusted recommendations to improve your oral health.
      </p>
      
      <div className="hero-cta-container">
        <Link to="/tools/oral-health-score-analyzer" className="btn-primary">
          Start Free Assessment
        </Link>
        <Link to="/tools" className="btn-secondary">
          Explore Tools
        </Link>
      </div>
      
      <div className="hero-trust-signals">
        <div className="hero-trust-signal-item">
          <span className="trust-icon">
            <Check size={18} strokeWidth={3} />
          </span>
          <span className="trust-text">✓ Trusted by 50,000+ users worldwide</span>
        </div>
        <div className="hero-trust-signal-item">
          <span className="trust-icon">
            <Check size={18} strokeWidth={3} />
          </span>
          <span className="trust-text">✓ Expert-backed & evidence-based</span>
        </div>
        <div className="hero-trust-signal-item">
          <span className="trust-icon">
            <Check size={18} strokeWidth={3} />
          </span>
          <span className="trust-text">✓ Privacy-first & secure</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
