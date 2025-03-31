import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from 'firebase/auth';

type AuthContextType = {
  currentUser: User | null;
  signup: (email: string, password: string) => Promise<any>;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // Create a mock user
  const mockUser = {
    email: 'test@example.com',
    uid: 'mock-user-id',
    emailVerified: true,
    // Add other required User properties
  } as User;

  const [currentUser, setCurrentUser] = useState<User | null>(mockUser);
  const [loading, setLoading] = useState(false);

  // Mock authentication functions
  function signup(email: string, password: string) {
    return Promise.resolve({ user: mockUser });
  }

  function login(email: string, password: string) {
    return Promise.resolve({ user: mockUser });
  }

  function logout() {
    return Promise.resolve();
  }

  const value = {
    currentUser,
    signup,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}