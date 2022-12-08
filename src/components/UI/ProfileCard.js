const ProfileCard = () => {
  const admins = [
    {
      img: "/images/ml.jpeg",
      bgimg: "/images/code.jpg",
      name: "Martin",
      description: "Abogado devenido en front end developer",
      skills: ["JavaScript", "React", "CSS", "HMTL", "Tailwind", "Redux", "Next.js"],
    },
    {
      img: "/images/rr.jfif",
      bgimg: "/images/paint.avif",
      name: "Rodrigo",
      description: "Diseñador gráfico, community manager",
      skills: ["PS", "Figma", "Instagram", "Google Ads", "Adobe Illustrator"],
    },
  ];

  const adminMap = admins.map((admin, i) => {
    return (
      <div
        className="bg-[#fdffe6] my-12 pb-6 w-2/3 mr-[3rem] justify-center items-center overflow-hidden  shadow-sm mx-auto"
        key={i}
      >
        <div className="relative sm:h-[55px] md:h-40    ">
          <img
            className="absolute h-full w-full sm:hidden md:block object-cover"
            src={admin.bgimg}
            alt=""
          />
        </div>

        <div className="relative shadow mx-auto h-24 w-24 -my-12  border-white rounded-full overflow-hidden border-4">
          <img className="object-cover w-full h-full" src={admin.img} alt="" />
        </div>

        <div className="mt-16">
          <h1 className="text-lg text-black text-center font-semibold">{admin.name}</h1>
        </div>

        <h1 className="text-sm text-black text-center mx-2 ">{admin.description}</h1>

        <div className="mt-6  pt-3 flex flex-wrap mx-6 border-t">
          {admins[i].skills.map((skill, y) => {
            return (
              <div
                className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 bg-black text-[#fdffe6]  hover:bg-[#f5ff00] hover:text-black cursor-default"
                key={y}
              >
                {skill}
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return <div className="flex md:flex-row sm:flex-col mx-[8rem]">{adminMap}</div>;
};

export default ProfileCard;
