import Card from "../UI/Card";

const WorksWrapper = () => {
  return (
    <section className="flex flex-col bg-[#1a1f16] py-[3rem] notebook:py-[5rem]  ">
      <p className="font-bold text-[1.5rem] notebook:text-[2.3rem] mx-auto mb-[2rem] text-[#fdffe6]">
        nuestros trabajos
      </p>
      <article className="flex flex-col  notebook:flex-row  justify-center mx-[2rem] notebook:mx-[8rem] ">
        <div className="flex flex-col  notebook:w-1/2  notebook:mr-[2rem] justify-between">
          <Card
            blurredImage={"/images/mlabatoportBLUR.jpg"}
            image={"/images/mlabatoport.jpg"}
            message={"diseño web"}
          />

          <Card
            blurredImage={"/images/marcalujanBLUR.png"}
            image={"/images/marcalujan.jpg"}
            message={"branding"}
          />
        </div>
        <div className="notebook:w-1/2">
          <Card
            blurredImage={"/images/tallpiaBLUR.jpg"}
            image={"/images/tallpia.jpg"}
            message={"redes sociales"}
          />
        </div>
      </article>
    </section>
  );
};

export default WorksWrapper;
