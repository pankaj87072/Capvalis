import React, { useState, useRef, useEffect } from 'react';
import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';
import { Wallet, Settings, LogOut } from 'lucide-react';

const Profilepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const firebase = useFirebase();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    try {
      await firebase.signout();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const Dropdown = () => {
    const menuItems = [
      {
        icon: <Wallet className="w-4 h-4" />,
        label: 'Wallet',
        onClick: () => navigate('/wallet')
      },
      {
        icon: <Settings className="w-4 h-4" />,
        label: 'Settings',
        onClick: () => navigate('/settings')
      },
      {
        icon: <LogOut className="w-4 h-4" />,
        label: 'Logout',
        onClick: handleSignOut
      }
    ];

    return (
      <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white border border-gray-200 py-1 z-50 ">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="relative z-50 " ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-10 h-10 rounded-full bg-cyan-200 flex items-center justify-center hover:bg-cyan-300 transition-colors"
      >
        <span className="text-gray-800 font-medium">
          P
        </span>
      </button>
      
      {isOpen && <Dropdown />}
    </div>
  );
};

export default Profilepage;