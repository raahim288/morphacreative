  "use client";

  import { motion } from "framer-motion";
  import { Mail, Phone, MapPin, Send } from "lucide-react";
  import { useState } from "react";

  export default function Contact() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      service: "",
      company: "",
      message: "",
    });

    const handleChange = (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (!res.ok) {
          alert(data.error || "Failed to send message.");
          return;
        }

        alert("✅ Your details have been submitted successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          company: "",
          message: "",
        });
      } catch (error) {
        alert("Something went wrong.");
      }
    };

    const contactInfo = [
      {
        icon: Mail,
        label: "Email",
        value: "raahimabdul20@gmail.com",
        link: "mailto:raahimabdul20@gmail.com",
      },
      {
        icon: Phone,
        label: "WhatsApp",
        value: "+92 313 2236545",
        link: "https://wa.me/923132236545",
      },
      {
        icon: MapPin,
        label: "Location",
        value: "North Nazimabad, Karachi, Pakistan",
        link: "https://maps.google.com",
      },
    ];

    return (
      <section id="contact" className="py-20 relative -mt-16 md:-mt-28">
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
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s collaborate and create something
              amazing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Contact Information
                </h3>
                <p className="text-slate-300 mb-6">
                  Reach out to us for a free consultation. We&apos;re always happy
                  to hear about your project.
                </p>
              </div>

              {/* Contact Cards */}
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ translateX: 10 }}
                    className="glass-card p-6 rounded-xl hover:border-blue-500/30 transition-all group cursor-pointer"
                  >
                    <div className="flex items-start gap-4 relative z-10">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/40 group-hover:to-purple-500/40 transition-all">
                          <Icon className="w-6 h-6 text-blue-400" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {info.label}
                        </h4>
                        <p className="text-slate-300 group-hover:text-blue-400 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                      placeholder="+92 3XX XXXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-white/10 text-white focus:outline-none focus:border-blue-500/50"
                    >
                      <option value="" className="bg-slate-800 text-white">
                        Select Service
                      </option>
                      <option
                        value="web-development"
                        className="bg-slate-800 text-white"
                      >
                        Web Development
                      </option>
                      <option value="seo" className="bg-slate-800 text-white">
                        SEO
                      </option>
                      <option
                        value="graphic-design"
                        className="bg-slate-800 text-white"
                      >
                        Graphic Design
                      </option>
                      <option
                        value="social-media"
                        className="bg-slate-800 text-white"
                      >
                        Social Media Marketing
                      </option>
                      <option value="other" className="bg-slate-800 text-white">
                        Other
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 rounded-lg bg-gradient-primary text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 group mt-2"
                >
                  Send Message
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    );
  }
