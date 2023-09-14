/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./HaritaPopUp.css";

const HaritaPopUP = (props) => {
  const [HaritaToggle, setHaritaToggle] = useState(1);

  console.log(HaritaToggle);

  return (
    <div
      onClick={() => props.setIsHaritaOpen(false)}
      className="fixed inset-0 flex justify-start items-center flex-col bg-black/80 z-10 transition-all duration-700 pt-[1vw]"
    >
      <div className="üst-kademe" onClick={(e) => e.stopPropagation()}>
        <div>
          <span
            onClick={() => setHaritaToggle(1)}
            className={
              HaritaToggle === 1 ? "haritalar active-haritalar" : "haritalar"
            }
          >
            Harita Görünümü
          </span>
          <span
            onClick={() => setHaritaToggle(2)}
            className={
              HaritaToggle === 2 ? "haritalar active-haritalar" : "haritalar"
            }
          >
            Sokak Görünümü
          </span>
        </div>
        <button
          className="button-4"
          onClick={() => props.setIsHaritaOpen(false)}
        >
          Kapat
        </button>
      </div>

      <div className="w-[95%] bg-white">
        <iframe
          title={props.portföy}
          src={props.mülk_adress}
          className={`harita ${HaritaToggle === 1 ? "active-harita" : ""}`}
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onClick={(e) => e.stopPropagation()}
        />

        <iframe
          title={props.id}
          src={props.mülk_adress_sokak}
          className={`harita ${HaritaToggle === 2 ? "active-harita" : ""}`}
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default HaritaPopUP;
