import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://fsyaolwsnbbuzwieedrv.supabase.co'; // Replace with your Supabase URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzeWFvbHdzbmJidXp3aWVlZHJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwMTY2MjIsImV4cCI6MjA0OTU5MjYyMn0.T8Fq4M-QwjFmxiy_YWZEBhYMr4t5neDpz3KZj2WP9t4'; // Replace with your Supabase anon key





const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const Auth = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false); // Toggle between Sign Up and Sign In
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleAuth = async () => {
    setError(null);
    setSuccessMessage(null);

    if (isSigningUp) {
      // Handle Sign Up
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        setError(error.message);
      } else {
        setSuccessMessage('Sign-up successful! Check your email for confirmation.');
      }
    } else {
      // Handle Sign In
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setError(error.message);
      } else {
        setSuccessMessage('Login successful!');
      }
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>{isSigningUp ? 'Sign Up' : 'Sign In'}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAuth();
        }}
      >
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <button type="submit">
          {isSigningUp ? 'Sign Up' : 'Sign In'}
        </button>
      </form>
      <button
        onClick={() => setIsSigningUp(!isSigningUp)}
        style={{ marginTop: '10px' }}
      >
        {isSigningUp
          ? 'Already have an account? Sign In'
          : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
};

import  { createContext, useContext, useEffect } from 'react';


interface AuthContextType {
  user: any;
  loading: boolean;
}

 const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active session on component mount
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };

    getUser();

    // Listen for auth changes
    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default Auth;
