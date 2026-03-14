import React, { createContext, useState } from "react";

export type WellnessItem = {
  title: string;
};

type DataContextType = {
  stackItems: WellnessItem[];
  queueItems: WellnessItem[];

  addStackItem: (title: string) => void;
  removeStackItem: () => void;

  addQueueItem: (title: string) => void;
  removeQueueItem: () => void;
};

export const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [stackItems, setStackItems] = useState<WellnessItem[]>([]);
  const [queueItems, setQueueItems] = useState<WellnessItem[]>([]);

  const addStackItem = (title: string) => {
    setStackItems(prev => [...prev, { title }]);
  };

  const removeStackItem = () => {
    setStackItems(prev => prev.slice(0, -1));
  };

  const addQueueItem = (title: string) => {
    setQueueItems(prev => [...prev, { title }]);
  };

  const removeQueueItem = () => {
    setQueueItems(prev => prev.slice(1));
  };

  return (
    <DataContext.Provider
      value={{
        stackItems,
        queueItems,
        addStackItem,
        removeStackItem,
        addQueueItem,
        removeQueueItem
      }}
    >
      {children}
    </DataContext.Provider>
  );
};