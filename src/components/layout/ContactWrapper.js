import ContactForm from "../UI/ContactForm"


const ContactWrapper = () => {
    return(
        <section className="p-4 mx-auto bg-[#fdffe6]" id="contact">
            <div className="my-4">
            <h1 className="sm:text-2xl md:text-2xl lg:text-4xl text-center text-black font-bold my-2">contactanos</h1>
            <h1 className=" sm:text-sm  md:text-xl lg:text-2xl text-center text-black">¿Estás listo para que trabajemos juntos? ¡Escribinos! </h1>
            </div>
            <ContactForm />
        </section>
    )
}

export default ContactWrapper 