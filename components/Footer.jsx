import React from 'react'
import { motion } from 'motion/react'
import { Mail, Send, MessageCircle } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Email',
      url: 'mailto:tradingvictor0@gmail.com',
      icon: Mail
    },
    {
      name: 'Telegram',
      url: '#',
      icon: Send
    },
    {
      name: 'Discord',
      url: '#',
      icon: MessageCircle
    }
  ];

  return (
    <footer className="bg-void-blue border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="text-2xl font-bold font-jakarta text-primary-text mb-2">
              Victor Igogo
            </div>
            <p className="text-secondary-text font-inter text-sm">
              Financial Market Analyst & Web3 Growth Strategist
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 rounded-lg bg-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-trust-cyan/20 hover:border-trust-cyan/50 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <IconComponent
                    size={20}
                    strokeWidth={1.5}
                    className="text-secondary-text group-hover:text-trust-cyan transition-colors duration-300"
                  />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/10 text-center"
        >
          <p className="text-secondary-text font-inter text-sm">
            © Victor Igogo. Financial Market Analyst & Web3 Growth Strategist.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 