
import DestinationData from "./DestinationData";
import Trip1 from "../assets/rajasthan2.jpg";
import Trip2 from "../assets/rajasthan1.jpg";
import Trip4 from "../assets/nature02.jpg";


import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1> Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot within a time frame. </p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano,Batangas"
        text="One of the most iconic views in Luzon Mt Tool boosts a Volcano
            inside a lake inside an island . if you fancy a Closer look the hike
            up to the crater is a mere 45 minutes , and is easy enough for
            beginners Guides will assist you most of the way , and you'll see
            the peculior wnvironment found on an active volcano , including
            volconic rocks and steam vents. The hike can be dusty and hot , so
            plan an early morning trip ,and then unwind with some bulalo before
            heading back home !"
        img1={Trip1}
        img2={Trip2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="If you're looking for a hink that's a little more challenging but still good for a beginner mountaineer, 
        check out Mt.Daguldul in sanjuan,Batangas .You'll start your hike from the beach and pass through tropical forest
        ,different rock formations, and small Streams. There's a small Store halfway up the trail
        where you can take a brack and drink buko juice, and though the summit itself may not have the best view 
        ,the breeze is fontastic . Once you've mode it back down head Straight to the beach for a refreshing,
        well-deserved swim"
        img1={Trip4}
        img2={Trip4}
      />
    </div>
    
  );
};
export default Destination;
