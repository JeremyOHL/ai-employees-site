import React, { useState } from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Problem from '../components/Problem';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import LeadFormModal from '../components/LeadFormModal';

const LandingPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const openModal = (plan = '') => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="landing-page">
      <Hero openModal={openModal} />
      <Stats />
      <Problem />
      <Features />
      <HowItWorks />
      <Pricing openModal={openModal} />
      <Testimonials />
      <FAQ />
      <CTA openModal={openModal} />
      <Footer />
      <LeadFormModal
        isOpen={modalOpen}
        onClose={closeModal}
        selectedPlan={selectedPlan}
      />
    </div>
  );
};

export default LandingPage;
