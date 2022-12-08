import Card from "../UI/Card";

const WorksWrapper = () => {
  return (
    <section className="flex flex-col bg-[#1a1f16] py-[5rem]  ">
      <p className="font-bold text-[2.3rem] mx-auto mb-[2rem] text-[#fdffe6]">
        nuestros trabajos
      </p>
      <article className="flex flex-row mx-[8rem] ">
        <div className="flex flex-col w-1/2 mr-[2rem]  justify-between">
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
      <div className="w-1/2">
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
