import axios from "axios";
import { type LoginRequest } from "../types/auth.types";
import { type LoginResponse } from "../types/auth.types";

async function login(data: LoginRequest) {
  try {
    const response = axios.post<LoginResponse>(
      "http://localhost:3000/auth/login",
      data,
    );
    return response;
  } catch (error) {
    console.error("Auth login error", error);
  }
}

export default login;
