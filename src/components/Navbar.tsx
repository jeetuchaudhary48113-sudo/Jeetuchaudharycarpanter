import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E1D7] shadow-sm py-3'
          : 'bg-[#FAF8F5]/85 backdrop-blur-sm border-b border-[#E8E1D7]/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Wordmark Brand */}
          <a
            href="#home"
            className="flex flex-col group text-left"
            onClick={(e) => handleLinkClick(e, '#home')}
          >
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#1F1E1D] group-hover:text-[#965B2E] transition-colors leading-none">
              JEETU CHAUDHARY
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#8A7A6D] uppercase mt-1">
              Carpenter & Custom Furniture
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-[#4A4744]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-[#965B2E] transition-colors relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Direct Contact */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Jeetu Chaudhary"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#1F1E1D] bg-[#F0EAE1] hover:bg-[#E4DACD] rounded border border-[#DDD3C5] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#128C7E]" />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={onOpenQuote}
              className="inline-flex items-center px-4 py-2 text-xs font-semibold text-white bg-[#965B2E] hover:bg-[#7D4922] active:bg-[#683C1A] rounded transition-colors shadow-sm whitespace-nowrap"
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile hamburger button + direct WhatsApp icon */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-[#128C7E] hover:bg-[#075E54] rounded transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1F1E1D] hover:bg-[#EFEAE2] rounded transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E8E1D7] px-5 py-4 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2.5 pb-3 border-b border-[#E8E1D7]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-medium text-[#2E2C29] hover:text-[#965B2E] py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full text-center py-2.5 px-4 text-sm font-semibold text-white bg-[#965B2E] hover:bg-[#7D4922] rounded transition-colors"
            >
              Get Free Quote
            </button>

            <a
              href={BUSINESS_INFO.callUrl}
              className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 text-sm font-semibold text-[#1F1E1D] bg-[#F2EDE5] border border-[#DDD3C5] rounded hover:bg-[#E8E0D4] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#965B2E]" />
              <span>Call: +91 9028793023</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
