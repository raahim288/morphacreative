'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: 'Andrea Renault - Trading Coach',
      description: 'Professional financial consulting platform with trading strategies, courses, and educational content for online traders.',
      category: 'Finance & Education',
      url: 'https://andrearenault.com/',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      id: 2,
      title: 'GNAMO - Restaurant Discovery',
      description: 'Curated restaurant booking platform for discovering and reserving the best dining experiences in Tuscany.',
      category: 'Travel & Lifestyle',
      url: 'https://www.gnamo.net/',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      id: 3,
      title: 'Street Photography Course',
      description: 'Comprehensive online photography course covering street photography techniques, famous photographers, and post-production skills.',
      category: 'Education',
      url: 'https://www.corso-street-photography.it/',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      id: 4,
      title: 'PVLab - Solar Research',
      description: 'Swiss laboratory for photovoltaic testing and research, advancing sustainable energy solutions and innovation.',
      category: 'Technology & Energy',
      url: 'https://pvlab.solar/',
      image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    },
    {
      id: 5,
      title: 'Legal Services Platform',
      description: 'Professional legal services website with consultation booking, services showcase, and client testimonials.',
      category: 'Legal Services',
      url: 'https://legalservices09992.netlify.app/',
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
    {
      id: 6,
      title: 'SM by Hina Fahad',
      description: 'Personal brand website showcasing creative work, portfolio, and professional services with modern design.',
      category: 'Creative & Design',
      url: 'https://smbyhinafahad.com/',
      image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    },
    {
      id: 7,
      title: 'Car Management System',
      description: 'Full-stack vehicle management application with real-time tracking, maintenance logs, and fleet analytics.',
      category: 'SaaS & Enterprise',
      url: 'https://car-management-iota.vercel.app/',
      image: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)',
    },
    {
      id: 8,
      title: 'Trading App Platform',
      description: 'Advanced trading application with real-time market data, portfolio management, and trading analytics dashboard.',
      category: 'Fintech',
      url: 'https://tradingapp556.vercel.app/',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="portfolio" className="relative py-20 md:py-32 overflow-hidden -mt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />
      
      <div className="relative container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Explore our collection of successful projects across diverse industries. Each project showcases our commitment to excellence, innovation, and delivering exceptional results.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {portfolioItems.map((item) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Portfolio Card */}
              <div className="glass-card h-full p-6 flex flex-col rounded-2xl overflow-hidden hover:border-blue-400/50 transition-all duration-300">
                {/* Gradient Background */}
                <div
                  className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ background: item.image }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Category Badge */}
                  <div className="inline-flex items-center mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 mb-6 flex-grow line-clamp-3">
                    {item.description}
                  </p>

                  {/* Link Button */}
                  <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    <span className="text-sm font-semibold">Visit Project</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/10 transition-all duration-300" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-primary text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            Start Your Project
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
