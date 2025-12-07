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
      question: 'How is the website free?',
      answer: 'We build and brand a one-page site at no cost. You only pay the flat monthly if you want us to host, update, and keep it converting with forms, chat, and booking.'
    },
    {
      question: 'What do I pay monthly?',
      answer: 'A single flat fee covers hosting, SSL, backups, edits, and support. Add automations, booking flows, and campaigns when you’re ready—still month-to-month.'
    },
    {
      question: 'How fast do you launch?',
      answer: 'Most free sites launch in under 10 days: day 1-2 copy and outline, day 3-6 design/build, day 7-10 QA, domain, and go-live.'
    },
    {
      question: 'Can you use my domain and branding?',
      answer: 'Yes. We use your domain, logo, colors, and voice. If you don’t have a domain yet, we can set it up for you.'
    },
    {
      question: 'What’s included with hosting?',
      answer: 'Hosting, SSL, backups, speed checks, heatmaps, analytics setup, and unlimited edits to the page. We also keep forms, chat, and booking working smoothly.'
    },
    {
      question: 'Do you lock me into a contract?',
      answer: 'No. It’s month-to-month. Cancel anytime and take your site with you.'
    },
    {
      question: 'Can I add more pages or campaigns later?',
      answer: 'Yes. We can spin up promo pages, booking flows, and nurture campaigns when you want to drive more demand.'
    },
    {
      question: 'Do I have to learn new software?',
      answer: 'No. We run the tech behind the scenes on our platform. You get the page, the leads, and the support—without babysitting tools.'
    }
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about running your systems with Mondays Marketing.
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
