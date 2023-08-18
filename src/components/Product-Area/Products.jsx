import React, { useState } from "react";
import ProductItems from "./ProductItems";
import "./Products.css";
import productData from "../../ProductData";
import { Link } from "react-router-dom";

const Products = () => {
  const [filtreliListe, setFiltreliListe] = new useState([]);
  const [filtreAcık, setFiltreAcık] = useState(false);
  const [inputValueMin, setInputValueMin] = useState(0);
  const [inputValueMax, setInputValueMax] = useState(0);

  const fiyatListeFiltreHandler = () => {
    fiyatListeHandler();
    setFiltreAcık(!filtreAcık);
  };

  const fiyatListeHandler = () => {
    const fiyatProductList = productData
      .filter(
        (item) => item.price >= inputValueMin && item.price <= inputValueMax
      )
      .map((product) => <ProductItems key={product.price} product={product} />);
    setFiltreliListe(fiyatProductList);
  };

  const satılıkFiltreListeHandler = (filtre) => {
    satılıkkFiltreliListe(filtre);
    setFiltreAcık(!filtreAcık);
  };

  const satılıkkFiltreliListe = (filtre) => {
    const satılıkProductList = productData
      .filter((item) => item.durum.includes(filtre))
      .map((product) => <ProductItems key={product.price} product={product} />);
    setFiltreliListe(satılıkProductList);
  };

  const productList = productData.map((product) => (
    <ProductItems key={product.price} product={product} />
  ));

  return (
    <div className="w-full flex rounded-lg mt-5">
      <div className="w-[25%] flex flex-col bg-slate-50 p-4 rounded-lg">
        <span className="kategori-liste">Gayrimenkul</span>
        <span className="kategori-liste">
          Konut <span className="kategori-liste-adet">({productData.length})</span>
        </span>
        <span className="kategori-liste">
          Ticari <span className="kategori-liste-adet">(2222)</span>
        </span>
        <span className="kategori-liste">
          Arsa/Arazi <span className="kategori-liste-adet">(3333)</span>
        </span>
        <div className="kategoriler">
          <p
            className="kategori-secenek"
            onClick={() => satılıkFiltreListeHandler("Satista")}
          >
            Satılık (
            {productData.filter((item) => item.durum.includes("Satista")).length})
          </p>
          <p
            className="kategori-secenek"
            onClick={() => satılıkFiltreListeHandler("Kiralık")}
          >
            Kiralık (
            {productData.filter((item) => item.durum.includes("Kiralık")).length})
          </p>
          <p className="kategori-secenek">Ticari</p>
          <div className="kategori-fiyat-secenek">
            <span>Asgari / Azami Fiyat</span>
            <div className="flex flex-col mt-2 relative">
              <div className="flex">
                <input
                  onChange={(e) => setInputValueMin(Number(e.target.value))}
                  type="number"
                  placeholder="Min"
                  className="kategori-fiyat-input mr-2"
                />
                <span className="text-3xl relative top-1"> / </span>
                <input
                  onChange={(e) => setInputValueMax(Number(e.target.value))}
                  type="number"
                  placeholder="Max"
                  className="kategori-fiyat-input mx-2"
                />
              </div>
              <Link
                className={filtreAcık ? "filtre-temizleme-button" : "kategori-button"}
                onClick={fiyatListeFiltreHandler}
              >
                {filtreAcık ? "Temizle" : "Ara"}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {filtreAcık ? (
        <div className="w-[75%] ml-5 product-container">{filtreliListe}</div>
      ) : (
        <div className="w-[75%] ml-5 product-container">{productList}</div>
      )}
    </div>
  );
};

export default Products;
