import React, {useState} from 'react';
import logo from '../logo.svg';
import Marcel from '../Marcel.png';
import JR from '../JR.png';
import Nathan from '../Nathan.png';
import Marcus from '../Marcus.png';
import MarcelDiving from '../MarcelDiving.png';
import JRDiving from '../JRDiving.png';
import NateSwimming from '../NateSwimming.png';
import MarcusSwimming from '../MarcusSwimming.png';
import styled from "styled-components";
import background2 from "../eveningbackground.png";
import backgroundWhite from "../backgroundwhite.png";


const Background = styled.div`
  width: 100vw;  
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  background-attachment: fixed;
  display: block;
  align-items: center;
  background-image: url(${backgroundWhite});
`;


function About() {
    const [count, setCount] = useState("")

    function yoMamaButton() {

        // nathan api
        setCount("yo")
    }

    return (
        <Background>
        <div className="App">
            <h1>
                Design Team
            </h1>
            <p>
                All members of Brown Men's Swim and Dive Team, the design team decided to take their gifts
                out of the pool for this hackathon. Bringing in their different skill sets, these bears, just like
                smokey the bear, want to ensure that people have fun around campfires while also being
                conscious and aware of potential dangers and how to prevent them.
            </p>

            <h3>
                John Ryan Byers
            </h3>
            <img src={JR} alt={"John Ryan Byers"}/>
            <img src={JRDiving} alt={"JR Diving"}/>
            <p>
                Hailing from Newton, Massachusetts, our first Bear is John Ryan Byers. A junior here at Brown
                and CS concentrator.
            </p>
            <Background>
            <h3>
                Nathan Depiero
            </h3>
            <img src={Nathan} alt={"Nathan Depiero"}/>
            <img src={NateSwimming} alt={"Nathan Swimming"}/>



            <p>
                Hailing from Greenbull, South Carolina, our second bear is Nathan Depiero. Another junior here
                at Brown and CS-Econ Concentrator.
            </p>
            <h3>
                Marcus Lee
            </h3>
            <img src={Marcus} alt={"Marcus Lee"}/>
            <img src={MarcusSwimming} alt={"Marcus Swimming"}/>
            <p>
                Hailing from Taiwan, our third bear is Marcus Lee. A sophomore here at Brown and a CS-APMA
                concentrator.
            </p>
                <Background>
            <h3>
                Marcel Mateos Salles
            </h3>
            <img src={Marcel} alt={"Marcel Mateos Salles"}/>
            <img src={MarcelDiving} alt={"Marcel Diving"}/>

            <p>
                Hailing from San Antonio, Texas, our fourth and final bear is Marcel Mateos Salles. A freshman
                here at Brown and an aspiring CS-Econ concentrator.
            </p>

            <h2>
                These bears will be competing at the Ivy League Championship here at Brown from Wednesday
                February 22nd to Saturday February 25th. Please come out and support your bears!
            </h2>
                </Background>
            </Background>

        </div>
        </Background>
    );
}

export default About;
