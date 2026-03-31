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
      question: 'What is the Mondays Marketing Systems App?',
      answer: 'It is a complete, all-in-one business platform built for home service businesses. It replaces 10+ separate tools — CRM, texting, email, automation, scheduling, websites, payments, reputation management, and more — all in a single system your team can actually use.'
    },
    {
      question: 'What is the difference between the three plans?',
      answer: 'Every plan gives you full access to the entire platform. The difference is how much help you get. Self-Starter ($97/mo) is self-guided — you build it yourself. Growth Partner ($297/mo) pairs you with our team to build it together. White Glove ($497/mo) means we build everything for you while you focus on running your business.'
    },
    {
      question: 'Which plan should I start with?',
      answer: 'If you are comfortable with tech and want to move at your own pace, start with Self-Starter. If you want guidance and hands-on support, Growth Partner is ideal. If you want our team to handle the entire setup so you can hit the ground running immediately, White Glove is the right choice. You can always upgrade.'
    },
    {
      question: 'Who is this built for?',
      answer: 'Home service businesses of all sizes — plumbers, HVAC techs, electricians, roofers, landscapers, cleaners, painters, pest control, and more. If you are running a service business and struggling with lead follow-up, missed calls, disorganized pipelines, or inconsistent marketing, this platform was built for you.'
    },
    {
      question: 'How quickly can I get up and running?',
      answer: 'Self-Starter accounts can be active the same day. Growth Partner clients typically launch key systems within 7 to 14 days with our guided sessions. White Glove clients get a full buildout completed by our team, typically within 2 to 3 weeks depending on complexity.'
    },
    {
      question: 'Does this replace my current tools?',
      answer: 'Yes, that is the goal. The Mondays Marketing Systems App is designed to consolidate your CRM, email marketing, SMS tools, scheduling software, website builder, review management, social media scheduler, and reporting into one platform — eliminating tool sprawl and reducing monthly software costs.'
    },
    {
      question: 'Is the app for my team or my customers?',
      answer: 'It is for you and your team. Your staff uses it to manage leads, respond to inquiries, send follow-ups, track jobs, and close deals. Your customers do not log in — they simply receive your texts, emails, booking links, and payment requests through it.'
    },
    {
      question: 'What happens after I fill out the form?',
      answer: 'We send you a personalized info package within minutes — including a full demo video of the platform, a detailed breakdown of the plan you selected, real results from home service businesses like yours, and clear next steps to get started. No pressure, just everything you need to make an informed decision.'
    },
    {
      question: 'Are there any long-term contracts?',
      answer: 'No. All plans are month-to-month. You can upgrade, downgrade, or cancel at any time. We earn your business every month by delivering real value.'
    },
    {
      question: 'What kind of support is included?',
      answer: 'Self-Starter includes community and email support. Growth Partner adds dedicated setup support via calls and messaging, plus monthly review calls. White Glove includes a dedicated account manager and ongoing monthly optimization.'
    }
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="section-header">
          <p className="section-eyebrow">Common Questions</p>
          <h2 className="section-title">Everything You Need to Know</h2>
          <p className="section-subtitle">
            Straight answers for busy home service owners.
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
