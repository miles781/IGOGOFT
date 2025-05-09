'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react" // Corrected import path from 'motion/react' to 'framer-motion'

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        What I offer
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        My services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        I provide expert mentorship, VIP trading signals for real account growth,
        professional portfolio management, and high-impact educational resources like
        video tutorials and courses. My services are designed to simplify trading,
        accelerate your growth, and maximize your financial success.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center text-center border border-gray-400 rounded-lg px-8 py-12
                     hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1
                     duration-500 dark:hover:bg-darkhover dark:hover:shadow-white"
        >
          <Image src={assets.mobile_icon} className="w-24 h-24 rounded-full mb-4 object-cover" alt="Mentorship" />
          <h3 className="text-lg mb-2 text-gray-700 dark:text-white">Expert Mentorship</h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            Personalized guidance to help you build skills, navigate markets, and make confident trading decisions.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center text-center border border-gray-400 rounded-lg px-8 py-12
                     hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1
                     duration-500 dark:hover:bg-darkhover dark:hover:shadow-white"
        >
          <Image src={assets.web_icon} className="w-24 h-24 rounded-full mb-4 object-cover" alt="Signals" />
          <h3 className="text-lg mb-2 text-gray-700 dark:text-white">VIP Trading Signals</h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            Exclusive, high-accuracy signals to drive real account growth and capitalize on profitable opportunities.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center text-center border border-gray-400 rounded-lg px-8 py-12
                     hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1
                     duration-500 dark:hover:bg-darkhover dark:hover:shadow-white"
        >
          <Image src={assets.graphics_icon} className="w-24 h-24 rounded-full mb-4 object-cover" alt="Portfolio" />
          <h3 className="text-lg mb-2 text-gray-700 dark:text-white">Professional Portfolio Management</h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            Tailored portfolio management to maximize returns and minimize risk, ensuring sustainable growth.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center text-center border border-gray-400 rounded-lg px-8 py-12
                     hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1
                     duration-500 dark:hover:bg-darkhover dark:hover:shadow-white"
        >
          <Image src={assets.ui_icon} className="w-24 h-24 rounded-full mb-4 object-cover" alt="Education" />
          <h3 className="text-lg mb-2 text-gray-700 dark:text-white">High-Impact Educational Resources</h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            Powerful tutorials and courses designed to simplify trading and accelerate your learning.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
