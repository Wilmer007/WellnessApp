import React, { createContext, useState } from "react";

export const DataContext = createContext<any>(null);

export const DataProvider = ({ children }: any) => {
  const [stackItems, setStackItems] = useState<any[]>([]);
  const [queueItems, setQueueItems] = useState<any[]>([]);
  const [historyItems, setHistoryItems] = useState<any[]>([]);

  const pushToStack = (item: any) => {
    setStackItems(prev => [...prev, item]);
  };

  const enqueue = (item: any) => {
    setQueueItems(prev => [...prev, item]);
  };

  const removeStackAt = (index: number) => {
    setStackItems(prev => prev.filter((_, i) => i !== index));
  };

  const removeQueueAt = (index: number) => {
    setQueueItems(prev => prev.filter((_, i) => i !== index));
  };

  const completeActivity = (item: any) => {
    setHistoryItems(prev => [...prev, item]);
  };

  return (
    <DataContext.Provider
      value={{
        stackItems,
        queueItems,
        historyItems,
        pushToStack,
        enqueue,
        removeStackAt,
        removeQueueAt,
        completeActivity
      }}
    >
      {children}
    </DataContext.Provider>
  );
};