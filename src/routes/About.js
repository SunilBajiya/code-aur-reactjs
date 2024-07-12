import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/HOme.avif";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import ScroleToTOp from "../components/ScroleToTop";
import CardsTour from "../components/CardsTour";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName=".hero-mid"
        heroImg={AboutImg}
        title="About"
        btnclass="hide"
      />
      <AboutUs />
      <Footer />
      <ScroleToTOp/>

    </>
  );
}
export default About;
