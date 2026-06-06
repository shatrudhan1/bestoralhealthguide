import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Breadcrumb from './Breadcrumb';
import { ArrowRight, Wrench, Scale, HelpCircle } from 'lucide-react';

const HubLanding = ({ 
  hubId, 
  hubTitle, 
  hubDescription, 
  hubIcon: Icon, 
  clusters = [], 
  tools = [], 
  comparisons = [], 
  faqs = [] 
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: hubTitle, href: `/${hubId}` }]} />

      {/* Hero Section */}
      <section className="py-12 md:py-20 text-center">
        <div className="inline-flex items-center justify-center p-4 bg-[hsl(var(--hero-new-bg-end))] rounded-full mb-6">
          {Icon && <Icon size={48} className="text-[hsl(var(--hero-new-teal))]" />}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--color-text-primary))] mb-4">
          {hubTitle}
        </h1>
        <p className="text-lg text-[hsl(var(--color-text-secondary))] max-w-2xl mx-auto">
          {hubDescription}
        </p>
      </section>

      {/* Clusters Grid */}
      {clusters.length > 0 && (
        <section className="py-10 border-t border-[hsl(var(--color-border-subtle))]">
          <h2 className="text-2xl font-bold mb-8">Explore Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clusters.map((cluster) => (
              <Link key={cluster.id} to={`/${hubId}/${cluster.slug}`} className="block group">
                <Card className="h-full hover:border-[hsl(var(--hero-new-teal))] transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="group-hover:text-[hsl(var(--hero-new-teal))] transition-colors flex items-center justify-between">
                      {cluster.title}
                      <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {cluster.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 border-t border-[hsl(var(--color-border-subtle))]">
        {/* Tools */}
        {tools.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Wrench className="mr-2 text-[hsl(var(--hero-new-teal))]" /> Related Tools
            </h2>
            <div className="space-y-4">
              {tools.map((tool, idx) => (
                <Link key={idx} to={tool.href} className="block">
                  <Card className="hover:bg-gray-50 transition-colors">
                    <CardContent className="p-4 flex items-center justify-between">
                      <span className="font-medium text-[hsl(var(--color-text-primary))]">{tool.title}</span>
                      <ArrowRight size={16} className="text-[hsl(var(--hero-new-teal))]" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Comparisons */}
        {comparisons.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Scale className="mr-2 text-[hsl(var(--hero-new-teal))]" /> Compare Solutions
            </h2>
            <div className="space-y-4">
              {comparisons.map((comp, idx) => (
                <Link key={idx} to={comp.href} className="block">
                  <Card className="hover:bg-gray-50 transition-colors">
                    <CardContent className="p-4 flex items-center justify-between">
                      <span className="font-medium text-[hsl(var(--color-text-primary))]">{comp.title}</span>
                      <ArrowRight size={16} className="text-[hsl(var(--hero-new-teal))]" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="py-10 border-t border-[hsl(var(--color-border-subtle))]">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <HelpCircle className="mr-2 text-[hsl(var(--hero-new-teal))]" /> Common Questions
          </h2>
          <Card className="p-2">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left px-4 hover:text-[hsl(var(--hero-new-teal))]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 text-[hsl(var(--color-text-secondary))]">
                    {faq.answer}
                    {faq.href && (
                      <div className="mt-3">
                        <Link to={faq.href} className="text-[hsl(var(--hero-new-teal))] font-medium hover:underline">
                          Read full answer →
                        </Link>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </section>
      )}
    </div>
  );
};

export default HubLanding;