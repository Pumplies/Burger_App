import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setImage } from '../redux/slices/userSlice';

export default function RegistrationSecond() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Получаем текущие данные из Redux
  const registrationData = useSelector((state) => state.registration);

  // Локальные состояния для временного хранения данных формы
  const [name, setNameLocal] = useState('');
  const [image, setImageLocal] = useState('');

  // Функция для завершения регистрации и отправки данных на сервер
  async function succesful() {
    if (!name || !image) {
      alert('Все поля должны быть заполнены'); // Проверка на пустые поля
      return;
    }

    // Обновляем Redux перед отправкой данных
    dispatch(setName(name));
    dispatch(setImage(image));

    const dataToSubmit = { ...registrationData, name, image };

    try {
      // Отправляем все данные на сервер
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (response.ok) {
        // Если регистрация успешна, перенаправляем на страницу успеха
        navigate('/succesfulRegistration');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  }

  return (
    <div className="bg-[#111015] w-screen h-screen text-white px-6 py-14 flex flex-col justify-between">
      <div className="flex flex-col gap-12">
        <div>
          <div className="bg-custom-gradient w-10 h-10 rounded-xl flex justify-center items-center">
            <img src="/Back.svg" alt="" />
          </div>
        </div>
        <div className="gap-5 flex flex-col">
          <h2 className="text-3xl font-bold">
            Введите свои инициалы, <br /> чтобы продолжить
          </h2>
          <p className="text-[#6C7072] text-lg">ФИО будет использоваться в вашем профиле</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-[#22222A] py-4 w-full rounded-xl flex px-3 gap-4 items-center">
            <input
              type="text"
              className="outline-none bg-transparent flex pb-[3px] w-full placeholder-white"
              placeholder="Введите имя"
              value={name} // Привязка к локальному состоянию
              onChange={(e) => setNameLocal(e.target.value)} // Обновление локального состояния
            />
          </div>
          <div className="bg-[#22222A] py-4 w-full rounded-xl flex px-3 gap-4 items-center">
            <input
              type="text"
              className="outline-none bg-transparent flex pb-[3px] w-full placeholder-white"
              placeholder="Введите URL аватарки"
              value={image} // Привязка к локальному состоянию
              onChange={(e) => setImageLocal(e.target.value)} // Обновление локального состояния
            />
          </div>
        </div>
      </div>
      <div>
        <button onClick={succesful} className="bg-custom-gradient w-full text-black font-bold rounded-full outline-none text-xl">
          Далее
        </button>
      </div>
    </div>
  );
}
