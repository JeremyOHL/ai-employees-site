import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Target, Users, Zap, Mail, Share2, TrendingUp,
  BarChart3, Settings, Heart, Globe, ArrowRight,
  ChevronLeft, Loader2, ClipboardList, CheckCircle2,
  AlertTriangle, XCircle, Award, ArrowUpRight
} from 'lucide-react';
import LogoLink from '../components/LogoLink';

// ─── Audit Data ────────────────────────────────────────────────────────────────

const ANSWER_OPTIONS = [
  { value: 0, label: 'Not at all', sub: 'Not in place' },
  { value: 1, label: 'Rarely', sub: 'Just getting started' },
  { value: 2, label: 'Sometimes', sub: 'Partially in place' },
  { value: 3, label: 'Consistently', sub: 'Fully implemented' },
];

const AUDIT_CATEGORIES = [
  {
    id: 'lead-gen',
    name: 'Lead Generation',
    Icon: Target,
    description: 'How well are you attracting and capturing new potential customers?',
    questions: [
      { id: 'lg1', text: 'You have a clear lead magnet or free offer that captures contact information from website visitors.' },
      { id: 'lg2', text: 'Your website contact forms are automatically connected to a CRM — no manual copy-pasting.' },
      { id: 'lg3', text: 'You use paid advertising (Google, Meta, etc.) to consistently generate new inbound leads.' },
      { id: 'lg4', text: 'You know your current cost per lead and track it on a monthly basis.' },
      { id: 'lg5', text: 'You have a referral program that actively incentivizes existing customers to send you new business.' },
      { id: 'lg6', text: 'Leads from every channel (social, ads, forms, events) are captured automatically without manual data entry.' },
    ],
    recs: {
      A: 'Your lead generation engine is firing on all cylinders. Focus on optimizing cost per lead and testing new channels.',
      B: 'Strong foundation. Closing a few gaps — especially automation and referrals — will meaningfully increase lead volume.',
      C: 'Your lead flow is inconsistent. A systematic capture process and referral program would make a significant difference.',
      D: "You're likely leaving substantial leads on the table every month. Start by connecting your website forms to a CRM automatically.",
      F: "Critical gap. You don't have a reliable way to generate or capture new leads — this is the foundation everything else is built on.",
    },
  },
  {
    id: 'crm',
    name: 'CRM & Contacts',
    Icon: Users,
    description: 'How effectively do you track and manage your leads and customer relationships?',
    questions: [
      { id: 'crm1', text: 'You use a CRM to track every lead and customer — no leads living in spreadsheets, notebooks, or your head.' },
      { id: 'crm2', text: 'Every interaction with a contact (calls, emails, messages) is logged in your CRM automatically or consistently.' },
      { id: 'crm3', text: 'You can pull up the full history of any contact and see where they are in your process within seconds.' },
      { id: 'crm4', text: 'Your contacts are segmented by status, source, or interest so you can send targeted communication.' },
      { id: 'crm5', text: 'You have clearly defined pipeline stages that reflect your actual sales process from first contact to close.' },
      { id: 'crm6', text: 'Follow-up tasks and reminders are automatically assigned when a lead moves from one stage to another.' },
    ],
    recs: {
      A: 'Your CRM is a real business asset. Keep your data clean and explore deeper segmentation to personalize outreach further.',
      B: 'Good CRM hygiene. Getting activity logging automatic and adding behavioral segmentation would unlock the next level.',
      C: 'Your CRM is underutilized. Structured pipeline stages and automated task assignment would change how your team operates.',
      D: "You're managing relationships informally, which means leads are falling through the cracks. A basic CRM setup will pay for itself quickly.",
      F: "Without a CRM, you have no visibility into your business. Every lead you touch is at risk of being lost or forgotten.",
    },
  },
  {
    id: 'automation',
    name: 'Marketing Automation',
    Icon: Zap,
    description: 'How much of your marketing runs on autopilot without requiring manual effort?',
    questions: [
      { id: 'auto1', text: 'New leads receive an automated follow-up sequence (emails, texts, or calls) within minutes of opting in.' },
      { id: 'auto2', text: 'You have nurture sequences running in the background for leads who engaged but aren\'t ready to buy yet.' },
      { id: 'auto3', text: 'Appointment confirmations, reminders, and follow-ups are sent automatically — no human intervention needed.' },
      { id: 'auto4', text: 'You use behavior-based triggers (email opens, link clicks, website visits) to send targeted messages automatically.' },
      { id: 'auto5', text: 'Cold or inactive leads are automatically entered into re-engagement campaigns after a defined period of inactivity.' },
      { id: 'auto6', text: 'Your core marketing activities could run for a full week without you manually sending anything.' },
    ],
    recs: {
      A: 'Your automation stack is a genuine competitive advantage. Explore advanced segmentation and predictive triggers to go further.',
      B: 'Solid automation in place. Building out behavioral triggers and re-engagement flows would increase conversions significantly.',
      C: 'You\'re doing some automation but most of your marketing still depends on manual effort. A full nurture system would change this.',
      D: "You're manually doing work that should be automated. Every day without follow-up automation is leads going cold and revenue lost.",
      F: "You have no marketing automation in place. This is likely your single biggest growth lever — start with an automated lead follow-up sequence.",
    },
  },
  {
    id: 'email',
    name: 'Email Marketing',
    Icon: Mail,
    description: 'How strategically are you using email to nurture leads and retain customers?',
    questions: [
      { id: 'em1', text: 'You send at least two broadcast or newsletter emails per month to your list.' },
      { id: 'em2', text: 'New subscribers or leads receive a welcome email sequence that introduces your brand and value.' },
      { id: 'em3', text: 'You review open rates, click rates, and unsubscribes after every send and adjust accordingly.' },
      { id: 'em4', text: 'Your email list is segmented so different groups receive relevant, personalized content.' },
      { id: 'em5', text: 'You regularly test subject lines, send times, or content to improve email performance.' },
      { id: 'em6', text: 'All your emails are mobile-optimized and render correctly across devices and email clients.' },
    ],
    recs: {
      A: 'Email is clearly a strength. A/B testing more aggressively and deeper segmentation will push your results even higher.',
      B: 'Good email habits. Adding list segmentation and a structured testing cadence would meaningfully improve your numbers.',
      C: 'Email is inconsistent. A regular broadcast schedule and a welcome sequence would make an immediate difference.',
      D: "You're rarely using email as a channel, and when you do, it's not systematic. A simple consistent cadence is the starting point.",
      F: "Email marketing isn't happening for your business. Even a basic monthly newsletter and welcome sequence would open a significant revenue channel.",
    },
  },
  {
    id: 'social',
    name: 'Social & Content',
    Icon: Share2,
    description: 'How consistently are you building an audience and driving traffic through content?',
    questions: [
      { id: 'sm1', text: 'You post original content on social media platforms at least three times per week, consistently.' },
      { id: 'sm2', text: 'You plan and schedule content at least two weeks in advance using a content calendar.' },
      { id: 'sm3', text: 'You repurpose content across multiple platforms to extend reach without creating from scratch each time.' },
      { id: 'sm4', text: 'You track which content types and topics generate the most engagement and leads, and adjust accordingly.' },
      { id: 'sm5', text: 'Comments, DMs, and messages across platforms are responded to within 24 hours.' },
      { id: 'sm6', text: 'You use scheduling tools to automate posting so content goes live without you being online.' },
    ],
    recs: {
      A: 'Your content engine is humming. Focus on repurposing top performers and exploring new formats to reach adjacent audiences.',
      B: 'Consistent output with room to optimize. A content repurposing system and better analytics tracking would amplify your reach.',
      C: 'Posting is sporadic and reactive. A content calendar and scheduling tool would create the consistency needed to grow an audience.',
      D: "Social media is largely an afterthought in your business. Even two to three planned posts per week would establish a visible presence.",
      F: "You have no meaningful social media or content presence. Starting with one platform and a simple weekly content plan is the move.",
    },
  },
  {
    id: 'sales',
    name: 'Sales & Follow-Up',
    Icon: TrendingUp,
    description: 'How systematic and consistent is your process for converting leads into paying customers?',
    questions: [
      { id: 'sp1', text: 'You have a documented, repeatable sales process that your whole team follows — not just in your head.' },
      { id: 'sp2', text: 'Every new lead receives at least five to seven follow-up attempts before being marked as lost.' },
      { id: 'sp3', text: 'You use a standard proposal or quote template for every new opportunity, ensuring consistency.' },
      { id: 'sp4', text: 'You track your close rate and know exactly where in the process most deals fall through.' },
      { id: 'sp5', text: 'Automated reminders prompt your team to follow up with opportunities that have gone quiet.' },
      { id: 'sp6', text: 'You have prepared responses to handle the most common objections you encounter, used consistently.' },
    ],
    recs: {
      A: 'Your sales process is dialed in. Focus on tightening conversion at your highest-drop-off stage and improving average deal size.',
      B: 'Solid process with gaps. Documenting objection handling and automating follow-up reminders would increase your close rate noticeably.',
      C: "Your sales process relies on individual effort rather than a system. Documenting and automating the follow-up sequence is the priority.",
      D: "Deals are falling through the cracks because follow-up isn't systematic. Most businesses need 5-7 touches — are you hitting that?",
      F: "You don't have a defined sales process. This means your revenue is largely dependent on luck and timing rather than effort and system.",
    },
  },
  {
    id: 'reporting',
    name: 'Reporting & Analytics',
    Icon: BarChart3,
    description: "How clearly can you see what's working and exactly where your revenue is coming from?",
    questions: [
      { id: 'rp1', text: 'You review your core marketing and sales metrics at least once per month with your team.' },
      { id: 'rp2', text: 'You know specifically which marketing channel produces the most closed revenue — not just leads.' },
      { id: 'rp3', text: 'You track conversion rates at every stage of your funnel, from first touch to closed customer.' },
      { id: 'rp4', text: 'You have a live dashboard or regular report that shows your key business metrics in one place.' },
      { id: 'rp5', text: 'You know your customer acquisition cost (CAC) broken down by marketing channel.' },
      { id: 'rp6', text: 'You measure the return on investment for every paid campaign you run, not just impressions or clicks.' },
    ],
    recs: {
      A: 'You run a data-driven operation. Explore predictive analytics and cohort analysis to find your next growth lever.',
      B: 'Good reporting hygiene. Building out a unified dashboard and tracking CAC by channel would sharpen your decision-making.',
      C: "You review some metrics but lack a complete picture. You're likely investing in channels based on gut feel rather than data.",
      D: "You're flying mostly blind. Without knowing what drives revenue, it's nearly impossible to allocate budget or time effectively.",
      F: "No reporting means no accountability and no direction. Even a simple monthly metrics review would transform how you make decisions.",
    },
  },
  {
    id: 'operations',
    name: 'Operations & Workflows',
    Icon: Settings,
    description: 'How well-documented and systematized are your internal business processes?',
    questions: [
      { id: 'op1', text: 'Your most frequently performed business tasks are documented in step-by-step SOPs that others can follow.' },
      { id: 'op2', text: 'Your business could operate smoothly for at least a week without you being available.' },
      { id: 'op3', text: 'You use a project management tool to assign, track, and manage work across your team.' },
      { id: 'op4', text: 'Client onboarding is templated or automated — not rebuilt from scratch every time you land a new client.' },
      { id: 'op5', text: 'Invoicing is sent automatically and payment reminders go out without manual follow-up.' },
      { id: 'op6', text: 'You collect structured feedback from clients at the end of every project using a consistent process.' },
    ],
    recs: {
      A: 'Your operations are tight. Explore advanced workflow automation and look for any remaining bottlenecks that depend solely on you.',
      B: 'Strong operations with room to tighten. SOPs for every recurring task and automated invoicing would remove remaining friction.',
      C: "Your business runs on effort rather than systems. Documenting your top five recurring processes would be transformative.",
      D: "Operations depend heavily on you personally. If you stepped away for two weeks, what would break? Start there.",
      F: "There are no systems in place. Your business cannot scale — and you cannot step away — without operational documentation and automation.",
    },
  },
  {
    id: 'retention',
    name: 'Customer Retention',
    Icon: Heart,
    description: 'How proactively are you keeping existing customers engaged and generating repeat business?',
    questions: [
      { id: 'rt1', text: 'You have a formal, scheduled check-in or review process with every active client or repeat customer.' },
      { id: 'rt2', text: 'You have a loyalty or referral reward program that actively incentivizes repeat and referral business.' },
      { id: 'rt3', text: 'Past customers receive personalized outreach that is separate from and different to your general marketing.' },
      { id: 'rt4', text: 'You know your average customer lifetime value (LTV) by customer type or segment.' },
      { id: 'rt5', text: 'You actively track your churn rate and regularly review why customers stop purchasing or renewing.' },
      { id: 'rt6', text: "Customers who haven't purchased or engaged in a defined period automatically receive a win-back campaign." },
    ],
    recs: {
      A: 'Retention is a real strength. Explore referral amplification and tiered loyalty to turn your best customers into a growth channel.',
      B: 'Good retention practices. Building a formal win-back sequence and tracking LTV by segment would unlock compounding revenue.',
      C: "Retention is reactive rather than proactive. A simple check-in cadence and win-back automation would meaningfully reduce churn.",
      D: "You're losing customers you could keep. Acquiring new customers costs 5x more than retaining existing ones — this gap is expensive.",
      F: "There's no retention system in place. Your existing customers are your fastest and cheapest path to more revenue — start here.",
    },
  },
  {
    id: 'online-presence',
    name: 'Online Presence & SEO',
    Icon: Globe,
    description: 'How visible and credible does your business appear when people search for you online?',
    questions: [
      { id: 'seo1', text: 'Your business appears on the first page of Google for your primary service and location.' },
      { id: 'seo2', text: 'Your Google Business Profile is fully complete, accurate, and updated at least monthly with posts or photos.' },
      { id: 'seo3', text: 'You have a systematic process for asking customers for reviews and consistently collect new ones.' },
      { id: 'seo4', text: 'Your website is fully mobile-optimized and loads in under three seconds on a mobile connection.' },
      { id: 'seo5', text: 'You regularly publish blog posts, guides, or resources that attract organic search traffic.' },
      { id: 'seo6', text: 'Your business name, address, and phone number are consistent and accurate across all major online directories.' },
    ],
    recs: {
      A: 'Your online presence is strong. Focus on earning backlinks, producing video content, and expanding into adjacent search terms.',
      B: 'Visible and credible online. Consistent review collection and a content publishing cadence would compound your ranking over time.',
      C: "Your online presence is inconsistent. A complete Google Business Profile and regular review requests alone would move the needle.",
      D: "You're difficult to find online. Potential customers are searching for your service and finding your competitors instead.",
      F: "You have no meaningful online presence. In today's market, invisibility online is a critical business risk that needs immediate attention.",
    },
  },
];

