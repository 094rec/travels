type Props = {
  brands: {
    iconSrc: string;
  }[];
};

export const Advertise = ({ brands }: Props) => {
  return (
    <>
      <section className="scroll-hidden mx-auto mb-8 flex w-[80%] max-w-[54rem] items-center justify-between gap-4 overflow-x-scroll scroll-smooth sm:mb-14 sm:gap-6 md:gap-8 lg:mb-20">
        {brands.map(({ iconSrc }, i) => (
          <img
            key={i}
            className="duration-400 h-auto w-28 cursor-pointer object-fill drop-shadow-lg filter transition-all hover:scale-105 sm:w-32 md:w-36"
            src={iconSrc}
            alt="brands/img"
          />
        ))}
      </section>
    </>
  );
};
