// src/features/user/types.ts
export type User = {
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  dateOfBirth: string;
  profileImageUrl: string;
};

export type ApiResponse<T = any> = {
  success: boolean;
  statusCode: number;
  message: {
    en: string;
    ar: string;
  };
  data: T;
  errors: any[] | null;
};

