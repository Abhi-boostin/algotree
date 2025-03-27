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
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    }
  }, []);

  const login = (email, password) => {
    // In a real app, this would make an API call
    // For this example, we'll just store the user in localStorage
    const newUser = { email, name: email.split('@')[0] };
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
    router.push('/dashboard');
  };

  const signup = (email, password) => {
    // Similar to login for this example
    const newUser = { email, name: email.split('@')[0] };
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
    router.push('/dashboard');
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    router.push('/');
  };

  const deleteAccount = () => {
    localStorage.removeItem('user');
    setUser(null);
    router.push('/');
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