import Button from "../UI/Button";

const IntroWrapper = () => {
  const firstText =
    "Te ofrecemos un servicio integral, pensando en tu negocio y tu bolsillo";

  const secondText =
    "En MR Estudio nos involucramos en cada detalle de tu estrategia digital y le damos un valor agregado diferencial";

  return (
    <section className="bg-black p-12 ">
      <article>
        <div className=" sm:text-2xl lg:text-4xl text-[#fdffe6] text-center font-bold sm:w-full md:w-2/3 lg:w-1/3 mx-auto">
          {firstText}
        </div>
        <div className="sm:text-[12px] md:text-sm lg:text-lg text-[#fdffe6]  text-center sm:w-full md:w-2/3 lg:w-1/3 mx-auto mt-4">
          {secondText}
        </div>
      </article>
      <article className="p-4 w-full text-center">
        <Button classes="bg-[#f5ff00] text-[#1a1f16] sm:text-[12px] md:text-[15px]  rounded-t-[8px] rounded-l-[8px] sm:w-[90px] sm:h-[20px] md:w-[118px] md:h-[30px] hover:font-4xl hover:w-[125px] hover:h-[32px] hover:ease-in-out duration-300 ">
          <a alt="" href="#contact"> contactanos</a>
        </Button>
      </article>
    </section>
  );
};

export default IntroWrapper;
