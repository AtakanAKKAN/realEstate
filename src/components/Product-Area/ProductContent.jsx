import React from "react";
import "./ProductContent.css";
import productData from "../../ProductData";
import { BsTelephoneForward } from "react-icons/bs";

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
  } = product;

  console.log(productData[0]);

  //   emlakcı: "Altan Torun",
  //     ünvan: "Patron",
  //     emlakcı_adres: "Manisa / Soma"

  return (
    <div className="p-4 flex flex-col w-full">
      <h2 className="text-4xl w-[70%] mb-3">{başlık}</h2>
      <small className="portföy mb-2">Portföy No: {portföy}</small>
      <div className="flex gap-5">
        <div className="w-1/2" id="resim">
          <img
            className="w-full h-full object-cover"
            src="/images/ev-1.jpg"
            alt=""
          />
        </div>
        <div className="w-[20%] flex flex-col" id="içerik">
          <span className="text-2xl font-bold">{price} ₺</span>
          <span className="mb-3">
            {adres.il} / {adres.ilçe} / {adres.mahalle} / {adres.sokak}{" "}
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
        <div className="w-[30%] p-4 bg-slate-50 rounded-lg" id="emlakcı">
          <div className="relative mb-5">
            <div className="w-[125px]">
              <img src="/images/img_avatar2.png" alt="" />
            </div>
            <div className="flex flex-col absolute top-0 right-0 w-[60%]">
              <strong className="text-2xl">{emlakcı}</strong>
              <span className="text-xl">{ünvan}</span>
              <small className="text-lg">{emlakcı_adres} </small>
            </div>
          </div>
          <button className="emlakcı-button">
            <span className="absolute top-2 left-[25%]">
              <BsTelephoneForward />
            </span>{" "}
            İletişim Bilgileri
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
