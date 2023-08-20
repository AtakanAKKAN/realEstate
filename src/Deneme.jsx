import React, { useState } from "react";

const Deneme = () => {
  const Data = [
    {
        imgs: [
            "https://picsum.photos/seed/img1/640/400",
            "https://picsum.photos/seed/img2/640/400",
            "https://picsum.photos/seed/img3/640/400",
        ]
    },
  ];

  const [cIndex, setCIndex] = useState(0);

  const slideNextHandler = () => {
    const newIndex = cIndex ===  Data[0].imgs.length - 1 ? 0 : cIndex + 1;
    setCIndex(newIndex);
    console.log(newIndex);
  };

  const slidePerivosHandler = () => {
    const newIndex = cIndex === 0 ? Data[0].imgs.length - 1 : cIndex - 1;
    setCIndex(newIndex);
    console.log(newIndex);
  };


  return (
    <div>
      
        <img src={Data[0].imgs[cIndex]} className="w-[400px]" alt="" />
      
      <button onClick={slideNextHandler}>Sıradaki</button>
      <button onClick={slidePerivosHandler}>Önceki</button>
    </div>
  );
};

export default Deneme;
