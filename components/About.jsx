import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-28 scroll-mt-20 min-h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        {/* Introduction */}
        <div className="text-center mb-10">
          <motion.h4
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg font-ovo"
          >
            Introduction
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl font-ovo mt-2"
          >
            About me
          </motion.h2>
        </div>

        {/* Image + Bio */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-64 sm:w-80 rounded-3xl flex-shrink-0"
          >
            <Image
              src={assets.user_image}
              alt="user"
              className="w-full h-80 object-cover rounded-3xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex-1"
          >
            <p className="mb-10 max-w-2xl font-ovo text-lg leading-8 text-justify">
              I'm a dedicated trading mentor and portfolio manager with a proven record —
              mentoring over 50 students, providing VIP signals for consistent growth,
              managing investor portfolios, and creating in-depth courses and tutorials
              to simplify the financial markets. I turn complexity into clarity and help
              others grow with confidence.
            </p>
          </motion.div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center gap-6 my-12">
          {/* Card 1 */}
          <div className="w-[280px] min-h-[400px] bg-white/10 backdrop-blur-md border border-gray-300 dark:border-white dark:bg-white text-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-white p-3 mb-3 shadow">
                <Image src={assets.code_icon} alt="icon" className="w-8" />
              </div>
              <h3 className="text-lg font-semibold text-center">
                Premium Trading Course
              </h3>
              <p className="text-sm text-center mt-2">
                Learn everything from technical analysis to live strategy application.
                Lifetime access included.
              </p>
            </div>
            <a
              href='https://wa.me/+2348167085103?text=Thank%20you%20for%20your%20interest%20in%20the%20Premium%20Trading%20Course%20%F0%9F%93%9A!%20%20To%20proceed%20with%20enrollment,%20kindly%20make%20payment%20to%20the%20account%20below%20%F0%9F%93%8A;%20%20Account%20Number:%208167085103%20%20Bank%20Name:%20Opay%20Account%20%F0%9F%93%88%20Account%20Name:%20Igogo%20Victor%20Anyuikpe%20Amount:%20Naira%2039,200%20%F0%9F%92%B8%20%20Once%20payment%20is%20confirmed,%20you%20will%20receive%20full%20access%20to%20the%20course%20materials%20%F0%9F%93%81.'
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-6 w-full py-2 text-sm font-semibold rounded border border-gray-700 bg-transparent text-gray-700 hover:bg-gray-100 transition-all">
                Buy Now – $24.5
              </button>
            </a>
          </div>

          {/* Card 2 */}
          <div className="w-[280px] min-h-[400px] bg-white/10 backdrop-blur-md border border-gray-300 dark:border-white dark:bg-white text-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-white p-3 mb-3 shadow">
                <Image src={assets.edu_icon} alt="icon" className="w-8" />
              </div>
              <h3 className="text-lg font-semibold text-center">
                1-on-1 Mentorship
              </h3>
              <p className="text-sm text-center mt-2">
                Personalized guidance to help you become a confident, profitable trader.
              </p>
            </div>
            <a
              href='https://wa.me/+2348167085103?text=You%E2%80%99ve%20selected%20the%201-on-1%20Mentorship%20Program%20%F0%9F%A4%9D!%20%20To%20begin,%20please%20make%20payment%20using%20the%20details%20below%20%F0%9F%93%8A;%20%20Account%20Number:%208167085103%20%20Bank%20Name:%20Opay%20Account%20%F0%9F%93%88%20Account%20Name:%20Igogo%20Victor%20Anyuikpe%20%20Amount%20in%20Nigeria:%2032,000%20%F0%9F%92%B8%20After%20confirmation,%20your%20personalized%20mentorship%20schedule%20will%20be%20arranged%20%F0%9F%93%85.'
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-6 w-full py-2 text-sm font-semibold rounded border border-gray-700 bg-transparent text-gray-700 hover:bg-gray-100 transition-all">
                Buy Now – $20
              </button>
            </a>
           
          </div>

          {/* Card 3 */}
          <div className="w-[280px] min-h-[400px] bg-white/10 backdrop-blur-md border border-gray-300 dark:border-white dark:bg-white text-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-white p-3 mb-3 shadow">
                <Image src={assets.project_icon} alt="icon" className="w-8" />
              </div>
              <h3 className="text-lg font-semibold text-center">
                VIP Signal Access
              </h3>
              <p className="text-sm text-center mt-2">
                Real-time trade setups for Forex, Crypto, and Indexes.
              </p>
            </div>
            <a
              href='https://wa.me/+2348167085103?text=Youre%20one%20step%20away%20from%20joining%20the%20VIP%20%20Signal%20Group%20%F0%9F%91%91!%20%20To%20gain%20access,%20please%20complete%20your%20payment%20using%20the%20following%20details%20%F0%9F%93%8A;%20Account%20Number:%208167085103%20Bank%20Name:%20Opay%20Account%20%F0%9F%93%88%20Account%20Name:%20Igogo%20Victor%20Anyuikpe%20Amount%20in%20Naira:%2079,200%20%F0%9F%92%B8%20%20Access%20will%20be%20granted%20immediately%20upon%20payment%20confirmation%20%F0%9F%94%93'
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-6 w-full py-2 text-sm font-semibold rounded border border-gray-700 bg-transparent text-gray-700 hover:bg-gray-100 transition-all">
                Buy Now – $49.5
              </button>
            </a>
          </div>
        </div>

        {/* Tools Section */}
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.5 }}
          className="my-8 text-gray-700 font-ovo dark:text-white/80 text-center"
        >
          Tools I use
        </motion.h4>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {/* Tool 1 */}
          <li className="flex items-center justify-center w-14 h-14 rounded-xl border border-gray-300 dark:border-white bg-white dark:bg-white p-2 shadow-md">
            <Image src={assets.mongodb} alt="Tool 1" className="w-7" />
          </li>
          {/* Tool 2 */}
          <li className="flex items-center justify-center w-14 h-14 rounded-xl border border-gray-300 dark:border-white bg-white dark:bg-white p-2 shadow-md">
            <Image src={assets.figma} alt="Tool 2" className="w-7" />
          </li>
          {/* Tool 3 */}
          <li className="flex items-center justify-center w-14 h-14 rounded-xl border border-gray-300 dark:border-white bg-white dark:bg-white p-2 shadow-md">
            <Image src={assets.firebase} alt="Tool 3" className="w-7" />
          </li>
          {/* Tool 4 */}
          <li className="flex items-center justify-center w-14 h-14 rounded-xl border border-gray-300 dark:border-white bg-white dark:bg-white p-2 shadow-md">
            <Image src={assets.git} alt="Tool 4" className="w-7" />
          </li>
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default About;
