import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ThemeProvider } from '@/src/context/theme';

import { ChildrenProps } from '@/src/types/children-props';

const queryClient = new QueryClient();

export default function Providers({ children }: ChildrenProps) {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}
