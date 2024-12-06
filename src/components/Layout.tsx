import React from 'react';
import { useAuthStore } from '../stores/authStore';
import { AuthenticatedLayout } from './AuthenticatedLayout';
import { UnauthenticatedLayout } from './UnauthenticatedLayout';

export function Layout({ children }: { children: React.ReactNode }) {
  const user = useAuthStore((state) => state.user);
  
  if (user) {
    return <AuthenticatedLayout>{children}</AuthenticatedLayout>;
  }
  
  return <UnauthenticatedLayout>{children}</UnauthenticatedLayout>;
}