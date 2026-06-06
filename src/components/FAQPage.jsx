import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Breadcrumb from './Breadcrumb';
import { HelpCircle } from 'lucide-react';

const FAQPage = ({
  faqId,
  hubId,
  hubTitle = 'Hub',
  faqTitle,
  faqDescription,
  questions = [],
  relatedPages = []
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb 
        items={[
          { label: hubTitle, href: `/${hubId}` },
          { label: 'FAQ', href: `/${hubId}/faq` },
          { label: faqTitle, href: `/${hubId}/faq/${faqId}` }
        ]} 
      />

      <header className="my-10 text-center">
        <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-full mb-6">
          <HelpCircle size={40} className="text-[hsl(var(--hero-new-teal))]" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-[hsl(var(--color-text-primary))] mb-4">
          {faqTitle}
        </h1>
        <p className="text-lg text-[hsl(var(--color-text-secondary))] max-w-2xl mx-auto">
          {faqDescription}
        </p>
      </header>

      <Card className="p-2 mb-12 shadow-sm">
        <Accordion type="single" collapsible className="w-full">
          {questions.map((q, index) => (
            <AccordionItem key={index} value={`q-${index}`}>
              <AccordionTrigger className="text-left px-4 text-lg font-semibold hover:text-[hsl(var(--hero-new-teal))]">
                <h3 className="m-0 p-0 text-inherit font-inherit">{q.question}</h3>
              </AccordionTrigger>
              <AccordionContent className="px-4 text-base leading-relaxed text-[hsl(var(--color-text-secondary))] prose prose-slate">
                {q.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>

      {/* Related Content Area */}
      {relatedPages.length > 0 && (
        <section className="mt-12 pt-8 border-t border-[hsl(var(--color-border-subtle))]">
          <h2 className="text-2xl font-bold mb-6">Related Questions & Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedPages.map((page, idx) => (
              <Link key={idx} to={page.href}>
                <Card className="hover:border-[hsl(var(--hero-new-teal))] transition-colors h-full">
                  <CardContent className="p-4 flex items-center h-full">
                    <span className="font-medium text-[hsl(var(--hero-new-teal))]">{page.title}</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default FAQPage;