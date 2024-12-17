'use client';

import React, { useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation';

export default function HalamanLogin() {
  const [perlihatkanKataSandi, setKataSandi] = useState(false);
  const router = useRouter();

  const togglePassword = () => {
    setKataSandi(!perlihatkanKataSandi);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    router.push('/beranda');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-10">
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="Logo" className="h-24" />
        </div>
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">Selamat Datang</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Masukkan Email Anda</label>
            <input
              type="email"
              id="email"
              placeholder="Masukkan Email Anda"
              className="mt-2 block w-full px-5 py-3 text-lg border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-lg font-medium text-gray-700">Kata Sandi</label>
            <input
              type={perlihatkanKataSandi ? "text" : "password"}
              id="password"
              placeholder="Kata Sandi"
              className="mt-2 block w-full px-5 py-3 text-lg border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              required
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute top-1/2 transform translate-y-1/4 right-4 flex items-center"
            >
              {perlihatkanKataSandi ? (
                <IoEyeOutline className="w-6 h-6 text-gray-500" />
              ) : (
                <IoEyeOffOutline className="w-6 h-6 text-gray-500" />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md text-lg font-medium hover:bg-green-700 focus:ring-2 focus:ring-green-500"
          >
            MASUK
          </button>
        </form>

      </div>
    </div>
  );
}
