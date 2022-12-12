import Button from "../UI/Button";

const IntroWrapper = () => {
  

  return (
    <section className="bg-[#1a1f16] py-[3rem] notebook:py-[10rem] flex flex-col items-center  ">
      <div className=" text-[3rem] notebook:text-[4rem] desktop:text-[8rem] my-[.25rem] notebook:my-[2rem] text-[#fdffe6] text-center font-bold  mx-auto flex flex-col notebook:flex-row">
        <p className="mr-2 hover:text-[#f5ff00] hover:animate-transDown">escuchar.</p>
        <p className="mr-2 hover:text-[#f5ff00] hover:animate-transDown">pensar. </p>
        <p className="mr-2 hover:text-[#f5ff00] hover:animate-transDown">crear.</p>
      </div>

      <article className="w-full flex items-center justify-center mt-[2rem]">
        <Button classes="bg-[#f5ff00] text-[#1a1f16] rounded-t-[8px] rounded-l-[8px] text-[.9rem] notebook:text-[1.2rem] desktop:text-[2.5rem]  px-[.5rem] desktop:px-[1.5rem] py-[.2rem] hover:px-[.6rem] hover:py-[.3rem] ease-in-out duration-300 absolute hover:animate-swing">
          <a alt="" href="#contact">
            
            contactanos
          </a>
        </Button>
      </article>
    </section>
  );
};

export default IntroWrapper;
