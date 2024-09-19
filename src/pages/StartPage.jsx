
import { useNavigate } from 'react-router-dom';
export default function StartPage() {
  const navigate = useNavigate()
  function login() {
    navigate('/login')
  }
  function registration() {
    navigate('/registrationFirst')
  }
    return (
      <div className="relative flex flex-col bg-[url('/bg.JPG')] w-screen h-screen justify-center items-center text-white font-bold py-7">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        <div className="relative flex flex-col justify-center h-1/2">
          <h1 className="font-ar-cena text-4xl">BURGER BAR</h1>
        </div>
        
        <div className="relative flex flex-col gap-9 justify-end h-1/2">
          <p className="text-2xl">Вкусный бургер — это то,<br />что вы заслуживаете <br />здесь и сейчас</p>
          <div className="flex flex-col gap-4">
            <button onClick={login} className="bg-custom-gradient text-black font-bold rounded-full outline-none text-xl">Войти</button>
            <button onClick={registration} className="text-[#B28C2E] font-bold rounded-full outline-none text-xl">Зарегистрироваться</button>
          </div>
        </div>
      </div>
    );
  }
  