type Props = {
  title: string;
  subtitle: string;
  text: string;
  btn1: string;
  btn2: string;
  img: string;
};

export const Hero = ({ title, subtitle, text, btn1, btn2, img }: Props) => {
  return (
    <>
      <section className="mb-8 flex h-auto w-auto flex-col bg-gradient-to-b from-emerald-200 to-white sm:mb-14 lg:mb-20">
        <div className="trav-container grid items-start justify-items-center">
          <div className="mb-12 mt-24 grid items-center justify-items-center md:mb-16 md:mt-32 lg:mt-36">
            <h1 className="text-3xl font-bold text-slate-900 drop-shadow-lg filter sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <h1 className="mt-1 text-3xl font-bold text-slate-900 drop-shadow-lg filter sm:text-4xl md:text-5xl lg:text-6xl">
              {subtitle}
            </h1>
            <p className="my-5 text-center text-sm text-slate-900 sm:text-base">
              {text}
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-11">
              <button className="btn-emerald">{btn1}</button>
              <button className="btn-light">{btn2}</button>
            </div>
          </div>
          <div className="flex max-w-4xl items-center justify-center">
            <img
              className="drop-shadow-emrald w-[95%]"
              src={img}
              alt="dashboard/img"
            />
          </div>
        </div>
      </section>
    </>
  );
};
