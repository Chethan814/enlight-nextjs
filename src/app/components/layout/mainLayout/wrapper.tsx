'use client'

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Footer from '../clientLayout/Footer';
import FloatingBtn from '../clientLayout/FloatingBtn';

// Dynamically import components with no SSR
const Preloader = dynamic(() => import('../clientLayout/Preloader'), { ssr: false });
const Header = dynamic(() => import('../clientLayout/Header'), { ssr: false });

export default function wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Hide loader after page loads
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1400); // 1000ms delay + 400ms fade out

    return () => clearTimeout(timer);
  }, []);



  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <>
      <Preloader isLoading={isLoading} />
      <main className="main_wrapper overflow-hidden" style={{ display: isLoading ? 'none' : 'block' }}>

        <Header />

        {/* Page Content */}
        <div className="page-wrapper">
          {children}
        </div>

        {/* Footer section */}
        <Footer />
        {/* Footer section end */}

        <FloatingBtn />
      </main>
    </>
  );
}
