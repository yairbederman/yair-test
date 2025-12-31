import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Practice Areas', href: '#practice-areas' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className={`w-10 h-10 ${isScrolled ? 'bg-navy-900' : 'bg-gold-500'} rounded-sm flex items-center justify-center text-white font-serif font-bold text-xl transition-colors`}>
              NB
            </div>
            <div className={`flex flex-col ${isScrolled ? 'text-navy-900' : 'text-white'}`}>
              <span className="font-serif font-bold text-lg leading-tight tracking-wide">NIV - BEDERMAN</span>
              <span className="text-xs tracking-wider uppercase opacity-80">Law Office</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wider hover:text-gold-500 transition-colors ${isScrolled ? 'text-navy-900' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:09-8330338"
              className={`flex items-center gap-2 px-4 py-2 border rounded transition-all ${
                isScrolled
                  ? 'border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-navy-900'
              }`}
            >
              <Phone size={16} />
              <span className="font-medium">09-8330338</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-navy-900' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-navy-900 font-medium py-2 border-b border-gray-100 hover:text-gold-500"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                <a href="tel:09-8330338" className="flex items-center gap-2 text-navy-700">
                  <Phone size={18} /> 09-8330338
                </a>
                <a href="mailto:contact@nbs-law.co.il" className="flex items-center gap-2 text-navy-700">
                  <Mail size={18} /> contact@nbs-law.co.il
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
