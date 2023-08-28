// import React from 'react'
// import productData from '../../ProductData'
// import { Link } from "react-router-dom";

// const Category = () => {
//   return (
//     <>
//     <span className="kategori-liste">Gayrimenkul</span>
//         <span className="kategori-liste">
//           Konut{" "}
//           <span className="kategori-liste-adet">({productData.length})</span>
//         </span>
//         <span className="kategori-liste">
//           Ticari <span className="kategori-liste-adet">(2222)</span>
//         </span>
//         <span className="kategori-liste">
//           Arsa/Arazi <span className="kategori-liste-adet">(3333)</span>
//         </span>
//         <div className="kategoriler">
//           <p
//             className="kategori-secenek"
//             onClick={() => satılıkFiltreListeHandler("Satista")}
//           >
//             Satılık (
//             {
//               productData.filter((item) => item.durum.includes("Satista"))
//                 .length
//             }
//             )
//           </p>
//           <p
//             className="kategori-secenek"
//             onClick={() => satılıkFiltreListeHandler("Kiralık")}
//           >
//             Kiralık (
//             {
//               productData.filter((item) => item.durum.includes("Kiralık"))
//                 .length
//             }
//             )
//           </p>
//           <p className="kategori-secenek">Ticari</p>
//           <div className="kategori-fiyat-secenek">
//             <span>Asgari / Azami Fiyat</span>
//             <div className="flex flex-col mt-2 relative">
//               <div className="flex">
//                 <input
//                   onChange={(e) => setInputValueMin(Number(e.target.value))}
//                   type="number"
//                   placeholder="Min - 1"
//                   className="kategori-fiyat-input mr-2"
//                 />
//                 <span className="text-3xl relative top-1"> / </span>
//                 <input
//                   onChange={(e) => setInputValueMax(Number(e.target.value))}
//                   type="number"
//                   placeholder="Max - 99"
//                   className="kategori-fiyat-input mx-2"
//                 />
//               </div>
//               <Link
//                 className={
//                   filtreAcık ? "filtre-temizleme-button" : "kategori-button"
//                 }
//                 onClick={fiyatListeFiltreHandler}
//               >
//                 {filtreAcık ? "Temizle" : "Ara"}
//               </Link>
//             </div>
//           </div>
//         </div>
//     </>
//   )
// }

// export default Category