'use client';

import React from 'react';
import { motion } from "motion/react"
import { LineChart, TrendingUp, Globe, Users, Layers, ShieldCheck } from 'lucide-react';

const Services = () => {
  const web2Services = [
    {
      icon: TrendingUp,
      title: "Premium Crypto Trading Courses",
      description: "Comprehensive trading education covering technical analysis, risk management, and psychology for consistent performance.",
      features: ["Technical Analysis Mastery", "Risk Management Systems", "Trading Psychology", "Live Market Sessions"]
    },
    {
      icon: LineChart,
      title: "One-on-One Trading Mentorship",
      description: "Personalized mentorship program with direct access to proven strategies and real-time market guidance.",
      features: ["Personal Trading Plan", "Weekly 1:1 Sessions", "Portfolio Review", "24/7 Support"]
    },
    {
      icon: ShieldCheck,
      title: "VIP Trading Signals",
      description: "High-accuracy trading signals backed by technical and narrative analysis with detailed entry/exit strategies.",
      features: ["Real-time Alerts", "Risk-Reward Analysis", "Market Commentary", "Performance Tracking"]
    }
  ];

  const web3Services = [
    {
      icon: Users,
      title: "Web3 Community Growth Strategy",
      description: "Data-driven community building and engagement strategies designed for sustainable Web3 project growth.",
      features: ["Community Analytics", "Engagement Strategies", "Growth Frameworks", "Retention Systems"]
    },
    {
      icon: Globe,
      title: "Market Sentiment & Token Trend Analysis",
      description: "Comprehensive market intelligence combining on-chain data, social sentiment, and narrative analysis.",
      features: ["On-chain Analytics", "Sentiment Tracking", "Trend Identification", "Market Reports"]
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const ServiceCard = ({ service, type }) => {
    const IconComponent = service.icon;
    
    return (
      <motion.div
        variants={itemVariants}
        whileHover={{
          scale: 1.02,
          y: -4,
          transition: { duration: 0.3 }
        }}
        className="relative bg-tech-slate/50 backdrop-blur-sm border border-white/10 hover:border-trust-cyan/40 rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-trust-cyan/10 group"
      >
        {/* Glassmorphism gradient border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Glowing Icon */}
        <div className="relative mb-6">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
            type === 'web2' 
              ? 'bg-trust-cyan/10 group-hover:bg-trust-cyan/20 group-hover:shadow-lg group-hover:shadow-trust-cyan/25' 
              : 'bg-data-purple/10 group-hover:bg-data-purple/20 group-hover:shadow-lg group-hover:shadow-data-purple/25'
          }`}>
            <IconComponent 
              size={32} 
              strokeWidth={1.5} 
              className={`transition-colors duration-300 ${
                type === 'web2' ? 'text-trust-cyan' : 'text-data-purple'
              }`} 
            />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold font-jakarta mb-4 text-primary-text group-hover:text-trust-cyan transition-colors">
          {service.title}
        </h3>

        <p className="text-secondary-text font-inter leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-sm font-inter text-secondary-text">
              <div className={`w-1.5 h-1.5 rounded-full ${
                type === 'web2' ? 'bg-trust-cyan' : 'bg-data-purple'
              }`}></div>
              {feature}
            </li>
          ))}
        </ul>
      </motion.div>
    );
  };

  return (
    <section id="services" className="bg-tech-slate py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-jakarta mb-6 text-primary-text">
            My Services
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-secondary-text font-inter leading-relaxed">
            Bridging Web2 trading expertise with cutting-edge Web3 analytics to deliver 
            comprehensive market intelligence and growth strategies.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Web2 Services Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold font-jakarta text-trust-cyan mb-2">Web2 Services</h3>
              <p className="text-secondary-text font-inter">Traditional trading and mentorship</p>
            </div>
            
            {web2Services.map((service, index) => (
              <ServiceCard key={service.title} service={service} type="web2" />
            ))}
          </motion.div>

          {/* Web3 Services Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold font-jakarta text-data-purple mb-2">Web3 Services</h3>
              <p className="text-secondary-text font-inter">Blockchain analytics and growth</p>
            </div>
            
            {web3Services.map((service, index) => (
              <ServiceCard key={service.title} service={service} type="web3" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
