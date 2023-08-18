/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
// import MainLogg from "./components/singUpsingIn/MainLogg";
// import EmlakKayıt from "./components/singUpsingIn/EmlakKayıt";
// import MüşteriKayıt from "./components/singUpsingIn/MüşteriKayıt";
import Header from "./components/Header/Header";
import SwitchTab from "./components/Hero/SwitchTab";
import Products from "./components/Product-Area/Products";
import ProductInfo from "./components/Product-Area/ProductInfo";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SwitchTab />
              <Products />
            </>
          }
          />
          <Route path="/:durum/:id" element={<ProductInfo />} />
      </Routes>
     

    
    </>
  );
}

export default App;
