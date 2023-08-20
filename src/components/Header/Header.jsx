import React from "react";
// import LogButton from "../singUpsingIn/LogButton";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="w-full bg-slate-50 p-4 rounded-3xl ">
      <div className="flex justify-between items-center p-3">
        <Link to={":homepage"} className="text-3xl cursor-pointer">
          LOGO
        </Link>
        <div className="nav max-[1000px]:hidden">
          <Link className="nav-link">Ofislerimiz</Link>
          <Link className="nav-link">Danışmanlarımız</Link>
          <Link className="nav-link">Torun Emlak ile Sat Kirala</Link>
          <Link className="nav-link">Hakkımızda</Link>
        </div>
        {/* <LogButton /> */}
      </div>
    </div>
  );
};

export default Header;
