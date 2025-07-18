import { useState, useEffect, ReactNode } from "react";

const PASSWORD = "dHJhbWkyMDI1";
const STORAGE_KEY = "password_auth";
const WEEK_IN_MS = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds

const PasswordProtection = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authData = localStorage.getItem(STORAGE_KEY);
    if (authData) {
      try {
        const { timestamp } = JSON.parse(authData);
        const now = Date.now();

        if (now - timestamp < WEEK_IN_MS) {
          setIsAuthenticated(true);
          setIsLoading(false);
          return;
        } else {
          localStorage.removeItem(STORAGE_KEY);
        }
      } catch (error) {
        localStorage.removeItem(STORAGE_KEY);
      }
    }

    const enteredPassword = prompt("Lūdzu ievadi paroli:");

    if (enteredPassword && btoa(enteredPassword) === PASSWORD) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ timestamp: Date.now() })
      );
      setIsAuthenticated(true);
    } else if (enteredPassword !== null) {
      alert("Nepareiza parole. Lūdzu, pārlādē lapu, un mēģini vēlreiz.");
    }

    setIsLoading(false);
  }, []);

  if (!isAuthenticated || isLoading) return <div></div>;

  return <>{children}</>;
};

export default PasswordProtection;
