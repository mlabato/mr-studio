import { useState } from "react";

import Button from "../UI/Button";
import Slider from "../UI/Slider";
import SmallSlider from "../UI/SmallSlider";

const WorksWrapper = () => {
  const [selectSlider, setSelectSlider] = useState(0);

  const webDesignSliderHandler = () => {
    setSelectSlider(0);
  };

  const redesSliderHandler = () => {
    setSelectSlider(1);
  };

  const uxSliderHandler = () => {
    setSelectSlider(2);
  };

  return (
    <section id="clients" className="flex flex-col sm:p-2 md:p-4">
      <h1 className=" sm:text-2xl md:text-2xl lg:text-4xl text-center text-black font-bold p-4">
        Nuestros trabajos
      </h1>

      <article className=" flex flex-row mx-auto my-5">
        <Button onClick={redesSliderHandler}>redes</Button>
        <Button onClick={webDesignSliderHandler}>diseño web</Button>
        <Button onClick={uxSliderHandler}>UX</Button>
      </article>
      {window.innerWidth <= 1024 ? (
        <SmallSlider sliderIndex={selectSlider} />
      ) : (
        <Slider sliderIndex={selectSlider} />
      )}

      {console.log(window.innerWidth)}
    </section>
  );
};

export default WorksWrapper;
