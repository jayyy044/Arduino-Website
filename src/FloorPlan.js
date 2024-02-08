import { Link } from "react-router-dom";
import bed from "./graphics/bed.png";
import { useState } from "react";

// Create a component that represents the floorplan of my room on which cards and buttons will be rendered to resemble the projects that were created and where they were used

const FloorPlan = () => {
    // Create state variables for each button and initialize it as false 
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)


    return ( 
        <div onClick={(e) => {
            // Handle click events on the background so when you click away from a popup so it automatically dissapears
            if (e.target.className !== "btn" && e.target.parentNode.className !== "popup" && e.target.className !== 'popup'){
                setActive1(false);
                setActive2(false);
                setActive3(false);
                setActive4(false);
            }
            }}>
            {
                /*
                    Create four buttons that will be positioned absolute on top of the image of the floorplan and will be clicked on to reveal a popup that will give more information about the project and show a link to learn more
                */
            }
            <div className="bedbuttonContainer">
                <img className="bed" src={bed} alt="floorplan" />
                <button className="btn" onClick={() => {
                    setActive1(current => !current);
                    setActive2(false);
                    setActive3(false);
                    setActive4(false);
                    }}>4
                </button>   
                <button className="btn" onClick={() => {
                    setActive2(current => !current);
                    setActive1(false);
                    setActive3(false);
                    setActive4(false);
                    }}>3
                </button>
                <button className="btn" onClick={() => {
                    setActive3(current => !current);
                    setActive1(false);
                    setActive2(false);
                    setActive4(false);
                    }}>1
                </button>
                <button className="btn" onClick={() => {
                    setActive4(current => !current);
                    setActive1(false);
                    setActive2(false);
                    setActive3(false);
                    }}>2
                </button>
                {
                    // Create the four popups that will appear once its associated button is clicked and use the ternary operator to handle its display and animation such that it is synced with the button's state
                }
                <div className="popupCont">
                    <div className="popup" style={{
                        display: active1 ? "block" : "none",
                        animationDuration: active1 ? '0.5s' : '0s'
                        }}>
                        <h2>Light Flipper</h2>
                        <p>A playful gadget using a servo motor and sound sensor that responds to your claps or snaps, effortlessly flipping a light switch for a touch of tech magic!</p>
                        <Link to="/lightflip">
                            <button>Find out more</button>
                        </Link>
                    </div>
                    <div className="popup" style={{
                        display: active2 ? "block" : "none",
                        animationDuration: active2 ? '0.5s' : '0s'
                        }}>
                        <h2>Trip Wire</h2>
                        <p>Experience the thrill of my laser tripwire, where a disrupted laser beam triggers a buzzer and flashing LED, creating a simple yet effective security system!</p>
                        <Link to='/tripwire'>
                            <button>Find out more</button>
                        </Link>
                    </div>
                    <div className="popup" style={{
                        display: active3 ? "block" : "none",
                        animationDuration: active3 ? '0.5s' : '0s'
                        }}>
                        <h2>Digital Timer</h2>
                        <p>Incorporate this timer into your routine which is armed with a vibrant LCD screen and buzzer that will add a touch of flair to your daily tasks!</p>
                        <Link to='/timer'>
                            <button>Find out more</button>
                        </Link>
                    </div>
                    <div className="popup" style={{
                        display: active4 ? "block" : "none",
                        animationDuration: active4 ? '0.5s' : '0s'
                        }}>
                        <h2>Plant Monitor</h2>
                        <p>Dive into the future of plant care with my smart monitoring system, allowing you to remotely track temperature, humidity, and even water your plant via a tap on your phone!</p>
                        <Link to='/plant'>
                            <button>Find out more</button>
                        </Link>
                    </div>
                </div>
            </div>
            {
                // Create another container that will only display the popup's and no image or buttons when the viewport's width is small to accomodate those on mobile and tablets for a more user-friendly experience 
            }
            <div className="containerSmall">
                <div className="popupSmall" >
                    <h2>Light Flipper</h2>
                    <p>A playful gadget using a servo motor and sound sensor that responds to your claps or snaps, effortlessly flipping a light switch for a touch of tech magic!</p>
                    <Link to="/lightflip">
                        <button>Find out more</button>
                    </Link>
                </div>
                <div className="popupSmall">
                    <h2>Trip Wire</h2>
                    <p>Experience the thrill of my laser tripwire, where a disrupted laser beam triggers a buzzer and flashing LED, creating a simple yet effective security system!</p>
                    <Link to='/tripwire'>
                        <button>Find out more</button>
                    </Link>
                </div>
                <div className="popupSmall" >
                    <h2>Digital Timer</h2>
                    <p>Incorporate this timer into your routine which is armed with a vibrant LCD screen and buzzer that will add a touch of flair to your daily tasks!</p>
                    <Link to='/timer'>
                        <button>Find out more</button>
                    </Link>
                </div>
                <div className="popupSmall" >
                    <h2>Plant Monitor</h2>
                    <p>Dive into the future of plant care with my smart monitoring system, allowing you to remotely track temperature, humidity, and even water your plant via a tap on your phone!</p>
                    <Link to='/plant'>
                        <button>Find out more</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default FloorPlan;