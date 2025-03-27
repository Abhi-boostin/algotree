"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if we're in a browser environment (client-side)
    if (typeof window !== 'undefined') {
      try {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error accessing localStorage:', error);
      }
      setLoading(false);
    }
  }, []);

  const login = (email, password) => {
    // In a real app, this would make an API call
    // For this example, we'll just store the user in localStorage
    try {
      const newUser = { email, name: email.split('@')[0] };
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
      router.push('/dashboard');
    } catch (error) {
      console.error('Error storing user data:', error);
    }
  };

  const signup = (email, password) => {
    // Similar to login for this example
    try {
      const newUser = { email, name: email.split('@')[0] };
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
      router.push('/dashboard');
    } catch (error) {
      console.error('Error storing user data:', error);
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem('user');
      setUser(null);
      router.push('/');
    } catch (error) {
      console.error('Error removing user data:', error);
    }
  };

  const deleteAccount = () => {
    try {
      localStorage.removeItem('user');
      setUser(null);
      router.push('/');
    } catch (error) {
      console.error('Error removing user data:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, deleteAccount, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
} 