import { createContext, useEffect, useState } from "react";
import productData from "../ProductData";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [MainList, setMainList] = useState([]);
  const [filtreliListe, setFiltreliListe] = useState([]);
  const [FiltreSozcuk, setFiltreSozcuk] = useState("");
  const [inputValueMin, setInputValueMin] = useState(0);
  const [inputValueMax, setInputValueMax] = useState(0);
  const [filtreIsOpen, setFiltreIsOpen] = useState(false)  

  useEffect(() => {
    FetchList();
  }, []);

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

  const FetchList = () => {
    const data = productData;
    setMainList(data);
    setFiltreliListe(data);
  };


  const value = {
    filtreliListe,
    setFiltreliListe,
    inputValueMin,
    setInputValueMin,
    inputValueMax,
    setInputValueMax,
    MainList,
    setMainList,
    FiltreSozcuk,
    setFiltreSozcuk,
    filtreIsOpen, 
    setFiltreIsOpen,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
