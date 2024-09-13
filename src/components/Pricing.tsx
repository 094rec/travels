import { Plan } from "./Plan";

export type PlanProps = {
  planicon: string;
  title: string;
  text: string;
  plantype: string;
  plancontent: {
    iconbox: string;
    text: string;
  }[];
  buttonText: string;
};

type Props = {
  title: string;
  text: string;
  btn1: string;
  btn2: string;
  plans: PlanProps[];
};

export const Pricing = ({ title, text, btn1, btn2, plans }: Props) => {
  return (
    <>
      <section className="trav-container lg:mb-18 mb-8 max-w-4xl sm:mb-14">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="-mb-1 text-3xl font-bold text-slate-900 drop-shadow-lg filter sm:text-3xl md:text-4xl lg:text-4xl">
              {title}
            </h2>
            <p className="text-sm text-slate-900 sm:text-base">{text}</p>
            <div className="flex gap-4 sm:gap-6">
              <button className="btn-emerald">{btn1}</button>
              <button className="btn-light shadow-slate-400/70">{btn2}</button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-10 lg:gap-16">
            {plans.map((plan, i) => (
              <Plan key={i} {...plan} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
