import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ExternalLink, ShieldCheck, Clock, CheckCircle2, Flame, Hourglass } from 'lucide-react';

const ProductCard = ({ 
  image, 
  badgeText, 
  badgeColorClass = "bg-yellow-400 text-yellow-900", 
  urgencyBadge,
  titleBadge,
  titleBadgeColor = "#27AE60",
  productName, 
  rating, 
  reviewCount, 
  description, 
  benefitLine,
  reviewLink, 
  affiliateLink, 
  ctaText, 
  bottomUrgencyText,
  microCopy,
  urgencyLines
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
      {/* Urgency Badge */}
      {urgencyBadge && (
        <div className="urgency-badge">
          {urgencyBadge}
        </div>
      )}

      {/* Image Section */}
      <div className="h-64 bg-slate-50 relative overflow-hidden group flex items-center justify-center p-6 border-b border-gray-100">
        <img 
          className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
          alt={`${productName} oral health product`} 
          src={image} 
          loading="lazy"
        />
        {badgeText && (
          <div className={`absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm z-10 ${badgeColorClass}`}>
            {badgeText}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex flex-col mb-4">
          {titleBadge && (
            <div className="mb-2">
              <span 
                className="inline-block text-white text-[11px] md:text-[13px] font-bold px-2 py-1 rounded shadow-sm"
                style={{ backgroundColor: titleBadgeColor }}
              >
                {titleBadge}
              </span>
            </div>
          )}
          <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">{productName}</h3>
          <div className="flex items-center text-sm font-medium text-gray-700 bg-yellow-50 w-fit px-2 py-1 rounded">
            <div className="flex text-yellow-500 mr-2">
              {[...Array(Math.floor(rating))].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              {rating % 1 !== 0 && <Star size={16} className="text-yellow-500" fill="currentColor" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }} />}
            </div>
            <span>{rating}/5 based on {reviewCount}+ real users</span>
          </div>
        </div>

        <p className="text-gray-700 text-base leading-relaxed mb-3">
          {description}
        </p>
        
        {benefitLine && (
          <p className="text-blue-800 text-sm font-semibold mb-6 flex-grow bg-blue-50/50 p-3 rounded-lg border border-blue-100">
            {benefitLine}
          </p>
        )}

        {/* Links and CTA Section */}
        <div className="space-y-4 mt-auto flex flex-col">
          <Link 
            to={reviewLink} 
            className="inline-flex items-center text-[#4A90E2] hover:text-blue-800 font-semibold transition-colors text-base"
          >
            Read Full Review →
          </Link>

          {affiliateLink?.startsWith('/') ? (
            <Link 
              to={affiliateLink} 
              className="cro-primary-btn"
            >
              {ctaText}
            </Link>
          ) : (
            <a 
              href={affiliateLink} 
              target="_blank" 
              rel="noopener noreferrer nofollow"
              className="cro-primary-btn"
            >
              {ctaText}
            </a>
          )}
          
          {bottomUrgencyText && (
            <p className="text-center text-[12px] md:text-[14px] text-gray-500 mt-1">
              {bottomUrgencyText}
            </p>
          )}

          {/* Urgency FOMO Lines */}
          {urgencyLines && (
            <div className="flex flex-col space-y-1.5 pt-3">
              {urgencyLines.map((line, index) => (
                <div key={index} className="flex items-center text-[13px] md:text-sm font-bold text-[hsl(var(--urgency-red))]">
                  {line.icon === 'flame' && <Flame size={14} className="mr-1.5 flex-shrink-0" />}
                  {line.icon === 'hourglass' && <Hourglass size={14} className="mr-1.5 flex-shrink-0" />}
                  <span>{line.text}</span>
                </div>
              ))}
            </div>
          )}

          {/* Micro-copy below CTA */}
          {microCopy && (
            <div className="flex flex-col space-y-1.5 pt-3 border-t border-gray-100">
              {microCopy.map((copy, index) => (
                <div key={index} className="flex items-center text-xs md:text-sm text-[hsl(var(--micro-text))] font-medium">
                  {copy.icon === 'check' && <CheckCircle2 size={14} className="mr-1.5 text-[hsl(var(--trust))] flex-shrink-0" />}
                  {copy.icon === 'clock' && <Clock size={14} className="mr-1.5 text-amber-600 flex-shrink-0" />}
                  {copy.icon === 'shield' && <ShieldCheck size={14} className="mr-1.5 text-blue-600 flex-shrink-0" />}
                  <span>{copy.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;