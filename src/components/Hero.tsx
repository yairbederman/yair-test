import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-navy-900 text-white">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2000")',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/50 to-navy-900/90" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-gold-400 font-medium tracking-[0.2em] uppercase mb-4">
            Niv, Bederman & Co.
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
            Excellence Driven <br />
            <span className="text-gold-200">Result Oriented</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl mb-10 font-light leading-relaxed">
            We offer a wide range of legal services backed by deep professional knowledge
            and years of experience. Professionalism without compromise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gold-500 text-white px-8 py-4 rounded-sm font-medium tracking-wide hover:bg-gold-600 transition-all flex items-center justify-center gap-2 group"
            >
              Consult With Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#practice-areas"
              className="border border-white/30 text-white px-8 py-4 rounded-sm font-medium tracking-wide hover:bg-white/10 transition-all"
            >
              Our Practice Areas
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold-400 to-transparent opacity-50"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
