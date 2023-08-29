/* eslint-disable no-unused-vars */
import "./ProductItem.css";
import { MdLocationOn, MdOutlineBathtub } from "react-icons/md";
import {
  BsFillArrowUpRightCircleFill,
  BsBuilding,
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { IoBedOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const ProductItems = ({ product, index }) => {
  const { price, ozellik = {}, adres = {}, durum, id, url } = product;

  const [currentIndex, setCurrentIndex] = useState(0);

  const slideNextHandler = () => {
    const newIndex = currentIndex === url.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const slidePerivosHandler = () => {
    const newIndex = currentIndex === 0 ? url.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="box-container"
    >
      <div className="group relative img-box">
        <div
          style={{ backgroundImage: `url(${url[currentIndex]})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>

        <button
          className="group-hover:block hidden absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer transition-all "
          onClick={slidePerivosHandler}
        >
          <BsFillArrowLeftCircleFill />
        </button>
        <button
          className="group-hover:block hidden absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-white cursor-pointer transition-all"
          onClick={slideNextHandler}
        >
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="fiyat-durum">
        <span className="fiyat">{price} ₺</span>
        <span className="durum">{durum}</span>
      </div>
      <div className="ozellikler">
        {ozellik.yatak ? (
          <div className="ozellik-kutusu">
            <span className="font-bold text-lg">
              <IoBedOutline />
            </span>
            <span className="ozellik-icerik">{ozellik.yatak}</span>
          </div>
        ) : (
          <></>
        )}

        {ozellik.banyo ? (
          <div className="ozellik-kutusu">
            <span className="font-bold text-lg">
              <MdOutlineBathtub />
            </span>
            <span className="ozellik-icerik">{ozellik.banyo}</span>
          </div>
        ) : (
          <></>
        )}

        {ozellik.kat ? (
          <div className="ozellik-kutusu">
            <span className="font-bold text-lg">
              <BsBuilding />
            </span>
            <span className="ozellik-icerik">{ozellik.kat}</span>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="konum">
        <span>
          <MdLocationOn />
        </span>
        <span className="konum-bilgisi">
          {adres.mahalle ? adres.mahalle : <></>}
          {adres.sokak ? adres.sokak : <></>}
          {adres.no ? adres.kat : <></>}
        </span>
      </div>
      <Link className="btn" to={`${durum}/${id}`}>
        <span>Göz at</span>{" "}
        <span className="ml-2 btn-icon">
          <BsFillArrowUpRightCircleFill />
        </span>
      </Link>
    </motion.div>
  );
};

export default ProductItems;
