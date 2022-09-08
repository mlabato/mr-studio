import {FaInstagram} from "react-icons/fa"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  const titles = [
    { title: "servicios", link: "#services" },
    { title: "clientes", link: "#clients" },
    { title: "nosotros", link: "#aboutus" },
    { title: "contacto", link: "#contact" },
  ];

  const titlesMap = titles.map((title, i) => {
    return (
      <li className="py-1 hover:text-[#f5ff00] hover:font-bold sm:mx-2 sm:text-[12px] md:text-[16px]" key={i}>
        <a href={title.link}> {title.title}</a>
      </li>
    );
  });
  return (
    <section className="bg-black   sm:p-4 md:p-6 ">
      
      <article className=" sm:mx-[10px] lg:mx-[200px] flex flex-row justify-between lg:justify-around">

      <article className=" text-left text-[#fdffe6]">
        <div className="sm:text-[16px] md:text-2xl font-bold ">MR Estudio</div>
        <div className="sm:text-[10px] md:text-sm  ">
          30 N Gould St STE N Sheridan, WY 82801
          <br />
          Tel. +1 307 206-9431
          <br />
          <br />
          © 2022 - MR Studio
        </div>
      </article>

      <article className=" text-[#fdffe6] ">
        <ul className="flex flex-col  ">{titlesMap}</ul>
      </article>

      
        <div className="flex flex-col p-4">
          <h1 className="text-[#fdffe6] sm:text-[12px] md:text-xl text-center ">Seguinos en nuestras redes</h1>
          <div className="flex flex-row p-2 mx-auto">
            <FaInstagram className="text-[#fdffe6] hover:text-[#f5ff00] sm:text-[14px] md:text-xl mx-2" />
            <FaFacebook className="text-[#fdffe6] hover:text-[#f5ff00] sm:text-[14px] md:text-xl mx-2" />
            <FaTwitter className="text-[#fdffe6] hover:text-[#f5ff00] sm:text-[14px] md:text-xl mx-2" />

          </div>
        </div>
      
        </article>

    </section>
  );
};

export default Footer;
