import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000"
                alt="Law Office Meeting"
                className="rounded-sm shadow-xl w-full object-cover h-[500px]"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-navy-50 rounded-sm -z-0 hidden lg:block"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-gold-200 rounded-sm -z-0 hidden lg:block"></div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-gold-500 font-bold tracking-wider uppercase mb-2 text-sm">Who We Are</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">
              Niv, Bederman & Co.
            </h2>
            <div className="w-20 h-1 bg-gold-500 mb-8"></div>

            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Niv, Bederman & Co., Law Office, Notary and Mediation was founded by two partners:
              Adv. Sagit Bederman and Adv. Yuval Niv. Alongside the partners, we have a team
              of lawyers who bring great professionalism and proven years of experience.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              The firm is driven by a desire to serve as a leading firm in its field,
              continuing the approach of uncompromising excellence. We emphasize personal
              connection with our clients, providing close accompaniment and full transparency
              throughout the case.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="flex flex-col items-center text-center p-4 bg-navy-50 rounded-sm">
                <Scale className="text-gold-500 mb-3" size={32} />
                <h4 className="font-serif font-bold text-navy-900 mb-1">Integrity</h4>
                <p className="text-sm text-gray-600">Uncompromising ethics in every case.</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-navy-50 rounded-sm">
                <Award className="text-gold-500 mb-3" size={32} />
                <h4 className="font-serif font-bold text-navy-900 mb-1">Excellence</h4>
                <p className="text-sm text-gray-600">Striving for the best possible results.</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-navy-50 rounded-sm">
                <Users className="text-gold-500 mb-3" size={32} />
                <h4 className="font-serif font-bold text-navy-900 mb-1">Personal</h4>
                <p className="text-sm text-gray-600">Close accompaniment for every client.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