const BUSINESS_TYPES = [
  'Service Business (Home, Field, Local)',
  'Retail or E-Commerce',
  'Agency or Consulting',
  'Real Estate',
  'Healthcare or Wellness',
  'Restaurant or Food Service',
  'Construction or Contracting',
  'Legal or Financial Services',
  'Coaching or Education',
  'Nonprofit',
  'Other',
];

// ─── Scoring Utilities ──────────────────────────────────────────────────────────

function calculateScores(answers) {
  const categoryScores = {};
  let totalPoints = 0;
  let totalPossible = 0;

  AUDIT_CATEGORIES.forEach(cat => {
    const maxPoints = cat.questions.length * 3;
    const earned = cat.questions.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0);
    const pct = Math.round((earned / maxPoints) * 100);
    categoryScores[cat.id] = { earned, maxPoints, pct, grade: pctToGrade(pct) };
    totalPoints += earned;
    totalPossible += maxPoints;
  });

  const overallPct = Math.round((totalPoints / totalPossible) * 100);
  return { categories: categoryScores, overall: { pct: overallPct, grade: pctToGrade(overallPct) } };
}

function pctToGrade(pct) {
  if (pct >= 80) return 'A';
  if (pct >= 65) return 'B';
  if (pct >= 50) return 'C';
  if (pct >= 35) return 'D';
  return 'F';
}

