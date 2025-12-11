import React, { useState } from 'react';
import uuid from 'react-native-uuid';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Pressable,
  useColorScheme,
} from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import SafeAreaScreenComponent from '@/src/components/safe-area-screen';

import { getTasks, addTask, updatedTask, deleteTask } from '@/src/services/api';

import { TaskProps } from '@/src/types/task-props';

import { useStyles } from './styled';

export default function TasksScreen() {
  const [task, setTask] = useState('');
  const [editTask, setEditTask] = useState('');
  const [newTask, setNewTask] = useState('');

  const currentTheme = useColorScheme();
  const queryClient = useQueryClient();

  const { styles } = useStyles(currentTheme);
  const { data } = useQuery({
    queryKey: ['@tasks'],
    queryFn: getTasks,
  });

  const handleAddTask = async () => {
    await addTask({ id: uuid.v4(), task, isCompleted: false });

    setTask('');

    queryClient.invalidateQueries({ queryKey: ['@tasks'] });
  };

  const handleUpdateTask = async (task: TaskProps) => {
    await updatedTask(task);

    setEditTask('');
    setNewTask('');

    queryClient.invalidateQueries({ queryKey: ['@tasks'] });
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTask(id);

    queryClient.invalidateQueries({ queryKey: ['@tasks'] });
  };

  return (
    <SafeAreaScreenComponent>
      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.title}>Tarefas</Text>
        </View>

        <View style={styles.containerInput}>
          <TextInput
            value={task}
            onChangeText={setTask}
            placeholder="Adicionar Tarefa"
            placeholderTextColor="#CCC"
            style={styles.input}
          />

          <Pressable style={styles.buttonAddTask} onPress={handleAddTask}>
            <AntDesign name="plus" size={28} color={styles.iconPlus.color} />
          </Pressable>
        </View>

        <View style={styles.containerStatus}>
          <Text style={styles.textStatus}>
            {data?.filter((task) => task.isCompleted === true).length} de{' '}
            {data?.length} tarefas finalizadas.
          </Text>
        </View>

        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.containerTask}>
              <View style={styles.containerTaskUp}>
                {item.isCompleted ? (
                  <MaterialIcons
                    name="check-circle"
                    size={28}
                    color={styles.iconCheck.color}
                    onPress={() =>
                      handleUpdateTask({
                        id: item.id,
                        task: item.task,
                        isCompleted: false,
                      })
                    }
                  />
                ) : (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={28}
                    color={styles.iconCheck.color}
                    onPress={() =>
                      handleUpdateTask({
                        id: item.id,
                        task: item.task,
                        isCompleted: true,
                      })
                    }
                  />
                )}

                {editTask === item.id ? (
                  <TextInput
                    value={newTask}
                    style={styles.inputEdit}
                    onChangeText={setNewTask}
                  />
                ) : (
                  <Text style={styles.textTask}>{item.task}</Text>
                )}
              </View>

              <View style={styles.containerTaskDown}>
                {editTask === item.id ? (
                  <Pressable
                    style={styles.button}
                    onPress={() =>
                      handleUpdateTask({
                        id: item.id,
                        task: newTask,
                        isCompleted: item.isCompleted,
                      })
                    }
                  >
                    <MaterialIcons
                      name="check"
                      size={24}
                      style={styles.iconEdit}
                    />
                  </Pressable>
                ) : (
                  <Pressable
                    style={styles.button}
                    onPress={() => setEditTask(item.id)}
                  >
                    <MaterialIcons
                      name="edit"
                      size={24}
                      style={styles.iconEdit}
                    />
                  </Pressable>
                )}

                {editTask === item.id ? (
                  <Pressable
                    style={styles.button}
                    onPress={() => setEditTask('')}
                  >
                    <MaterialIcons
                      name="close"
                      size={24}
                      style={styles.iconTrash}
                    />
                  </Pressable>
                ) : (
                  <Pressable
                    style={styles.button}
                    onPress={() => handleDeleteTask(item.id)}
                  >
                    <MaterialIcons
                      name="delete"
                      size={24}
                      style={styles.iconTrash}
                    />
                  </Pressable>
                )}
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaScreenComponent>
  );
}
