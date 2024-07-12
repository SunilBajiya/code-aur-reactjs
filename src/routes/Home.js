import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import HometImg from "../assets/nature02.jpg";
import ScroleToTOp from "../components/ScroleToTop";
import Slider1 from "../components/Slider";
import CardSlider from "../components/CardSlider";






function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="Hero"
        heroImg={HometImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination" 
        buttonText="Travel Plan"
        url="/"
        btnclass="show"
      />
      <Destination/>
      <Slider1/>
     <CardSlider/>
      <Trip />
      <CardSlider/>
      <Footer />
      <ScroleToTOp/>
    </>
  );
}
export default Home;
