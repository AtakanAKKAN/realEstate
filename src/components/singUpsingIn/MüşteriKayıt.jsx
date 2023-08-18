import React from "react";

const MüşteriKayıt = () => {
  return (
    <div className="flex flex-col items-center bg-white w-[30%] m-auto mt-7 ">
        
      <div className="relative flex flex-col items-center sm:border w-full p-5">
        <span className="text-black text-2xl font-bold mb-[10px] self-center">
          Müşteri Girişi
        </span>

        <div className="flex flex-col w-full appearance-none mb-[10px]">
          <div className="relative leading-none">
            <label class="flex flex-col-reverse relative focus group">
              <input
                type="email"
                name="email"
                required
                class="border-[1px] rounded-lg border-black px-4 py-3 leading-9"
                placeholder="E-posta Adresi"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col w-full appearance-none mb-[10px]">
          <div className="relative leading-none">
            <label class="flex flex-col-reverse relative focus group">
              <input
                type="email"
                name="email"
                id="email"
                required
                class="border-[1px] rounded-lg border-black px-4 py-3 leading-9"
                placeholder="Kullanıcı Adı"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col w-full appearance-none mb-[10px]">
          <div className="relative leading-none">
            <label class="flex flex-col-reverse relative focus group">
              <input
                type="password"
                name="email"
                required
                class="border-[1px] rounded-lg border-black px-4 py-3 leading-9"
                placeholder="Şifre"
              />
            </label>
          </div>
        </div>

        <button className="w-full h-full bg-amber-400 p-3 rounded-lg">
          Kayıt Ol
        </button>
      </div>
    </div>
  );
};

export default MüşteriKayıt;
