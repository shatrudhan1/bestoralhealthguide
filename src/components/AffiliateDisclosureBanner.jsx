import React from 'react';
import { Info } from 'lucide-react';

const AffiliateDisclosureBanner = () => {
  return (
    <div className="affiliate-disclosure-banner flex items-start gap-3 w-full max-w-4xl mx-auto">
      <Info size={16} className="flex-shrink-0 mt-0.5 text-gray-500" />
      <p className="m-0">
        <strong>Affiliate Disclosure:</strong> Some of the links on this page are affiliate links, which means we may earn a commission if you choose to make a purchase through them. We promote products from trusted platforms like ClickBank. This comes at no extra cost to you and helps support our work. We only recommend products we believe provide real value.
      </p>
    </div>
  );
};

export default AffiliateDisclosureBanner;