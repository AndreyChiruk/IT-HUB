import { type LoginRequest } from "../types/auth.types";
import { type LoginResponse } from "../types/auth.types";
import api from "../config";

async function login(data: LoginRequest) {
  try {
    const response = await api.post<LoginResponse>("/auth/login", data);
    return response.data;
  } catch (error) {
    console.error("Auth login error", error);
  }
}

export default login;
