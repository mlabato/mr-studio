import Navbar from "./components/layout/Navbar";
import IntroWrapper from "./components/layout/IntroWrapper";

import WorksWrapper from "./components/layout/WorksWrapper";
import AboutUsWrapper from "./components/layout/AboutUsWrapper";
import Footer from "./components/layout/Footer";
import ContactWrapper from "./components/layout/ContactWrapper";
import ServicesWrapper from "./components/layout/ServicesWrapper";



function App() {
  return (
    <div className="font-lato">
      <Navbar />
      <IntroWrapper />
      <ServicesWrapper />
      <WorksWrapper />
      <AboutUsWrapper />
      <ContactWrapper />
      <Footer />

 
    </div>
  );
}

export default App;
