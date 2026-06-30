import { type RegisterRequest } from "../types/register.types";
import { type RegisterResponse } from "../types/register.types";
import api from "../config";

async function registration(data: RegisterRequest) {
  try {
    const response = api.post<RegisterResponse>("/auth/registration", data);
    return response;
  } catch (error) {
    console.error("Auth registration error", error);
  }
}

export default registration;
