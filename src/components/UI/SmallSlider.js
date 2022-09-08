import React, { useState, useEffect, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "./Card";

const clientInfo = [
  [
    {
      image: "/images/mvp.jpg",
      bgimg: "/images/mvpblur.jpg",
      title: "MVP Builders",
      description: "https://www.mvpbuilders.tech/es",
    },
    {
      image: "/images/llanos.jpg",
      bgimg: "/images/llanosblur.jpg",
      title: "German Llanos Inmobiliaria",
      description: "https://germanllanos.com.ar/",
    },
    {
      image: "/images/AAIC.jpg",
      bgimg: "/images/AAICblur.jpg",
      title: "AAIC",
      description: "https://www.inversionycomercio.ar/",
    },
  ],
  [
    {
      image: "/images/llanos.jpg",
      bgimg: "/images/llanosblur.jpg",
      title: "German Llanos Inmobiliaria",
      description: "https://germanllanos.com.ar/",
    },
    {
      image: "/images/AAIC.jpg",
      bgimg: "/images/AAICblur.jpg",
      title: "AAIC",
      description: "https://www.inversionycomercio.ar/",
    },
    {
      image: "/images/mvp.jpg",
      bgimg: "/images/mvpblur.jpg",
      title: "MVP Builders",
      description: "https://www.mvpbuilders.tech/es",
    },
  ],
  [
    {
      image: "/images/AAIC.jpg",
      bgimg: "/images/AAICblur.jpg",
      title: "AAIC",
      description: "https://www.inversionycomercio.ar/",
    },
    {
      image: "/images/mvp.jpg",
      bgimg: "/images/mvpblur.jpg",
      title: "MVP Builders",
      description: "https://www.mvpbuilders.tech/es",
    },
    {
      image: "/images/llanos.jpg",
      bgimg: "/images/llanosblur.jpg",
      title: "German Llanos Inmobiliaria",
      description: "https://germanllanos.com.ar/",
    },
  ],
];

let count = 0;

const SmallSlider = (props) => {
  //ARMADO DE HOOK
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  //FADE ANIMATION
  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    //startSlider()
  }, []);

  const handleOnNextClick = () => {
    count = (count + 1) % clientInfo[props.sliderIndex].length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const imagesLength = clientInfo[props.sliderIndex].length;
    count = (currentIndex + imagesLength - 1) % imagesLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="w-full group  relative overflow-hidden ">

        <div className="sm:w-2/3 md:w-[387px] md:h-[387px]  overflow-hidden mx-auto my-10 group">
          <img
            className="w-full object-fill duration-[4000ms]  "
            src={clientInfo[props.sliderIndex][currentIndex].image}
            alt=""
          />
        </div>


      <div className="absolute -inset-3 flex p-4 justify-between items-center ">

          <button
            onClick={handleOnPrevClick}
            className="text-gray-300 backdrop-opacity-15 text-lg right-10 "
          >
            <AiOutlineLeft size={40} className="opacity-30" />
          </button>
          <a
          alt=""
          href={clientInfo[props.sliderIndex][currentIndex].description}
          className="cursor-pointer opacity-0 h-full w-1/4  "
        >Link</a>
          <button
            onClick={handleOnNextClick}
            className="text-gray-300 backdrop-opacity-15 text-lg"
          >
            <AiOutlineRight size={40} className="opacity-30" />
          </button>
        
      </div>
    </div>
  );
};

export default SmallSlider;
