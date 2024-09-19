import FavoriteSlider from "./favoriteSlider";

export default function MainFavorites() {
    const products = [
        {
          name: "Чикен Бургер",
          description: "Котлета куриная, свежие овощи, сыр чеддер, соус для бургера",
          price: "₸16000",
          image: "path/to/image.jpg"
        },
        
      ];

    return (
        <>
            <div className="">
                <div></div>
                <div><FavoriteSlider products={products}/></div>
            </div>
        </>
    );
}