"use client";
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { formatAddress } from '@/lib/web3Utils';

const WalletConnect = ({ isDarkMode }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setWalletAddress(accounts[0]);
        setIsConnected(true);
      } catch (error) {
        console.error('Failed to connect wallet:', error);
      }
    } else {
      alert('Please install MetaMask or another Web3 wallet');
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress('');
  };



  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-4"
    >
      {!isConnected ? (
        <motion.button
          onClick={connectWallet}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-ovo hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
        >
          <Image 
            src={assets.web_icon} 
            alt="Wallet" 
            className="w-5 h-5" 
          />
          Connect Wallet
        </motion.button>
      ) : (
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-600 dark:text-green-400 font-ovo text-sm">
              {formatAddress(walletAddress)}
            </span>
          </div>
          <motion.button
            onClick={disconnectWallet}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full font-ovo text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            Disconnect
          </motion.button>
        </div>
      )}
    </motion.div>
  );
};

export default WalletConnect;