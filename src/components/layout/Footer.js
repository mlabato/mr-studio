
const Footer = () => {
  const titles = [
    { title: "servicios", link: "#services" },
    { title: "clientes", link: "#clients" },
    { title: "nosotros", link: "#aboutus" },
    { title: "contacto", link: "#contact" },
  ];

  const titlesMap = titles.map((title, i) => {
    return (
      <li className="py-1 hover:text-[#f5ff00] hover:font-bold sm:mx-2 text-[0.7rem] notebook:text-[1rem] desktop:text-[1.5rem]" key={i}>
        <a href={title.link}> {title.title}</a>
      </li>
    );
  });
  return (
    <section className="bg-[#1a1f16]  py-[3rem]  ">
      
      <article className=" mx-[2rem] notebook:mx-[8rem] desktop:mx-[10rem] flex flex-row justify-between ">

      <article className=" text-left text-[#fdffe6]">
        <div className="text-[1.5rem] notebook:text-[2rem] desktop:text-[3rem] font-bold ">MR Estudio</div>
        <div className="text-[0.9rem] notebook:text-[0.9rem] desktop:text-[1.5rem] ">
          Buenos Aires, Argentina
          <br />
          hello@mrstudio.com
          <br />
          <br />
          © 2022 - MR Studio
        </div>
      </article>

      <article className=" text-[#fdffe6] ">
        <ul className="flex flex-col  ">{titlesMap}</ul>
      </article>

      

      
        </article>

    </section>
  );
};

export default Footer;
