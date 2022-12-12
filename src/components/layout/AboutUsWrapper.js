import ProfileCard from "../UI/ProfileCard";


const AboutUsWrapper = () => {
  return (
    <section id="aboutus" className="bg-[#1a1f16] py-[3rem]  notebook:py-[5rem] ">
      
      <h1 className="font-bold text-[1.5rem] notebook:text-[2.3rem] desktop:text-[4rem] mx-auto  text-[#fdffe6] text-center">quienes somos</h1>
      <ProfileCard />
      
    </section>
  );
};

export default AboutUsWrapper;
