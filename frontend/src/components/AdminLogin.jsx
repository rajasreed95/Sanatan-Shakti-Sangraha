import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { Lock } from 'lucide-react';
import { foundationInfo } from '../mock';

// Admin credentials - In production, this should be handled via backend authentication
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'sanatan@2026'; // You can change this password

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      onLogin();
      setError('');
    } else {
      setError('Invalid username or password');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-saffron-50 via-amber-50 to-orange-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 bg-white shadow-2xl">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img 
              src={foundationInfo.logo} 
              alt="Logo" 
              className="h-20 w-auto"
            />
          </div>
          <h1 className="text-3xl font-bold text-saffron-800 mb-2">Admin Login</h1>
          <p className="text-gray-600">{foundationInfo.nameEnglish}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-gray-700">Username</Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="border-saffron-200 focus:border-saffron-500"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="border-saffron-200 focus:border-saffron-500"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-saffron-600 hover:bg-saffron-700 text-white py-6 text-lg flex items-center justify-center gap-2"
          >
            <Lock className="w-5 h-5" />
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AdminLogin;
