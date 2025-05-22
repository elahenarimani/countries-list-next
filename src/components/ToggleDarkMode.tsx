'use client';

import { useTheme } from 'next-themes';

export default function ToggleDarkMode() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      تغییر حالت به {theme === 'dark' ? 'روشن' : 'تاریک'}
    </button>
  );
}