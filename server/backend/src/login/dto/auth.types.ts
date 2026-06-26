export type LoginRequest = {
  email: string;
  name: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
};
