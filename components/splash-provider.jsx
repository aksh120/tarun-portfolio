"use client";

import { useState, useEffect } from 'react';
import SplashScreen from './ui/splash-screen';

export default function SplashProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) return;
    const body = document.body;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    const count = (parseInt(body.dataset.lockCount || '0') + 1);
    body.dataset.lockCount = String(count);
    if (count === 1) {
      body.style.overflow = 'hidden';
      if (scrollBarWidth > 0) body.style.paddingRight = `${scrollBarWidth}px`;
    }
    return () => {
      const newCount = Math.max((parseInt(body.dataset.lockCount || '0') - 1), 0);
      body.dataset.lockCount = String(newCount);
      if (newCount === 0) {
        body.style.overflow = '';
        body.style.paddingRight = '';
      }
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && <SplashScreen />}
      {children}
    </>
  );
}
