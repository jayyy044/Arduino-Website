import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import lightSetup from "../graphics/lightsetup.png";
import { useState } from "react";

const LightFlip = () => {

    const codeString = `#include <Servo.h>

    int soundSensorPin = 7;
    int servoPin = 8;
    int micState;
    bool start = false;
    Servo myservo;  
    
    int pos = 0;    
    
    void setup() {
      pinMode(soundSensorPin, INPUT);
      digitalWrite(soundSensorPin, LOW);
      myservo.attach(servoPin);  
    }
    
    void loop() {
      micState = digitalRead(soundSensorPin);
    
      if (micState == LOW) {
        start = true;
      } else{
        start = false;
      }
      if (start){
        for (pos = 0; pos <= 80; pos += 1) { 
          myservo.write(pos);              
          delay(5);                       
        }
        for (pos = 80; pos >= 0; pos -= 1) { 
          myservo.write(pos);              
          delay(5);                       
        }
      }
    }`

    const [modalOn, setModal] = useState(false);

    return (  
        <div>
            <h1 className="tripHead">Light Flipper</h1>
            <div className="tripContent">
                <div className="matcodTrip">
                    <section className="materials">
                        <h1>Materials</h1>
                        <ul>
                            <div className="firstCol">
                                <li>Arduino Uno</li>
                                <li>Breadboard</li>
                                <li>Servo Motor</li>
                                <li>Small Sound Sensor</li>
                            </div>
                            <div className="secondCol">
                                <li>Male-Male Jumper Cable</li>
                                <li>Male-Female Jumper Cable</li>
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
                        <iframe src="https://www.youtube.com/embed/FjCfiuXlac0" playing="false" allowFullScreen frameborder="0" title="LightFlip" controls={true}></iframe>
                    </section>
                    <div className="tripSetup">
                        <img className="previewImage" src={lightSetup} alt="" />
                        <button className="modalTrigger" onClick={() => setModal(true)}>Click to Enlarge Image</button>
                        <div className="modal" onClick={
                            (e) => e.target.className === "modal" ? setModal(false) : setModal(true)}
                            style={{display: modalOn ? "block" : "none"}}>
                            <img className="modalImage" src={lightSetup} alt="" /> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="instTrip">
                    <h1>Instructions</h1>
                    <ol className="tripIList">
                        <li>Extend a wire from 5V on the Arduino to the breadboard to allow more connections</li>
                        <li>Connect the brownish wire on the servo motor to GND, the red wire to a pin on the breadboard right under the 5V and the yellow wire to digital pin 8</li>
                        <li>Connect the sound sensor's GND pin to the Arduino GND, its + pin to another pin under 5V on the breadboard and the gate/signal pin to digital pin 7</li>
                        <li>Connect the arduino to your computer via USB and upload the sketch</li>
                        <li>Adjust the golden knob at the top of the sound sensor for sensitivity such that a snap or clap near the sensor sets off the servo motor</li>
                    </ol>
            </div>
        </div>
    );
}
 
export default LightFlip;