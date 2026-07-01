import React, { useState } from "react";
import { type LoginRequest } from "../api/types/auth.types";
import login from "../api/auth/login";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";
import Validator from "../utils/validator";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!Validator.userValidateLogin(email, password)) return;

    let data: LoginRequest = {
      email: email,
      password: password,
    };

    const response = await login(data);
    if (response?.token) {
      localStorage.setItem("access_token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      navigate("/");
    } else {
      console.log("Error response");
    }
  };

  return (
    <>
      <div className="container-form">
        <form className="box-form" onSubmit={submitForm}>
          <input
            className="input-email_form"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите свое email:"
          />
          <input
            className="input-password_form"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите свой пароль:"
          />
          <input className="input-submit_form" type="submit" value="Войти" />
          <button
            className="input-submit_form"
            onClick={() => navigate("/register")}
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </>
  );
}
export default LoginPage;
