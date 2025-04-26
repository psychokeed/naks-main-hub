import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SignIn = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Replace this with your API call
    console.log('Signing in with:', form);
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
        <div className="w-full max-w-md border border-gray-200 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-teal-700 text-center mb-6">Welcome Back</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>

            <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
              Sign In
            </Button>
          </form>

          <p className="text-sm text-center text-gray-600 mt-4">
            Don’t have an account?{' '}
            <a href="/register" className="text-teal-600 font-medium hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
  );
};

export default SignIn;
