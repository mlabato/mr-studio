import { useRef, useState } from "react";
import Button from "./Button";

const ContactForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const textRef = useRef();

  const [textSent, setTextSent] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredText = textRef.current.value;

    try {
      const response = await fetch(
        "https://mrestudio-consultas-default-rtdb.firebaseio.com//consultas.json",
        {
          method: "POST",
          body: JSON.stringify({
            name: enteredName,
            email: enteredEmail,
            text: enteredText,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
        console.log(response);
      

      if (response.ok) {
        setTextSent(true);
      }
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <article>
    <form onSubmit={submitHandler} className="flex flex-col notebook:w-2/3 desktop:w-1/2  mx-auto">
      <label className="my-2 desktop:text-[2rem]">Tu nombre</label>
      <input
        type="text"
        ref={nameRef}
        className="bg-[#1a1f16] hover:bg-[#f5ff00] text-[#f5ff00] hover:text-[#1a1f16] rounded-t-[8px] rounded-l-[8px] p-2 h-[30px] desktop:h-[3rem] desktop:text-[2rem]"
      />
      <label className="my-2 desktop:text-[2rem]">Email</label>
      <input
        type="email"
        ref={emailRef}
        className="bg-[#1a1f16] hover:bg-[#f5ff00] text-[#f5ff00] hover:text-[#1a1f16] rounded-t-[8px] rounded-l-[8px] p-2 h-[30px] desktop:h-[3rem] desktop:text-[2rem]"
      />
      <label className="my-2 desktop:text-[2rem]">Consulta</label>
      <textarea
        ref={textRef}
        className="bg-[#1a1f16] hover:bg-[#f5ff00] text-[#f5ff00] hover:text-[#1a1f16] rounded-t-[8px] rounded-l-[8px] p-2 desktop:h-[6rem] desktop:mb-[1rem] desktop:text-[2rem]"
      />

      <Button classes="bg-[#1a1f16] text-[#f5ff00] text-[.9rem] notebook:text-[1.2rem] desktop:text-[2.5rem]  px-[.5rem] desktop:px-[1.5rem] py-[.2rem] mx-auto my-4 rounded-t-[8px] rounded-l-[8px]  desktop:text-[2rem]   ">
        enviar
      </Button>
    </form>
    
    {textSent && <p className="text-center text-black"> La consulta ya se ha registrado! Te vamos a escribir pronto </p>}
    
    </article>
  );
};

export default ContactForm;
