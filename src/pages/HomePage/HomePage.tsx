import React from 'react';
import MainTemplate from '../../templates/MainTemplate/MainTemplate.tsx';

const HomePage: React.FC = () => (
  <MainTemplate>
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-7 px-3 py-4 mt-10">
      {[...(Array(8) as undefined[])].map((_, index) => (
        <div key={index} className="w-62 h-64 bg-gray-200 rounded-xl" />
      ))}
    </div>
  </MainTemplate>
);

export default HomePage;
