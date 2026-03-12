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
      question: 'Which plan should I start with?',
      answer: 'Start with your biggest problem. Most owners begin with lead response and follow-up, then expand.'
    },
    {
      question: 'Who is this built for?',
      answer: 'Small home service businesses that want faster lead handling and better close rates without adding staff.'
    },
    {
      question: 'How quickly can I launch?',
      answer: 'Most lead response setups can launch as fast as 7 days after onboarding. Full app setup depends on your current process.'
    },
    {
      question: 'Is this app for my team or for my customers?',
      answer: 'This app is for you and your team to manage leads, follow-up, and client communication. Your customers do not log in or use this app.'
    },
    {
      question: 'What problems does AI Agent Essentials solve first?',
      answer: 'Missed calls, delayed first response, inconsistent lead qualification, and weak early follow-up.'
    },
    {
      question: 'What does the full Mondays Marketing App include?',
      answer: 'Messaging, CRM, automations, pipelines, campaigns, booking, and reporting in one place.'
    },
    {
      question: 'Do I need to stitch together multiple tools?',
      answer: 'No. The goal is to reduce tool sprawl and run your lead-to-close process in one unified system.'
    },
    {
      question: 'What if I want to start with AI Agents only?',
      answer: 'That is common. Start there, then expand when your team is ready.'
    }
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Quick answers for busy home service owners.
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
