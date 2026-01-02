"use client";
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'motion/react';

const Contact = () => {
  const [result, setResult] = useState("");
 
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "3604a74b-9be6-4ae6-b8d7-87e9589b0953");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      
      if (data.success) {
        setResult("Message sent successfully! 🎉");
        event.target.reset();
      } else {
        setResult("Failed to send message. Please try again.");
      }
    } catch (error) {
      setResult("An error occurred. Please try again.");
    }
  }

  const formVariants = {
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
    <section id='contact' className="bg-void-blue py-20 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-jakarta mb-6 text-primary-text">
            Get In Touch
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-secondary-text font-inter leading-relaxed">
            Ready to elevate your trading performance or scale your Web3 project? Let's discuss how I can help you achieve your goals.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form 
          onSubmit={onSubmit} 
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          className="bg-tech-slate/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Name Field */}
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-inter text-secondary-text mb-2">
                Your Name
              </label>
              <input 
                name='name'
                type='text' 
                placeholder='Enter your name' 
                required
                className="w-full p-4 outline-none border border-white/20 rounded-xl bg-white/5 text-primary-text font-inter placeholder-secondary-text focus:border-trust-cyan focus:ring-2 focus:ring-trust-cyan/20 transition-all duration-300"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-inter text-secondary-text mb-2">
                Your Email
              </label>
              <input 
                name='email'
                type='email' 
                placeholder='Enter your email' 
                required
                autoComplete="email"
                list="contact-email-suggestions"
                className="w-full p-4 outline-none border border-white/20 rounded-xl bg-white/5 text-primary-text font-inter placeholder-secondary-text focus:border-trust-cyan focus:ring-2 focus:ring-trust-cyan/20 transition-all duration-300"
              />
              <datalist id="contact-email-suggestions">
                <option value="@gmail.com" />
                <option value="@yahoo.com" />
                <option value="@outlook.com" />
                <option value="@hotmail.com" />
                <option value="@icloud.com" />
              </datalist>
            </motion.div>
          </div>

          {/* Message Field */}
          <motion.div variants={itemVariants} className="mb-8">
            <label htmlFor="message" className="block text-sm font-inter text-secondary-text mb-2">
              Your Message
            </label>
            <textarea 
              name='message'
              rows='6' 
              placeholder='Tell me about your project, questions, or how I can help...' 
              required
              className="w-full p-4 outline-none border border-white/20 rounded-xl bg-white/5 text-primary-text font-inter placeholder-secondary-text focus:border-trust-cyan focus:ring-2 focus:ring-trust-cyan/20 transition-all duration-300 resize-none"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              type='submit'
              className="px-12 py-4 bg-trust-cyan hover:bg-trust-cyan/90 text-void-blue font-semibold font-inter rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-trust-cyan/25"
            >
              Send Message
            </motion.button>
            
            {/* Result Message */}
            {result && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-center font-inter text-trust-cyan"
              >
                {result}
              </motion.p>
            )}
          </motion.div>
        </motion.form>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-secondary-text font-inter mb-4">
            Prefer other ways to connect?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:tradingvictor0@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 text-secondary-text font-inter hover:text-primary-text hover:border-trust-cyan/40 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Email
            </a>
            <a 
              href="https://x.com/IGOGOFT?t=8YUoh4CsEOryyIqHkcKExQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 text-secondary-text font-inter hover:text-primary-text hover:border-trust-cyan/40 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Twitter
            </a>
            <a 
              href="https://www.facebook.com/share/1ZRPGmVXTv/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 text-secondary-text font-inter hover:text-primary-text hover:border-trust-cyan/40 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
            <a 
              href="https://t.me/IGOGOFT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 text-secondary-text font-inter hover:text-primary-text hover:border-trust-cyan/40 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram
            </a>
            <a 
              href="https://wa.me/2348167085103"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 text-secondary-text font-inter hover:text-primary-text hover:border-trust-cyan/40 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.085"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 