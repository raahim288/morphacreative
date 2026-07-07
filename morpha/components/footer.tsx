'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Share2, Code, Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { icon: MessageCircle, href: 'https://wa.me/923400266956', label: 'WhatsApp' },
  { icon: FaFacebook, href: 'https://www.facebook.com/profile.php?id=61591668477600', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://www.instagram.com/morphacreative/', label: 'Instagram' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className="border-t border-white/10 bg-white/2 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gradient mb-3">Morpha Creative</h3>
            <p className="text-slate-400 text-sm mb-4">
              Helping Businesses Build, Grow & Succeed Online.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Services', 'Portfolio', 'About', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors">
                <Mail size={16} />
                <a href="mailto:creativemorpha@gmail.com" className="text-sm">
                  creativemorpha@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors">
                <Phone size={16} />
                <a href="https://wa.me/923400266956" className="text-sm">
                  +92 3400266956
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm"> Karachi, Pakistan</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 flex items-center justify-center rounded-lg glass hover:bg-white/10 border-white/20 hover:border-blue-500/50 transition-all"
                    title={social.label}
                  >
                    <Icon size={18} className="text-slate-400 hover:text-blue-400" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-slate-500 text-sm">
              © {currentYear} Morpha Creative. All Rights Reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}