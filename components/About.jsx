"use client";
import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from "motion/react";

const About = () => {
  return (
    <section id="about" className="bg-void-blue py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-jakarta text-primary-text mb-8">
              About Me
            </h2>
            
            <div className="space-y-6 text-lg font-inter text-secondary-text leading-relaxed">
              <p>
                I am a <span className="text-trust-cyan font-semibold">financial market analyst</span> with strong experience in crypto trading, having successfully mentored <span className="text-trust-cyan font-semibold">200+ students</span> and supported numerous Web3 projects in scaling their communities and optimizing tokenomics.
              </p>
              
              <p>
                My expertise spans both traditional financial markets and the emerging Web3 ecosystem, allowing me to provide comprehensive insights that bridge conventional trading strategies with cutting-edge blockchain analytics.
              </p>
              
              <p>
                I specialize in transforming complex market data into actionable strategies that drive consistent performance for traders and sustainable growth for Web3 communities.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                <div className="text-2xl font-bold font-jetbrains text-trust-cyan">200+</div>
                <div className="text-sm font-inter text-secondary-text">Students Mentored</div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                <div className="text-2xl font-bold font-jetbrains text-trust-cyan">50+</div>
                <div className="text-sm font-inter text-secondary-text">Web3 Projects</div>
              </div>
            </div>
          </motion.div>

          {/* Image - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="w-full max-w-md mx-auto aspect-square">
                <Image
                  src={assets.user_image}
                  alt="Victor Igogo"
                  className="w-full h-full rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-slate-700 shadow-2xl shadow-cyan-500/10"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 