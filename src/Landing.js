import cool from "./graphics/cool.png";
import FloorPlan from "./FloorPlan";

// Create a component that will render the landing page of the website 

const Landing = () => {
    return ( 
    <div className="Landing">
      <div className="main">
        <div className="text">
          <h1>Arduino Projects</h1>
          <p>The Arduino is a versatile electronics platform that seamlessly blends hardware and software, allowing users to create and control interactive electronic projects. Leveraging the power of Arduino, my brother and I have created home-based projects bringing our innovative ideas to life and transforming ordinary spaces into extraordinary smart environments.</p>
        </div>
        <img className="mainImage" src={cool} alt="" width="960" height="600"/>
      </div>
      <FloorPlan/>
    </div>
     );
}
 
export default Landing;