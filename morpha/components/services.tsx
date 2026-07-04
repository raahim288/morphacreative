"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Code,
  Search,
  Share2,
  Palette,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Custom, fast, and responsive websites built to help your business grow online.",
      category: "Development",
    },
    {
      icon: Code,
      title: "Software Development",
      description:
        "Custom software solutions tailored to automate workflows and improve business efficiency.",
      category: "Development",
    },
    {
      icon: Smartphone,
      title: "Mobile Application Development",
      description:
        "High-performance Android and iOS applications with intuitive user experiences.",
      category: "Development",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Boost your search engine rankings and drive more organic traffic to your website.",
      category: "Marketing",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description:
        "Creative designs for social media, marketing materials, branding, and digital content.",
      category: "Design",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description:
        "Grow your brand through strategic Facebook, Instagram, LinkedIn, and Google Ads campaigns.",
      category: "Marketing",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Comprehensive digital solutions to transform your online presence
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group glass-card p-6 rounded-2xl hover:bg-white/[0.08] transition-all duration-300 hover:border-blue-500/30 cursor-pointer"
              >
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/40 group-hover:to-purple-500/40 transition-all duration-300">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4">
                  {service.description}
                </p>
                
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
