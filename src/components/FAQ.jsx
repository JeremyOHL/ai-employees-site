import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What exactly is Mondays Marketing Systems?',
      answer: 'It’s Software-with-a-Service: your own white-labeled Mondays App platform plus our team to build, launch, and operate your marketing systems. You get the software and the operators together.'
    },
    {
      question: 'Do I need to learn HighLevel?',
      answer: 'No. We configure everything for you and train your team on the handful of actions they need. We run the technical setup, QA, and ongoing optimizations so you can focus on the business.'
    },
    {
      question: 'How fast can we launch?',
      answer: 'Most clients go live in about 14 days. The first week is planning and build-out, the second week is QA, connections, and training. We keep shipping improvements after launch.'
    },
    {
      question: 'Can you migrate our existing data and assets?',
      answer: 'Yes. We migrate contacts, pipelines, calendars, forms, and domains into your new workspace. We also rebuild key funnels and nurture sequences so nothing is lost.'
    },
    {
      question: 'What is included in the monthly service?',
      answer: 'Strategy calls, campaign launches, automation tweaks, reporting, and support. We act as your marketing-ops team—no extra headcount needed.'
    },
    {
      question: 'Do you only serve home services businesses?',
      answer: 'We started in home services and now support B2C and B2B service brands that rely on lead capture, fast follow-up, and booked appointments.'
    },
    {
      question: 'Is there a long-term contract?',
      answer: 'No. Plans are month-to-month. There is a one-time build fee to cover migration, brand setup, and QA. You keep your data and we earn your business every month.'
    },
    {
      question: 'Can we use our own domains, numbers, and branding?',
      answer: 'Absolutely. Everything is white-labeled to your brand—domains, sending numbers, emails, funnels, and dashboards.'
    }
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about running your systems on Mondays Marketing and the Mondays App.
          </p>
        </div>

        <div className="faq-content">
          <Accordion type="single" collapsible className="faq-accordion">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="faq-question">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="faq-answer">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
