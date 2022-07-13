import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const LIGHT = 'light';
  const DARK = 'dark';

  const [theme, setTheme] = useState(LIGHT);
  const [mountedComponent, setMountedComponent] = useState(false);
  const setMode = (mode) => {
    localStorage.setItem('theme', mode);
    setTheme(mode);
  };
  const themeToggler = () => {
    if (theme === LIGHT) setMode(DARK);
    else setMode(LIGHT);
  };
  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) setMode(localTheme);
    setMountedComponent(true);
  }, []);

  return [theme, themeToggler, mountedComponent];
};
