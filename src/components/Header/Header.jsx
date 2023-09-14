import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
// eslint-disable-next-line no-unused-vars
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import HeaderLink from "./HeaderLink";

const Header = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  return (
    <div className="w-full bg-slate-50 p-[1vw] rounded-3xl ">
      <div className="flex justify-between items-center p-[1vw] ">
        <Link
          to={":homepage"}
          className="cursor-pointer relative w-[10vw] h-[5vw] max-lg:w-[5rem] max-lg:h-[2rem] "
        >
          <img
            src={require("../../images/logo001.png")}
            alt=""
            className="w-[10vw] h-[10vw] -translate-y-[2vw] max-lg:w-full max-lg:h-[5rem] max-lg:-translate-y-[20%] rounded-[1.5vw] absolute object-cover "
          />
        </Link>

        <HeaderLink navbarIsOpen={navbarIsOpen} />

        <div className="hidden max-lg:block">
          <span
            className="hamburger"
            onClick={() => setNavbarIsOpen(!navbarIsOpen)}
          >
            {navbarIsOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </span>

          {navbarIsOpen ? <div className="offcanvas">
            <span className="text-3xl text-white mr-5" onClick={() => setNavbarIsOpen(false)}>
              <AiOutlineClose />
            </span>
            <div className="flex flex-col items-end p-4 justify-center">
              <Link title="Ofislerimiz" className="nav-link-hamburger">
                Ofislerimiz
              </Link>
              <Link title="Danışmanlarımız" className="nav-link-hamburger">
                Danışmanlarımız
              </Link>
              <Link
                title="Torun Emlak ile Sat Kirala"
                className="nav-link-hamburger"
              >
                Torun Emlak ile Sat Kirala
              </Link>
              <Link title="Hakkımızda" className="nav-link-hamburger">
                Hakkımızda
              </Link>
            </div>
          </div> : null}

        </div>
      </div>
    </div>
  );
};

export default Header;
