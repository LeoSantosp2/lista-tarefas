import React from 'react';
import Toast from 'react-native-toast-message';
import { View, Text, Switch, Pressable } from 'react-native';
import { useQueryClient } from '@tanstack/react-query';

import SafeAreaScreenComponent from '@/src/components/safe-area-screen';

import { useTheme } from '@/src/context/theme';

import { deleteAllTasks } from '@/src/services/api';

import { useStyles } from './styled';

export default function SettingsScreen() {
  const queryClient = useQueryClient();

  const { currentTheme, getTheme } = useTheme();
  const { styles } = useStyles(currentTheme);

  const handleDeleteAllTasks = async () => {
    await deleteAllTasks();

    queryClient.invalidateQueries({ queryKey: ['@tasks'] });

    Toast.show({
      type: 'success',
      text1: 'Sucesso',
      text2: 'Tarefas excluidas com sucesso.',
    });
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
                  value={currentTheme === 'light' ? false : true}
                  onValueChange={() =>
                    getTheme(currentTheme === 'light' ? 'dark' : 'light')
                  }
                  ios_backgroundColor="#A5A5A5"
                  trackColor={{ true: '#3A7AFE', false: '#A5A5A5' }}
                />
              </View>
            </View>
          </View>

          <Pressable
            testID="clear-finished"
            style={styles.button}
            onPress={handleDeleteAllTasks}
          >
            <Text style={styles.buttonText}>Limpar Finalizados</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaScreenComponent>
  );
}
