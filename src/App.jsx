/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
// import MainLogg from "./components/singUpsingIn/MainLogg";
// import EmlakKayıt from "./components/singUpsingIn/EmlakKayıt";
// import MüşteriKayıt from "./components/singUpsingIn/MüşteriKayıt";
import Header from "./components/Header/Header";
import SwitchTab from "./components/Hero/SwitchTab";
import Products from "./components/Product-Area/Products";
import ProductInfo from "./components/Product-Area/ProductInfo";
import Deneme from "./Deneme";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
<<<<<<< HEAD
          path=":homepage"
=======
          path="/"
>>>>>>> 47a1a4f1dd3e921bbb18ff138f5b618f0730b613
          element={
            <>
              <SwitchTab />
              <Products />
            </>
          }
          />
          <Route path=":homepage/:durum/:id" element={<ProductInfo />} />
      </Routes>

      {/* <Deneme /> */}
    </>
  );
}

export default App;
