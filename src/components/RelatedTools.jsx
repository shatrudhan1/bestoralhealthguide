import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench } from 'lucide-react';

const RelatedTools = ({ tools }) => {
  if (!tools || tools.length === 0) return null;

  return (
    <div className="related-tools">
      <h3 className="related-heading">
        <Wrench className="inline-block mr-2" size={20} />
        Related Tools
      </h3>
      <div className="related-tools-grid">
        {tools.map((tool) => (
          <div key={tool.id} className="related-tool-card">
            <div className="tool-icon">{tool.icon}</div>
            <div className="tool-info">
              <h4 className="tool-name">{tool.name}</h4>
              <Link to={tool.url} className="tool-link">
                {tool.cta} &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedTools;