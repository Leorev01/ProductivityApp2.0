import UserNavbar from '@/components/Navbars/UserNavbar';
import React from 'react';

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <UserNavbar />
        {children}
      </>
  );
}
