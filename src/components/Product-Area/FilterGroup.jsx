import React, { useContext } from "react";
import { MyContext } from "../../Context/MyContext";
import { Link } from "react-router-dom";

const FilterGroup = () => {
  const {
    setInputValueMin,
    setInputValueMax,
    MainList,
    FiltreSozcuk,
    setFiltreSozcuk,
  } = useContext(MyContext);

  return (
    <React.Fragment>
      <div className="max-md:flex max-md:m-auto max-md:mt-4 ">
        <button
          className={
            FiltreSozcuk === "" ? "kategori-secenek active" : "kategori-secenek"
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
          {MainList.filter((item) => item.durum.includes("Satista")).length})
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
          {MainList.filter((item) => item.durum.includes("Kiralık")).length})
        </button>
        <p className="kategori-secenek">Ticari</p>
      </div>
      <div className="kategori-fiyat-secenek">
        <span className="text-center m-auto block mt-5">
          Asgari / Azami Fiyat
        </span>
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
    </React.Fragment>
  );
};

export default FilterGroup;
