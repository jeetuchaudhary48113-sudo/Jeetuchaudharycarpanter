/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Portfolio from './components/Portfolio';
import BeforeAfter from './components/BeforeAfter';
import HowItWorks from './components/HowItWorks';
import QuoteForm from './components/QuoteForm';
import Reviews from './components/Reviews';
import About from './components/About';
import ServiceAreas from './components/ServiceAreas';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';

export default function App() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('Custom Furniture');

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForQuote(serviceName);
    }
    const quoteElement = document.getElementById('quote');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F1E1D] flex flex-col font-sans selection:bg-[#965B2E] selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* Services Section */}
        <Services onSelectService={(service) => handleOpenQuote(service)} />

        {/* Why Choose Jeetu Chaudhary */}
        <WhyChoose />

        {/* Portfolio & Visual Gallery */}
        <Portfolio onOpenQuote={() => handleOpenQuote()} />

        {/* Before & After Interactive Slider */}
        <BeforeAfter />

        {/* How It Works (5-Step Process) */}
        <HowItWorks />

        {/* Free Quote Section */}
        <QuoteForm preselectedService={selectedServiceForQuote} />

        {/* Customer Reviews Section */}
        <Reviews />

        {/* About Section */}
        <About />

        {/* Service Areas Section */}
        <ServiceAreas />

        {/* FAQ Section */}
        <FAQ />

        {/* Contact Section */}
        <Contact onOpenQuote={() => handleOpenQuote()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar />
    </div>
  );
}
