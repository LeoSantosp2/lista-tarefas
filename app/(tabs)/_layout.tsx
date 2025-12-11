import React from 'react';
import {
  NativeTabs,
  Label,
  Icon,
  VectorIcon,
} from 'expo-router/unstable-native-tabs';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <NativeTabs tintColor="#34C759">
      <NativeTabs.Trigger name="index">
        <Label>Tarefas</Label>
        <Icon
          src={
            <VectorIcon family={MaterialCommunityIcons} name="clipboard-text" />
          }
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="settings">
        <Label>Configurações</Label>
        <Icon src={<VectorIcon family={MaterialIcons} name="settings" />} />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
