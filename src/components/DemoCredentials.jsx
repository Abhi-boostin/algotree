"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Info } from 'lucide-react';

export default function DemoCredentials() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleDemoLogin = () => {
    login('demo@example.com', 'password123');
    router.push('/dashboard');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={() => setIsVisible(!isVisible)}
        className="rounded-full h-12 w-12 shadow-lg"
        size="icon"
        aria-label="Show demo credentials"
      >
        <Info className="h-5 w-5" />
      </Button>

      {isVisible && (
        <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-64 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="mb-3">
            <h3 className="font-medium text-sm">Demo Credentials</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Use these to quickly try the app
            </p>
          </div>
          <div className="space-y-2 mb-3">
            <div className="text-sm">
              <span className="font-semibold">Email:</span> demo@example.com
            </div>
            <div className="text-sm">
              <span className="font-semibold">Password:</span> password123
            </div>
          </div>
          <Button 
            className="w-full text-sm" 
            size="sm"
            onClick={handleDemoLogin}
          >
            Login with Demo Account
          </Button>
        </div>
      )}
    </div>
  );
} 