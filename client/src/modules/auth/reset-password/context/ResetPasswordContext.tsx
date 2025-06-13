"use client";
import { createContext, useContext, useState } from "react";

type resetPasswordContextType = {
  token: string | null;
  email: string | null;
  clearAuthInfo: () => void;
};

// Create a context for reset password
const ResetPasswordContext = createContext<
  resetPasswordContextType | undefined
>(undefined);

// ResetPasswordProvider component to provide context values
export const ResetPasswordProvider = ({
  initialToken,
  initialEmail,
  children,
}: {
  initialToken: string;
  initialEmail: string;
  children: React.ReactNode;
}) => {
  // Initialize state for token and email
  const [token, setToken] = useState<string | null>(initialToken);
  const [email, setEmail] = useState<string | null>(initialEmail);

  // Function to clear authentication information
  const clearAuthInfo = () => {
    setToken(null);
    setEmail(null);
  };

  return (
    <ResetPasswordContext.Provider value={{ token, email, clearAuthInfo }}>
      {children}
    </ResetPasswordContext.Provider>
  );
};

// Custom hook to use the ResetPasswordContext
export const useResetPasswordContext = () => {
  const context = useContext(ResetPasswordContext);
  if (!context) {
    throw new Error(
      "useResetPasswordContext must be used within a ResetPasswordProvider"
    );
  }
  return context;
};
