export type ThemeContextProps = {
  currentTheme: 'light' | 'dark';
  getTheme: (theme: 'light' | 'dark') => Promise<void>;
};
