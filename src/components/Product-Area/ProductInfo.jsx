import { useParams } from "react-router-dom";
import "./ProductInfo.css";
import productData from "../../ProductData";
import ProductContent from "./ProductContent";

const ProductInfo = () => {
  const { id } = useParams();
  const product = productData.find((product) => product.id === Number(id));

 
  return (
    <div className="w-full p-4 rounded-3xl mt-3">
      <ProductContent product={product} key={id} />
      
    </div>
  );
};

export default ProductInfo;
