'use client'

import { motion } from 'framer-motion'
import { Users, Zap, Target, Code } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: Code, label: 'Technologies', value: '10+' },
    { icon: Users, label: 'Team Members', value: '8+' },
    { icon: Target, label: 'Clients Served', value: '40+' },
    { icon: Zap, label: 'Projects Done', value: '50+' },
  ]

  return (
    <section id="about" className="py-20 relative -mt-16 md:mt-0">
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
            About <span className="text-gradient">Morpha Creative</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Morpha Creative is a full-service digital agency based in Karachi, Pakistan.
              We specialize in website development, branding, graphic design, SEO, and digital marketing.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Our goal is to help startups, entrepreneurs, and businesses build a strong online presence
              with creative and high-performing digital solutions that deliver real business value.
            </p>

            {/* Team Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl border border-white/10"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Founded by</h3>
              <p className="text-slate-300 font-medium">Mursaleen Musani</p>
              <p className="text-sm text-slate-400 mt-1">Founder & Lead Developer</p>
            </motion.div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, translateY: -5 }}
                  className="glass-card p-6 rounded-xl text-center hover:border-blue-500/30 transition-all"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-4">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-white/10"
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Our Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Consultation', desc: 'Understand your vision and goals' },
              { num: '02', title: 'Planning', desc: 'Create detailed strategy & timeline' },
              { num: '03', title: 'Design & Dev', desc: 'Build with precision and creativity' },
              { num: '04', title: 'Launch & Support', desc: 'Deploy and provide ongoing support' },
            ].map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ translateY: -5 }}
                className="glass-card p-6 rounded-xl text-center hover:border-purple-500/30 transition-all"
              >
                <div className="text-4xl font-bold text-gradient mb-3">{step.num}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-slate-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
