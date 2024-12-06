import React from 'react';
import { Navbar } from './Navbar';

export function UnauthenticatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}