import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from 'react-native';

import { useStyles } from './styled';

export default function SafeAreaScreenComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentTheme = useColorScheme();

  const { styles } = useStyles(currentTheme);

  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}
