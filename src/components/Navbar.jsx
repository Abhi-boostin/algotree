"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';
import MobileNav from './MobileNav';

export default function Navbar() {
  const { user, logout, deleteAccount } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <MobileNav />
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">DashApp</span>
            </div>
          </div>
          
          <div className="flex items-center relative" ref={dropdownRef}>
            <Button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              variant="ghost"
              className="flex items-center gap-2"
            >
              <User className="h-5 w-5" />
              <span className="sr-only md:not-sr-only md:inline-block">
                {user ? user.name : 'Account'}
              </span>
            </Button>
            
            {dropdownOpen && (
              <div className="absolute right-0 top-12 w-56 mt-2 origin-top-right bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                <div className="py-1">
                  {user && (
                    <div className="px-4 py-3 text-sm border-b dark:border-gray-700">
                      <p className="font-medium">{user.name}</p>
                      <p className="text-gray-500 dark:text-gray-400 truncate">{user.email}</p>
                    </div>
                  )}
                  
                  <Button
                    onClick={logout}
                    variant="ghost"
                    className="w-full justify-start rounded-none text-sm px-4 py-2"
                  >
                    Logout
                  </Button>
                  
                  <Button
                    onClick={deleteAccount}
                    variant="ghost"
                    className="w-full justify-start rounded-none text-sm px-4 py-2 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                  >
                    Delete Account
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 