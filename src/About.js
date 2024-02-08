import Shivain from './graphics/shivain.png';
import Maanas from './graphics/maanas.png';
import Arduino from './graphics/motherboard.png';
import { useState } from 'react';

// Create about us component that will display two cards of me and my brother and give a brief description about ourselves and provide contact info

const About = () => {
    // Create two state variables to control the display of the contact info div and initialize its value as false
    const [shivainCont, setShivain] = useState(false);
    const [maanasCont, setMaanas] = useState(false);

    return ( 
        <div className="About">
            {
            /*
                Create four cards: two that will be the front face and show a picture and a description and the other two will hold the contact information for each individual. Depending on the state varaibles values the display of the contact card will be toggled to block or none. 
            */
            }
            <h1 className="title">About Us</h1>
            <div className="cards">
                <div className="contact" onClick={() => setShivain(c => !c)} 
                style={{display: shivainCont ? 'block' : 'none'}}>
                    <p className="contactHead">Contact Info</p>
                    <p className="contactBody"><b>Email</b>: shivainsaxena@gmail.com <br />
                    <b>Phone Number</b>: 780-918-7479 <br />
                    <b>Linkedln</b>: <a href="http://www.linkedin.com/in/shivain-saxena" target='_blank' rel="noreferrer">linkedin.com/in/shivain-saxena</a> <br />
                    <b>GitHub</b>: <a href="https://github.com/ShivainSaxena" target='_blank' rel="noreferrer">github.com/ShivainSaxena</a></p>
                </div>
                <div className="person" onClick={() => setShivain(c => !c)}>
                    <img className="profilepic" src={Shivain} alt="Profile" />
                    <p className="name">Shivain Saxena</p>
                    <p className="summary">Hi! Currently, I am a grade 12 student at Old Scona Academic High School and I intend to pursue a degree in Computer Engineering. Ever since my dad introduced me to the Arduino I have been hooked and exposed to a world of possibilities. I plan to continue making more ingenuitive and unique inventions in the future!</p>
                    <p className='final'>Click for contact info</p>
                </div>
                <img src={Arduino} alt="Arduino" className="arduino" />
                <div className="contactM" onClick={() => setMaanas(c => !c)} 
                style={{display: maanasCont ? 'block' : 'none'}}>
                    <p className="contactHead">Contact Info</p>
                    <p className="contactBody"><b>Email</b>: maanasksaxena@gmail.com <br />
                    <b>Phone Number</b>: 780-918-7289 <br />
                    <b>Linkedln</b>: <a href="https://www.linkedin.com/in/maanas-saxena-0bbb63293/" target='_blank' rel="noreferrer">linkedin.com/in/maanas-saxena <br /></a>
                    <b>GitHub</b>: <a href="https://github.com/jayy004" target='_blank' rel="noreferrer">github.com/jayy004</a></p>
                </div>
                <div className="personM" onClick={() => setMaanas(c => !c)}>
                    <img src={Maanas} alt="Profile" className="profilepic" />
                    <p className="name">Maanas Saxena</p>
                    <p className="summary">Hi! I'm Maanas a Computer-Nano Engineering student at the University of Alberta. My journey in this field has been fueled by a passion for bringing software to life, whether through crafting innovative projects on Arduino, developing responsive websites, or diving into the world of data analysis and visualization.</p>
                    <p className='final'>Click for contact info</p>
                </div>
            </div>
        </div>
     );
}
 
export default About;