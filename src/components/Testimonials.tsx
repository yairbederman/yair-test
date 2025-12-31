import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Very professional, serious, experienced, fast and efficient service. A firm you can rely on.",
    author: "Nathan Lahav",
  },
  {
    text: "A professional office that listens to the client's needs. Fast and relevant, personal and perfect treatment. I will be happy to use their service again.",
    author: "G. Yitzhaki",
  },
  {
    text: "Throughout the treatment I was always answered with courtesy and professionalism, direct communication and availability! Highly recommended.",
    author: "Galit Peres",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-gold-500 font-bold tracking-wider uppercase mb-2 text-sm">Testimonials</h3>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white p-8 shadow-lg rounded-sm border-t-4 border-gold-500 relative"
            >
              <div className="absolute -top-5 left-8 w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center">
                <Quote className="text-white w-4 h-4" />
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed pt-4">
                "{item.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-navy-900 font-bold font-serif">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 text-sm">{item.author}</h4>
                  <p className="text-xs text-gold-600 uppercase tracking-wide">Client</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
