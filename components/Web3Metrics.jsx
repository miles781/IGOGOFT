"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { assets } from '@/assets/assets';
import Image from 'next/image';

const Web3Metrics = ({ isDarkMode }) => {
  const [metrics, setMetrics] = useState({
    totalValueLocked: '2.4B',
    protocolsAnalyzed: '150+',
    tradingAccuracy: '78%',
    portfolioGrowth: '+245%'
  });

  const metricsData = [
    {
      icon: assets.web_icon,
      label: 'Total Value Analyzed',
      value: metrics.totalValueLocked,
      suffix: 'USD',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: assets.project_icon,
      label: 'DeFi Protocols Researched',
      value: metrics.protocolsAnalyzed,
      suffix: '',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: assets.code_icon,
      label: 'Trading Signal Accuracy',
      value: metrics.tradingAccuracy,
      suffix: '',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: assets.ui_icon,
      label: 'Average Portfolio Growth',
      value: metrics.portfolioGrowth,
      suffix: '',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-6 lg:px-12 py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-purple-900/20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.h4
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg font-ovo text-gray-600 dark:text-gray-400 mb-4"
          >
            Performance Metrics
          </motion.h4>

          <motion.h2
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-ovo mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Web3 Analytics Impact
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 font-ovo leading-relaxed"
          >
            Quantifiable results from Web3 research, DeFi analysis, and portfolio management 
            across multiple blockchain ecosystems.
          </motion.p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {metricsData.map((metric, index) => (
            <motion.div
              key={metric.label}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${metric.color} p-0.5`}>
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center">
                    <Image 
                      src={metric.icon} 
                      alt={metric.label}
                      className="w-8 h-8"
                    />
                  </div>
                </div>
              </div>

              {/* Value */}
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                  className={`text-3xl md:text-4xl font-ovo mb-2 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}
                >
                  {metric.value}
                </motion.div>
                
                <p className="text-gray-600 dark:text-gray-300 font-ovo text-sm leading-relaxed">
                  {metric.label}
                </p>
              </div>

              {/* Animated Background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 font-ovo text-sm">
            * Metrics based on verified trading results and research deliverables from 2023-2024
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Web3Metrics;