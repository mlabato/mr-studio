import { useState } from "react";
import { FaLink } from "react-icons/fa";

const Card = (props) => {
  const [mouseEntered, setMouseEntered] = useState(false);

  const mouseEnterHandler = () => {
    setMouseEntered(true);
  };

  const mouseLeftHandler = () => {
    setMouseEntered(false);
  };

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeftHandler}
      className="relative   mb-[2rem] "
    >
      {mouseEntered && (
        <div className="flex flex-col justify-center text-[1.3rem] notebook:text-[2rem]  text-white font-bold absolute   left-[50%] top-[50%] translate-x-[-50%]  translate-y-[-50%]">
          <p>{props.message}</p>
          <a href={props.link} className="mx-auto cursor-pointer hover:text-[#f5ff00]" >
            <FaLink />
          </a>
        </div>
      )}
      <img src={mouseEntered ? props.blurredImage : props.image} alt=" " />
    </div>
  );
};

export default Card;
