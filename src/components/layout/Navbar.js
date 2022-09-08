import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const displayMenuHandler = () => {
    setDisplayMenu(!displayMenu);
  };

  const titles = [
    { title: "servicios", link: "#services" },
    { title: "clientes", link: "#clients" },
    { title: "nosotros", link: "#aboutus" },
    { title: "contacto", link: "#contact" },
  ];

  const titlesMap = titles.map((title, i) => {
    return (
      <li className= "lg:border-white lg:border-r-2 sm:py-1  md:px-2   " key={i}>
        <a
          href={title.link}
          className=  "lg:border-solid   hover:text-[#f5ff00] hover:font-bold "
        >
          {" "}
          {title.title}{" "}
        </a>
      </li>
    );
  });

  return (
    <section className="bg-black w-full">
      <article className=" sm:ml-[20px] sm:mr-[40px]   lg:mx-[100px] flex flex-row h-16 justify-between  ">
        <div className="text-[#fdffe6] font-bold lg:ml-32 text-2xl grow my-auto mx-auto">
          MR Estudio
        </div>

        <div className="text-[#fdffe6] sm:hidden lg:block text-sm mr-32 flex flex-row my-auto">
          <ul className="flex flex-row ">{titlesMap}</ul>
        </div>

        <button className="sm:block lg:hidden" onClick={displayMenuHandler}>
          <GiHamburgerMenu className="text-[#fdffe6] hover:text-[#f5ff00] text-2xl my-auto" />
        </button>





      </article>
      <div className= {(displayMenu ? " h-[120px] left-0" : " h-0 -left-full") + " relative  sm:ml-[20px] md-hidden text-sm duration-500 transition-all  text-[#fdffe6]" }>
          <ul className= "flex-col w-full">{titlesMap}</ul>
        </div>
    </section>
  );
};

export default Navbar;
