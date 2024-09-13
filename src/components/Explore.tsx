type Props = {
  places: {
    placeImg: string;
    location: string;
    distance: string;
  }[];
};

export const Explore = ({ places }: Props) => {
  return (
    <>
      <section className="trav-container mb-8 max-w-sm sm:mb-14 sm:max-w-4xl lg:mb-20">
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 drop-shadow-lg filter sm:text-3xl md:text-4xl lg:text-4xl">
          Explore the beauty of World
        </h2>
        <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {places.map(({ placeImg, location, distance }) => (
            <div
              key={location}
              className="flex cursor-pointer flex-col justify-start gap-3 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-emerald-200 sm:flex-row"
            >
              <div className="flex items-center justify-center">
                <img
                  className="max-h-[30vh] w-2/3 rounded-xl drop-shadow-xl filter transition-all sm:h-auto sm:w-[70px]"
                  src={placeImg}
                  alt={location}
                />
              </div>
              <div className="flex flex-col items-center justify-center pl-2 sm:items-start sm:pl-0">
                <h3 className="-mt-1 text-sm font-medium text-slate-900 sm:mt-0 sm:text-base">
                  {location}
                </h3>
                <p className="pb-1 text-xs text-black/80 sm:pb-0 sm:text-sm">
                  {distance}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
