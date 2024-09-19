export default function Category() {
  return (
    <>
      <div className="px-4 relative flex flex-col gap-3">
        <div className="flex justify-between items-end">
          <h2 className="text-white text-2xl font-bold">Все товары</h2>
          <a href="" className="text-[#EDB216] text-xl font-light">Посмотреть все</a>
        </div>
        
        <div className="flex gap-2 overflow-x-auto whitespace-nowrap pl-2 no-scrollbar">
          <div className="py-1.5 px-4 inline-flex gap-1 bg-[#22222A] text-white hover:bg-custom-gradient hover:text-black text-sm rounded-xl items-center justify-center">
            <img src="/burger.svg" alt="" className="w-4 h-4" />
            <span>Бургеры</span>
          </div>
          <div className="py-1.5 px-4 inline-flex gap-1 bg-[#22222A] text-white hover:bg-custom-gradient hover:text-black text-sm rounded-xl items-center justify-center">
            <img src="/pizza.svg" alt="" className="w-4 h-4" />
            <span>Пицца</span>
          </div>
          <div className="py-1.5 px-4 inline-flex gap-1 bg-[#22222A] text-white hover:bg-custom-gradient hover:text-black text-sm rounded-xl items-center justify-center">
            <img src="/franchdog.svg" alt="" className="w-4 h-4" />
            <span>Фрэнч Доги</span>
          </div>
          <div className="py-1.5 px-4 inline-flex gap-1 bg-[#22222A] text-white hover:bg-custom-gradient hover:text-black text-sm rounded-xl items-center justify-center">
            <img src="/snacks.svg" alt="" className="w-4 h-4" />
            <span>Снэки</span>
          </div>
          <div className="py-1.5 px-4 inline-flex gap-1 bg-[#22222A] text-white hover:bg-custom-gradient hover:text-black text-sm rounded-xl items-center justify-center">
            <img src="/drink.svg" alt="" className="w-4 h-4" />
            <span>Напитки</span>
          </div>
          
        </div>
      </div>
    </>
  );
}