/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./SwitchTab.css";

const SwitchTab = () => {
  const [toggle, setToggle] = useState(1);

  const toggleHandler = (index) => {
    setToggle(index);
  };

  return (
    <div className="containerr w-full rounded-3xl mt-5">
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

      <div className="content-tabs">
        <div className={toggle === 1 ? "content active-content" : "content"}>
          <h2>Content#1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, voluptatibus. TAB-1
          </p>
          <div className="img-box">
            <img src="/images/logo.png" alt="" className="img" />
          </div>
        </div>
        <div className={toggle === 2 ? "content active-content" : "content"}>
          <h2>Content#2</h2>

          <p>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quibusdam natus aperiam unde totam cumque praesentium assumenda voluptatum sit suscipit.
          </p>
          <div className="img-box">
            <img src="/images/house.jpg" alt="" className="img" />
          </div>
        </div>
        <div className={toggle === 3 ? "content active-content" : "content"}>
          <h2>Content#3</h2>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo sunt sed laborum ipsum sint alias distinctio modi officiis cumque? Repellendus modi iusto harum assumenda nostrum quam quisquam nulla voluptatum debitis!
          </p>
          <div className="img-box">
            <img src="/images/img_avatar2.png" alt="" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchTab;
