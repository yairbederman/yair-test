import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Contact Info */}
          <div className="lg:w-1/3">
            <h3 className="text-gold-500 font-bold tracking-wider uppercase mb-2 text-sm">Get In Touch</h3>
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-8">Contact Us</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              We would be happy to be at your disposal, together with our leading team,
              and accompany you closely, professionally and attentively throughout your legal process.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy-50 rounded-sm flex items-center justify-center shrink-0">
                  <MapPin className="text-gold-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 mb-1">Visit Us</h4>
                  <p className="text-gray-600">4 HaGavish St., Netanya, Israel</p>
                  <p className="text-gray-500 text-sm">Titanium House</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy-50 rounded-sm flex items-center justify-center shrink-0">
                  <Phone className="text-gold-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 mb-1">Call Us</h4>
                  <a href="tel:09-8330338" className="text-gray-600 hover:text-gold-600 transition-colors">09-8330338</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy-50 rounded-sm flex items-center justify-center shrink-0">
                  <Mail className="text-gold-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 mb-1">Email Us</h4>
                  <a href="mailto:contact@nbs-law.co.il" className="text-gray-600 hover:text-gold-600 transition-colors">contact@nbs-law.co.il</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy-50 rounded-sm flex items-center justify-center shrink-0">
                  <Clock className="text-gold-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 mb-1">Working Hours</h4>
                  <p className="text-gray-600">Sun - Thu: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 bg-navy-50 p-8 md:p-12 rounded-sm border border-navy-100">
            <h3 className="text-2xl font-serif font-bold text-navy-900 mb-6">Send Us a Message</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label htmlFor="name" className="block text-sm font-bold text-navy-800 mb-2 uppercase tracking-wide">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-navy-800 mb-2 uppercase tracking-wide">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                  placeholder="Your Phone"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-navy-800 mb-2 uppercase tracking-wide">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                  placeholder="Your Email"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-bold text-navy-800 mb-2 uppercase tracking-wide">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-navy-900 text-white px-8 py-4 font-bold tracking-wider hover:bg-gold-500 transition-colors w-full md:w-auto uppercase text-sm"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
