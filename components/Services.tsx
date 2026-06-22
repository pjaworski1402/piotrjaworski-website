import React from 'react';
import { getServices } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Globe, ShoppingBag, Search, PenLine } from 'lucide-react';
import { Service } from '../types';

const iconMap = {
  globe: Globe,
  shopping: ShoppingBag,
  search: Search,
  edit: PenLine,
};

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  const Icon = iconMap[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-6 border border-neutral-800 bg-neutral-900/30 rounded-xl hover:border-emerald-900/50 transition-colors"
    >
      <div className="w-10 h-10 rounded-lg bg-emerald-950/50 border border-emerald-900/30 flex items-center justify-center mb-4">
        <Icon size={20} className="text-emerald-400" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed">{service.description}</p>
    </motion.div>
  );
};

export const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const services = getServices(language);

  return (
    <section id="services" className="py-24 border-t border-neutral-900 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('services.title')}</h2>
          <p className="text-neutral-400 max-w-2xl">{t('services.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
