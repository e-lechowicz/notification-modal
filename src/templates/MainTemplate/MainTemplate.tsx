import React from 'react';
import Navbar from '../../components/Navbar/Navbar.tsx';

interface Props {
  children: React.ReactNode;
}

const MainTemplate: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4 bg-gray-100">{children}</main>
    </div>
  );
};

export default MainTemplate;