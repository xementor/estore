import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeHook {
  theme: Theme;
  toggleTheme: () => void;
}

function useTheme(): ThemeHook {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    window.document.querySelector('html')!.setAttribute('data-theme', theme);
  }, [theme]);

  return { theme, toggleTheme };
}

export default useTheme;
