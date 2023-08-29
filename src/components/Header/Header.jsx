import React from "react";
// import LogButton from "../singUpsingIn/LogButton";
import { Link } from "react-router-dom";
import "./Header.css";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <div className="w-full bg-slate-50 p-[1vw] rounded-3xl ">
      <div className="flex justify-between items-center p-[1vw] ">
        <Link
          to={":homepage"}
          className="cursor-pointer relative w-[10vw] h-[5vw] max-lg:w-[5rem] max-lg:h-[2rem] "
        >
          <img
            src={require("../../images/logo001.png")}
            alt="" className="w-[10vw] h-[10vw] -translate-y-[2vw] max-lg:w-full max-lg:h-[5rem] max-lg:-translate-y-[20%] rounded-[1.5vw] absolute object-cover "
          />
        </Link>
        <div className="nav flex items-center">
          <Link title="Ofislerimiz" className="nav-link">
            Ofislerimiz
          </Link>
          <Link title="Danışmanlarımız" className="nav-link">
            Danışmanlarımız
          </Link>
          <Link title="Torun Emlak ile Sat Kirala" className="nav-link">
            Torun Emlak ile Sat Kirala
          </Link>
          <Link title="Hakkımızda" className="nav-link">
            Hakkımızda
          </Link>
        </div>
        <span className="hamburger">
          <AiOutlineMenu />
        </span>
        {/* <LogButton /> */}
      </div>
    </div>
  );
};

export default Header;
