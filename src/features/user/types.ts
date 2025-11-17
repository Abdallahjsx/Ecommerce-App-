// src/features/user/types.ts
export type User = {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  avatar?: string | null;
};

export type ApiResponse<T = any> = {
  success: boolean;
  data?: T;
  message?: string;
};
