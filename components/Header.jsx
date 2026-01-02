import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"
import BackgroundGrid from './BackgroundGrid'

const Header = () => {
  return (
    <section id="home" className="min-h-screen bg-void-blue flex items-center justify-center px-6 lg:px-12 py-20 relative">
      <BackgroundGrid />
      
      {/* Blended Identity Animation - Web2/Web3 Visuals */}
      <motion.div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Trading Chart Lines */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-64 h-32 border-l-2 border-t-2 border-data-green/30"
        />
        <motion.div
          animate={{
            x: [50, 150, 50],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute top-32 left-20 w-48 h-24 border-l-2 border-t-2 border-trust-cyan/40"
        />
        
        {/* Blockchain Nodes */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-4 h-4 bg-data-purple rounded-full shadow-lg shadow-data-purple/50"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute bottom-32 right-20 w-3 h-3 bg-trust-cyan rounded-full shadow-lg shadow-trust-cyan/50"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
          className="absolute bottom-40 right-32 w-2 h-2 bg-data-blue rounded-full shadow-lg shadow-data-blue/50"
        />
        
        {/* Connecting Lines */}
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-24 h-px bg-gradient-to-r from-data-purple to-trust-cyan transform rotate-45 origin-left"
        />
      </motion.div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className="relative mb-8"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto">
            <Image 
              src={assets.profile_img} 
              alt="Victor Igogo" 
              className="w-full h-full rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-slate-700 shadow-2xl shadow-cyan-500/10"
              priority
            />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-jakarta mb-6 text-primary-text"
        >
          Victor Igogo
        </motion.h1>

        {/* Subheadline */}
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-xl sm:text-2xl lg:text-3xl font-medium font-jakarta mb-8 text-trust-cyan"
        >
          Financial Market Analyst | Web3 Market Sentiment & Community Growth Strategist
        </motion.h2>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="max-w-4xl mx-auto text-lg md:text-xl text-secondary-text font-inter leading-relaxed mb-12"
        >
          I analyze crypto markets, break down token and narrative trends, and design data-driven trading and community growth strategies that help traders perform consistently and Web3 projects scale with authority.
        </motion.p>

        {/* Key Focus Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            'Crypto market & token trend analysis',
            'Trading insights and portfolio performance', 
            'Web3 narrative & sentiment research',
            'Community growth and retention strategy'
          ].map((pill, index) => (
            <span 
              key={pill}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-inter text-primary-text"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pill}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Primary CTA */}
          <a 
            href="#contact" 
            className="px-8 py-4 bg-trust-cyan hover:bg-trust-cyan/90 text-void-blue font-semibold font-inter rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-trust-cyan/25"
          >
            Work With Me
          </a>
          
          {/* Secondary CTA */}
          <a 
            href="#work" 
            className="px-8 py-4 border-2 border-primary-text text-primary-text hover:bg-primary-text hover:text-void-blue font-semibold font-inter rounded-lg transition-all duration-300 hover:scale-105"
          >
            View My Work
          </a>

          {/* Tertiary CTA */}
          <a 
            href="#newsletter" 
            className="text-primary-text hover:text-trust-cyan font-inter underline underline-offset-4 transition-colors duration-300"
          >
            Get Free Trading Reset eBook
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Header