const GRADE_META = {
  A: { color: '#00d4ff', bg: 'rgba(0,212,255,0.12)', border: 'rgba(0,212,255,0.4)', label: 'Excellent' },
  B: { color: '#4ade80', bg: 'rgba(74,222,128,0.12)', border: 'rgba(74,222,128,0.4)', label: 'Good' },
  C: { color: '#facc15', bg: 'rgba(250,204,21,0.12)', border: 'rgba(250,204,21,0.4)', label: 'Fair' },
  D: { color: '#fb923c', bg: 'rgba(251,146,60,0.12)', border: 'rgba(251,146,60,0.4)', label: 'Poor' },
  F: { color: '#f87171', bg: 'rgba(248,113,113,0.12)', border: 'rgba(248,113,113,0.4)', label: 'Critical' },
};

// ─── Quiz Step ──────────────────────────────────────────────────────────────────

function QuizStep({ category, categoryIndex, totalCategories, answers, onAnswer, onNext, onPrev, isFirst, isLast }) {
  const { Icon, name, description, questions } = category;
  const progress = ((categoryIndex) / totalCategories) * 100;
  const answeredCount = questions.filter(q => answers[q.id] !== undefined).length;
  const allAnswered = answeredCount === questions.length;

  const [attempted, setAttempted] = useState(false);

  const handleNext = () => {
    if (!allAnswered) {
      setAttempted(true);
      return;
    }
    onNext();
  };

  return (
    <div className="audit-quiz-step">
      {/* Progress Bar */}
      <div className="audit-progress-wrap">
        <div className="audit-progress-bar-track">
          <div className="audit-progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="audit-progress-label">
          {categoryIndex === 0 ? 'Getting started' : `${categoryIndex} of ${totalCategories} complete`}
        </span>
      </div>

      {/* Category Header */}
      <div className="audit-category-header">
        <div className="audit-category-icon-wrap">
          <Icon size={28} className="audit-category-icon" />
        </div>
        <div>
          <div className="audit-category-eyebrow">Category {categoryIndex + 1} of {totalCategories}</div>
          <h2 className="audit-category-name">{name}</h2>
          <p className="audit-category-desc">{description}</p>
        </div>
      </div>

      {/* Questions */}
      <div className="audit-questions-list">
        {questions.map((q, qi) => {
          const isUnanswered = attempted && answers[q.id] === undefined;
          return (
            <div key={q.id} className={`audit-question-block ${isUnanswered ? 'audit-question-unanswered' : ''}`}>
              <p className="audit-question-text">
                <span className="audit-question-num">{qi + 1}.</span> {q.text}
              </p>
              <div className="audit-answer-options">
                {ANSWER_OPTIONS.map(opt => {
                  const selected = answers[q.id] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      className={`audit-answer-btn ${selected ? 'audit-answer-selected' : ''}`}
                      onClick={() => onAnswer(q.id, opt.value)}
                      type="button"
                    >
                      <span className="audit-answer-check">{selected ? '✓' : ''}</span>
                      <span className="audit-answer-label">{opt.label}</span>
                      <span className="audit-answer-sub">{opt.sub}</span>
                    </button>
                  );
                })}
              </div>
              {isUnanswered && (
                <p className="audit-question-warning">Please select an answer to continue</p>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="audit-nav">
        {!isFirst && (
          <button className="audit-nav-prev" onClick={onPrev} type="button">
            <ChevronLeft size={18} />
            Previous
          </button>
        )}
        <button className="audit-nav-next" onClick={handleNext} type="button">
          {isLast ? (
            <>
              See My Results
              <Award size={18} />
            </>
          ) : (
            <>
              Next Category
              <ArrowRight size={18} />
            </>
          )}
        </button>
      </div>

      <p className="audit-nav-hint">
        {answeredCount} of {questions.length} questions answered in this section
      </p>
    </div>
  );
}

// ─── Lead Gate Form ─────────────────────────────────────────────────────────────

function LeadGate({ onSubmit, isSubmitting }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!formData.firstName.trim()) e.firstName = 'Required';
    if (!formData.lastName.trim()) e.lastName = 'Required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Valid email required';
    if (!formData.phone.trim()) e.phone = 'Required';
    if (!formData.businessName.trim()) e.businessName = 'Required';
    if (!formData.businessType) e.businessType = 'Required';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="audit-gate-wrap">
      <div className="audit-gate-card">
        <div className="audit-gate-icon-row">
          <div className="audit-gate-icon">
            <Award size={36} />
          </div>
        </div>
        <h2 className="audit-gate-title">Your Results Are Ready</h2>
        <p className="audit-gate-subtitle">
          You've completed all 60 questions. Enter your details below and we'll show you your full audit report — broken down by category with a letter grade for each.
        </p>

        <form className="audit-gate-form" onSubmit={handleSubmit} noValidate>
          <div className="lead-form-row">
            <div className="lead-form-group">
              <label className="lead-form-label">First Name</label>
              <input
                className={`lead-form-input ${errors.firstName ? 'input-error' : ''}`}
                type="text"
                name="firstName"
                placeholder="Sarah"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <span className="form-error">{errors.firstName}</span>}
            </div>
            <div className="lead-form-group">
              <label className="lead-form-label">Last Name</label>
              <input
                className={`lead-form-input ${errors.lastName ? 'input-error' : ''}`}
                type="text"
                name="lastName"
                placeholder="Johnson"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <span className="form-error">{errors.lastName}</span>}
            </div>
          </div>

          <div className="lead-form-group">
            <label className="lead-form-label">Email Address</label>
            <input
              className={`lead-form-input ${errors.email ? 'input-error' : ''}`}
              type="email"
              name="email"
              placeholder="sarah@yourbusiness.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          <div className="lead-form-group">
            <label className="lead-form-label">Phone Number</label>
            <input
              className={`lead-form-input ${errors.phone ? 'input-error' : ''}`}
              type="tel"
              name="phone"
              placeholder="(555) 000-0000"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="form-error">{errors.phone}</span>}
          </div>

          <div className="lead-form-group">
            <label className="lead-form-label">Business Name</label>
            <input
              className={`lead-form-input ${errors.businessName ? 'input-error' : ''}`}
              type="text"
              name="businessName"
              placeholder="Your Business Name"
              value={formData.businessName}
              onChange={handleChange}
            />
            {errors.businessName && <span className="form-error">{errors.businessName}</span>}
          </div>

          <div className="lead-form-group">
            <label className="lead-form-label">Business Type</label>
            <select
              className={`lead-form-select ${errors.businessType ? 'input-error' : ''}`}
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
            >
              <option value="">Select your industry...</option>
              {BUSINESS_TYPES.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            {errors.businessType && <span className="form-error">{errors.businessType}</span>}
          </div>

          <button
            type="submit"
            className="audit-gate-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="spin" />
                Unlocking Your Results...
              </>
            ) : (
              <>
                Reveal My Audit Results
                <ArrowRight size={18} />
              </>
            )}
          </button>

          <p className="lead-form-disclaimer">
            No spam — ever. We'll send you a copy of your results and may follow up once to offer help. That's it.
          </p>
        </form>
      </div>
    </div>
  );
}

