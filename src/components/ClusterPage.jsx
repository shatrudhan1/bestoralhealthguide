import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Breadcrumb from './Breadcrumb';
import { ArrowRight } from 'lucide-react';

const ClusterPage = ({
  clusterId,
  hubId,
  hubTitle = 'Hub',
  clusterTitle,
  clusterDescription,
  content,
  relatedClusters = [],
  relatedTools = [],
  relatedComparisons = [],
  relatedFAQs = []
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb 
        items={[
          { label: hubTitle, href: `/${hubId}` },
          { label: clusterTitle, href: `/${hubId}/${clusterId}` }
        ]} 
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[hsl(var(--color-text-primary))] mb-4">
              {clusterTitle}
            </h1>
            <p className="text-lg text-[hsl(var(--color-text-secondary))]">
              {clusterDescription}
            </p>
          </header>

          <article className="prose prose-slate max-w-none prose-headings:text-[hsl(var(--color-text-primary))] prose-a:text-[hsl(var(--hero-new-teal))]">
            {content}
          </article>
        </div>

        {/* Sidebar / Related Content */}
        <aside className="space-y-8">
          {relatedTools.length > 0 && (
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Related Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {relatedTools.map((tool, idx) => (
                  <Link key={idx} to={tool.href} className="flex items-center text-sm font-medium text-[hsl(var(--color-text-primary))] hover:text-[hsl(var(--hero-new-teal))] transition-colors group">
                    <ArrowRight size={14} className="mr-2 text-[hsl(var(--hero-new-teal))] group-hover:translate-x-1 transition-transform" />
                    {tool.title}
                  </Link>
                ))}
              </CardContent>
            </Card>
          )}

          {relatedClusters.length > 0 && (
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Related Topics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {relatedClusters.map((cluster, idx) => (
                  <Link key={idx} to={cluster.href} className="flex items-center text-sm font-medium text-[hsl(var(--color-text-primary))] hover:text-[hsl(var(--hero-new-teal))] transition-colors group">
                    <ArrowRight size={14} className="mr-2 text-[hsl(var(--hero-new-teal))] group-hover:translate-x-1 transition-transform" />
                    {cluster.title}
                  </Link>
                ))}
              </CardContent>
            </Card>
          )}

          {relatedComparisons.length > 0 && (
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Comparisons</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {relatedComparisons.map((comp, idx) => (
                  <Link key={idx} to={comp.href} className="flex items-center text-sm font-medium text-[hsl(var(--color-text-primary))] hover:text-[hsl(var(--hero-new-teal))] transition-colors group">
                    <ArrowRight size={14} className="mr-2 text-[hsl(var(--hero-new-teal))] group-hover:translate-x-1 transition-transform" />
                    {comp.title}
                  </Link>
                ))}
              </CardContent>
            </Card>
          )}

          {relatedFAQs.length > 0 && (
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Top Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {relatedFAQs.map((faq, idx) => (
                  <Link key={idx} to={faq.href} className="flex items-start text-sm font-medium text-[hsl(var(--color-text-primary))] hover:text-[hsl(var(--hero-new-teal))] transition-colors group">
                    <span className="font-bold mr-2 text-[hsl(var(--color-border-subtle))]">Q:</span>
                    <span className="group-hover:underline">{faq.question}</span>
                  </Link>
                ))}
              </CardContent>
            </Card>
          )}
        </aside>
      </div>
    </div>
  );
};

export default ClusterPage;