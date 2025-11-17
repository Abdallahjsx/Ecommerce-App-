import { Notification } from "../types";

export const fetchNotifications = async (): Promise<Notification[]> => {
  return [
    {
      id: 1,
      title: "your order has been delivered",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      title: "your order has been delivered",
      time: "2 hours ago",
      unread: false,
    },

    {
      id: 3,
      title: "your order has been delivered",
      time: "2 hours ago",
      unread: true,
    },

    {
      id: 4,
      title: "your order has been delivered",
      time: "2 hours ago",
      unread: false,
    },

    {
      id: 5,
      title: "your order has been delivered",
      time: "2 hours ago",
      unread: true,
    },



  ];
};

