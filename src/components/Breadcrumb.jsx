import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = ({ items = [] }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="w-full py-3 overflow-x-auto whitespace-nowrap">
      <ol className="flex items-center space-x-2 text-sm text-[hsl(var(--color-text-secondary))]">
        <li>
          <Link to="/" className="flex items-center hover:text-[hsl(var(--hero-new-teal))] transition-colors">
            <Home size={16} className="mr-1" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight size={16} className="mx-1 text-[hsl(var(--color-border-subtle))]" />
            {index === items.length - 1 ? (
              <span className="font-medium text-[hsl(var(--color-text-primary))] truncate max-w-[150px] sm:max-w-none" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link 
                to={item.href} 
                className="hover:text-[hsl(var(--hero-new-teal))] transition-colors truncate max-w-[120px] sm:max-w-none"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;