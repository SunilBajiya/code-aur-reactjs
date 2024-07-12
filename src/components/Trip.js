import "./TripStyles.css";
import TripData from "./TripData";
import Trip2 from "../assets/tourest1.jpeg";
import Trip4 from "../assets/india.jpg";
import Trip5 from "../assets/login01.avif";


function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trip 2024</h1>
      <p> You can discover unique destination using Google map.</p>
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
          heading=" Trip in Indonesia"
          text="Indonesia , officially the Republic 
        of Indonesia, is a country in Southeast 
        Asia and Oceania between the India
         and Pacific oceans. It consists of
          over 17,000 islands, including Sumatra,
           java, sulawesi, and arts of Borneo 
           and New Guinea."
        />
      </div>
    </div>
  );
}

export default Trip;

