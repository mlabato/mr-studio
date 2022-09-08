import { useState } from "react";


const Card = (props) => {

  const [bgimg, setBgimg] = useState(false)

  const mouseEnterHandler = () => {
    setBgimg(true);
  };

  const mouseLeaveHandler = () => {
    setBgimg(false);
  }

  return (
    <div className="md:w-[387px] md:h-[387px]  overflow-hidden mx-auto my-10 group" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>

      <img
        className="w-full object-fill duration-[4000ms]  "
        src={!bgimg ? props.bgimg : props.image}
        alt=""
      />

    </div>
  );
};

export default Card;
