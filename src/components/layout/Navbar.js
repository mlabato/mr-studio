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
      <li className= " mx-[.5rem] text-center py-1 desktop:px-2 desktop:hover:animate-swing  " key={i}>
        <a
          href={title.link}
          className=  "  hover:text-[#f5ff00] hover:font-bold "
        >
          {" "}
          {title.title}{" "}
        </a>
      </li>
    );
  });

  return (
    <section className="bg-[#1a1f16] w-full desktop:py-[2rem]">
      <article className="  flex flex-row h-[5rem] justify-between mx-[2rem]  notebook:mx-[8rem] desktop:mx-[10rem]">
        <div className="text-[#fdffe6] font-bold text-[1.5rem]  notebook:text-[2rem] desktop:text-[4rem] grow my-auto mx-auto">
          MR Estudio
        </div>

        <div className="text-[#fdffe6] hidden notebook:flex text-[1.1rem] desktop:text-[2rem] flex-row my-auto">
          <ul className="flex flex-row ">{titlesMap}</ul>
        </div>



        <button className="sm:block lg:hidden" onClick={displayMenuHandler}>
          <GiHamburgerMenu className="text-[#fdffe6] hover:text-[#f5ff00] text-2xl my-auto" />
        </button>

      </article>


      <div className= {(displayMenu ? " h-[20px] left-0" : " h-0 -left-full") + " relative mx-[2rem] desktop:hidden duration-500 transition-all  text-[#fdffe6]" }>
          <ul className= "flex flex-row w-full">{titlesMap}</ul>
      </div>


    </section>
  );
};

export default Navbar;
