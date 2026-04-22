'use client';
import React from 'react';
import ToastItem from './Toast-Item';

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'info' | 'error' | 'warning';
  open: boolean;
  onClose: () => void;
}

export default function ToastContainer({ toasts }: { toasts: Toast[] }) {
  return (
    <div
      style={{
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        zIndex: 9999,
      }}
    >
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          open={toast.open}
          onClose={toast.onClose}
          message={toast.message}
          type={toast.type}
        />
      ))}
    </div>
  );
}

