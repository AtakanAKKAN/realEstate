import React from "react";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";

const LogButton = () => {
  return (
    <Link to={"/LogIn"} className="text-2xl relative  login-hover">
      <span>
        <BsPersonCircle className="absolute -left-9 top-[.15rem] text-3xl" />
      </span>{" "}
      Giriş Yap
    </Link>
  );
};

export default LogButton;
