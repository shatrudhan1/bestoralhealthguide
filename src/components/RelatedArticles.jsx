import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const RelatedArticles = ({ articles, title = "Related Articles" }) => {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="related-articles">
      <h3 className="related-heading">
        <BookOpen className="inline-block mr-2" size={20} />
        {title}
      </h3>
      <ul className="related-list">
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={article.url}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedArticles;