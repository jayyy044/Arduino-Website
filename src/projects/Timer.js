import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import lightSetup from "../graphics/timersetup.png";
import { useState } from "react";

const Timer = () => {

const codeString = `#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// Set the LCD address to 0x27 for a 16 chars and 2 line display
LiquidCrystal_I2C lcd(0x27, 16, 2);

byte bell[8] = {
    B00100,
    B01110,
    B01110,
    B01110,
    B11111,
    B11111,
    B00000,
    B00100
};

static String hours = "00";
static String minutes = "00";
static String seconds = "00";
static int sCount = 0;
static int secondPin = 7;
static int mCount = 0;
static int minutePin = 6;
static int hCount = 0;
static int hourPin = 5;
static bool start = false;
static int startPin = 4;
static bool done = false;
int buzzerPin = 3;
bool buzz = true;


void setup() {
    lcd.begin();
    lcd.backlight();
    lcd.createChar(0, bell);
    pinMode(7, INPUT_PULLUP);
    pinMode(6, INPUT_PULLUP);
    pinMode(5, INPUT_PULLUP);
    pinMode(4, INPUT_PULLUP);
    pinMode(buzzerPin, OUTPUT);
}

void loop() {
    if (!start){
    lcd.setCursor(0, 0);
    lcd.print("Timer: " + hours + ":" + minutes + ":" + seconds);
    lcd.setCursor(0, 1);
    lcd.print("Start");
    lcd.setCursor(5, 1);
    lcd.write(0);
    lcd.setCursor(8, 1);
    lcd.print("H  M  S");
    update(secondPin, sCount, seconds);
    update(minutePin, mCount, minutes);
    update(hourPin, hCount, hours);
    if (!digitalRead(startPin) == 1 && seconds == "00" && 
    minutes == "00" && hours == "00") {
        start = false;
    } else if (!digitalRead(startPin) == 1){
        start = true;
    }
    }else{
    lcd.setCursor(0, 0);
    lcd.print("    " + hours + ":" + minutes + ":" + seconds + "    ");
    if (!done){
        lcd.setCursor(0,1);
        lcd.print("                ");
        int currentSeconds = seconds.toInt();
        delay(1000);
        currentSeconds -= 1;
        if (currentSeconds == -1 && hours == "00" && minutes == "00"){
        done = true;
        }
        if (currentSeconds == -1 && minutes != "00"){
        int currentMinutes = minutes.toInt();
        currentMinutes -= 1;
        if (currentMinutes > 9){
            minutes = String(currentMinutes);
        } else{
            minutes = "0" + String(currentMinutes);
        }
        currentSeconds = 59;
        }
        if (currentSeconds == -1 && hours != "00" && minutes == "00"){
        int currentHours = hours.toInt();
        currentHours -= 1;
        if (currentHours > 9){
            hours = String(currentHours);
        } else{
            hours = "0" + String(currentHours);
        }
        minutes = "59";
        currentSeconds = 59;
        }

        if (currentSeconds > 9 && !done){
        seconds = String(currentSeconds);
        } else if (currentSeconds <= 9 && !done){
        seconds = "0" + String(currentSeconds);
        }

    }else{
        lcd.setCursor(0,1);
        lcd.print(" Timer Finished");
        while (buzz){
        for (int i = 1; i <= 10; i++){
            digitalWrite(buzzerPin, HIGH);
            delay(100);
            digitalWrite(buzzerPin, LOW);
            delay(100);
        }
        buzz = false;
        }

    }

    }
    
}

void update(int &pin, int &count, String &placeholder){
    if (!digitalRead(pin) == 1) {
    delay(200);
    count += 1;
    if (count == 60){
        count = 0;
    }
    }
    String tempS = "0" + String(count);
    if (tempS.length() == 2){
    placeholder = tempS;
    } else{
    placeholder = String(count);
    }
}`

    const [modalOn, setModal] = useState(false);

    return (  
        <div>
            <h1 className="tripHead">Digital Timer</h1>
            <div className="tripContent">
                <div className="matcodTrip">
                    <section className="materials">
                        <h1>Materials</h1>
                        <ul>
                            <div className="firstCol">
                                <li>Arduino Uno</li>
                                <li>Breadboard</li>
                                <li>4 Buttons</li>
                                <li>16 x 2 LCD Display</li>
                            </div>
                            <div className="secondCol">
                                <li>Male-Male Jumper Cable</li>
                                <li>Male-Female Jumper Cable</li>
                                <li>Buzzer</li>
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
                        <iframe src="https://www.youtube.com/embed/7AV-8_XTB-U" frameborder="0" allowFullScreen title="Timer" playing="false" controls={true}></iframe>
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
                        <li>Connect the GND pin, VCC pin, SDA pin, and SCL pin of the LCD to the Arduino's ground (GND), 5V, analog pin 4 (A4), and analog pin 5 (A5) respectively</li>
                        <li>Extend a wire from the Arduino's GND to the negative power rail on the breadboard</li>
                        <li>Attach four buttons onto the bread board and and connect each of their left terminals to the negative power rail</li>
                        <li>Connect the right terminal of each button in the folowing digital pins: 7 (seconds), 6 (minutes), 5 (hours), 4 (start button)</li>
                        <li>Connect the negative pin of the buzzer to the negative ground rail and positive/signal pin to digital pin 3 on the Arduino</li>
                        <li>Connect the Arduino to a batttery or your computer and after uploading the sketch rotate the blue knob at the back of the LCD screen to adjust the screen's contrast</li>
                    </ol>
            </div>
        </div>
    );
}
 
export default Timer;