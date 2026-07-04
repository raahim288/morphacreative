'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function WhyUs() {
  const reasons = [
    'Modern & Professional Designs',
    'Mobile Responsive',
    'Fast Performance',
    'SEO Friendly',
    'Affordable Pricing',
    'On-Time Delivery',
    'Secure Development',
    'Friendly Support',
    'Custom Solutions',
    'Client Satisfaction',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="why-us" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Why Choose <span className="text-gradient">Morpha Creative</span>?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              We&apos;re committed to delivering exceptional digital solutions that drive real results for your business.
              Our team combines creativity, technical expertise, and strategic thinking.
            </p>

            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-md bg-gradient-to-r from-blue-500 to-purple-600">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <span className="text-slate-300 font-medium">{reason}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card p-8 rounded-2xl">
              {/* Animated Background Elements */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="relative z-10 space-y-6">
                {/* Quality Badge */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 glass rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition-all"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">Premium Quality</h3>
                  <p className="text-sm text-slate-300">Every project is crafted with attention to detail</p>
                </motion.div>

                {/* Support Badge */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 glass rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                  <p className="text-sm text-slate-300">Always available when you need us</p>
                </motion.div>

                {/* Results Badge */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 glass rounded-xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
                  <p className="text-sm text-slate-300">Track record of successful projects</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
