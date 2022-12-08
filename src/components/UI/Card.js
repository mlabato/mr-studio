import { useState } from "react";

const Card = (props) => {
  const [mouseEntered, setMouseEntered] = useState(false);

  const mouseEnterHandler = () => {
    setMouseEntered(true);
  };

  const mouseLeftHandler = () => {
    setMouseEntered(false);
  };

  return (
    <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeftHandler} className="relative   mb-[2rem] " >
      
      {mouseEntered && <div className="text-[1.3rem] notebook:text-[2rem]  text-white font-bold absolute   left-[50%] top-[50%] translate-x-[-50%]  translate-y-[-50%]" >{props.message}</div>}
      <img src={mouseEntered ? props.blurredImage : props.image}  alt=" " /> 
      
      
    </div>
    
  );
};

export default Card;