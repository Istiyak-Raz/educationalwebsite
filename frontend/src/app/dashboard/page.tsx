"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface UserInfo {
  name: string;
  email: string;
  token: string;
}

const DashboardPage = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    } else {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    router.push('/login');
  };

  if (!userInfo) {
    return null; // Or a loading spinner
  }

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-blue-800">Welcome, {userInfo.name}!</h1>
      <p className="mt-4">This is your student dashboard. Here you will find your enrolled programs, upcoming exams, and payment history.</p>
      <div className="mt-8">
        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
