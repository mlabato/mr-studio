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
    <form onSubmit={submitHandler} className="flex flex-col notebook:w-2/3  mx-auto">
      <label className="my-2">Tu nombre</label>
      <input
        type="text"
        ref={nameRef}
        className="bg-[#1a1f16] hover:bg-[#f5ff00] text-[#f5ff00] hover:text-[#1a1f16] rounded-t-[8px] rounded-l-[8px] p-2 h-[30px]"
      />
      <label className="my-2 ">Email</label>
      <input
        type="email"
        ref={emailRef}
        className="bg-[#1a1f16] hover:bg-[#f5ff00] text-[#f5ff00] hover:text-[#1a1f16] rounded-t-[8px] rounded-l-[8px] p-2 h-[30px]"
      />
      <label className="my-2 ">Consulta</label>
      <textarea
        ref={textRef}
        className="bg-[#1a1f16] hover:bg-[#f5ff00] text-[#f5ff00] hover:text-[#1a1f16] rounded-t-[8px] rounded-l-[8px] p-2"
      />

      <Button classes="bg-[#1a1f16] text-[#f5ff00] text-[15px] mx-auto my-4 rounded-t-[8px] rounded-l-[8px] w-[118px] h-[30px]  ">
        enviar
      </Button>
    </form>
    
    {textSent && <p className="text-center text-black"> La consulta ya se ha registrado! Te vamos a escribir pronto </p>}
    
    </article>
  );
};

export default ContactForm;
