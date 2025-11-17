import { useEffect, useState, useCallback } from 'react';
import { Notification } from '../types';
import * as svc from '../services/notifications.service';

export const useNotifications = () => {
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await svc.fetchNotifications();
      setNotifications(data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  // ★★★ يعدّل read بدون أي تغيير في الكود الأصلي ★★★
  const markAsRead = (id: string | number) => {
    setNotifications((prev) =>
      prev.map((n) =>
        String(n.id) === String(id)
          ? { ...n, unread: false }
          : n
      )
    );
  };

  // ★★★ برضو يتأكد إن الـ id بتاع API يتقارن صح ★★★
  const remove = (id: string | number) => {
    setNotifications((prev) =>
      prev.filter((n) => String(n.id) !== String(id))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const unreadCount = notifications.filter((n) => n.unread).length;

  return {
    loading,
    notifications,
    load,
    markAsRead,
    remove,
    markAllAsRead,
    clearAll,
    unreadCount,
  };
};

