import React, { useContext } from "react";
import ProductItems from "./ProductItems";
import "./Products.css";
import productData from "../../ProductData";
import { MyContext } from "../../Context/MyContext";
import { motion, AnimatePresence } from "framer-motion";
import PopupFilter from "./Product-Area-PopUp/PopupFilter";
import FilterGroup from "./FilterGroup";
import { FiFilter } from "react-icons/fi";

const Products = () => {
  const { filtreliListe, filtreIsOpen, setFiltreIsOpen } =
    useContext(MyContext);

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
    <div className="w-full flex max-md:flex-col rounded-lg mt-5 gap-2">
      <div className="w-[30%] flex flex-col bg-slate-50 p-4 rounded-lg max-md:w-full">
        <div className="flex flex-col w-full max-md:flex-row max-md:justify-around mb-2 ">
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
        <div className="kategoriler max-md:hidden">
          <FilterGroup />
        </div>
        <div className="hidden max-md:block">
          <span
            className="flex gap-1 items-center mx-auto justify-center max-md:text-xl max-sm:lg my-3 cursor-pointer w-[50%] filtre-btn"
            onClick={() => setFiltreIsOpen(true)}
          >
            Filtrele <FiFilter />
          </span>
        </div>
        {filtreIsOpen && <PopupFilter />}
      </div>

      <motion.div layout className="w-full max-md:ml-0 product-container rounded-lg">
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
