'use client';
import React, { useState } from 'react';
import { Wallet } from 'lucide-react';

// Simple components to avoid import issues
const MedDeFiLogo = () => (
  <div className="flex items-center space-x-2">
    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
      <span className="text-white font-bold text-lg">+</span>
    </div>
    <span className="font-bold text-xl text-gray-800">MedDeFi</span>
  </div>
);

const MobileAppButton = () => (
  <div className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg cursor-not-allowed">
    Mobile App Coming Soon
  </div>
);

const ConnectWalletButton = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const connectWallet = async () => {
    setIsLoading(true);
    try {
      // Basic wallet connection logic
      if (typeof window !== 'undefined' && (window as any).ethereum) {
        const accounts = await (window as any).ethereum.request({
          method: 'eth_requestAccounts',
        });
        
        if (accounts.length > 0) {
          setAddress(accounts[0]);
          setIsConnected(true);
        }
      } else {
        console.log('Please install MetaMask or another Web3 wallet');
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setAddress('');
  };

  const handleClick = async () => {
    if (isConnected) {
      disconnectWallet();
    } else {
      await connectWallet();
    }
  };

  const truncateAddress = (addr: string) => {
    if (!addr) return '';
    if (addr.length <= 10) return addr;
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <button
      className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black border border-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={handleClick}
      disabled={isLoading}
    >
      <Wallet className="h-5 w-5" />
      <span>
        {isLoading 
          ? 'Loading...' 
          : isConnected 
            ? truncateAddress(address) 
            : 'Connect Wallet'
        }
      </span>
    </button>
  );
};

const Header = () => {
  return (
    <header className="bg-white/80 shadow-md py-3 px-4 md:px-6 lg:px-8 rounded-3xl sticky top-4 z-50 ml-12 mr-12">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <MedDeFiLogo />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
        </div>
      </div>
    </header>
  );
};

export default Header;