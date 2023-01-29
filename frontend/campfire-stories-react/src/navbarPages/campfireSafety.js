import React, {useState} from 'react';
import nightsky from '../nightsky3.gif'
import styled from 'styled-components';

const Background = styled.div`
    width: 100vw;
    height: 220vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: block;
    align-items: center;
    background-image: url(${nightsky});
    background-attachment: fixed;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const H1 = styled.h1`
    font-family: 'Lucida Handwriting', Cursive;
    font-size: 80px;
    color: white;
`;

const H2 = styled.h2`
    font-family: 'Lucida Handwriting', Cursive;
    font-size: 40px;
    color: white;
    margin-left: 40px;
    margin-top: 100px;
`;

const Subtitle = styled.section`
    font-family: 'Courier', monospace;
    font-size: 20px;
    color: white;
    margin-left: 300px;
    margin-right: 300px;
`;

const Wrapper = styled.section`
    font-family: 'Courier', monospace;
    font-size: 20px;
    color: white;
    margin-left: 40px;
    margin-right: 40px;
`;

// const textBody = styled.textBody`
//     font-family: 'Lucida Handwriting', Cursive;
//     font-size: 20px;
//     color: white;
//     margin-left: 80px;
// `;

function CampfireSafety() {

    return (
        <Background>
            <Container>
            <H1>Safety Tips</H1>
            </Container>
            <Container>
            <Subtitle>Sitting under the stars by a crackling fire has its appeal. It’s where stories are told, sing-a-longs happen, and meals are cooked over an open flame. Campfires bring family and friends together. But campfire mishaps can cause injuries. With a few safety tips, you can prevent these accidents.</Subtitle>
            </Container>
            <H2>Campfire Safety</H2>
            <Wrapper>
                <ul>
                    <li>Before setting up a campfire, be sure it is permitted. Check with your local fire department.</li>
                    <li>If campfires are permitted, they need to be at least 25 feet away from any structure and anything that can burn.</li>
                    <li>Clear away dry leaves and sticks, overhanging low branches and shrubs.</li>
                    <li>Avoid burning on windy, dry days. It is easier for open burning to spread out of control when it is windy and dry.</li>
                    <li>Watch children while the fire is burning. Never let children or pets play or stand too close to the fire.</li>
                    <li>Attend to the campfire at all times. A campfire left alone for only a few minutes can grow into a damaging fire.</li>
                    <li>Keep a campfire small which is easier to control.</li>
                    <li>Never use gasoline or other flammable or combustible liquids.</li>
                    <li>Always have a hose, bucket of water, or shovel and dirt or sand nearby to put out the fire. Make sure to put it completely out before leaving the site.</li>
                    <li>If your clothes catch fire, stop, drop, and roll. Stop, drop to the ground and cover your face with your hands. Roll over and over or back and forth until the f ire is out.</li>
                    <li>Treat a burn right away. Cool the burn with cool water for 3 to 5 minutes. Cover with a clean, dry cloth. Get medical help if needed.</li>
                </ul>
            </Wrapper>
            <H2>Bear Safety</H2> 
            <Wrapper>
                <ul>
                    <li>Identify yourself by talking calmly so the bear knows you are a human and not a prey animal. Remain still; stand your ground but slowly wave your arms. Help the bear recognize you as a human. It may come closer or stand on its hind legs to get a better look or smell. A standing bear is usually curious, not threatening.</li>
                    <li>Stay calm and remember that most bears do not want to attack you; they usually just want to be left alone. Bears may bluff their way out of an encounter by charging and then turning away at the last second. Bears may also react defensively by wooﬁng, yawning, salivating, growling, snapping their jaws, and laying their ears back. Continue to talk to the bear in low tones; this will help you stay calmer, and it won't be threatening to the bear. A scream or sudden movement may trigger an attack. Never imitate bear sounds or make a high-pitched squeal.</li>
                    <li>Pick up small children immediately. Do not make any loud noises or screams—the bear may think it’s the sound of a prey animal. Slowly wave your arms above your head and tell the bear to back off. Do NOT run or make any sudden movements. Do not make any loud noises or screams—the bear may think it’s the sound of a prey animal.</li>
                    <li>Hike and travel in groups. Groups of people are usually noisier and smellier than a single person. Therefore, bears often become aware of groups of people at greater distances, and because of their cumulative size, groups are also intimidating to bears.</li>
                    <li>Make yourselves look as large as possible (for example, move to higher ground).</li>
                    <li>Do NOT allow the bear access to your food. Getting your food will only encourage the bear and make the problem worse for others.</li>
                    <li>Do NOT drop your pack as it can provide protection for your back and prevent a bear from accessing your food.</li>
                    <li>If the bear is stationary, move away slowly and sideways; this allows you to keep an eye on the bear and avoid tripping. Moving sideways is also non-threatening to bears.</li>
                    <li>Do NOT run, but if the bear follows, stop and hold your ground. Bears can run as fast as a racehorse both uphill and down. Like dogs, they will chase ﬂeeing animals.</li>
                    <li>Do NOT climb a tree. Both grizzlies and black bears can climb trees.</li>
                    <li>Leave the area or take a detour. If this is impossible, wait until the bear moves away. Always leave the bear an escape route.</li>
                    <li>Be especially cautious if you see a female with cubs; never place yourself between a mother and her cub, and never attempt to approach them. The chances of an attack escalate greatly if she perceives you as a danger to her cubs.</li>

                </ul>
            </Wrapper>
        </Background>
    );
}

export default CampfireSafety;
