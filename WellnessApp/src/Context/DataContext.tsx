import React, { createContext, useState } from "react";

export type WellnessItem = {
  title: string;
};

export type HistoryItem = {
  title: string;
  structure: string;
  completedAt: string;
};

type DataContextType = {
  stackItems: WellnessItem[];
  queueItems: WellnessItem[];
  historyItems: HistoryItem[];

  addStackItem: (title: string) => void;
  removeStackItem: () => void;

  addQueueItem: (title: string) => void;
  removeQueueItem: () => void;

  completeActivity: (title: string, structure: string) => void;
};

export const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [stackItems, setStackItems] = useState<WellnessItem[]>([]);
  const [queueItems, setQueueItems] = useState<WellnessItem[]>([]);
  const [historyItems, setHistoryItems] = useState<HistoryItem[]>([]);

  // STACK (LIFO)
  const addStackItem = (title: string) => {
    setStackItems(prev => [...prev, { title }]);
  };

  const removeStackItem = () => {
    setStackItems(prev => prev.slice(0, -1));
  };

  // QUEUE (FIFO)
  const addQueueItem = (title: string) => {
    setQueueItems(prev => [...prev, { title }]);
  };

  const removeQueueItem = () => {
    setQueueItems(prev => prev.slice(1));
  };

  // HISTORY
  const completeActivity = (title: string, structure: string) => {
    const newItem: HistoryItem = {
      title,
      structure,
      completedAt: new Date().toLocaleString()
    };

    setHistoryItems(prev => [...prev, newItem]);
  };

  return (
    <DataContext.Provider
      value={{
        stackItems,
        queueItems,
        historyItems,
        addStackItem,
        removeStackItem,
        addQueueItem,
        removeQueueItem,
        completeActivity
      }}
    >
      {children}
    </DataContext.Provider>
  );
};