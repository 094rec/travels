import { NavLink } from "react-router-dom";
import { NavProps } from "./Navbar";

type Props = NavProps & {
  popupState: boolean;
  closePopup: () => void;
  popupRef: React.RefObject<HTMLDivElement>;
};

export const PopupMenu = ({
  navlinks,
  popupState,
  closePopup,
  popupRef,
}: Props) => {
  return (
    <>
      <nav
        ref={popupRef}
        className={`fixed right-12 top-14 z-50 h-auto w-36 rounded-lg bg-white bg-opacity-70 py-3 opacity-100 backdrop-blur-md backdrop-filter transition-transform duration-300 sm:hidden ${
          popupState ? "showpopup" : "hidepopup"
        }`}
      >
        <ul className="flex flex-col items-start gap-1 px-5">
          {navlinks.map(({ link, id }) => (
            <li key={id}>
              <NavLink onClick={closePopup} to={`/${id}`}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
        <li className="mt-2 list-none text-center">
          <button className="btn-light rounded-2xl py-1.5 shadow-slate-300 transition-none">
            Join Us
          </button>
        </li>
      </nav>
    </>
  );
};
