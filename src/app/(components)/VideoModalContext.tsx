"use client";

import React, { createContext, useContext, useState } from 'react';

interface VideoModalContextType {
  showVideoModal: boolean;
  setShowVideoModal: (value: boolean) => void;
}

const VideoModalContext = createContext<VideoModalContextType | undefined>(undefined);

export const VideoModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [showVideoModal, setShowVideoModal] = useState(true);
  return (
    <VideoModalContext.Provider value={{ showVideoModal, setShowVideoModal }}>
      {children}
    </VideoModalContext.Provider>
  );
};

export const useVideoModal = () => {
  const context = useContext(VideoModalContext);
  if (!context) throw new Error('useVideoModal must be used within a VideoModalProvider');
  return context;
}; 