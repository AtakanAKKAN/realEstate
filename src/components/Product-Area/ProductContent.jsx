import React, { useState } from "react";
import "./ProductContent.css";
import {
  // BsTelephoneForward,
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { FaSearchLocation } from "react-icons/fa";
import HaritaPopUP from "./Product-Area-PopUp/HaritaPopUP";

const ProductContent = ({ product }) => {
  const {
    başlık,
    portföy,
    price,
    adres = {},
    Emlak_Tipi,
    m_2_brüt,
    m_2_net,
    oda_sayısı,
    bina_yaşı,
    emlakcı,
    emlakcı_adres,
    ünvan,
    url = [],
    mülk_adress,
    id,
    mülk_adress_sokak,
  } = product;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHaritaOpen, setIsHaritaOpen] = useState(false);

  const slideNextHandler = () => {
    const newIndex = currentIndex === url.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const slidePerivosHandler = () => {
    const newIndex = currentIndex === 0 ? url.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  console.log(url.length);

  return (
    <div className="p-[1.2vw] flex flex-col w-full" key={id}>
      <h2 className="text-[2vw] w-[70%] mb-[.75vw]">{başlık}</h2>
      <small className="portföy mb-2">Portföy No: {portföy}</small>
      <div className="flex gap-[1.5vw] relative">
        <div className="w-[100%] flex gap-[1.5vw] max-lg:flex-col">
          <div className="w-[100%] relative group" id="resim">
            {/* <div
              style={{ backgroundImage: `url(${url[currentIndex]})` }}
              className="ana-resim"
            ></div> */}

            <img src={url[currentIndex]} className="ana-resim" alt="" />

            <button className="slide-button-left" onClick={slidePerivosHandler}>
              <BsFillArrowLeftCircleFill />
            </button>
            <button className="slide-button-right" onClick={slideNextHandler}>
              <BsFillArrowRightCircleFill />
            </button>

            <div className="w-[100%] flex flex-wrap ">
              {url.map((item, index) => (
                <img
                  className="w-[13vw] object-cover m-[1vw_1vw_2vw_0]"
                  onClick={() => setCurrentIndex(index)}
                  src={item}
                  alt=""
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="w-[30%] max-lg:w-[35%]  flex flex-col" id="içerik">
            <span className="text-[2vw] font-bold">{price} ₺</span>
            <span className="mb-[0.75vw] text-[1.5vw]">
              {adres.il && adres.il} / {adres.ilçe && adres.ilçe} /
              {adres.mahalle && adres.mahalle} / {adres.sokak && adres.sokak}
            </span>
            <div className="ozellik_kutusu">
              <strong className="w-full">Emlak Tipi</strong>
              <span className="w-full">{Emlak_Tipi} </span>
            </div>
            <div className="ozellik_kutusu">
              <strong className="w-full">m2 (brüt)</strong>
              <span className="w-full">{m_2_brüt} </span>
            </div>
            <div className="ozellik_kutusu">
              <strong className="w-full">m2 (net)</strong>
              <span className="w-full">{m_2_net} </span>
            </div>
            <div className="ozellik_kutusu">
              <strong className="w-full">Oda Sayısı:</strong>
              <span className="w-full">{oda_sayısı} </span>
            </div>
            <div className="ozellik_kutusu">
              <strong className="w-full">Bina Yaşı:</strong>
              <span className="w-full">{bina_yaşı} </span>
            </div>
          </div>
        </div>
        <div className="emlakcı-kutusu" id="emlakcı">
          <div className="relative">
            <div className="w-[30%] h-auto">
              <img src={require("../../images/img_avatar2.png")} alt="" />
            </div>
            <div className="flex flex-col absolute top-0 right-0 w-[60%]">
              <strong className="text-[1.4vw]">{emlakcı}</strong>
              <span className="text-[1.3vw]">{ünvan}</span>
              <small className="text-[1.3vw]">{emlakcı_adres} </small>
            </div>
          </div>
          <button className="emlakcı-button">
            {/* <span className="absolute top-2 left-[25%]">
              <BsTelephoneForward />
            </span> */}
            İletişim Bilgileri
          </button>
        </div>
      </div>

      <div className="relative max-md:w-[300px] max-sm:w-[200px] w-[400px] flex justify-center items-center rounded-md mt-4">
        <img
          src="https://www.alastyr.com/blog/wp-content/uploads/2021/06/google-maps-api.jpg"
          alt=""
          className="w-full max-w-[400px] h-24 object-cover rounded-md"
        />
        <span
          className="absolute text-2xl max-md:text-lg max-sm:text-sm flex justify-center items-center gap-3 p-2 bg-white/70 rounded-lg hover:underline cursor-pointer hover:bg-white/90 transition-all"
          onClick={() => setIsHaritaOpen(true)}
        >
          {" "}
          <FaSearchLocation /> Haritada Konumu Göster
        </span>
      </div>

      {isHaritaOpen && (
        <HaritaPopUP
          portföy={portföy}
          mülk_adress={mülk_adress}
          setIsHaritaOpen={setIsHaritaOpen}
          id={id}
          mülk_adress_sokak={mülk_adress_sokak}
        />
      )}
    </div>
  );
};

export default ProductContent;
