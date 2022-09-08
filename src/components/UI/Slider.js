import Card from "../UI/Card";

const Slider = (props) => {
  const clientInfo = [
    [
      {
        image: "/images/mvp.jpg",
        bgimg: "/images/mvpblur.jpg",
        title: "MVP Builders",
        description: "https://www.mvpbuilders.tech/es",
      },
      {
        image: "/images/llanos.jpg",
        bgimg: "/images/llanosblur.jpg",
        title: "German Llanos Inmobiliaria",
        description: "https://germanllanos.com.ar/",
      },
      {
        image: "/images/AAIC.jpg",
        bgimg: "/images/AAICblur.jpg",
        title: "AAIC",
        description: "https://www.inversionycomercio.ar/",
      },
    ],
    [
      {
        image: "/images/llanos.jpg",
        bgimg: "/images/llanosblur.jpg",
        title: "German Llanos Inmobiliaria",
        description: "https://germanllanos.com.ar/",
      },
      {
        image: "/images/AAIC.jpg",
        bgimg: "/images/AAICblur.jpg",
        title: "AAIC",
        description: "https://www.inversionycomercio.ar/",
      },
      {
        image: "/images/mvp.jpg",
        bgimg: "/images/mvpblur.jpg",
        title: "MVP Builders",
        description: "https://www.mvpbuilders.tech/es",
      },
    ],
    [
      {
        image: "/images/AAIC.jpg",
        bgimg: "/images/AAICblur.jpg",
        title: "AAIC",
        description: "https://www.inversionycomercio.ar/",
      },
      {
        image: "/images/mvp.jpg",
        bgimg: "/images/mvpblur.jpg",
        title: "MVP Builders",
        description: "https://www.mvpbuilders.tech/es",
      },
      {
        image: "/images/llanos.jpg",
        bgimg: "/images/llanosblur.jpg",
        title: "German Llanos Inmobiliaria",
        description: "https://germanllanos.com.ar/",
      },
    ],
  ];

  return (
    <div className="flex sm:flex-col md:flex-row sm:w-4/5 md:w-3/4 mx-auto">
      {clientInfo[props.sliderIndex].map((client, i) => {
        return (
          
          <a alt="" href= {client.description} className="  flex flex-row w-3/4 mx-auto " key={i}>
          <Card
            image={client.image}
            bgimg={client.bgimg}
          />
          
     
          </a>
          
        );
      })}
    </div>
  );
};

export default Slider;
