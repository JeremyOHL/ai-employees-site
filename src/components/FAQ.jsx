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
      question: 'What are the two offerings?',
      answer: 'You can choose AI Agent Essentials to fix lead response and follow-up, or the full Mondays Marketing App suite to run your communications, CRM, automations, and marketing in one place.'
    },
    {
      question: 'Who is this built for?',
      answer: 'Small home service businesses that need to stop losing leads, improve close rates, and tighten customer communication without adding headcount.'
    },
    {
      question: 'How quickly can I launch?',
      answer: 'Most clients can activate AI Agent Essentials quickly after onboarding. Full suite setup depends on your workflows, pipeline, and campaign needs.'
    },
    {
      question: 'Can the app be branded to my business?',
      answer: 'Yes. Your customers see your business brand and communications, not a third-party platform.'
    },
    {
      question: 'What problems does AI Agent Essentials solve first?',
      answer: 'Missed calls, delayed first response, inconsistent lead qualification, and weak early follow-up.'
    },
    {
      question: 'What does the full Mondays Marketing App include?',
      answer: 'A complete business suite with messaging, CRM, automations, pipelines, campaigns, booking workflows, and performance reporting.'
    },
    {
      question: 'Do I need to stitch together multiple tools?',
      answer: 'No. The goal is to reduce tool sprawl and run your lead-to-close process in one unified system.'
    },
    {
      question: 'What if I want to start with AI Agents only?',
      answer: 'That is common. We can start with AI Agent Essentials and expand into the full app suite when you are ready.'
    }
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Straight answers about AI Agents and the Mondays Marketing App for home service businesses.
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
