'use client';
import React, { createContext, useCallback, useContext, useState } from 'react';
import ToastContainer from '@/components/ui/toaster/ToastContainer';

export type ToastType = 'success' | 'info' | 'error' | 'warning';

type ToastData = {
  id: number;
  message: string;
  type: ToastType;
  open: boolean;
};

type ToasterContextType = {
  showToast: (message: string, type?: ToastType) => void;
};

const ToasterContext = createContext<ToasterContextType | undefined>(undefined);

export function ToasterProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const showToast = useCallback((message: string, type: ToastType = 'success') => {
    const id = Date.now();
    const newToast = { id, message, type, open: true };

    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => handleClose(id), 3000);
  }, []);

  const handleClose = (id: number) => {
    setToasts((prev) =>
      prev.map((toast) =>
        toast.id === id ? { ...toast, open: false } : toast
      )
    );

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 500);
  };

  return (
    <ToasterContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer
        toasts={toasts.map((toast) => ({
          ...toast,
          onClose: () => handleClose(toast.id),
        }))}
      />
    </ToasterContext.Provider>
  );
}

export const useToaster = () => {
  const context = useContext(ToasterContext);
  if (!context) throw new Error('useToaster must be used within ToasterProvider');
  return context;
};
