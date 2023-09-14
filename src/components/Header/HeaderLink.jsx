import React from "react";
import { Link } from "react-router-dom";

const HeaderLink = ({ navbarIsOpen }) => {
    
  return (
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
  );
};

export default HeaderLink;
