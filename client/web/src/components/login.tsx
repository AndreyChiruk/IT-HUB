import React, { useState } from "react";
import { type LoginRequest, type LoginResponse } from "../api/types/auth.types";
import login from "../api/auth/login";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Отправлен запрос");
    let data: LoginRequest = {
      email: email,
      name: name,
      password: password,
    };

    const response = await login(data);
    if (response?.data.token) {
      navigate("/");
    } else {
      console.log("Error response");
    }
  };

  return (
    <>
      <div>
        <form onSubmit={submitForm}>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите свое email:"
          />
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите свое имя:"
          />
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите свой пароль:"
          />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}
export default LoginPage;
