import React, { useContext } from "react";
import "./PopupFilter.css";
import { MyContext } from "../../../Context/MyContext";
import FilterGroup from "../FilterGroup";

const PopupFilter = () => {
  const { setFiltreIsOpen } = useContext(MyContext);

  return (
    <div>
      

      <div onClick={() => setFiltreIsOpen(false)} className="fixed inset-0 flex justify-center items-center  bg-black/80 z-10 transition-all duration-700">
        <div onClick={(e) => e.stopPropagation()} className="bg-[#f5f5f7] p-5 z-20 rounded-xl">
            <FilterGroup />
        </div>
      </div>
    </div>
  );
};

export default PopupFilter;
