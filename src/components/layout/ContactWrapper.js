import ContactForm from "../UI/ContactForm"


const ContactWrapper = () => {
    return(
        <section className="py-[3rem] notebook:py-[5rem]  bg-[#fdffe6]" id="contact">
            <div className="mx-[2rem] notebook:mx-[8rem]">
            <h1 className="font-bold text-[1.5rem] notebook:text-[2.3rem] mx-auto  text-[#1a1f16] text-center">contactanos</h1>
            <h1 className=" text-[0.9rem] notebook:text-[1.1rem] text-center text-black">¿Estás listo para que trabajemos juntos? ¡Escribinos! </h1>
            <ContactForm />
            </div>
            
        </section>
    )
}

export default ContactWrapper 