import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [mountedComponent, setMountedComponent] = useState(false);
  const setMode = (mode) => {
    localStorage.setItem('theme', mode);
    setTheme(mode);
  };
  const themeToggler = () => {
    if (theme === 'light') setMode('dark');
    else setMode('light');
  };
  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) setMode(localTheme);
    setMountedComponent(true);
  }, []);

  return [theme, themeToggler, mountedComponent];
};
