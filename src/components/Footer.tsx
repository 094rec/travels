type Props = {
  titles: {
    title: string;
  }[];
  links: {
    link: string;
  }[][];
  sociallinks: {
    icon: string;
  }[];
};

export const Footer = ({ titles, links, sociallinks }: Props) => {
  return (
    <>
      <div className="bg-gradient-to-b from-emerald-400 to-emerald-500 pt-1">
        <section className="trav-container flex flex-col gap-4 sm:max-w-[52rem]">
          <div className="flex items-start justify-between">
            {titles.map(({ title }, i) => (
              <div key={i}>
                <div className="flex flex-col items-center justify-center gap-1">
                  <h3 className="mb-1 cursor-pointer text-sm font-semibold uppercase text-slate-900 drop-shadow-xl sm:text-base">
                    {title}
                  </h3>
                  {links[i].map(({ link }, i) => (
                    <p
                      key={i}
                      className="cursor-pointer text-xs text-slate-900 sm:text-sm"
                    >
                      {link}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* <hr className="w-11/12 sm:w-full mx-auto border-t-1 border-black/60" /> */}
          <div className="mx-auto h-[0.1vh] w-11/12 bg-black/40 sm:w-full"></div>
          <div className="flex items-center justify-center gap-4 sm:gap-7">
            {sociallinks.map(({ icon }) => (
              <img
                key={icon}
                className="w-[20px] cursor-pointer drop-shadow-xl sm:w-[26px]"
                src={icon}
                alt="link/img"
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
