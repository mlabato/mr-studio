const ServicesWrapper = () => {
  return (
    <section className="py-[3rem]  notebook:py-[7rem] flex flex-col bg-[#fdffe6]">
      <article className="flex flex-col notebook:flex-row items-start mx-[2rem] notebook:mx-[8rem] mb-[2rem]">
        <div className="font-bold text-[1.5rem] notebook:text-[2.3rem]  notebook:w-1/2">sobre nosotros</div>

        <div className=" notebook:w-3/4 text-[.9rem] notebook:text-[1.1rem] notebook:ml-[8rem]">
          Somos un estudio de diseño especializado en social media, desarrollos
          web y diseño gráfico.
        </div>
      </article>

      <article className="flex flex-col notebook:flex-row items-start mx-[2rem] notebook:mx-[8rem] ">
        <div className="font-bold text-[1.5rem] notebook:text-[2.3rem] notebook:w-1/2 ">que hacemos</div>

        <div className="notebook:w-3/4 text-[1.1rem] notebook:ml-[8rem] ">
          <div className="py-[.5rem] border-black border-b-2 mb-[1rem]">
            <p className="font-bold">diseño gráfico</p>
            <p className="text-[.9rem]">
              creamos marcas con su propia identidad a partir de un minucioso
              estudio de las necesidades y objetivos del cliente.
            </p>
          </div>
          <div className="py-[.5rem] border-black border-b-2 mb-[1rem]">
            <p className="font-bold">social media</p>
            <p className="text-[.9rem]">
              creamos marcas con su propia identidad a partir de un minucioso
              estudio de las necesidades y objetivos del cliente.
            </p>
          </div>
          <div className="py-[.5rem] border-black border-b-2 mb-[1rem]">
            <p className="font-bold">diseño web</p>
            <p className="text-[.9rem]">
              creamos marcas con su propia identidad a partir de un minucioso
              estudio de las necesidades y objetivos del cliente.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ServicesWrapper;
