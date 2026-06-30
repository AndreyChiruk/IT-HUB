export type RegisterRequest = {
  email: string;
  name: string;
  password: string;
};

export type RegisterResponse = {
  token: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
};
