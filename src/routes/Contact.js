import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/customer2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ScroleToTOp from "../components/ScroleToTop";
import CardSlider from "../components/CardSlider";
import BlogTour from "../components/BlogTour";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName=".hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnclass="hide"
      />
      <ContactForm />
      <BlogTour/>
      <Footer />
      <ScroleToTOp/>

    </>
  );
}
export default Contact;
