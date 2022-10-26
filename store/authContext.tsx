import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";
import { Constants } from "../data/constants";

type AuthContextType = {
  isAuthorized: boolean;
  setIsAuthorized: (shouldBeAuthorizedToPass: boolean) => void;
};

const AuthContext = createContext<null | AuthContextType>(null);

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (
      isAuthorized ||
      localStorage.getItem(Constants.isAuthorized) === "true"
    ) {
      localStorage.setItem(Constants.isAuthorized, "true");
      router.replace("/");
      return;
    }

    if (
      localStorage.getItem(Constants.isAuthorized) === null ||
      localStorage.getItem(Constants.isAuthorized) === "false"
    ) {
      localStorage.setItem(Constants.isAuthorized, "false");
      router.replace("/auth");
      return;
    }

    router.replace("/auth");
  }, [isAuthorized]);

  const context = {
    isAuthorized,
    setIsAuthorized,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
