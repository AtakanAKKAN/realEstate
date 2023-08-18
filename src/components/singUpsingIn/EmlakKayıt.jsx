import { Link } from "react-router-dom";
import "./EmlakKayıt.css";

const EmlakKayıt = () => {
  return (
    <div className="flex p-3 gap-16 items-center bg-teal-500 h-screen rounded-xl">
      <form className="border-none w-[45%]">
        <div id="form-group" className="form-group">
          <label htmlFor="" className="form-group-label">
            Şirket Adi
          </label>
          <input className="form-group-input" />
        </div>
        <div id="form-group" className="form-group">
          <label htmlFor="" className="form-group-label">
            Kullanici adi
          </label>
          <input className="form-group-input" />
        </div>
        <div id="form-group" className="form-group">
          <label htmlFor="" className="form-group-label">
            E-posta
          </label>
          <input className="form-group-input" />
        </div>
        <div id="form-group" className="form-group">
          <label htmlFor="" className="form-group-label">
            Şifre
          </label>
          <input className="form-group-input" />
        </div>
        <div id="form-group" className="form-group">
          <label htmlFor="" className="form-group-label">
            Telefon
          </label>
          <input className="form-group-input" />
        </div>
        <div className="flex justify-around">
          <Link className="button-25">Geri Dön</Link>
          <button className="button-25">Kayıt Ol</button>
        </div>
      </form>
      <div className="w-[45%] h-[400px]">
        <img src="/images/house.jpg" alt="" className="w-full h-full object-contain" />
      </div>
    </div>
  );
};

export default EmlakKayıt;
