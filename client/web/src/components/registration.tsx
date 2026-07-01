import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";
import type { RegisterRequest } from "../api/types/register.types";
import registration from "../api/auth/registration";
import Validator from "../utils/validator";

function RegistrationPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [second_password, setSecondPassword] = useState("");
  const [name, setName] = useState("");

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!Validator.userValidate(name, email, password)) return;
    if (password != second_password) return;

    let data: RegisterRequest = {
      email: email,
      name: name,
      password: password,
    };

    const response = await registration(data);
    if (response?.token) {
      localStorage.setItem("access_token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      navigate("/");
    } else {
      console.log("Error response");
    }
  };
  return (
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
          className="input-name_form"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Введите свое имя:"
        />
        <input
          className="input-password_form"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Введите свой пароль:"
        />
        <input
          className="input-password_form"
          name="second_password"
          type="password"
          value={second_password}
          onChange={(e) => setSecondPassword(e.target.value)}
          placeholder="Повторите свой пароль:"
        />
        <input
          className="input-submit_form"
          type="submit"
          value="Зарегистрироваться"
        />
        <button
          className="input-submit_form"
          onClick={() => navigate("/login")}
        >
          Авторизироваться
        </button>
      </form>
    </div>
  );
}
export default RegistrationPage;
