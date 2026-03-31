import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Loader2 } from 'lucide-react';

const BUSINESS_TYPES = [
  'Plumbing',
  'HVAC',
  'Electrical',
  'Roofing',
  'Landscaping / Lawn Care',
  'Cleaning Services',
  'Painting',
  'Pest Control',
  'Pool & Spa',
  'Flooring',
  'Remodeling / General Contractor',
  'Appliance Repair',
  'Other Home Service'
];

const PLANS = [
  { value: 'Self-Starter', label: 'Self-Starter — $97/mo (DIY Platform Access)' },
  { value: 'Growth Partner', label: 'Growth Partner — $297/mo (Done With You)' },
  { value: 'White Glove', label: 'White Glove — $497/mo (Done For You)' }
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
    if (!formData.plan) newErrors.plan = 'Please select a plan';
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

  const planLabel = PLANS.find(p => p.value === formData.plan)?.label || formData.plan;

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
            <h2 className="success-title">Your Info Package Is On Its Way!</h2>
            <p className="success-body">
              We sent a personalized package to <strong>{formData.email}</strong> with everything you need to make a confident decision:
            </p>
            <ul className="success-list">
              <li>✦ A full demo video of the Mondays Marketing Systems App</li>
              <li>✦ A complete breakdown of your selected plan: <strong>{formData.plan}</strong></li>
              <li>✦ Real results from home service businesses just like yours</li>
              <li>✦ Clear next steps to get started</li>
            </ul>
            <p className="success-note">
              Don't see it? Check your spam folder or reach out directly — we'll make sure you have everything you need.
            </p>
            <button className="success-close-btn" onClick={onClose}>
              Got It — Close
            </button>
          </div>
        ) : (
          <>
            <div className="lead-modal-header">
              <p className="lead-modal-eyebrow">Get Your Personalized Info Package</p>
              <h2 className="lead-modal-title">See What the Right Plan Can Do for Your Business</h2>
              <p className="lead-modal-subtitle">
                Fill in your details below and we'll send you a custom package — including a demo video, full feature breakdown, and a clear path forward.
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
                    placeholder="James"
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
                    placeholder="Smith"
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
                  placeholder="james@smithplumbing.com"
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
                  placeholder="Smith Plumbing Co."
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
                  <option value="">Select your trade...</option>
                  {BUSINESS_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.businessType && <span className="form-error">{errors.businessType}</span>}
              </div>

              <div className="lead-form-group">
                <label className="lead-form-label">Which Plan Interests You?</label>
                <select
                  className={`lead-form-select ${errors.plan ? 'input-error' : ''}`}
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                >
                  <option value="">Select a plan...</option>
                  {PLANS.map(plan => (
                    <option key={plan.value} value={plan.value}>{plan.label}</option>
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
                    Sending Your Package...
                  </>
                ) : (
                  'Send Me My Custom Info Package'
                )}
              </button>

              <p className="lead-form-disclaimer">
                No spam, ever. We'll send your personalized overview and follow up once — that's it.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LeadFormModal;
