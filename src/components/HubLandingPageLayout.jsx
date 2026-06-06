import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Check, ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const HubLandingPageLayout = ({
  metaTitle,
  metaDescription,
  hero,
  clusters,
  tools,
  guides,
  faqs
}) => {
  return (
    <div className="main-content-pt min-h-screen bg-[hsl(var(--background))]">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[hsl(var(--hero-new-bg-start))] to-[hsl(var(--hero-new-bg-end))] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="w-full mb-6">
            <Breadcrumb items={hero.breadcrumb} />
          </div>
          
          <div className="text-4xl md:text-5xl mb-4 text-[hsl(var(--hero-new-teal))]">
            {hero.icon}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-[hsl(var(--color-text-primary))] mb-6 max-w-4xl">
            {hero.headline}
          </h1>
          
          <p className="text-lg md:text-xl text-[hsl(var(--color-text-secondary))] mb-8 max-w-2xl">
            {hero.subheadline}
          </p>
          
          {hero.cta && (
            <div className="mb-8">
              <Link to={hero.cta.link} className="btn-primary text-lg px-8 py-3">
                {hero.cta.text}
              </Link>
            </div>
          )}
          
          {hero.trustSignal && (
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-[hsl(var(--color-text-secondary))]">
              <Check size={16} className="text-[hsl(var(--hero-new-teal))]" />
              <span>{hero.trustSignal}</span>
            </div>
          )}
        </div>
      </section>

      {/* Clusters Section */}
      {clusters && clusters.cards && clusters.cards.length > 0 && (
        <section className="py-[var(--section-spacing)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[hsl(var(--color-text-primary))] mb-4">{clusters.heading}</h2>
            {clusters.subheading && (
              <p className="text-[hsl(var(--color-text-secondary))] max-w-2xl mx-auto">{clusters.subheading}</p>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clusters.cards.map((card, idx) => (
              <Link key={idx} to={card.link} className="block group h-full">
                <Card className="h-full hover:border-[hsl(var(--hero-new-teal))] transition-all duration-300">
                  <CardHeader>
                    <div className="text-3xl mb-2">{card.icon}</div>
                    <CardTitle className="group-hover:text-[hsl(var(--hero-new-teal))] transition-colors flex items-center justify-between">
                      {card.title}
                      <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {card.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Two Column Section for Tools & Guides */}
      <section className="py-[var(--section-spacing)] bg-[hsl(var(--hub-accent-bg))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Tools Column */}
            {tools && tools.cards && tools.cards.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-[hsl(var(--color-text-primary))] mb-2">{tools.heading}</h2>
                {tools.subheading && (
                  <p className="text-[hsl(var(--color-text-secondary))] mb-6">{tools.subheading}</p>
                )}
                
                <div className="space-y-4">
                  {tools.cards.map((tool, idx) => (
                    <Card key={idx} className="bg-white hover:border-[hsl(var(--hero-new-teal))] transition-all">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-2">{tool.title}</h3>
                        <p className="text-sm text-[hsl(var(--color-text-secondary))] mb-4">{tool.description}</p>
                        <Link to={tool.link} className="text-[hsl(var(--hero-new-teal))] font-medium flex items-center hover:underline">
                          {tool.ctaText || "Try Tool"} <ArrowRight size={16} className="ml-1" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Guides Column */}
            {guides && guides.cards && guides.cards.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-[hsl(var(--color-text-primary))] mb-2">{guides.heading}</h2>
                {guides.subheading && (
                  <p className="text-[hsl(var(--color-text-secondary))] mb-6">{guides.subheading}</p>
                )}
                
                <div className="space-y-4">
                  {guides.cards.map((guide, idx) => (
                    <Link key={idx} to={guide.link} className="block group">
                      <Card className="bg-white hover:border-[hsl(var(--hero-new-teal))] transition-all">
                        <CardContent className="p-4 flex items-center justify-between">
                          <span className="font-medium text-[hsl(var(--color-text-primary))] group-hover:text-[hsl(var(--hero-new-teal))] transition-colors">
                            {guide.title}
                          </span>
                          <ArrowRight size={16} className="text-[hsl(var(--hero-new-teal))] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqs && faqs.items && faqs.items.length > 0 && (
        <section className="py-[var(--section-spacing)] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[hsl(var(--color-text-primary))] mb-4">{faqs.heading}</h2>
            {faqs.subheading && (
              <p className="text-[hsl(var(--color-text-secondary))]">{faqs.subheading}</p>
            )}
          </div>
          
          <Card className="p-2 mb-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.items.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left px-4 font-medium hover:text-[hsl(var(--hero-new-teal))]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 text-[hsl(var(--color-text-secondary))]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
          
          {faqs.viewAllLink && (
            <div className="text-center">
              <Link to={faqs.viewAllLink} className="btn-secondary">
                {faqs.viewAllText || "View All FAQs"}
              </Link>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default HubLandingPageLayout;