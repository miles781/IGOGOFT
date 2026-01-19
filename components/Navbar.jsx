"use client";
import Image from 'next/image'
import { assets } from '@/assets/assets'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const [activeAudience, setActiveAudience] = useState('web2')
  const [isMenuOpen, setIsMenuOpen] = useState(false) // Changed to State for better control

  const audienceNavs = {
    web2: ['Trading Mentorship', 'Signals', 'Courses', 'Community'],
    web3: ['DeFi Research', 'Tokenomics', 'Consulting', 'Analytics']
  };

  // 1. LOCK SCROLL LOGIC
  // This useEffect freezes the background when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden' // Disable scrolling
    } else {
      document.body.style.overflow = 'unset' // Enable scrolling
    }
    
    // Cleanup function to ensure scroll is restored if component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <nav className={`
        w-full px-6 lg:px-12 xl:px-[8%] py-4 
        flex items-center justify-between
        transition-all duration-300
        ${
          isScroll 
            ? "bg-void-blue/95 backdrop-blur-md border-b border-white/10 shadow-lg" 
            : "bg-transparent"
        }
      `}>
        {/* Logo */}
        <a 
          href="#home" 
          className="flex-shrink-0 transition-transform hover:scale-105 duration-300"
          aria-label="Home"
        >
          <div className="text-2xl font-bold font-jakarta text-primary-text">
            IgogoFT
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Audience Segmentation */}
          <div className="bg-tech-slate/50 backdrop-blur-md border border-white/10 rounded-full p-1">
            <button
              onClick={() => setActiveAudience('web2')}
              className={`px-4 py-2 rounded-full text-sm font-medium font-inter transition-all duration-300 ${
                activeAudience === 'web2'
                  ? 'bg-trust-cyan text-void-blue shadow-lg'
                  : 'text-secondary-text hover:text-primary-text hover:bg-white/10'
              }`}
            >
              Web2 Trading
            </button>
            <button
              onClick={() => setActiveAudience('web3')}
              className={`px-4 py-2 rounded-full text-sm font-medium font-inter transition-all duration-300 ${
                activeAudience === 'web3'
                  ? 'bg-trust-cyan text-void-blue shadow-lg'
                  : 'text-secondary-text hover:text-primary-text hover:bg-white/10'
              }`}
            >
              Web3 Analytics
            </button>
          </div>

          {/* Main Navigation */}
          <div className="bg-tech-slate/30 backdrop-blur-md border border-white/10 rounded-full px-8 py-3">
            <ul className="flex items-center gap-8 font-inter">
              {['Home', 'About', 'Services', 'Work', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-secondary-text hover:text-primary-text transition-all duration-300 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-trust-cyan transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Contact CTA */}
          <a 
            href="#contact" 
            className="hidden lg:flex items-center gap-3 px-6 py-3 bg-trust-cyan hover:bg-trust-cyan/90 text-void-blue font-semibold font-inter rounded-lg transition-all duration-300 hover:scale-105"
          >
            Contact
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(true)} // Updated
            aria-label="Open menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className="block w-full h-0.5 bg-primary-text"></span>
              <span className="block w-full h-0.5 bg-primary-text"></span>
              <span className="block w-full h-0.5 bg-primary-text"></span>
            </div>
          </button>
        </div>

        {/* 2. OVERLAY (BACKDROP) */}
        {/* This darkens the background and closes menu when clicked */}
        <div 
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
            }`}
            onClick={() => setIsMenuOpen(false)}
        />

        {/* Mobile Menu */}
        <div 
          className={`
            fixed inset-y-0 right-0 w-80 bg-void-blue border-l border-white/10 
            transform transition-transform duration-300 ease-in-out z-50 lg:hidden
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <div className="flex flex-col h-full p-8 overflow-y-auto"> {/* Added overflow-y-auto just in case menu is tall */}
            {/* Close Button */}
            <button 
              onClick={() => setIsMenuOpen(false)} // Updated
              className="self-end p-2 rounded-lg hover:bg-white/10 transition-colors mb-8"
              aria-label="Close menu"
            >
              <div className="w-6 h-6 relative">
                <span className="absolute top-1/2 left-0 w-full h-0.5 bg-primary-text transform rotate-45"></span>
                <span className="absolute top-1/2 left-0 w-full h-0.5 bg-primary-text transform -rotate-45"></span>
              </div>
            </button>

            {/* Audience Toggle Mobile */}
            <div className="bg-tech-slate/50 rounded-full p-1 mb-8 flex-shrink-0">
              <button
                onClick={() => setActiveAudience('web2')}
                className={`w-full py-3 rounded-full text-sm font-medium font-inter transition-all duration-300 ${
                  activeAudience === 'web2'
                    ? 'bg-trust-cyan text-void-blue'
                    : 'text-secondary-text'
                }`}
              >
                Web2 Trading
              </button>
              <button
                onClick={() => setActiveAudience('web3')}
                className={`w-full py-3 rounded-full text-sm font-medium font-inter transition-all duration-300 ${
                  activeAudience === 'web3'
                    ? 'bg-trust-cyan text-void-blue'
                    : 'text-secondary-text'
                }`}
              >
                Web3 Analytics
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex-1">
              <ul className="space-y-6">
                {['Home', 'About', 'Services', 'Work', 'Contact'].map((item, index) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-secondary-text hover:text-primary-text text-xl font-inter block py-3 transition-all duration-300 hover:translate-x-2"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Contact CTA */}
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-trust-cyan text-void-blue font-semibold font-inter rounded-lg transition-all duration-300 mt-8 flex-shrink-0"
            >
              Contact Me
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
