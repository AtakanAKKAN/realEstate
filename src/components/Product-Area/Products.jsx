import React, { useContext, useState } from "react";
import ProductItems from "./ProductItems";
import "./Products.css";
import productData from "../../ProductData";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { MyContext } from "../../Context/MyContext";
import { motion, AnimatePresence } from "framer-motion";
import PopupFilter from "./Product-Area-PopUp/PopupFilter";
import FilterGroup from "./FilterGroup";
import { FiFilter } from "react-icons/fi";

const Products = () => {
  const { filtreliListe, filtreIsOpen, setFiltreIsOpen } =
    useContext(MyContext);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPage = 4;
  const lastIndex = currentPage * recordsPage;
  const firstIndex = lastIndex - recordsPage;
  const records = filtreliListe.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(filtreliListe.length / recordsPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const nextPageHandler = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPageHandler = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentPageHandler = (n) => {
    setCurrentPage(n);
  };

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
    <div className="w-full flex max-md:flex-col rounded-lg mt-5 gap-2 relative mb-[8%] ">
      <aside className="w-[30%] flex flex-col bg-slate-50 p-4 rounded-lg max-md:w-full">
        <div className="flex flex-col w-full max-md:flex-row max-md:justify-around mb-2 ">
          <span className="kategori-liste">Gayrimenkul</span>
          <span className="kategori-liste">
            Konut
            <span className="kategori-liste-adet">({productData.length})</span>
          </span>
          <span className="kategori-liste">
            Ticari<span className="kategori-liste-adet">(2222)</span>
          </span>
          <span className="kategori-liste">
            Arsa/Arazi<span className="kategori-liste-adet">(3333)</span>
          </span>
        </div>
        <div className="kategoriler max-md:hidden">
          <FilterGroup />
        </div>
        <div className="block md:hidden">
          <span
            className="flex gap-1 items-center mx-auto justify-center max-md:text-xl max-sm:lg my-3 cursor-pointer w-[50%] filtre-btn"
            onClick={() => setFiltreIsOpen(true)}
          >
            Filtrele <FiFilter />
          </span>
        </div>
        {filtreIsOpen && <PopupFilter />}
      </aside>

      <motion.div
        layout
        className="w-full max-md:ml-0 product-container rounded-lg"
      >
        <AnimatePresence>
          {records.map((product, index) => (
            <ProductItems key={index} product={product} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      <ul className="absolute -bottom-[8%] w-full flex text-2xl gap-2 justify-end items-center pr-[3%]">
        <li
          onClick={prevPageHandler}
          className={`${
            currentPage === 1
              ? "pointer-events-none opacity-50 scale-75"
              : "pointer-events-auto cursor-pointer scale-125"
          } transition-all`}
        >
          <GoArrowLeft size={36} />
        </li>
        <li className="flex gap-2 cursor-pointer">
          {numbers.map((n, i) => (
            <span
              key={i}
              onClick={() => currentPageHandler(n)}
              className={`${
                currentPage === n ? "text-blue-800 underline" : "text-black"
              } text-2xl mx-2`}
            >
              {n}
            </span>
          ))}
        </li>
        <li
          onClick={nextPageHandler}
          className={`${
            currentPage === nPage
            ? "pointer-events-none opacity-50 scale-75"
            : "pointer-events-auto cursor-pointer scale-125"
          } transition-all`}
        >
          <GoArrowRight size={36} />
        </li>
      </ul>
    </div>
  );
};

export default Products;