// ─── Results View ───────────────────────────────────────────────────────────────

function ResultsView({ scores, formData }) {
  const overall = scores.overall;
  const overallMeta = GRADE_META[overall.grade];

  // Sort categories by score ascending (worst first)
  const sortedCategories = [...AUDIT_CATEGORIES].sort(
    (a, b) => scores.categories[a.id].pct - scores.categories[b.id].pct
  );
  const topPriorities = sortedCategories.slice(0, 3);

  const gradeIcon = (grade) => {
    if (grade === 'A' || grade === 'B') return <CheckCircle2 size={16} />;
    if (grade === 'C') return <AlertTriangle size={16} />;
    return <XCircle size={16} />;
  };

  return (
    <div className="audit-results-wrap">
      {/* Overall Grade Hero */}
      <div className="audit-results-hero">
        <div className="audit-results-eyebrow">
          <ClipboardList size={16} />
          Business Systems Audit — Complete
        </div>
        <h1 className="audit-results-title">
          {formData.firstName ? `Here's Your Report, ${formData.firstName}` : 'Your Audit Results'}
        </h1>
        <p className="audit-results-subtitle">
          Based on your answers across 10 business systems and 60 questions
        </p>

        <div className="audit-overall-grade-card" style={{ borderColor: overallMeta.border, background: overallMeta.bg }}>
          <div className="audit-overall-grade-label">Overall Grade</div>
          <div className="audit-overall-grade-letter" style={{ color: overallMeta.color }}>
            {overall.grade}
          </div>
          <div className="audit-overall-grade-pct" style={{ color: overallMeta.color }}>
            {overall.pct}% — {overallMeta.label}
          </div>
          <div className="audit-overall-grade-bar-track">
            <div
              className="audit-overall-grade-bar-fill"
              style={{ width: `${overall.pct}%`, background: overallMeta.color }}
            />
          </div>
        </div>
      </div>

      {/* Top Priorities */}
      <div className="audit-priorities-section">
        <h2 className="audit-section-title">Your Top 3 Priorities</h2>
        <p className="audit-section-subtitle">
          These are the areas where improvement will have the greatest impact on your business right now.
        </p>
        <div className="audit-priorities-list">
          {topPriorities.map((cat, i) => {
            const catScore = scores.categories[cat.id];
            const meta = GRADE_META[catScore.grade];
            return (
              <div key={cat.id} className="audit-priority-item" style={{ borderColor: meta.border }}>
                <div className="audit-priority-rank" style={{ color: meta.color }}>#{i + 1}</div>
                <div className="audit-priority-body">
                  <div className="audit-priority-name">
                    <cat.Icon size={16} style={{ color: meta.color }} />
                    {cat.name}
                    <span className="audit-priority-grade" style={{ color: meta.color, background: meta.bg }}>
                      {catScore.grade} — {meta.label}
                    </span>
                  </div>
                  <p className="audit-priority-rec">{cat.recs[catScore.grade]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* All Category Grades */}
      <div className="audit-categories-section">
        <h2 className="audit-section-title">Results by Category</h2>
        <p className="audit-section-subtitle">
          A full breakdown of how every system in your business is performing.
        </p>
        <div className="audit-category-grid">
          {AUDIT_CATEGORIES.map(cat => {
            const catScore = scores.categories[cat.id];
            const meta = GRADE_META[catScore.grade];
            return (
              <div
                key={cat.id}
                className="audit-category-result-card"
                style={{ borderColor: meta.border }}
              >
                <div className="audit-cat-result-top" style={{ background: meta.bg }}>
                  <div className="audit-cat-result-icon-wrap" style={{ color: meta.color }}>
                    <cat.Icon size={22} />
                  </div>
                  <div className="audit-cat-result-grade" style={{ color: meta.color }}>
                    {catScore.grade}
                  </div>
                </div>
                <div className="audit-cat-result-body">
                  <div className="audit-cat-result-name">{cat.name}</div>
                  <div className="audit-cat-result-meta" style={{ color: meta.color }}>
                    {gradeIcon(catScore.grade)}
                    {catScore.pct}% · {meta.label}
                  </div>
                  <div className="audit-cat-result-bar-track">
                    <div
                      className="audit-cat-result-bar-fill"
                      style={{ width: `${catScore.pct}%`, background: meta.color }}
                    />
                  </div>
                  <p className="audit-cat-result-rec">{cat.recs[catScore.grade]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="audit-results-cta">
        <div className="audit-results-cta-card">
          <h2 className="audit-results-cta-title">Want Help Fixing This?</h2>
          <p className="audit-results-cta-body">
            We build the systems that close these gaps — automated follow-up, CRM setup, content workflows, reporting dashboards, and more. Let's look at your results together and show you exactly what we'd build.
          </p>
          <div className="audit-results-cta-btns">
            <a
              href="/"
              className="audit-cta-primary"
            >
              Schedule a Free Strategy Call
              <ArrowUpRight size={18} />
            </a>
            <Link to="/" className="audit-cta-secondary">
              Back to Mondays Marketing
            </Link>
          </div>
          <p className="audit-results-cta-note">
            No pressure — just a conversation about your audit results and what's possible.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Main Audit Page ────────────────────────────────────────────────────────────

export default function AuditPage() {
  const [phase, setPhase] = useState('quiz');
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [scores, setScores] = useState(null);
  const [formData, setFormData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (categoryIndex < AUDIT_CATEGORIES.length - 1) {
      setCategoryIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const computed = calculateScores(answers);
      setScores(computed);
      setPhase('gate');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (categoryIndex > 0) {
      setCategoryIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleGateSubmit = async (data) => {
    setIsSubmitting(true);
    setFormData(data);

    try {
      await fetch(
        'https://services.leadconnectorhq.com/hooks/Sf7aTUm2lqA6OpM6417Y/webhook-trigger/ca74ac7f-2932-40c7-9f05-90b68bad5ee2',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            name: data.businessName,
            customField: {
              business_type: data.businessType,
              audit_overall_grade: scores.overall.grade,
              audit_overall_pct: scores.overall.pct,
              audit_scores: Object.entries(scores.categories)
                .map(([id, s]) => `${id}:${s.grade}(${s.pct}%)`)
                .join(', '),
              audit_top_priority: AUDIT_CATEGORIES.find(
                c => c.id === Object.entries(scores.categories)
                  .sort((a, b) => a[1].pct - b[1].pct)[0][0]
              )?.name || '',
            },
          }),
        }
      );
    } catch (err) {
      console.error('Webhook error:', err);
    }

    setIsSubmitting(false);
    setPhase('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="audit-page">
      {/* Sticky Top Nav */}
      <header className="audit-header">
        <div className="audit-header-inner">
          <LogoLink />
          {phase === 'quiz' && (
            <div className="audit-header-status">
              <ClipboardList size={16} />
              Business Systems Audit
            </div>
          )}
        </div>
      </header>

      <main className="audit-main">
        {phase === 'quiz' && (
          <QuizStep
            category={AUDIT_CATEGORIES[categoryIndex]}
            categoryIndex={categoryIndex}
            totalCategories={AUDIT_CATEGORIES.length}
            answers={answers}
            onAnswer={handleAnswer}
            onNext={handleNext}
            onPrev={handlePrev}
            isFirst={categoryIndex === 0}
            isLast={categoryIndex === AUDIT_CATEGORIES.length - 1}
          />
        )}
        {phase === 'gate' && (
          <LeadGate onSubmit={handleGateSubmit} isSubmitting={isSubmitting} />
        )}
        {phase === 'results' && scores && (
          <ResultsView scores={scores} formData={formData} />
        )}
      </main>
    </div>
  );
}
