import { StyleSheet, ColorSchemeName } from 'react-native';

import theme from '@/src/theme';

export const useStyles = (currentTheme: ColorSchemeName) => {
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },

    header: {
      width: '100%',
      height: '10%',
      paddingTop: 10,
      paddingHorizontal: 10,
    },

    title: {
      fontSize: theme.light.font.sizes.title,
      color:
        currentTheme === 'light'
          ? theme.light.colors.textColor
          : theme.dark.colors.textColor,
    },

    main: {
      width: '100%',
      height: '90%',
    },

    options: {
      width: '100%',
    },

    option: {
      width: '90%',
      height: 44,
      marginTop: 15,
      marginHorizontal: 'auto',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    textOption: {
      fontSize: theme.light.font.sizes.text,
      color:
        currentTheme === 'light'
          ? theme.light.colors.textColor
          : theme.dark.colors.textColor,
    },
  });

  return {
    styles,
  };
};
