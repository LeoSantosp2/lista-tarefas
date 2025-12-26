import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';

import TasksScreen from '../screens/tasks';

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve(null)),
  removeItem: jest.fn(() => Promise.resolve()),
  clear: jest.fn(() => Promise.resolve()),
}));

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQuery: jest.fn(() => ({
    data: [{ id: '1', task: 'Tarefa 1', isCompleted: false }],
    isLoading: false,
    isError: false,
  })),
  useQueryClient: jest.fn(() => ({
    invalidateQueries: jest.fn(),
  })),
}));

jest.mock('@expo/vector-icons', () => ({
  AntDesign: 'Icon',
  MaterialIcons: 'Icon',
}));

describe('Tasks Screen Tests', () => {
  it('Should be render TasksScreen', () => {
    render(<TasksScreen />);
  });

  it('Should add new task', () => {
    render(<TasksScreen />);

    fireEvent.press(screen.getByTestId('add-button'));
  });

  it('Should update task', () => {
    render(<TasksScreen />);

    fireEvent.press(screen.getByTestId('edit-button'));
  });

  it('Should delete task', () => {
    render(<TasksScreen />);

    fireEvent.press(screen.getByTestId('delete-button'));
  });
});
