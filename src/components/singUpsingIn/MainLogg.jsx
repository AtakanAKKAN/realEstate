import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MainLog.css";
import LogBox from "./LogBox";

const MainLogg = () => {
  const [boxIsOpen, setBoxIsOpen] = useState(false);

  const LogBoxHandler = () => {
    setBoxIsOpen(!boxIsOpen);
  };

  return (
    <>
      <div className="flex justify-center items-center w-[100%] mt-10 ">
        <form
          action=""
          method="post"
          className="form-box w-[80%]"
        >
          <div className="imgcontainer">
            <img
              src={"images/img_avatar2.png"}
              alt="Avatar"
              className="avatar"
            />
          </div>

          <div className="container">
            <label for="uname">
              <b>Kullanıcı Adı</b>
            </label>
            <input
              className="mainlog-input"
              type="text"
              placeholder="Kullanıcı Adı"
              name="uname"
              required
            />

            <label for="psw">
              <b>Şifre</b>
            </label>
            <input
              className="mainlog-input"
              type="password"
              placeholder="Şifre"
              name="psw"
              required
            />

            <div className="flex justify-center items-center">
              <button type="submit" className="bg-green-700 w-[75%] login-box">
               Giriş Yap
              </button>
            </div>
            <br />
            <label>
              <input type="checkbox" name="remember" />
              Beni Hatırla
            </label>
          </div>

          <div className="container">
            <Link type="button" className="cancelbtn" to={"/"}>
              Cancel
            </Link>
            <span className="psw text-xl">
              Hesabım yok{" "}
              <button
                onClick={LogBoxHandler}
                className="text-green-950 font-bold "
              >
                Kayıt ol
              </button>
            </span>
            {boxIsOpen ? <LogBox /> : ""}
          </div>
        </form>
      </div>
    </>
  );
};

export default MainLogg;
