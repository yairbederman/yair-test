import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: "Adv. Sagit Bederman",
    role: "Founding Partner",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    bio: "Adv. Sagit Bederman specializes in commercial and civil litigation, bringing years of expertise in handling complex legal disputes."
  },
  {
    name: "Adv. Yuval Niv",
    role: "Founding Partner",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    bio: "Adv. Yuval Niv is a seasoned expert in labor law and torts, dedicated to providing personal and professional representation."
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-gold-500 font-bold tracking-wider uppercase mb-2 text-sm">Our Team</h3>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">Meet The Partners</h2>
          <p className="text-gray-600 text-lg">
             The firm is led by experienced partners who bring professionalism and a proven track record to every case.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-sm overflow-hidden shadow-lg group"
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-1">{member.name}</h3>
                <p className="text-gold-600 font-medium uppercase tracking-wide text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex gap-4 border-t border-gray-100 pt-6">
                  <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-navy-900 transition-colors text-sm font-medium">
                    <Linkedin size={18} /> LinkedIn
                  </a>
                  <a href="mailto:contact@nbs-law.co.il" className="flex items-center gap-2 text-gray-500 hover:text-navy-900 transition-colors text-sm font-medium">
                    <Mail size={18} /> Email
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
