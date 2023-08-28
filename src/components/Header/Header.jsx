import React from "react";
// import LogButton from "../singUpsingIn/LogButton";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="w-full bg-slate-50 p-[1vw] rounded-3xl ">
      <div className="flex justify-between items-center p-[1vw] ">
        <Link
          to={":homepage"}
          className="text-[1.5vw] cursor-pointer relative w-[10vw] h-[5vw] "
        >
          <img
            src={require("../../images/logo001.png")}
            alt="" className="w-[10vw] h-[10vw] -translate-y-[2vw] rounded-[1.5vw] absolute "
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
        {/* <LogButton /> */}
      </div>
    </div>
  );
};

export default Header;
