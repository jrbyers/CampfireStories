import React, { useState } from 'react';
import Marcel from '../Marcel.png';
import JR from '../JR.png';
import Nathan from '../Nathan.png';
import Marcus from '../Marcus.png';
import MarcelDiving from '../MarcelDiving.png';
import JRDiving from '../JRDiving.png';
import NateSwimming from '../NateSwimming.png';
import MarcusSwimming from '../MarcusSwimming.png';
import styled from "styled-components";
import backgroundWhite from "../backgroundwhite.png";

const Background = styled.div`
    height: 2000px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-attachment: fixed;
    background-image: url(${backgroundWhite});
`;

const P = styled.p`
    padding-left: 200px;
    padding-right: 200px;
    align-items: center;
`;

const H2 = styled.h2`
    padding-left: 50px;
    padding-right: 50px;
    align-items: center;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;


function About() {

    return (
        <Background>
            <div className="App">
                <Container>
                    <h1>
                        Design Team
                    </h1>
                </Container>
                <P>
                    All members of Brown Men's Swim and Dive Team, the design team decided to take their gifts
                    out of the pool for this hackathon. Bringing in their different skill sets, these bears, just like
                    Smokey the Bear, want to ensure that people have fun around campfires while also being
                    conscious and aware of potential dangers and how to prevent them.
                </P>
                <br />
                <h3>
                    John Ryan Byers
                </h3>
                <img src={JR} alt={"John Ryan Byers"} />
                <img src={JRDiving} alt={"JR Diving"} />
                <p>
                    Hailing from Newton, Massachusetts, our first Bear is John Ryan Byers, who is a Junior CS concentrator here at Brown.
                </p>
                <br />
                <h3>
                    Nathan DePiero
                </h3>
                <img src={Nathan} alt={"Nathan Depiero"} />
                <img src={NateSwimming} alt={"Nathan Swimming"} />
                <p>
                    Hailing from Greenville, South Carolina, our second bear is Nathan DePiero, who is a Junior CS-ECON concentrator here at Brown.
                </p>
                <br />
                <h3>
                    Marcus Lee
                </h3>
                <img src={Marcus} alt={"Marcus Lee"} />
                <img src={MarcusSwimming} alt={"Marcus Swimming"} />
                <p>
                    Hailing from Taipei, Taiwan, our third bear is Marcus Lee, who is a Sophomore CS-APMA concetrator.
                </p>
                <br />
                <h3>
                    Marcel Mateos Salles
                </h3>
                <img src={Marcel} alt={"Marcel Mateos Salles"} />
                <img src={MarcelDiving} alt={"Marcel Diving"} />
                <p>
                    Hailing from San Antonio, Texas, our fourth and final bear is Marcel Mateos Salles, who is a Freshman aspiring to be a CS-ECON concentrator.
                </p>
                <br />
                <H2>
                    These bears will be competing at the Ivy League Championship here at Brown from Wednesday,
                    February 22nd to Saturday, February 25th. Please come out and support your BEARS!
                </H2>
            </div>
        </Background>
    );
}

export default About;
