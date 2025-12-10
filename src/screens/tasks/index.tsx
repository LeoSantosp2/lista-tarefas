import React from 'react';
import { View, Text, TextInput, FlatList, useColorScheme } from 'react-native';
import { AntDesign, EvilIcons, Fontisto, Feather } from '@expo/vector-icons';

import SafeAreaScreenComponent from '@/src/components/safe-area-screen';

import { useStyles } from './styled';

const tasks = [
  {
    id: '1',
    task: 'Tarefa 01',
    status: 'inProgress',
  },

  {
    id: '2',
    task: 'Tarefa 02',
    status: 'inProgress',
  },

  {
    id: '3',
    task: 'Tarefa 03',
    status: 'complete',
  },

  {
    id: '4',
    task: 'Tarefa 04',
    status: 'inProgress',
  },

  {
    id: '5',
    task: 'Tarefa 05',
    status: 'complete',
  },
];

export default function TasksScreen() {
  const currentTheme = useColorScheme();

  const { styles } = useStyles(currentTheme);

  return (
    <SafeAreaScreenComponent>
      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.title}>Tarefas</Text>

          <AntDesign name="plus" size={32} color={styles.iconPlus.color} />
        </View>

        <View style={styles.containerInput}>
          <View style={styles.input}>
            <EvilIcons
              name="search"
              size={22}
              color={styles.iconSearch.color}
            />
            <TextInput
              placeholder="Buscar"
              placeholderTextColor="#CCC"
              style={styles.textInput}
            />
          </View>
        </View>

        <View style={styles.containerStatus}>
          <Text style={styles.textStatus}>2 de 5 tarefas finalizadas.</Text>
        </View>

        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <View style={[styles.containerTask, styles.shadow]}>
              <View style={styles.containerTaskUp}>
                <Fontisto
                  name={
                    item.status === 'inProgress'
                      ? 'radio-btn-passive'
                      : 'radio-btn-active'
                  }
                  size={22}
                  color={styles.iconRadio.color}
                />
                <Text style={styles.textTask}>{item.task}</Text>
              </View>

              <View style={styles.containerTaskDown}>
                <Feather name="edit-2" size={22} style={styles.iconEdit} />
                <Feather name="trash" size={22} style={styles.iconTrash} />
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaScreenComponent>
  );
}
