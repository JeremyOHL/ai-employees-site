import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Loader2 } from 'lucide-react';

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
  'Other'
];

const INTERESTS = [
  { value: 'Lead Response & Follow-Up', label: 'Lead Response & Follow-Up Automation' },
  { value: 'Appointment & Scheduling', label: 'Appointment Reminders & Scheduling' },
  { value: 'Reviews & Reputation', label: 'Review Collection & Reputation Building' },
  { value: 'Customer Communication', label: 'Customer Communication & After-Hours Response' },
  { value: 'Invoicing & Payments', label: 'Invoicing & Payment Automation' },
  { value: 'Reporting & Analytics', label: 'Reporting & Performance Dashboards' },
  { value: 'Customer Reactivation', label: 'Reactivating Past Customers' },
  { value: 'Custom Integration', label: 'Custom Integration — Not Sure Yet' }
];

const LeadFormModal = ({ isOpen, onClose, selectedPlan }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    plan: selectedPlan || ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedPlan) {
      setFormData(prev => ({ ...prev, plan: selectedPlan }));
    }
  }, [selectedPlan]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSubmitted(false);
      setErrors({});
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email required';
    if (!formData.phone.trim()) newErrors.phone = 'Required';
    if (!formData.businessName.trim()) newErrors.businessName = 'Required';
    if (!formData.businessType) newErrors.businessType = 'Required';
    if (!formData.plan) newErrors.plan = 'Please select an area of interest';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch('https://services.leadconnectorhq.com/hooks/Sf7aTUm2lqA6OpM6417Y/webhook-trigger/ca74ac7f-2932-40c7-9f05-90b68bad5ee2', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          name: formData.businessName,
          customField: {
            business_type: formData.businessType,
            selected_plan: formData.plan
          }
        })
      });
    } catch (err) {
      console.error('Webhook error:', err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="lead-modal-overlay" onClick={handleOverlayClick}>
      <div className="lead-modal" role="dialog" aria-modal="true">
        <button className="lead-modal-close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        {isSubmitted ? (
          <div className="lead-modal-success">
            <div className="success-icon-wrap">
              <CheckCircle2 size={56} className="success-icon" />
            </div>
            <h2 className="success-title">We'll Be in Touch Shortly!</h2>
            <p className="success-body">
              Thanks for reaching out. We received your information and will follow up at <strong>{formData.email}</strong> to schedule a quick discovery conversation.
            </p>
            <ul className="success-list">
              <li>✦ A short discovery call to learn about your business</li>
              <li>✦ A custom proposal outlining what we'd build for you</li>
              <li>✦ Clear pricing with no surprises</li>
              <li>✦ No pressure — just a conversation</li>
            </ul>
            <p className="success-note">
              Don't see our email? Check your spam folder or reach out directly — we'll make sure you have everything you need.
            </p>
            <button className="success-close-btn" onClick={onClose}>
              Got It — Close
            </button>
          </div>
        ) : (
          <>
            <div className="lead-modal-header">
              <p className="lead-modal-eyebrow">Let's Talk About Your Business</p>
              <h2 className="lead-modal-title">Tell Us a Little About What You Need</h2>
              <p className="lead-modal-subtitle">
                Fill in your details below and we'll reach out to schedule a quick, no-pressure discovery conversation — then we'll show you exactly what we'd build.
              </p>
            </div>

            <form className="lead-form" onSubmit={handleSubmit} noValidate>
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
                  {BUSINESS_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.businessType && <span className="form-error">{errors.businessType}</span>}
              </div>

              <div className="lead-form-group">
                <label className="lead-form-label">What Can We Help With?</label>
                <select
                  className={`lead-form-select ${errors.plan ? 'input-error' : ''}`}
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                >
                  <option value="">Select an area of interest...</option>
                  {INTERESTS.map(item => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                  ))}
                </select>
                {errors.plan && <span className="form-error">{errors.plan}</span>}
              </div>

              <button
                type="submit"
                className="lead-form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="spin" />
                    Sending...
                  </>
                ) : (
                  'Get My Custom Quote'
                )}
              </button>

              <p className="lead-form-disclaimer">
                No spam, ever. We'll reach out once to schedule a conversation — that's it.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LeadFormModal;
