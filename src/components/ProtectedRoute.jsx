import React from 'react';
import { useAdminAuth } from '@/context/AdminAuthContext';
import LoginModal from '@/components/LoginModal';

const ProtectedRoute = ({ children }) => {
  const { isAdmin } = useAdminAuth();

  if (!isAdmin) {
    return <LoginModal />;
  }

  return children;
};

export default ProtectedRoute;