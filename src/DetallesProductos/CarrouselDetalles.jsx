
import React, { useState } from "react";


const CarrouselDetalles = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    console.log(currentIndex)
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const selectedImg=(index)=>{
    setCurrentIndex(index)
  }


  return (
    <div className="marcoCarrusel">
      <div className="carrusel">
        <button className="prev" onClick={prevSlide}>
          ◀
        </button>
        <div className="slide">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
        <button className="next" onClick={nextSlide}>
          ▶
        </button>
      </div >
        
      <div className="selector">
        {images.map((img,index)=> (<img className="selectorImg"  onMouseEnter={()=>selectedImg(index)}  src={img} alt="" />))}
      </div>
    </div>
  );
};





export default CarrouselDetalles;
