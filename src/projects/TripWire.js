import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import tripSetup from "../graphics/tripsetup.png";
import { useState } from "react";

const TripWire = () => {
    const codeString = `int lightValue;

    void setup() {
      Serial.begin(9600);
      pinMode(A0, INPUT);
      pinMode(7, OUTPUT);
      pinMode(8, OUTPUT);
      pinMode(12, OUTPUT);
    }
    
    void loop() {
      lightValue = analogRead(A0);
      Serial.println(lightValue);
      digitalWrite(7, HIGH);
      if (lightValue > 100){
        digitalWrite(8, HIGH);
        digitalWrite(12, HIGH);
        delay(100);
        digitalWrite(12, LOW);
        delay(100);
      } else{
        digitalWrite(8, LOW);
      }
    }`

    const [modalOn, setModal] = useState(false);

    return ( 
        <div>
            <h1 className="tripHead">Trip Wire</h1>
            <div className="tripContent">
                <div className="matcodTrip">
                    <section className="materials">
                        <h1>Materials</h1>
                        <ul>
                            <div className="firstCol">
                                <li>Arduino Uno</li>
                                <li>Breadboard</li>
                                <li>Photoresistor</li>
                                <li>Buzzer</li>
                                <li>Laser Emit</li>
                            </div>
                            <div className="secondCol">
                                <li>Male-Male Jumper Cable</li>
                                <li>Male-Female Jumper Cable</li>
                                <li>LED Light</li>
                                <li>Tape </li>
                            </div>
                        </ul>
                    </section>
                    <div className="code">
                        <h1>Code</h1>
                        <SyntaxHighlighter language="arduino" style={gruvboxDark} >
                            {codeString}
                        </SyntaxHighlighter>
                    </div>
                </div>
                <div className="viddiagTrip">
                    <section className="videoTrip">
                        <iframe src="https://www.youtube.com/embed/pBYS4-e-eNg" title="TripWire" frameborder="0" playing="false" controls="true" allowFullScreen></iframe>
                    </section>
                    <div className="tripSetup">
                        <img className="previewImage" src={tripSetup} alt="" />
                        <button className="modalTrigger" onClick={() => setModal(true)}>Click to Enlarge Image</button>
                        <div className="modal" onClick={
                            (e) => e.target.className === "modal" ? setModal(false) : setModal(true)}
                            style={{display: modalOn ? "block" : "none"}}>
                            <img className="modalImage" src={tripSetup} alt="" /> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="instTrip">
                    <h1>Instructions</h1>
                    <ol className="tripIList">
                        <li>Connect the left pin of the photoresistor to pin A0, 
                            the center pin to 5V and the right pin to GND</li>
                        <li>Connect the left pin of the laser emit to digital pin 7 and the right pin to GND</li>
                        <li>On the breadboard, put in the buzzer and LED light beside each other. 
                            Connect the left pins of both to digital pins 8 and 12 respectively</li>
                        <li>Connect the right pins of both to a negative power rail and then use one jumper 
                            cable to conect both these to GND</li>
                        <li>Connect the arduino to your computer via USB and upload the sketch</li>
                    </ol>
                </div>
        </div>
     );
}
 
export default TripWire;