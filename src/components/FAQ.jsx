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
      question: 'How quickly can you get my AI employee up and running?',
      answer: 'Most businesses are fully operational within 2 weeks. We start with a discovery call, configure your AI employee with your business information, integrate with your existing tools, and then launch with ongoing monitoring and optimization.'
    },
    {
      question: 'Will it sound robotic or will customers know it\'s AI?',
      answer: 'Our AI employees use advanced natural language processing to sound natural and professional. Many customers don\'t realize they\'re speaking with AI. We customize the tone and responses to match your brand voice perfectly.'
    },
    {
      question: 'What happens if the AI can\'t answer a question?',
      answer: 'The AI is trained to recognize when it needs human assistance. It can seamlessly transfer calls to your team, send notifications for follow-up, or gather information for you to respond to later. You maintain full control.'
    },
    {
      question: 'Can it integrate with my existing scheduling software?',
      answer: 'Yes! We integrate with popular scheduling tools like Calendly, ServiceTitan, Housecall Pro, Jobber, and most major CRM systems. If you have a custom system, we can likely integrate with that too.'
    },
    {
      question: 'What types of home services businesses do you work with?',
      answer: 'We work with all types: plumbing, HVAC, electrical, landscaping, roofing, cleaning services, pest control, handyman services, and more. Our AI adapts to your specific industry terminology and processes.'
    },
    {
      question: 'Is there a long-term contract?',
      answer: 'No long-term contracts required. All plans are month-to-month. We include a one-time setup fee of $297, then you pay monthly. Cancel anytime with 30 days notice. We also offer a 14-day money-back guarantee.'
    },
    {
      question: 'How do you charge for the setup fee?',
      answer: 'The one-time setup fee of $297 is charged upfront before we begin configuration. This covers custom AI training, integration setup, testing, and your dedicated onboarding. Monthly subscription begins after launch.'
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Absolutely! You can change plans at any time. If you upgrade, the new features activate immediately. If you downgrade, changes take effect at the start of your next billing cycle. We make it easy and flexible.'
    }
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about AI employees for your home services business.
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