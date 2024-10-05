"use client";
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

// Create a QueryClient instance
const queryClient = new QueryClient();

export default function Providers({ children } : Readonly<{
  children: React.ReactNode;
}>)  {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
