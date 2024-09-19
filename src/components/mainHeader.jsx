export default function MainHeader() {
  return (
    <>
      <div className="px-4 py-16 flex flex-col gap-2">
        <div className="flex justify-between  w-full">
          <p className="text-2xl font-bold text-white">Привет, Амир</p>
          <div className="flex gap-3">
            <img src="/search.svg" alt="" />
            <img src="/fotka.png" alt="" />
          </div>
        </div>

        <div className="w-full h-[7px] bg-custom-gradient rounded-full"></div>
      </div>
    </>
  );
}
