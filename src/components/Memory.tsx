type Exp = {
  number: string;
  title: string;
};

type Props = {
  title: string;
  subtitle: string;
  text: string;
  img: string;
  experience: Exp[];
};

export const Memory = ({ title, subtitle, text, img, experience }: Props) => {
  return (
    <>
      <section className="trav-container {my-4 lg:my-16} mb-6 flex flex-col-reverse items-center justify-between gap-y-16 sm:my-4 sm:mb-14 md:my-8 md:flex-row lg:mb-20">
        <div className="flex max-w-md items-center justify-center">
          <img
            className="drop-shadow-emrald w-[90%] md:w-[85%]"
            src={img}
            alt="memory/img"
          />
        </div>
        <div className="grid justify-items-center md:pb-12 lg:pb-28">
          <h1 className="text-3xl font-bold text-slate-900 drop-shadow-lg filter sm:text-4xl md:text-3xl lg:text-4xl">
            {title}
          </h1>
          <h1 className="mt-1 text-3xl font-bold text-slate-900 drop-shadow-lg filter sm:text-4xl md:text-3xl lg:text-4xl">
            {subtitle}
          </h1>
          <p className="my-5 text-center text-sm text-slate-900 sm:text-base">
            {text}
          </p>
          <ul className="flex flex-col items-center justify-center gap-4 xx:flex-row xx:flex-wrap">
            {experience.map(({ number, title }) => (
              <li
                key={title}
                className="duration-400 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-emerald-300 to-green-300 px-5 py-5 shadow-lg shadow-emerald-200 transition-all hover:scale-110 md:px-4 md:py-4"
              >
                <p className="text-base font-bold text-slate-900 sm:text-xl md:text-base">
                  {number}
                </p>
                <p className="text-sm text-slate-900 sm:text-base md:text-sm">
                  {title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
