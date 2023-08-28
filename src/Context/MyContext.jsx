import { createContext, useEffect, useState } from "react";
import productData from "../ProductData";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [MainList, setMainList] = useState([]);
  const [filtreliListe, setFiltreliListe] = useState([]);
  const [FiltreSozcuk, setFiltreSozcuk] = useState("");
  const [inputValueMin, setInputValueMin] = useState(0);
  const [inputValueMax, setInputValueMax] = useState(0);

  useEffect(() => {
    FetchList();
  }, []);

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
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
