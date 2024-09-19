export default function FavoritesSlider () {
  const FavoriteList = [
    {
      id: 1,
      image: "/burger1.png",
      title: "Чикен бургер",
      description:
        "Котлета куриная, свежие овощи, сыр чеддер, соус для бургера",
      price: "₸16000",
      weight: "2900g",
    },
    {
      id: 2,
      image: "/burger2.png",
      title: "Чикен бургер",
      description:
        "Котлета куриная, свежие овощи, сыр чеддер, соус для бургера",
      price: "₸16000",
      weight: "2900g",
    },
  ];
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-white font-bold text-xl">Ваши любимые товары</h1>
        <h2 className="text-[#EDB216]">Посмотреть все</h2>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex space-x-4">
          {FavoriteList.map((favorite) => (
            <div
              key={favorite.id}
              className="bg-[#22222A]  py-3 pl-1 pr-3 rounded-xl shadow-lg flex-shrink-0  text-white"
            >
              <div className="flex">
                <img src={favorite.image} alt="Бургер" className=" object-contain " />
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <h2 className="text-lg">{favorite.title}</h2>
                    <img src="/heart.svg" alt="heart" />
                  </div>
                  <div className="w-[160px] text-[#6A6A6E]">
                    <p>{favorite.description}</p>
                  </div>
                  <div className="flex gap-4">
                    
                    <div className="flex gap-5">
                      <span className="text-lg font-bold">{favorite.price}</span>
                      <div className="bg-[#16151B] rounded-full flex items-center justify-center px-2 text-[#6A6A6E]">
                        <span>{favorite.weight}</span>
                      </div>
                    </div>
                    <img src="/bag.svg" alt="" />
                  </div>
                </div>
            </div>
            </div>
          ))}
        
      </div>
      </div>
    </div>
  );
};

