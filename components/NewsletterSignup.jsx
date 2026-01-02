"use client";
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [audience, setAudience] = useState('web2');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async () => {
    if (!email || isLoading) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, audience })
      });

      const data = await response.json();

      if (data.success) {
        setIsSubscribed(true);
        // Trigger immediate value delivery
        if (data.workbookUrl) {
          window.open(data.workbookUrl, '_blank');
        }
      } else {
        alert('Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error('Newsletter signup failed:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-tech-slate/50 backdrop-blur-sm border border-trust-cyan/30 rounded-2xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-trust-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle
            size={32}
            strokeWidth={1.5}
            className="text-trust-cyan"
          />
        </div>
        <h3 className="text-xl font-bold font-jakarta text-primary-text mb-2">
          Welcome to Angelo Trading Academy!
        </h3>
        <p className="text-secondary-text font-inter mb-4">
          Check your email for your Trading Reset eBook and welcome message from Victor.
        </p>
        <button
          onClick={() => setIsSubscribed(false)}
          className="text-trust-cyan hover:text-primary-text transition-colors font-inter"
        >
          Subscribe another email →
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-tech-slate/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold font-jakarta text-primary-text mb-2">
          Get Free Trading Reset eBook
        </h3>
        <p className="text-secondary-text font-inter">
          {audience === 'web2'
            ? 'Reset your mindset, build structure, and focus on consistency — not hype or shortcuts'
            : 'Access comprehensive Web3 research templates and protocol evaluation frameworks'
          }
        </p>
      </div>

      {/* Audience Toggle */}
      <div className="bg-void-blue/50 rounded-full p-1 mb-6 flex">
        <button
          onClick={() => setAudience('web2')}
          className={`flex-1 py-3 px-4 rounded-full text-sm font-medium font-inter transition-all duration-300 ${
            audience === 'web2'
              ? 'bg-trust-cyan text-void-blue shadow-lg'
              : 'text-secondary-text hover:text-primary-text hover:bg-white/10'
          }`}
        >
          📈 Trading Reset
        </button>
        <button
          onClick={() => setAudience('web3')}
          className={`flex-1 py-3 px-4 rounded-full text-sm font-medium font-inter transition-all duration-300 ${
            audience === 'web3'
              ? 'bg-trust-cyan text-void-blue shadow-lg'
              : 'text-secondary-text hover:text-primary-text hover:bg-white/10'
          }`}
        >
          🔗 Web3 Research
        </button>
      </div>

      {/* Email Input */}
      <div className="mb-6">
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/20 text-primary-text placeholder-secondary-text focus:outline-none focus:ring-2 focus:ring-trust-cyan focus:border-transparent transition-all duration-300 font-inter"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          list="email-suggestions"
        />
        <datalist id="email-suggestions">
          <option value="@gmail.com" />
          <option value="@yahoo.com" />
          <option value="@outlook.com" />
          <option value="@hotmail.com" />
          <option value="@icloud.com" />
        </datalist>
      </div>

      {/* Subscribe Button */}
      <motion.button
        onClick={handleSubscribe}
        disabled={isLoading || !email.trim()}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-trust-cyan hover:bg-trust-cyan/90 disabled:opacity-50 disabled:cursor-not-allowed text-void-blue py-4 px-6 rounded-xl font-semibold font-inter transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-trust-cyan/25"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-void-blue/30 border-t-void-blue rounded-full animate-spin"></div>
            Sending...
          </span>
        ) : (
          audience === 'web2' ? 'Get Free Trading Reset eBook →' : 'Get Web3 Research Kit →'
        )}
      </motion.button>

      <p className="text-center text-secondary-text text-sm mt-4 font-inter">
        Join Angelo Trading Academy — Building structure, discipline, and consistency together
      </p>
    </motion.div>
  );
};

export default NewsletterSignup;
