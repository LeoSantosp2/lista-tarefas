import AsyncStorage from '@react-native-async-storage/async-storage';

import { TaskProps } from '@/src/types/task-props';

export const getTasks = async (): Promise<TaskProps[]> => {
  try {
    const response = await AsyncStorage.getItem('@tasks');

    const tasks = response ? JSON.parse(response) : [];

    return tasks;
  } catch (err) {
    if (err instanceof Error) {
      console.log('Erro ao buscar as tarefas:', err.message);
    }

    return [];
  }
};

export const addTask = async (newTask: TaskProps) => {
  try {
    const response = await AsyncStorage.getItem('@tasks');

    const tasks = response ? JSON.parse(response) : [];

    const newTasks = [...tasks, newTask];

    await AsyncStorage.setItem('@tasks', JSON.stringify(newTasks));
  } catch (err) {
    if (err instanceof Error) {
      console.log('Erro ao registrar uma tarefa:', err.message);
    }
  }
};

export const updatedTask = async (task: TaskProps) => {
  try {
    const response = await AsyncStorage.getItem('@tasks');

    const tasks: TaskProps[] = response ? JSON.parse(response) : [];

    tasks.forEach((_task) => {
      if (_task.id === task.id && _task.isCompleted !== task.isCompleted) {
        _task.isCompleted = task.isCompleted;
      }

      if (_task.id === task.id && _task.task !== task.task) {
        _task.task = task.task;
      }
    });

    await AsyncStorage.setItem('@tasks', JSON.stringify(tasks));
  } catch (err) {
    if (err instanceof Error) {
      console.log('Erro ao atualizar as tarefas:', err.message);
    }
  }
};

export const deleteTask = async (id: string) => {
  try {
    const response = await AsyncStorage.getItem('@tasks');

    const tasks: TaskProps[] = response ? JSON.parse(response) : [];

    const newTasks = tasks.filter((tasks) => tasks.id !== id);

    await AsyncStorage.setItem('@tasks', JSON.stringify(newTasks));
  } catch (err) {
    if (err instanceof Error) {
      console.log('Erro ao delete a tarefa:', err.message);
    }
  }
};

export const deleteAllTasks = async () => {
  try {
    await AsyncStorage.removeItem('@tasks');
  } catch (err) {
    if (err instanceof Error) {
      console.log('Erro ao deletar todas as tarefas:', err.message);
    }
  }
};
