import { StyleSheet, ColorSchemeName } from 'react-native';

import theme from '@/src/theme';

export const useStyles = (currentTheme: ColorSchemeName) => {
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor:
        currentTheme === 'light'
          ? theme.light.colors.bgColorOne
          : theme.dark.colors.bgColorOne,
    },
  });

  return {
    styles,
  };
};
