import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TelegramIcon = ({ className }) => (
  <svg 
    className={className} 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Telegram"
  >
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.799-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.664 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.381 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationLinks = [
    { name: 'Guides', path: '/blog' },
    { name: 'Tools', path: '/tools' },
    { name: 'Symptoms', path: '/symptoms' },
    { name: 'Best Products', path: '/resources' },
    { name: 'Comparisons', path: '/comparisons' },
    { name: 'About', path: '/about' }
  ];

  /* 
    FUTURE PHASE 2: HUB NAVIGATION
    To activate the new programmatic SEO hubs, replace the above navigationLinks with:
    
    const navigationLinks = [
      { name: 'Bad Breath Hub', path: '/bad-breath' },
      { name: 'Gum Health Hub', path: '/gum-health' },
      { name: 'Tooth Sensitivity', path: '/tooth-sensitivity' },
      { name: 'Care Routine', path: '/oral-care-routine' },
      { name: 'Tools', path: '/tools' },
      { name: 'FAQ', path: '/faq' }
    ];
    
    // Alternatively, use a Dropdown for "Topics" containing all 7 hubs.
  */

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className={`header-wrapper ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-18">
            
            {/* Logo Area */}
            <Link 
              to="/" 
              className="flex-shrink-0 flex items-center z-50 focus:outline-none"
              onClick={closeMenu}
              aria-label="Home"
            >
              <img
                src="https://horizons-cdn.hostinger.com/a138d733-7cbb-4524-8c58-a6ade1733da9/3760dc18cc550c1a89c71b4bf9253384.png"
                alt="Best Oral Health Guide"
                className="h-[35px] lg:h-[40px] w-auto object-contain transition-transform duration-300 hover:scale-105"
                loading="eager"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`header-nav-link ${isActive(link.path) ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              {/*
                FUTURE PHASE 2: HUB DROPDOWN / LINKS
                <Link to="/bad-breath" className="header-nav-link">Bad Breath</Link>
                <Link to="/gum-health" className="header-nav-link">Gum Health</Link>
                <Link to="/tooth-sensitivity" className="header-nav-link">Sensitivity</Link>
              */}
            </nav>

            {/* Desktop & Tablet Actions */}
            <div className="hidden md:flex items-center space-x-6 z-50">
              <a 
                href="#" 
                className="telegram-icon touch-target flex items-center justify-center"
                aria-label="Join our Telegram community"
              >
                <TelegramIcon className="w-6 h-6" />
              </a>
              <Link 
                to="/tools/oral-health-score-analyzer" 
                className="header-cta"
              >
                Start Assessment
              </Link>
            </div>

            {/* Mobile Actions (CTA + Hamburger) */}
            <div className="flex items-center lg:hidden z-50 space-x-3">
              <Link 
                to="/tools/oral-health-score-analyzer" 
                className="header-cta text-sm px-4 py-2 md:hidden"
                onClick={closeMenu}
              >
                Start Assessment
              </Link>
              <button
                type="button"
                className="touch-target flex items-center justify-center text-[hsl(var(--header-text))] hover:text-[hsl(var(--header-accent))] transition-colors focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="mobile-overlay lg:hidden"
          >
            <nav className="flex flex-col flex-grow">
              <div className="flex flex-col space-y-2 mb-8">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                ))}
                {/*
                  FUTURE PHASE 2: MOBILE HUB LINKS
                  <Link to="/bad-breath" className="mobile-nav-link" onClick={closeMenu}>Bad Breath Hub</Link>
                  <Link to="/gum-health" className="mobile-nav-link" onClick={closeMenu}>Gum Health Hub</Link>
                  <Link to="/tooth-sensitivity" className="mobile-nav-link" onClick={closeMenu}>Tooth Sensitivity Hub</Link>
                  <Link to="/oral-care-routine" className="mobile-nav-link" onClick={closeMenu}>Oral Care Routine Hub</Link>
                */}
              </div>

              <div className="mt-auto flex flex-col space-y-6">
                <a 
                  href="#" 
                  className="flex items-center justify-center text-[hsl(var(--header-text))] hover:text-[hsl(var(--header-accent))] font-medium py-3 border border-[hsl(var(--header-border))] rounded-lg transition-colors"
                  aria-label="Join our Telegram community"
                  onClick={closeMenu}
                >
                  <TelegramIcon className="w-6 h-6 mr-3 text-[hsl(var(--header-accent))]" />
                  Join us on Telegram
                </a>
                
                <Link 
                  to="/tools/oral-health-score-analyzer" 
                  className="header-cta w-full py-4 text-center text-lg"
                  onClick={closeMenu}
                >
                  Start Your Assessment
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;