import { type RegisterRequest } from "../types/register.types";
import { type RegisterResponse } from "../types/register.types";
import api from "../config";

async function registration(data: RegisterRequest) {
  try {
    const response = await api.post<RegisterResponse>("/register", data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Auth registration error", error);
  }
}

export default registration;
