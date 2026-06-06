import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const RecommendedProducts = ({ products, title = "Recommended Products" }) => {
  if (!products || products.length === 0) return null;

  return (
    <div className="recommended-products">
      <h3 className="related-heading">
        <ShoppingBag className="inline-block mr-2" size={20} />
        {title}
      </h3>
      <ul className="related-list">
        {products.map((product) => (
          <li key={product.id}>
            <Link to={product.url}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedProducts;