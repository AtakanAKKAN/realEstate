/* eslint-disable no-unused-vars */
import "./ProductItem.css";
import { MdLocationOn, MdOutlineBathtub } from "react-icons/md";
import { BsFillArrowUpRightCircleFill, BsBuilding } from "react-icons/bs";
import { IoBedOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProductItems = ({ product }) => {
  const { price, ozellik = {}, adres = {}, durum, id } = product;

  return (
    <div className="box-container">
      <div className="img-box">
        <img
          src={require("../../images/ev-1.jpg")}
          alt=""
          className="img"
        />
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
    </div>
  );
};

export default ProductItems;
