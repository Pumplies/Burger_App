import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setEmail, setPhone, setPassword } from "../redux/slices/userSlice";

export default function RegistrationFirst() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Локальные состояния для хранения данных формы
  const [email, setEmailLocal] = useState("");
  const [phone, setPhoneLocal] = useState("");
  const [password, setPasswordLocal] = useState("");

  // Функция для сохранения данных в Redux и перехода на следующую страницу
  function registrationSecond() {
    dispatch(setEmail(email));
    dispatch(setPhone(phone));
    dispatch(setPassword(password));
    navigate("/registrationSecond");
  }

  function login() {
    navigate("/login");
  }

  return (
    <div className="relative flex flex-col bg-[url('/fon2.JPG')] w-screen h-screen justify-center items-center text-white px-6 py-14">
      <div className="absolute inset-0 bg-gray-900 opacity-80"></div>
      <div className="flex flex-col justify-evenly items-center h-screen">
        <div className="relative flex flex-col justify-center items-center">
          <h1 className="font-ar-cena text-4xl font-bold">BURGER BAR</h1>
        </div>
        <div className="relative flex flex-col">
          <div className="relative flex flex-col items-center justify-center pb-10">
            <h2 className="font-bold text-2xl">Создать аккаунт</h2>
            <p className="text-[#6C7072] text-sm">
              Зарегистрируйтесь, чтобы продолжить
            </p>
          </div>
          <div className="gap-3 flex flex-col">
            <div className="bg-[#22222A] py-4 w-full rounded-xl flex px-3 gap-4 items-center">
              <img src="/paperPlane.svg" alt="" />
              <input
                type="text"
                placeholder="Введите почту"
                className="outline-none bg-transparent flex pb-[3px] w-full placeholder-white"
                value={email}
                onChange={(e) => setEmailLocal(e.target.value)}  // Исправление: обновление локального состояния
              />
            </div>
            <div className="bg-[#22222A] py-4 w-full rounded-xl flex px-3 gap-4 items-center">
              <img src="/phone.svg" alt="" />
              <input
                type="number"
                placeholder="Введите номер"
                className="outline-none bg-transparent flex pb-[3px] w-full placeholder-white"
                value={phone}
                onChange={(e) => setPhoneLocal(e.target.value)}  // Исправление: обновление локального состояния
              />
            </div>
            <div className="bg-[#22222A] py-4 w-full rounded-xl flex px-3 gap-4 items-center">
              <img src="/Shield.svg" alt="" />
              <input
                type="text"
                placeholder="Введите пароль"
                className="outline-none bg-transparent flex pb-[3px] w-full placeholder-white"
                value={password}
                onChange={(e) => setPasswordLocal(e.target.value)}  // Исправление: обновление локального состояния
              />
              <img src="/eye-off.svg" alt="" />
            </div>
          </div>
          <div className="flex flex-col mt-5">
            <ul className="list-disc pl-5 text-sm text-[#1EC625]">
              <li>Пароль содержит более 3 символов</li>
              <li>Введены специальные символы</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2 relative">
          <button
            onClick={registrationSecond}
            className="bg-custom-gradient w-full text-black font-bold rounded-full outline-none text-xl"
          >
            Создать аккаунт
          </button>
          <button
            onClick={login}
            className="bg-transparent text-white font-bold rounded-full outline-none text-xl"
          >
            Уже есть аккаунт? <span className="text-[#B28C2E]">Войти</span>
          </button>
        </div>
      </div>
    </div>
  );
}
