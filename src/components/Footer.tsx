import React from 'react';
import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-white pt-20 pb-10 border-t border-navy-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gold-500 rounded-sm flex items-center justify-center text-white font-serif font-bold text-lg">
                NB
              </div>
              <div className="flex flex-col text-white">
                <span className="font-serif font-bold text-lg leading-tight tracking-wide">NIV - BEDERMAN</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Niv, Bederman & Co. offers a wide range of legal services backed by deep professional
              knowledge and years of experience.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-gold-200">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#articles" className="text-gray-400 hover:text-white transition-colors">Articles</a></li>
              <li><a href="#press" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-gold-200">Practice Areas</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Commercial Law</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Civil Law</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Torts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Labor Law</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Family Law</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Notary Services</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-gold-200">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>4 HaGavish St., Netanya</li>
              <li>Titanium House, P.O. Box 8911</li>
              <li>Netanya 4250407</li>
              <li className="pt-2">Tel: 09-8330338</li>
              <li>Fax: 077-5558766</li>
              <li>Email: contact@nbs-law.co.il</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Niv - Bederman & Co. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
