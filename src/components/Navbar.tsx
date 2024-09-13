import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
// import { RxHamburgerMenu } from 'react-icons/rx';
import { PopupMenu } from "./PopupMenu";

export type NavProps = {
  navlinks: {
    link: string;
    id: string;
  }[];
};

export const Navbar = ({ navlinks }: NavProps) => {
  const [popupState, setPopupState] = React.useState(false);
  const popupRef = React.useRef<HTMLDivElement>(null);
  const hamburgerRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        popupRef.current &&
        hamburgerRef.current &&
        !e.composedPath().includes(popupRef.current) &&
        !e.composedPath().includes(hamburgerRef.current)
      ) {
        setPopupState(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      {/* <header className=" bg-white/80 bg-clip-padding bg-opacity-20 left-0 right-0 top-0 z-10 backdrop-filter backdrop-blur-sm shadow-sm shadow-slate-100 fixed"> */}
      <header className="fixed left-0 right-0 top-0 z-10 bg-emerald-200/20 backdrop-blur-sm backdrop-filter">
        <nav className="trav-container flex h-14 items-center justify-between pl-20">
          <NavLink to="/" className="">
            <img src={logo} alt="logo/img" className="w-22 h-9 object-fill" />
          </NavLink>
          <ul className="hidden gap-5 text-slate-900 sm:flex">
            {navlinks.map(({ link, id }) => (
              <li key={id}>
                <NavLink to={`/${id}`}>{link}</NavLink>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <button className="btn-emerald hidden py-1.5 sm:block">
                Join Us
              </button>
            </li>
          </ul>
          <div>
            <button
              ref={hamburgerRef}
              onClick={() => setPopupState((prev) => !prev)}
              className={`relative flex h-10 w-10 items-center justify-center transition-all duration-200 active:scale-90 sm:hidden ${
                popupState ? "toggle-btn" : ""
              }`}
            >
              {/* <RxHamburgerMenu className="size-7 block sm:hidden" /> */}
              <div className="absolute right-2 h-0.5 w-8 rounded bg-slate-800 transition-all duration-500 before:absolute before:h-0.5 before:w-8 before:-translate-x-4 before:-translate-y-2 before:rounded before:bg-slate-800 before:transition-all before:duration-500 before:content-[''] after:absolute after:h-0.5 after:w-8 after:-translate-x-4 after:translate-y-2 after:rounded after:bg-slate-800 after:transition-all after:duration-500 after:content-['']"></div>
            </button>
          </div>
        </nav>
      </header>
      {/* {visiblePopup && <PopupMenu navlinks={navlinks} />} */}
      <PopupMenu
        popupRef={popupRef}
        navlinks={navlinks}
        popupState={popupState}
        closePopup={() => setPopupState(false)}
      />
    </>
  );
};
