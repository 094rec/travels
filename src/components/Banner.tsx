type Props = {
  title: string;
  text: string;
  imgSrc: string;
  btnText: string;
};

export const Banner = ({ title, text, imgSrc, btnText }: Props) => {
  return (
    <>
      <section className="trav-container mb-1 sm:mb-2 md:mb-3">
        <div className="relative">
          <div className="">
            <img
              className="h-[40vh] w-full rounded-xl md:h-[45%]"
              src={imgSrc}
              alt="banner"
            />
          </div>
          <div className="absolute left-0 top-20 flex w-full flex-col items-center justify-center gap-4 md:left-12 md:top-24 md:items-start">
            <h2 className="-mb-4 text-2xl font-bold text-slate-900 drop-shadow-lg filter sm:text-2xl md:text-3xl lg:text-4xl">
              {title}
            </h2>
            <p className="text-sm text-slate-900 sm:text-base">{text}</p>
            <button className="btn-black py-1.5">{btnText}</button>
          </div>
        </div>
      </section>
    </>
  );
};
