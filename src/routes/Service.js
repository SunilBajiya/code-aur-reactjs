import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/rajasthan.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import ScroleToTOp from "../components/ScroleToTop";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName=".hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnclass="hide"
        text="Choose Your Favourite Destination" 
      />
      <Trip />

      <Footer />
      <ScroleToTOp/>

      
    </>
  );
}
export default Service;
