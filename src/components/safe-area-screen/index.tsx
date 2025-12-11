import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { useTheme } from '@/src/context/theme';

import { ChildrenProps } from '@/src/types/children-props';

import { useStyles } from './styled';

export default function SafeAreaScreenComponent({ children }: ChildrenProps) {
  const { currentTheme } = useTheme();

  const { styles } = useStyles(currentTheme);

  return (
    <SafeAreaView style={styles.screen}>
      {children}
      <StatusBar style={currentTheme === 'light' ? 'dark' : 'light'} />
    </SafeAreaView>
  );
}
