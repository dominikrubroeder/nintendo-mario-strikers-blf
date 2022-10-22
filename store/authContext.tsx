import { useRouter } from 'next/router';
import React, { createContext, useEffect, useState } from 'react';

type AuthContextType = {
  isAuthenticated: null | boolean;
  setIsAuthenticated: (shouldBeAuthorizedToPass: boolean) => void;
};

const AuthContext = createContext<null | AuthContextType>(null);

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<null | boolean>(null);

  const checkAuthorization = () => {
    const isAuthenticatedLS = localStorage.getItem('isAuthenticated');

    if (isAuthenticatedLS === 'true') setIsAuthenticated(true);
    if (isAuthenticatedLS === 'false') setIsAuthenticated(false);
  };

  useEffect(() => {
    console.log('Check authorization...');
    checkAuthorization();
  }, []);

  useEffect(() => {
    if (isAuthenticated === null) return;

    localStorage.setItem('isAuthenticated', isAuthenticated ? 'true' : 'false');
    isAuthenticated ? router.replace('/') : router.replace('/auth');
  }, [isAuthenticated]);

  const context = {
    isAuthenticated,
    setIsAuthenticated,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
