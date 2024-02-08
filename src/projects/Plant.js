import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import plantSetup from "../graphics/plantsetup.png";
import { useState } from "react";

const Plant = () => {

    const codeString = `// Template ID, Device Name and Auth Token 
// are provided by the Blynk.Cloud
// See the Device Info tab, or Template settings
#define BLYNK_TEMPLATE_ID "TMPL2TAa6nFNl"
#define BLYNK_TEMPLATE_NAME "Quickstart Template"
#define BLYNK_AUTH_TOKEN "LOUMYt4r_bA6AWH_OFdMRAWTYr0GkiGf"

#define BLYNK_PRINT Serial

#include <ESP8266_Lib.h>
#include <BlynkSimpleShieldEsp8266.h>

char auth[] = BLYNK_AUTH_TOKEN;

// Your WiFi credentials.
// Set password to "" for open networks.
char ssid[] = "ssid";
char pass[] = "password";

#include <SoftwareSerial.h>
SoftwareSerial EspSerial(2, 3); // RX, TX

#define ESP8266_BAUD 9600

ESP8266 wifi(&EspSerial);

#define pumpA 8
#include "DHT.h"

#define DHTPIN 4       
#define DHTTYPE DHT11  

DHT dht(DHTPIN, DHTTYPE);
float humidity = 0;
float temperature = 0;

BlynkTimer timer;

bool readDHT() {
    humidity = dht.readHumidity();
    temperature = dht.readTemperature();

    if (isnan(humidity) || isnan(temperature)) {
    Serial.println("Failed to read from DHT sensor!");
    return false;
    }
    return true;
}

void myTimerEvent() {
    bool chk = readDHT();
    if (chk) {
    Blynk.virtualWrite(V4, humidity);
    Blynk.virtualWrite(V5, temperature);
    }
}

BLYNK_WRITE(V0) {
    if (param.asInt() == 1) {
    digitalWrite(pumpA, HIGH);
    } else {
    digitalWrite(pumpA, LOW);
    }
}


void setup() {
    Serial.begin(115200);

    dht.begin();
    EspSerial.begin(ESP8266_BAUD);

    Blynk.begin(auth, wifi, ssid, pass);


    timer.setInterval(1000L, myTimerEvent);
    pinMode(pumpA, OUTPUT);
}

void loop() {
    Blynk.run();
    timer.run();

}
`

    const [modalOn, setModal] = useState(false);

    return (  
        <div>
            <h1 className="tripHead">Plant Monitor</h1>
            <div className="tripContent">
                <div className="matcodTrip">
                    <section className="materials">
                        <h1>Materials</h1>
                        <ul>
                            <div className="firstCol">
                                <li>Arduino Uno</li>
                                <li>Breadboard</li>
                                <li>ESP8266 Wifi <br />Module</li>
                                <li>ESP8266 Adapter</li>
                                <li>L9110 Module</li>
                            </div>
                            <div className="secondCol">
                                <li>Male-Male Jumper Cable</li>
                                <li>Male-Female Jumper Cable</li>
                                <li>Pump</li>
                                <li>DHT11 Temperature and <br />Humidity</li>
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
                        <iframe src="https://www.youtube.com/embed/Nh0VbRxTL34" frameborder="0" title="Plant" allowFullScreen playing="false" controls={true}></iframe>
                    </section>
                    <div className="tripSetup">
                        <img className="previewImage" src={plantSetup} alt="" />
                        <button className="modalTrigger" onClick={() => setModal(true)}>Click to Enlarge Image</button>
                        <div className="modal" onClick={
                            (e) => e.target.className === "modal" ? setModal(false) : setModal(true)}
                            style={{display: modalOn ? "block" : "none"}}>
                            <img className="modalImage" src={plantSetup} alt="" /> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="instTrip">
                    <h1>Instructions</h1>
                    <p class="note">**Note** For this project you will need a Blynk Account and will need to configure the wifi module. Click <a target="_blank" href="https://docs.sunfounder.com/projects/3in1-kit-v2/en/latest/iot_project/blynk_start/blynk_start.html"  rel="noreferrer">here</a> to learn more.</p>
                    <ol className="tripIList" id="blynk">
                        <li>Extend a wire from 5V and GND on the Arduino to the breadboard to allow more connections</li>
                        <li>Connect the DHT11's rightmost pin to the negative power rail, and the leftmost pin to the positive power rail, finally connect the pin immediately to the right of the leftmost pin to digital pin 4 on the Arduino</li>
                        <li>For the wifi module connect 5V to the positive power rail, pins TX and RX to digital pins 2 and 3 on the Arduino respectively and connect GND to the negative power rail</li>
                        <li>On the L9110 Module connect the GND to the negative power rail and the VCC to the positive power rail. Connect pin B1-A to digital pin 8 on the Arduino and B1-B to the negative power rail</li>
                        <li>To connect the water pump connect the black wire to the first screw on the output side and the red wire to the second screw on the output side</li>
                        <li>To control the project through your mobile device download the Blynk app and log in to your Blynk account</li>
                        <li>Edit the dashboard and create 3 new datasreams of type virutal pin naming each as Water Pump, Humidity, and Temperature and assigning pin values of V0, V4, and V5 respectively</li>
                        <li>Make the water pump data type of integer and the other two to double chaing the units of humidity to percentage and temperature to degrees celsius</li>
                        <li>Give humidity a min value of 0 and a max value of 100 and give temperature a min value of -30 and max value of 50</li>
                        <li>Finally create 3 widgets one of type switch and two of type label connecting the water pump data stream to the switch and the other two datastreams to either label</li>
                        <li>Upload the code to the Arduino and wait for it to connect to the wifi showing that the device is online</li>
                    </ol>
            </div>
        </div>
    );
}
 
export default Plant;