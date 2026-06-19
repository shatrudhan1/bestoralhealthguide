import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Brand */}
        <div className="footer-column">
          <h3 className="footer-heading" style={{ fontSize: '16px' }}>Best Oral Health Guide</h3>
          <p className="footer-description">
            Your trusted source for AI-powered oral health guidance, expert insights, and personalized solutions for better teeth and gums. Privacy-first platform trusted by 50,000+ users.
          </p>
          <ul className="footer-links mt-4 mb-4">
            <li className="text-[12px] text-[hsl(var(--color-text-secondary))]">✓ Expert-reviewed & Science-backed</li>
            <li className="text-[12px] text-[hsl(var(--color-text-secondary))]">✓ Trusted by 50,000+ users (4.8/5)</li>
            <li className="text-[12px] text-[hsl(var(--color-text-secondary))]">✓ Evidence-based assessments</li>
            <li className="text-[12px] text-[hsl(var(--color-text-secondary))]">✓ Secure data handling (No ads)</li>
          </ul>
          <a href="https://t.me/bestoralhealth" target="_blank" rel="noopener noreferrer" className="footer-telegram link font-medium mt-auto">
            Join Our Community ↗
          </a>
        </div>

        {/* Column 2: Guides & Topics */}
        <div className="footer-column">
          <h4 className="footer-heading">Guides & Topics</h4>
          <ul className="footer-links">
            <li><Link to="/blog" className="link">Blog</Link></li>
            <li><Link to="/symptoms" className="link">Symptoms</Link></li>
            <li><Link to="/comparisons" className="link">Comparisons</Link></li>
            <li><Link to="/blog" className="link">Oral Care Tips</Link></li>
            <li><Link to="/blog" className="link">Expert Advice</Link></li>
            <li><Link to="/faq" className="link">FAQ</Link></li>
            
            {/* 
              FUTURE PHASE 2: PROGRAMMATIC SEO HUB LINKS
              <li><Link to="/bad-breath" className="link">Bad Breath Hub</Link></li>
              <li><Link to="/gum-health" className="link">Gum Health Hub</Link></li>
              <li><Link to="/tooth-sensitivity" className="link">Tooth Sensitivity Hub</Link></li>
              <li><Link to="/oral-care-routine" className="link">Oral Care Routine Hub</Link></li>
            */}
          </ul>
        </div>

        {/* Column 3: AI Tools */}
        <div className="footer-column">
          <h4 className="footer-heading">Professional-grade Tools</h4>
          <ul className="footer-links">
            <li><Link to="/tools/oral-health-score-analyzer" className="link">Oral Health Score Analyzer</Link></li>
            <li><Link to="/tools/bad-breath-cause-checker" className="link">Bad Breath Cause Checker</Link></li>
            <li><Link to="/tools/gum-disease-risk-calculator" className="link">Gum Disease Risk Calculator</Link></li>
            <li><Link to="/tools/tooth-sensitivity-test" className="link">Tooth Sensitivity Test</Link></li>
            <li><Link to="/tools/plaque-tartar-risk-calculator" className="link">Plaque & Tartar Risk</Link></li>
          </ul>
        </div>

        {/* Column 4: Resources */}
        <div className="footer-column">
          <h4 className="footer-heading">Resources</h4>
          <ul className="footer-links">
            <li><Link to="/resources" className="link">Resources</Link></li>
            <li><Link to="/comparisons" className="link">Comparisons</Link></li>
            <li><Link to="/resources" className="link">Expert Recommendations</Link></li>
            <li><Link to="/faq" className="link">FAQ</Link></li>
            <li><Link to="/contact" className="link">Contact</Link></li>
            
            {/* 
              FUTURE PHASE 2: PROGRAMMATIC SEO HUB LINKS
              <li><Link to="/faq" className="link">FAQ Hub</Link></li>
              <li><Link to="/comparisons" className="link">Comparisons Hub</Link></li>
              <li><Link to="/best-products" className="link">Best Products Hub</Link></li>
            */}
          </ul>
        </div>

        {/* Column 5: Legal */}
        <div className="footer-column">
          <h4 className="footer-heading">Trust & Legal</h4>
          <ul className="footer-links">
            <li><Link to="/privacy-policy" className="link">Privacy Policy</Link></li>
            <li><Link to="/disclaimer" className="link">Disclaimer</Link></li>
            <li><Link to="/medical-disclaimer" className="link">Medical Disclaimer</Link></li>
            <li>
  <Link to="/editorial-policy" className="link">
    Editorial Policy
  </Link>
</li>
            <li>
  <Link to="/about-author" className="link">
    About Author
  </Link>
</li>
            <li><Link to="/terms-conditions" className="link">Terms</Link></li>
            <li><Link to="/contact" className="link">Contact Support</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          Copyright © 2026 Best Oral Health Guide. All rights reserved. No sponsored content.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
