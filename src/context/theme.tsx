import React, { useState, useEffect, useContext, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ChildrenProps } from '@/src/types/children-props';
import { ThemeContextProps } from '@/src/types/theme-context-props';

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);

export const ThemeProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  const fetchTheme = async () => {
    try {
      const response = await AsyncStorage.getItem('@theme');

      const theme = response ? JSON.parse(response) : 'light';

      setCurrentTheme(theme);
    } catch (err) {
      if (err instanceof Error) {
        console.log('Erro ao buscar o tema:', err.message);
      }
    }
  };

  const getTheme = async (theme: 'light' | 'dark') => {
    try {
      setCurrentTheme(theme);

      await AsyncStorage.setItem('@theme', JSON.stringify(theme));
    } catch (err) {
      if (err instanceof Error) {
        console.log('Erro ao definir o tema:', err.message);
      }
    }
  };

  useEffect(() => {
    fetchTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, getTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  return context;
};
