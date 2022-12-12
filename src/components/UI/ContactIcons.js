import { FaWhatsappSquare} from "react-icons/fa";


const ContactIcons = () => {
    return(
        <article className="hidden notebook:block fixed text-[5rem] full:text-[3rem] right-10 bottom-10  bg-[#1a1f16] text-red ">
          <a href="https://github.com/mlabato" alt="" className="hover:text-[#84A98C] hover:text-[2.8rem] full:hover:text-[3.4rem] ease-in-out duration-500 absolute bottom-10 full:bottom-12 right-4"><FaWhatsappSquare className="my-[1rem]"/></a>  
        </article>
    )
}

export default ContactIcons;