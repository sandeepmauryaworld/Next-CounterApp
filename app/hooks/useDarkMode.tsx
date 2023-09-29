'use client'
import { useEffect, useState } from 'react';
export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>()

    useEffect(() => {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [isDarkMode]);
    return { isDarkMode, toggleDarkMode: () => setIsDarkMode(!isDarkMode) };
  };



