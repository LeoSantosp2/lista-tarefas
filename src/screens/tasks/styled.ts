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
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    title: {
      fontSize: theme.light.font.sizes.title,
      color:
        currentTheme === 'light'
          ? theme.light.colors.textColor
          : theme.dark.colors.textColor,
    },

    iconPlus: {
      color:
        currentTheme === 'light'
          ? theme.light.colors.textColor
          : theme.dark.colors.textColor,
    },

    containerInput: {
      width: '100%',
      height: '10%',
    },

    input: {
      width: '90%',
      height: 44,
      marginHorizontal: 'auto',
      paddingHorizontal: 10,
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor:
        currentTheme === 'light'
          ? theme.light.colors.bgColorTwo
          : theme.dark.colors.bgColorTwo,
    },

    textInput: {
      width: '90%',
      height: '100%',
      fontSize: theme.light.font.sizes.text,
      color:
        currentTheme === 'light'
          ? theme.light.colors.textColor
          : theme.dark.colors.textColor,
    },

    iconSearch: {
      color: theme.light.colors.gray,
    },

    containerStatus: {
      width: '100%',
      height: '5%',
      marginHorizontal: 'auto',
    },

    textStatus: {
      marginHorizontal: 'auto',
      fontSize: theme.light.font.sizes.text,
      color:
        currentTheme === 'light'
          ? theme.light.colors.textColor
          : theme.dark.colors.textColor,
    },

    containerTask: {
      width: '90%',
      height: 130,
      marginVertical: 15,
      marginHorizontal: 'auto',
      borderRadius: 20,
      backgroundColor:
        currentTheme === 'light'
          ? theme.light.colors.bgColorTwo
          : theme.dark.colors.bgColorTwo,
    },

    containerTaskUp: {
      width: '100%',
      height: '50%',
      paddingHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },

    iconCheck: {
      color:
        currentTheme === 'light'
          ? theme.light.colors.textColor
          : theme.dark.colors.textColor,
    },

    textTask: {
      marginLeft: 10,
      fontSize: theme.light.font.sizes.subTitle,
      color:
        currentTheme === 'light'
          ? theme.light.colors.textColor
          : theme.dark.colors.textColor,
    },

    containerTaskDown: {
      width: '100%',
      height: '50%',
      flexDirection: 'row',
      alignItems: 'center',
    },

    button: {
      width: 44,
      height: 44,
      marginHorizontal: 10,
      borderRadius: 999,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:
        currentTheme === 'light'
          ? theme.light.colors.bgColorOne
          : theme.dark.colors.bgColorOne,
    },

    iconEdit: {
      color:
        currentTheme === 'light'
          ? theme.light.colors.textColor
          : theme.dark.colors.textColor,
    },

    iconTrash: {
      color: theme.light.colors.red,
    },

    shadow: {
      shadowRadius: 10,
      shadowColor: theme.dark.colors.bgColorOne,
      shadowOpacity: 0.2,
      shadowOffset: {
        width: 0,
        height: 10,
      },
      elevation: 5,
    },
  });

  return {
    styles,
  };
};
