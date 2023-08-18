import { BsFillCaretUpFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const LogBox = () => {
  return (
    <span className="absolute -right-1 -bottom-12 bg-teal-600 text-[#f1f1f1] h-12 flex items-center justify-center p-2 rounded-lg">
      <span className="absolute -top-4 right-10 text-teal-600 text-3xl">
        <BsFillCaretUpFill />
      </span>
      <Link to={"emlakKayıt"} className="mx-2">Emlakçiyim</Link>
      <span>/</span>
      <Link to={"müşteriKayıt"} className="mx-2">Emlakçi Değilim</Link>
    </span>
  );
};

export default LogBox;
