import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const onLogoClick = () => {
    setActive("");
    window.scrollTo(0, 0);
  };
  return (
    <nav
      className={`${styles.paddingX} bg-[#0f0c30a6]  w-full flex items-center fixed py-5 top-0 z-20`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2 cursor-pointer'
          onClick={onLogoClick}>
          <img src={logo} alt='logo' className='w-10 h-10 object-contain' />
          {/* <p className='text-white text-[18px] font-bold cursor-pointer'>
            Aygul
          </p> */}
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10 '>
          {navLinks.map(({ id, title }) => {
            return (
              <li
                className={`${
                  active === title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                key={id}
                onClick={() => setActive(title)}>
                <a href={`#${id}`}>{title}</a>
              </li>
            );
          })}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer '
            onClick={onToggle}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-s-lg`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4 '>
              {navLinks.map(({ id, title }) => {
                return (
                  <li
                    className={`${
                      active === title ? "text-white" : "text-secondary"
                    }  font-medium font-poppins cursor-pointer text-[16px]`}
                    key={id}
                    onClick={() => {
                      setActive(title);
                      onToggle();
                    }}>
                    <a href={`#${id}`}>{title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
