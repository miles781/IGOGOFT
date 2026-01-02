import React from 'react';
import { motion } from "motion/react";
import { TrendingUp, BarChart3, Target, Building2 } from 'lucide-react';

const Work = () => {
  const projects = [
    {
      title: "Angelo Trading Academy Platform",
      description: "Comprehensive trading education platform with structured courses, mentorship programs, and community features for consistent trader development.",
      category: "Educational Platform",
      metric: "200+ Students Mentored",
      icon: TrendingUp,
      type: "product"
    },
    {
      title: "Trading Performance Analytics",
      description: "Real-time performance tracking system with advanced risk metrics, backtesting capabilities, and detailed trade analysis.",
      category: "Trading Analytics",
      metric: "70% Win Rate",
      icon: BarChart3,
      type: "product"
    },
    {
      title: "Market Sentiment Research",
      description: "Comprehensive analysis of crypto market sentiment, narrative trends, and community behavior patterns for strategic positioning.",
      category: "Market Research",
      metric: "250% ROI Insights",
      icon: Target,
      type: "research"
    },
    {
      title: "Web3 Ecosystem Partnerships",
      description: "Strategic consulting and partnership development for Web3 projects, focusing on tokenomics optimization and community growth.",
      category: "Business Development",
      metric: "50+ Web3 Projects",
      icon: Building2,
      type: "product"
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

  const ProjectCard = ({ project }) => {
    const IconComponent = project.icon;
    
    return (
      <motion.div
        variants={itemVariants}
        whileHover={{
          scale: 1.02,
          y: -4,
          transition: { duration: 0.3 }
        }}
        className={`group relative backdrop-blur-sm border rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl ${
          project.type === 'product'
            ? 'bg-data-green/5 border-l-4 border-l-data-green border-white/10 hover:border-data-green/40 hover:shadow-data-green/10'
            : 'bg-data-purple/5 border-l-4 border-l-data-purple border-white/10 hover:border-data-purple/40 hover:shadow-data-purple/10'
        }`}
      >
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between min-h-[300px]">
          {/* Header */}
          <div>
            {/* Icon & Type Badge */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                project.type === 'product'
                  ? 'bg-data-green/10 group-hover:bg-data-green/20 group-hover:shadow-lg group-hover:shadow-data-green/25'
                  : 'bg-data-purple/10 group-hover:bg-data-purple/20 group-hover:shadow-lg group-hover:shadow-data-purple/25'
              }`}>
                <IconComponent
                  size={24}
                  strokeWidth={1.5}
                  className={`sm:w-8 sm:h-8 ${project.type === 'product' ? 'text-data-green' : 'text-data-purple'}`}
                />
              </div>
              
              <span className={`inline-block px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold font-inter ${
                project.type === 'product'
                  ? 'bg-data-green/20 text-data-green border border-data-green/30'
                  : 'bg-data-purple/20 text-data-purple border border-data-purple/30'
              }`}>
                {project.type === 'product' ? 'PRODUCT' : 'RESEARCH'}
              </span>
            </div>

            {/* Category */}
            <span className="text-xs font-inter text-secondary-text mb-2 block">
              {project.category}
            </span>

            {/* Title */}
            <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold font-jakarta mb-3 sm:mb-4 text-primary-text transition-colors duration-300 leading-tight ${
              project.type === 'product' ? 'group-hover:text-data-green' : 'group-hover:text-data-purple'
            }`}>
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-secondary-text font-inter leading-relaxed mb-4 sm:mb-6 line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-auto">
            {/* Metric Highlight */}
            <div className={`text-lg sm:text-xl lg:text-2xl font-bold font-jetbrains ${
              project.type === 'product' ? 'text-data-green' : 'text-data-purple'
            }`}>
              {project.metric}
            </div>

            {/* Arrow */}
            <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 ${
              project.type === 'product' ? 'bg-data-green/20' : 'bg-data-purple/20'
            }`}>
              <div className={`w-3 h-3 sm:w-4 sm:h-4 border-r-2 border-t-2 transform rotate-45 ${
                project.type === 'product' ? 'border-data-green' : 'border-data-purple'
              }`}></div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="work" className="bg-void-blue py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-jakarta mb-6 text-primary-text">
            Works / Case Studies
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-secondary-text font-inter leading-relaxed">
            Explore proven results from Angelo Trading Academy, portfolio management systems, and Web3 consulting projects.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work; 