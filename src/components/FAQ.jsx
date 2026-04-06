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
      question: 'What exactly does Mondays Marketing Systems build?',
      answer: 'We build custom business integrations — automated systems that handle specific parts of your operation so you and your team don\'t have to do it manually. That might look like an instant lead response system, an automated follow-up sequence after a quote goes out, a review request that fires after every completed job, or a dashboard that shows you where your revenue is coming from. We figure out what your business needs, then we build it.'
    },
    {
      question: 'What kinds of businesses do you work with?',
      answer: 'We work with a wide range of businesses — service companies, contractors, agencies, retailers, consultants, and more. If your business deals with leads, customers, appointments, or a sales process of any kind, there\'s almost certainly a way we can help it run more efficiently. If you\'re not sure whether we\'re a good fit, just reach out and we\'ll tell you honestly.'
    },
    {
      question: 'Do I need to be tech-savvy to use what you build?',
      answer: 'Not at all. We handle the technical side completely. Once your integration is live, most of it runs in the background automatically. Where your team does need to interact with anything, we walk you through it and make sure it\'s simple. You don\'t need to understand how it works — just that it does.'
    },
    {
      question: 'How much does it cost?',
      answer: 'Custom integrations start at $127 per month. Your actual price depends on the scope of what we build — how many systems are involved, what level of ongoing support you need, and any specific tools or platforms your business uses. After a quick discovery conversation, we\'ll give you a clear quote with no surprises.'
    },
    {
      question: 'How long does it take to get set up?',
      answer: 'Most integrations are designed, built, and live within one to three weeks depending on complexity. Simpler solutions can launch faster. We don\'t rush things — we test everything before it goes live so it works correctly from day one.'
    },
    {
      question: 'Will this work with the tools I already use?',
      answer: 'In most cases, yes. We build integrations that connect with the platforms you already rely on — your CRM, email, scheduling software, payment tools, and more. If something you use isn\'t compatible, we\'ll tell you upfront and recommend the best path forward.'
    },
    {
      question: 'What happens after the system is live?',
      answer: 'We stay involved. Ongoing support and optimization are included — we monitor performance, make adjustments as needed, and update your systems as your business grows or your needs change. You\'re not just getting a one-time build and then left on your own.'
    },
    {
      question: 'Are there any long-term contracts?',
      answer: 'No. All of our integrations are month-to-month. You can adjust your setup, add new systems, or cancel at any time. We earn your business every month by delivering real results.'
    },
    {
      question: 'What if I\'m not sure what I need?',
      answer: 'That is completely normal — and it\'s exactly why we start with a discovery conversation. You don\'t need to know the solution before you reach out. Tell us what\'s frustrating, what\'s costing you time, or where things are falling through the cracks. We\'ll help figure out the rest.'
    },
    {
      question: 'What happens after I submit my information?',
      answer: 'We\'ll reach out to schedule a quick, no-pressure discovery call. It\'s a conversation — not a sales pitch. We want to understand your business before recommending anything. After that call, you\'ll receive a clear proposal outlining exactly what we\'d build, how it works, and what it costs.'
    }
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="section-header">
          <p className="section-eyebrow">Common Questions</p>
          <h2 className="section-title">Everything You Need to Know</h2>
          <p className="section-subtitle">
            Straight answers for busy business owners who don\'t have time for the runaround.
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
