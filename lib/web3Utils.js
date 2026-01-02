// Web3 Utility Functions

/**
 * Format wallet address for display
 * @param {string} address - Full wallet address
 * @param {number} startChars - Number of characters to show at start
 * @param {number} endChars - Number of characters to show at end
 * @returns {string} Formatted address
 */
export const formatAddress = (address, startChars = 6, endChars = 4) => {
  if (!address) return '';
  if (address.length <= startChars + endChars) return address;
  return `${address.slice(0, startChars)}...${address.slice(-endChars)}`;
};

/**
 * Format large numbers with appropriate suffixes
 * @param {number} num - Number to format
 * @returns {string} Formatted number with suffix
 */
export const formatNumber = (num) => {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(1) + 'B';
  }
  if (num >= 1e6) {
    return (num / 1e6).toFixed(1) + 'M';
  }
  if (num >= 1e3) {
    return (num / 1e3).toFixed(1) + 'K';
  }
  return num.toString();
};

/**
 * Format currency values
 * @param {number} value - Value to format
 * @param {string} currency - Currency symbol
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (value, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

/**
 * Calculate percentage change
 * @param {number} current - Current value
 * @param {number} previous - Previous value
 * @returns {number} Percentage change
 */
export const calculatePercentageChange = (current, previous) => {
  if (previous === 0) return 0;
  return ((current - previous) / previous) * 100;
};

/**
 * Validate Ethereum address
 * @param {string} address - Address to validate
 * @returns {boolean} Is valid address
 */
export const isValidEthereumAddress = (address) => {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};

/**
 * Get chain name from chain ID
 * @param {number} chainId - Chain ID
 * @returns {string} Chain name
 */
export const getChainName = (chainId) => {
  const chains = {
    1: 'Ethereum',
    137: 'Polygon',
    42161: 'Arbitrum',
    10: 'Optimism',
    56: 'BSC',
    43114: 'Avalanche',
  };
  return chains[chainId] || 'Unknown';
};

/**
 * Format token amount with decimals
 * @param {string|number} amount - Token amount
 * @param {number} decimals - Token decimals
 * @param {number} displayDecimals - Decimals to display
 * @returns {string} Formatted amount
 */
export const formatTokenAmount = (amount, decimals = 18, displayDecimals = 4) => {
  const value = Number(amount) / Math.pow(10, decimals);
  return value.toFixed(displayDecimals);
};

/**
 * Get time ago string
 * @param {Date|string|number} date - Date to compare
 * @returns {string} Time ago string
 */
export const getTimeAgo = (date) => {
  const now = new Date();
  const past = new Date(date);
  const diffInSeconds = Math.floor((now - past) / 1000);

  if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  return `${Math.floor(diffInSeconds / 86400)}d ago`;
};

/**
 * Generate random color for charts/visualizations
 * @returns {string} Random hex color
 */
export const generateRandomColor = () => {
  const colors = [
    '#8b5cf6', '#3b82f6', '#10b981', '#f59e0b',
    '#ef4444', '#ec4899', '#6366f1', '#14b8a6'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

/**
 * Debounce function for API calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} Success status
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy text: ', err);
    return false;
  }
};

/**
 * Check if user is on mobile device
 * @returns {boolean} Is mobile device
 */
export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768;
};

/**
 * Format APY percentage
 * @param {number} apy - APY value
 * @returns {string} Formatted APY string
 */
export const formatAPY = (apy) => {
  if (apy >= 1000) return `${(apy / 1000).toFixed(1)}K%`;
  if (apy >= 100) return `${apy.toFixed(0)}%`;
  return `${apy.toFixed(2)}%`;
};