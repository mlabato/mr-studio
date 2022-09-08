const Button = (props) => {
  return (
    <button
      className={
        props.classes ||
        "bg-[#1a1f16] text-[#fdffe6] hover:text-[#f5ff00] sm:text-[10px] md:text-[15px] sm:mx-[10px] md:mx-[30px] lg:mx-[60px] rounded-t-[8px] rounded-l-[8px] sm:w-[90px] sm:h-[20px] md:w-[118px] md:h-[30px] "
      }
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
