"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface UserInfo {
  name: string;
  email: string;
  token: string;
}

const Header = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    setUserInfo(null);
    router.push('/login');
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-600">UDV Coaching</Link>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li><Link href="/programs" className="hover:text-green-500">Programs</Link></li>
            <li><Link href="/study-materials" className="hover:text-green-500">Study Materials</Link></li>
            <li><Link href="/branches" className="hover:text-green-500">Branches</Link></li>
            <li><Link href="/contact" className="hover:text-green-500">Contact</Link></li>
            {userInfo ? (
              <>
                <li><Link href="/dashboard" className="font-semibold text-blue-600">Dashboard</Link></li>
                <li>
                  <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link href="/login" className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;