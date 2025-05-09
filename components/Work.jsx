import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0, duration: 1 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        My latest work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        Welcome to my trading portfolio! Explore a selection of successful trades,
        portfolio strategies, and market insights that demonstrate my expertise in
        navigating financial markets, delivering consistent growth, and achieving results.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid md:grid-cols-3 gap-5 dark:text-black"
      >
        {/* CARD 1 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="aspect-square rounded-lg relative cursor-pointer group overflow-hidden border border-gray-300 hover:border-lime-300 transition-all duration-300"
        >
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={assets.edu_icon_dark}
              alt="Breakout Gold Win"
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="bg-gradient-to-tr from-white via-white/80 to-white/60 border border-gray-400 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 z-10">
            <div className="border border-gray-400 p-2 rounded-md">
              <h2 className="font-semibold border-b border-gray-400 pb-1">Breakout Gold Win</h2>
              <p className="text-sm text-gray-700 pt-1">Caught a 260-pip breakout on XAUUSD with perfect timing.</p>
            </div>
            <div className="border rounded-full border-black w-6 aspect-square flex items-center justify-center group-hover:bg-lime-300 transition text-sm">
              <Image
                src={isDarkMode ? assets.right_arrow_bold_dark : assets.send_icon}
                alt="send icon"
                className="w-5"
              />
            </div>
          </div>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="aspect-square rounded-lg relative cursor-pointer group overflow-hidden border border-gray-300 hover:border-lime-300 transition-all duration-300"
        >
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={assets.project_icon_dark}
              alt="NFP Day Setup"
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="bg-gradient-to-tr from-white via-white/80 to-white/60 border border-gray-400 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 z-10">
            <div className="border border-gray-400 p-2 rounded-md">
              <h2 className="font-semibold border-b border-gray-400 pb-1">NFP Day Setup</h2>
              <p className="text-sm text-gray-700 pt-1">Maximized 1:4 RR trade on USDCAD after NFP data.</p>
            </div>
            <div className="border rounded-full border-black w-6 aspect-square flex items-center justify-center group-hover:bg-lime-300 transition text-sm">
              <Image
                src={isDarkMode ? assets.right_arrow_bold_dark : assets.send_icon}
                alt="send icon"
                className="w-5"
              />
            </div>
          </div>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="aspect-square rounded-lg relative cursor-pointer group overflow-hidden border border-gray-300 hover:border-lime-300 transition-all duration-300"
        >
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={assets.send_icon}
              alt="Crypto Swing Ride"
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="bg-gradient-to-tr from-white via-white/80 to-white/60 border border-gray-400 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 z-10">
            <div className="border border-gray-400 p-2 rounded-md">
              <h2 className="font-semibold border-b border-gray-400 pb-1">Crypto Swing Ride</h2>
              <p className="text-sm text-gray-700 pt-1">Captured a 30% move on ETH over 5 days. Swing trade mastery.</p>
            </div>
            <div className="border rounded-full border-black w-6 aspect-square flex items-center justify-center group-hover:bg-lime-300 transition text-sm">
              <Image
                src={isDarkMode ? assets.right_arrow_bold_dark : assets.send_icon}
                alt="send icon"
                className="w-5"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <br />
      <br />

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto dark:text-white dark:border-white dark:hover:bg-darkhover"
      >
        Testimonial
      </motion.a>
    </motion.div>
  );
};

export default Work;
