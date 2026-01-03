import React from 'react'
import { motion } from 'motion/react'

const Footer = () => {
  return (
    <footer className="bg-void-blue border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center justify-center gap-4 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="text-2xl font-bold font-jakarta text-primary-text mb-2">
              Victor Igogo
            </div>
            <p className="text-secondary-text font-inter text-sm">
              Financial Market Analyst & Web3 Growth Strategist
            </p>
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
