import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";

const AdminAuthContext = createContext(null);

export const AdminAuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const authStatus = localStorage.getItem('isAdminAuth');
    if (authStatus === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const login = (password) => {
    if (password === 'admin123') {
      localStorage.setItem('isAdminAuth', 'true');
      setIsAdmin(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the admin dashboard.",
        variant: "default",
      });
      return true;
    } else {
      toast({
        title: "Login Failed",
        description: "Incorrect password.",
        variant: "destructive",
      });
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('isAdminAuth');
    setIsAdmin(false);
    toast({
      title: "Logged Out",
      description: "You have been securely logged out.",
    });
  };

  return (
    <AdminAuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);