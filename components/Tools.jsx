'use client';

import React from 'react';
import { motion } from "motion/react";
import { TrendingUp, BarChart3, Activity, Globe, Database, Layers, Target, Users, Zap } from 'lucide-react';

const Tools = () => {
  const toolCategories = [
    {
      category: "Trading",
      tools: [
        { name: "TradingView", icon: TrendingUp },
        { name: "MT5", icon: BarChart3 },
        { name: "Bybit", icon: Activity }
      ]
    },
    {
      category: "Web3",
      tools: [
        { name: "DexScreener", icon: Globe },
        { name: "DeFiLlama", icon: Database },
        { name: "Dune Analytics", icon: Layers }
      ]
    },
    {
      category: "Growth",
      tools: [
        { name: "Custom Analytics", icon: Target },
        { name: "Engagement Tracking", icon: Users },
        { name: "Performance Systems", icon: Zap }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="tools" className="bg-void-blue py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-jakarta mb-6 text-primary-text">
            Tools & Stack
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-secondary-text font-inter leading-relaxed">
            Professional-grade tools and platforms I use to deliver exceptional results
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {toolCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="text-center"
            >
              {/* Category Title */}
              <h3 className="text-xl font-bold font-jakarta text-trust-cyan mb-8">
                {category.category}
              </h3>

              {/* Tools */}
              <div className="space-y-6">
                {category.tools.map((tool, toolIndex) => {
                  const IconComponent = tool.icon;
                  return (
                    <motion.div
                      key={tool.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-trust-cyan/40 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-tech-slate border border-white/20 flex items-center justify-center group-hover:bg-trust-cyan/10 transition-colors duration-300">
                        <IconComponent
                          size={24}
                          strokeWidth={1.5}
                          className="text-secondary-text group-hover:text-trust-cyan transition-colors duration-300"
                        />
                      </div>
                      <span className="font-inter text-primary-text font-medium">
                        {tool.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;