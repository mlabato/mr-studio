import Button from "../UI/Button";

const IntroWrapper = () => {
  

  return (
    <section className="bg-[#1a1f16] py-[3rem] notebook:py-[5rem] flex flex-row justify-around items-center px-[2rem] notebook:px-[8rem] desktop:px-[17rem]  ">
    <article>
      <div className=" text-[1.3rem] notebook:text-[3.2rem] desktop:text-[6rem] text-[#fdffe6] mb-[2rem]  font-bold   flex flex-col ">
        <p className=" hover:text-[#f5ff00] hover:animate-transDown">escuchamos.</p>
        <p className=" hover:text-[#f5ff00] hover:animate-transDown">pensamos. </p>
        <p className=" hover:text-[#f5ff00] hover:animate-transDown">creamos.</p>
      </div>

      
        <Button classes="bg-[#f5ff00] text-[#1a1f16] rounded-t-[8px] rounded-l-[8px] text-[.7rem] notebook:text-[1.2rem] desktop:text-[2.5rem]  px-[.5rem] desktop:px-[1.2rem] py-[.2rem] mx-auto w-2/3 notebook:w-1/2  text-center  ">
          <a alt="" href="#contact">
            
            contactanos
          </a>
        </Button>
      
      </article>
      <img src="/images/illustration.svg" alt="" className=" w-[10rem] notebook:w-[20rem] desktop:w-[30rem]"/>
    </section>
  );
};

export default IntroWrapper;
