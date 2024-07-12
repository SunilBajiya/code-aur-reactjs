import "./AboutUsStyles.css";
import TripData from "./TripData";
import Trip2 from "../assets/raj4.jpg";
import Trip4 from "../assets/india.jpg";
import Trip5 from "../assets/tourest1.jpeg";

function AboutUs() {
  return (
    <div className="about-container">
      <h1>Our History</h1>
      <div className="tripcard">
        <TripData
          image={Trip4}
          heading=" Trip in Indonesia"
          text="Indonesia , officially the Republic 
        of Indonesia, is a country in Southeast 
        Asia and Oceania between the India
         and Pacific oceans. It consists of
          over 17,000 islands, including Sumatra,
           java, sulawesi, and arts of Borneo 
           and New Guinea."
        />
        <TripData
          image={Trip5}
          heading=" Trip in Indonesia"
          text="Indonesia , officially the Republic 
        of Indonesia, is a country in Southeast 
        Asia and Oceania between the India
         and Pacific oceans. It consists of
          over 17,000 islands, including Sumatra,
           java, sulawesi, and arts of Borneo 
           and New Guinea."
        />
        <TripData
          image={Trip2}
          heading=" Trip in Rajasthan "
          text="Indonesia , officially the Republic 
        of Indonesia, is a country in Southeast 
        Asia and Oceania between the India
         and Pacific oceans. It consists of
          over 17,000 islands, including Sumatra,
           java, sulawesi, and arts of Borneo 
           and New Guinea."
        />
      </div>
      <p>
        Trippy is owned and managed by Trippy .in Pvt.ltd a leading brand in web
        desiging service and e-commerce solutions .Trippy in.pvt.Ltdis counted
      </p>
      <h1>Our Mission</h1>
      <p>
        Our mission is to touch the harizon where our cappbilites may
        succesfully meet with the requirements of our Clients , that too with
        wltimate transparency and cost-effectivenss.
      </p>
      <h1>Our Vision </h1>
      <p>
        To show the seeds of par-excellence service with customer centric
        opprooch and reap the trust of wordwide Clients
      </p>

      
    </div>
  );
}
export default AboutUs;
