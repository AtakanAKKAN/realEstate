import React, { useContext, useEffect } from "react";
import ProductItems from "./ProductItems";
import "./Products.css";
import productData from "../../ProductData";
import { Link } from "react-router-dom";
import { MyContext } from "../../Context/MyContext";
import { motion, AnimatePresence } from "framer-motion";

const Products = () => {
  const {
    filtreliListe,
    setFiltreliListe,
    // inputValueMin,
    setInputValueMin,
    // inputValueMax,
    setInputValueMax,
    MainList,
    FiltreSozcuk,
    setFiltreSozcuk,
  } = useContext(MyContext);

  useEffect(() => {
    if (FiltreSozcuk === "") {
      setFiltreliListe(MainList);
      return;
    }
    const Filtered = MainList.filter((item) =>
      item.durum.includes(FiltreSozcuk)
    );
    setFiltreliListe(Filtered);
  }, [FiltreSozcuk, MainList, setFiltreliListe]);

  // const fiyatListeHandler = () => {
  //   const fiyatProductList = MainList
  //     .filter(
  //       (item) =>
  //         parseFloat(item.price) >= inputValueMin &&
  //         parseFloat(item.price) <= inputValueMax
  //     )
  //
  //   setFiltreliListe(fiyatProductList);
  // };

  return (
    <div className="w-full flex max-md:flex-col rounded-lg mt-5 gap-[1.5vw]">
      <div className="w-[30%] flex flex-col bg-slate-50 p-4 rounded-lg max-md:w-full">
        <div className="flex flex-col w-full max-md:flex-row max-md:justify-around">
          <span className="kategori-liste">Gayrimenkul</span>
          <span className="kategori-liste">
            Konut{" "}
            <span className="kategori-liste-adet">({productData.length})</span>
          </span>
          <span className="kategori-liste">
            Ticari <span className="kategori-liste-adet">(2222)</span>
          </span>
          <span className="kategori-liste">
            Arsa/Arazi <span className="kategori-liste-adet">(3333)</span>
          </span>
        </div>
        <div className="kategoriler max-md:flex max-md:flex-col">
          <div className="max-md:flex max-md:m-auto max-md:mt-4">
            <button
              className={
                FiltreSozcuk === ""
                  ? "kategori-secenek active"
                  : "kategori-secenek"
              }
              onClick={() => setFiltreSozcuk("")}
            >
              Hepsini Göster ({MainList.length})
            </button>
            <button
              className={
                FiltreSozcuk === "Satista"
                  ? "kategori-secenek active"
                  : "kategori-secenek"
              }
              onClick={() => setFiltreSozcuk("Satista")}
            >
              Satılık (
              {MainList.filter((item) => item.durum.includes("Satista")).length}
              )
            </button>
            <button
              className={
                FiltreSozcuk === "Kiralık"
                  ? "kategori-secenek active"
                  : "kategori-secenek"
              }
              onClick={() => setFiltreSozcuk("Kiralık")}
            >
              Kiralık (
              {MainList.filter((item) => item.durum.includes("Kiralık")).length}
              )
            </button>
            <p className="kategori-secenek">Ticari</p>
          </div>
          <div className="kategori-fiyat-secenek">
            <span className="text-center m-auto block mt-5">Asgari / Azami Fiyat</span>
            <div className="flex flex-col mt-2 relative">
              <div className="flex">
                <input
                  onChange={(e) => setInputValueMin(Number(e.target.value))}
                  type="number"
                  placeholder="Min - 1"
                  className="kategori-fiyat-input mr-2"
                />
                <span className="text-3xl relative top-1"> / </span>
                <input
                  onChange={(e) => setInputValueMax(Number(e.target.value))}
                  type="number"
                  placeholder="Max - 99"
                  className="kategori-fiyat-input mx-2"
                />
              </div>
              <Link className="kategori-button">Ara</Link>
            </div>
          </div>
        </div>
      </div>

      <motion.div layout className="w-fit ml-[1vw] product-container">
        <AnimatePresence>
          {filtreliListe.map((product, index) => (
            <ProductItems key={index} product={product} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Products;
