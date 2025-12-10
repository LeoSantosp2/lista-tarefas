import React from 'react';
import { View, Text, Switch, useColorScheme } from 'react-native';

import SafeAreaScreenComponent from '@/src/components/safe-area-screen';

import { useStyles } from './styled';

export default function SettingsScreen() {
  const currentTheme = useColorScheme();

  const { styles } = useStyles(currentTheme);

  return (
    <SafeAreaScreenComponent>
      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.title}>Configurações</Text>
        </View>

        <View style={styles.main}>
          <View style={styles.options}>
            <View style={styles.option}>
              <Text style={styles.textOption}>Modo Escuro</Text>

              <Switch />
            </View>

            <View style={styles.option}>
              <Text style={styles.textOption}>Sincronizar Tarefas</Text>

              <Switch />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaScreenComponent>
  );
}
