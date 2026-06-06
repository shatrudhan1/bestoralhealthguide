import React, { useState } from 'react';
import { useAdminAuth } from '@/context/AdminAuthContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock } from 'lucide-react';

const LoginModal = () => {
  const [password, setPassword] = useState('');
  const { login } = useAdminAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(password);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg border-0">
        <CardHeader className="space-y-2 text-center pb-6">
          <div className="mx-auto bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
            <Lock className="text-blue-600" size={24} />
          </div>
          <CardTitle className="text-2xl font-bold">Admin Access</CardTitle>
          <CardDescription>
            Enter your password to access the SEO Monitoring Dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Enter password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
                autoFocus
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Unlock Dashboard
            </Button>
            <p className="text-xs text-center text-gray-400 mt-4">
              Hint: use 'admin123'
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginModal;