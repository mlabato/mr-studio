const ServicesWrapper = () => {
  const steps = [
    {
      num: "1.",
      step: "ESCUCHAMOS",
      description: "Conocemos tus necesidades",
    },
    {
      num: "2.",
      step: "PENSAMOS",
      description: "Delineamos juntos un plan",
    },
    {
      num: "3.",
      step: "DIALOGAMOS",
      description: "Debatimos con vos las soluciones",
    },
    {
      num: "4.",
      step: "IMPLEMENTAMOS",
      description: "Hacemos realidad las ideas",
    },
  ];

  const stepsMap = steps.map((step, i) => {
    return (
      <li id="services" className="group sm:w-full md:w-3/5  flex flex-col   " key={i}>
        <div className="flex flex-row">
          <div className=" sm:text-[30px] md:text-[40px]  lg:text-[90px] text-[#f5ff00] lg:hidden ease-in-out duration-300 md:group-hover:block font-extrabold  ">
            {step.num}
          </div>
          <div className=" sm:text-[20px] md:text-[40px] lg:text-[60px]  md:group-hover:text-[90px] ease-in-out duration-300  font-extrabold mx-3 my-auto ">
            {step.step}
          </div>
          </div>
       
        
        <div className="hidden md:group-hover:block sm:text:[10px] md:text-2xl ">
          {step.description}
        </div>
      </li>
    );
  }); 

  return <section className="flex flex-col mx-auto w-full bg-white sm:p-2 md:p-4 ">
    <ul className="mx-auto">
    {stepsMap}
    </ul>
    </section>;
};

export default ServicesWrapper;
