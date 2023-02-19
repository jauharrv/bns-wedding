import React from 'react';
import {
  HomeModernIcon,
  UsersIcon,
  CalendarIcon,
  MapIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/20/solid';

const TabBar = () => {
  return (
    <div className="fixed bottom-[16px] left-0 text-xs right-0 bg-[#ebe1f1] text-purple-900 mx-4 p-4 z-40 flex items-center justify-around rounded-lg">
      <a href="#utama" className="flex items-center flex-col">
        <HomeModernIcon className="text-[#800000] h-6 w-6" />
        <span>Home</span>
      </a>
      <a href="#pengantin" className="flex items-center flex-col">
        <UsersIcon className="text-[#800000] h-6 w-6" />
        <span>Pengantin</span>
      </a>
      <a href="#event" className="flex items-center flex-col">
        <CalendarIcon className="text-[#800000] h-6 w-6" />
        <span>Acara</span>
      </a>
      <a href="#peta" className="flex items-center flex-col">
        <MapIcon className="text-[#800000] h-6 w-6" />
        <span>Lokasi</span>
      </a>
      <a href="#ucapan" className="flex items-center flex-col">
        <ChatBubbleLeftRightIcon className="text-[#800000] h-6 w-6" />
        <span>Ucapan</span>
      </a>
    </div>
  );
};

export default TabBar;
