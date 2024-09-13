import { PlanProps } from "./Pricing";

export const Plan = ({
  planicon,
  title,
  text,
  plantype,
  plancontent,
  buttonText,
}: PlanProps) => {
  return (
    <>
      <div className="duration-400 flex cursor-pointer flex-col gap-6 rounded-lg border bg-slate-50/5 px-7 py-3 shadow-md shadow-slate-200 transition-all hover:scale-105">
        <div className="flex items-center justify-between gap-8">
          <div className="-ml-2 flex items-center justify-start gap-3 sm:gap-4">
            <img
              className="h-auto w-9 rounded-xl drop-shadow-xl filter sm:w-10"
              src={planicon}
              alt="plan/img"
            />
            <div className="flex flex-col gap-0.5">
              <p className="text-sm font-medium text-slate-900 sm:text-base">
                {title}
              </p>
              <p className="hidden text-xs text-slate-900 sm:text-sm md:block">
                {text}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-sm font-bold text-black/80 sm:text-base">
              {plantype}
            </p>
          </div>
        </div>
        <hr className="-my-2 mx-auto w-11/12" />
        <ul className="flex flex-col gap-3">
          {plancontent.map(({ iconbox, text }, i) => (
            <li
              key={i}
              className="flex items-center justify-start gap-2 sm:gap-3"
            >
              <img
                className="h-auto w-[16px] sm:w-[18px]"
                src={iconbox}
                alt="iconbox/img"
              />
              <p className="text-sm text-slate-900 sm:text-base">{text}</p>
            </li>
          ))}
        </ul>
        <div className="-mt-4 flex items-center justify-center">
          <button className="btn-emerald py-1.5">{buttonText}</button>
        </div>
      </div>
    </>
  );
};
