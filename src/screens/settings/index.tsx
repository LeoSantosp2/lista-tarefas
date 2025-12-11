import React, { useState } from 'react';
import { View, Text, Switch, Pressable, useColorScheme } from 'react-native';
import { useQueryClient } from '@tanstack/react-query';

import SafeAreaScreenComponent from '@/src/components/safe-area-screen';

import { deleteAllTasks } from '@/src/services/api';

import { useStyles } from './styled';

export default function SettingsScreen() {
  const [togglSwitch, setToggleSwitch] = useState(false);

  const currentTheme = useColorScheme();
  const queryClient = useQueryClient();

  const { styles } = useStyles(currentTheme);

  const handleDeleteAllTasks = async () => {
    await deleteAllTasks();

    queryClient.invalidateQueries({ queryKey: ['@tasks'] });
  };

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

              <View>
                <Switch
                  value={togglSwitch}
                  onValueChange={() => setToggleSwitch(!togglSwitch)}
                />
              </View>
            </View>
          </View>

          <Pressable style={styles.button} onPress={handleDeleteAllTasks}>
            <Text style={styles.buttonText}>Limpar Finalizados</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaScreenComponent>
  );
}
