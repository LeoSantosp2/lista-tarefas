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
      width: '90%',
      marginHorizontal: 'auto',
      paddingHorizontal: 10,
      borderRadius: 20,
      backgroundColor:
        currentTheme === 'light'
          ? theme.light.colors.bgColorTwo
          : theme.dark.colors.bgColorTwo,
    },

    option: {
      width: '100%',
      height: 44,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    textOption: {
      fontSize: theme.light.font.sizes.text,
      color:
        currentTheme === 'light'
          ? theme.light.colors.textColor
          : theme.dark.colors.textColor,
    },

    button: {
      width: '90%',
      height: 44,
      marginTop: 20,
      marginHorizontal: 'auto',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:
        currentTheme === 'light'
          ? theme.light.colors.bgColorTwo
          : theme.dark.colors.bgColorTwo,
    },

    buttonText: {
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
