import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, Gavel, UserCheck, Heart, FileSignature } from 'lucide-react';

const practices = [
  {
    icon: Briefcase,
    title: 'Commercial Law',
    description: 'Comprehensive legal support for businesses, contracts, and corporate affairs.',
  },
  {
    icon: Building2,
    title: 'Civil Law',
    description: 'Expert representation in civil disputes and litigation matters.',
  },
  {
    icon: Gavel,
    title: 'Torts',
    description: 'Dedicated advocacy for personal injury and damages claims.',
  },
  {
    icon: UserCheck,
    title: 'Labor Law',
    description: 'Protecting rights in the workplace for both employers and employees.',
  },
  {
    icon: Heart,
    title: 'Family Law',
    description: 'Sensitive and professional handling of divorce, custody, and family matters.',
  },
  {
    icon: FileSignature,
    title: 'Notary Services',
    description: 'Official notarization and document certification services.',
  },
];

const PracticeAreas: React.FC = () => {
  return (
    <section id="practice-areas" className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-gold-500 font-bold tracking-wider uppercase mb-2 text-sm">Our Expertise</h3>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Practice Areas</h2>
          <p className="text-gray-300 text-lg">
            We provide specialized legal services across a broad spectrum of law, ensuring expert representation for every need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-navy-800 p-8 rounded-sm hover:bg-navy-700 transition-colors group cursor-pointer border border-navy-700 hover:border-gold-500/30"
            >
              <div className="w-14 h-14 bg-navy-900 rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <practice.icon className="text-gold-500" size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-gold-400 transition-colors">
                {practice.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {practice.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
