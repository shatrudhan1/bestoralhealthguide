import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Breadcrumb from './Breadcrumb';
import { Check, X, Minus } from 'lucide-react';

const renderValue = (val) => {
  if (val === true) return <Check className="text-green-500 mx-auto" size={20} />;
  if (val === false) return <X className="text-red-500 mx-auto" size={20} />;
  if (val === 'partial') return <Minus className="text-yellow-500 mx-auto" size={20} />;
  return <span className="text-sm font-medium">{val}</span>;
};

const ComparisonPage = ({
  comparisonId,
  hubId,
  hubTitle = 'Hub',
  comparisonTitle,
  comparisonDescription,
  items = [],
  criteria = [],
  relatedPages = []
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb 
        items={[
          { label: hubTitle, href: `/${hubId}` },
          { label: 'Comparisons', href: `/${hubId}/comparisons` },
          { label: comparisonTitle, href: `/${hubId}/comparisons/${comparisonId}` }
        ]} 
      />

      <header className="my-10 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-[hsl(var(--color-text-primary))] mb-4">
          {comparisonTitle}
        </h1>
        <p className="text-lg text-[hsl(var(--color-text-secondary))]">
          {comparisonDescription}
        </p>
      </header>

      {/* Item Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
        {items.map((item, idx) => (
          <Card key={idx} className="border-2 hover:border-[hsl(var(--hero-new-teal))] transition-all">
            <CardContent className="p-6 text-center">
              {item.image && (
                <img src={item.image} alt={item.name} className="h-32 object-contain mx-auto mb-4 rounded-lg" />
              )}
              <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
              <p className="text-sm text-[hsl(var(--color-text-secondary))] mb-4 h-16 overflow-hidden">
                {item.description}
              </p>
              {item.link && (
                <Link to={item.link} className="btn-primary w-full block">
                  View Details
                </Link>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Comparison Table */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-6">Detailed Comparison</h3>
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-gray-50">
                <TableRow>
                  <TableHead className="w-[200px] font-bold text-[hsl(var(--color-text-primary))]">Feature / Criteria</TableHead>
                  {items.map((item, idx) => (
                    <TableHead key={idx} className="text-center font-bold text-[hsl(var(--color-text-primary))] min-w-[150px]">
                      {item.name}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {criteria.map((criterion, rowIdx) => (
                  <TableRow key={rowIdx}>
                    <TableCell className="font-medium bg-gray-50/50">
                      {criterion.label}
                      {criterion.description && (
                        <p className="text-xs text-[hsl(var(--color-text-secondary))] font-normal mt-1">
                          {criterion.description}
                        </p>
                      )}
                    </TableCell>
                    {items.map((item, colIdx) => (
                      <TableCell key={colIdx} className="text-center">
                        {renderValue(criterion.values[item.id])}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </section>

      {/* Related Section */}
      {relatedPages.length > 0 && (
        <section className="border-t border-[hsl(var(--color-border-subtle))] pt-10">
          <h3 className="text-xl font-bold mb-6">Explore More</h3>
          <div className="flex flex-wrap gap-4">
            {relatedPages.map((page, idx) => (
              <Link key={idx} to={page.href} className="text-sm font-medium text-[hsl(var(--hero-new-teal))] hover:underline">
                {page.title}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ComparisonPage;