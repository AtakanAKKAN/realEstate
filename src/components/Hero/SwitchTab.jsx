/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./SwitchTab.css";

const SwitchTab = () => {
  const [toggle, setToggle] = useState(1);

  const toggleHandler = (index) => {
    setToggle(index);
  };

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (toggle === 3) {
  //       setToggle(1);
  //     } else {
  //       setToggle((prevToggle) => prevToggle + 1);
  //     }
  //   }, 5000);

  //   // Komponent kaldırıldığında interval'i temizle
  //   return () => clearInterval(intervalId);
  // }, [toggle]);


  return (
    <div className="containerr w-full rounded-3xl mt-[2.5vw] max-lg:mt-5">
      <div className="block-tabs">
        <span
          className={toggle === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleHandler(1)}
        >
          Tab-1
        </span>
        <span
          className={toggle === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleHandler(2)}
        >
          Tab-2
        </span>
        <span
          className={toggle === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleHandler(3)}
        >
          Tab-3
        </span>
      </div>

      <div className="content-tabs ">
        <div className={toggle === 1 ? "content active-content" : "content"}>
          <div className="active-content-main">
            <h2>Content#1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, voluptatibus. TAB-1
            </p>
          </div>
          <div className="img-box">
            <img
              src={require("../../images/logo.png")}
              alt=""
              className="img"
            />
          </div>
        </div>
        <div className={toggle === 2 ? "content active-content" : "content"}>
          <div className="active-content-main">
            <h2>Content#2</h2>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              quibusdam natus aperiam unde totam cumque praesentium assumenda
              voluptatum sit suscipit.
            </p>
          </div>
          <div className="img-box">
            <img
              src={require("../../images/house.jpg")}
              alt=""
              className="img"
            />
          </div>
        </div>
        <div className={toggle === 3 ? "content active-content" : "content"}>
          <div className="active-content-main">
            <h2>Content#3</h2>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              sunt sed laborum ipsum sint alias distinctio modi officiis cumque?
              Repellendus modi iusto harum assumenda nostrum quam quisquam nulla
              voluptatum debitis!
            </p>
          </div>
          <div className="img-box">
            <img
              src={require("../../images/img_avatar2.png")}
              alt=""
              className="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchTab;
