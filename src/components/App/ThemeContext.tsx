import React, { createContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark'

interface ThemeCtx {
  theme: Theme,
  setTheme: (theme: Theme) => void
}

const THEME_KEY = 'theme';
const STORED_THEME = localStorage.getItem(THEME_KEY) as Theme | null;

export const ThemeContext = createContext<ThemeCtx>({
  theme: 'light',
  setTheme: () => {},
});

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, _setTheme] = useState<Theme>(STORED_THEME || 'light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    _setTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
