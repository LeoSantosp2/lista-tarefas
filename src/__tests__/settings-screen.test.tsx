import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';

import SettingsScreen from '../screens/settings';

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve(null)),
  removeItem: jest.fn(() => Promise.resolve()),
  clear: jest.fn(() => Promise.resolve()),
}));

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQuery: jest.fn(() => ({
    data: [],
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

describe('Settings Screen Tests', () => {
  it('Should be render Settings Screen', () => {
    render(<SettingsScreen />);
  });

  it('Should clear all finished tasks', () => {
    render(<SettingsScreen />);

    fireEvent.press(screen.getByTestId('clear-finished'));
  });
});
