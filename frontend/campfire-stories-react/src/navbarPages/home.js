import axios from 'axios';
import '../App.css';
import React, { useState } from 'react';
import mygif from '../campfire.gif'
import background2 from '../eveningbackground.png'
import styled from 'styled-components';
import scroll from '../pixelscroll3.png'
import bearGif from '../Bear_Europe_idle.webp'

import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from 'react-promise-tracker';

const Background = styled.div`
  width: 100vw;  /* think these two say the size of the background relative to the page 100 = 100 percent of the background to 100 percent of the page */
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: block;
  align-items: center;
  background-image: url(${background2});
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 300px; 
  height: 300px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin:auto;
`;

const LoadingIcon = styled.img`
    width: 270px; 
    height: 270px;
`;

const H1 = styled.h1`
  font-family: 'Lucida Handwriting', Cursive;
`;

const TextBub = styled.div`
  background-image: url(${scroll});
  background-size: 100%;
  width: 1000px;
  height: 560px;
  padding: 80px 20px 90px 215px;
  box-sizing: border-box;
`;

const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();

    return (
        promiseInProgress &&
        <div>
            <LoadingIcon src={bearGif} alt="My GIF"/>
            <H1>    Loading your story . . . </H1>

        </div>


    );
}
const InsideText = styled.div`
  width: 570px;
  height: 415px;
  font-size: 24px;
  overflow-y: scroll;
  font-family: 'Papyrus', Fantasy;
  color: black;
`

function GenerateStory(prompt, setStory,loadbool,setLoadBool) {
    setStory("")
    const apiKeyNate = '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';
    const apiKeyJR = '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'
    const apiKeyMarcus = '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';

    const tips = ["camping tips", "campfire safety", "bear safety", "smokey the bear", "tips on setting up a tent", "tips on how to pick a campsite", "campfire safety"]
    const randomIndex = Math.floor(Math.random() * tips.length);
    const randomElement = tips[randomIndex];
    console.log(randomElement)
    const promptfull = 'write a spooky story with ' + prompt + ' with ' + randomElement;

    const headers = {
        'Authorization': `Bearer ${apiKeyNate}`
    }

    setLoadBool(!loadbool)
    trackPromise(
    axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
        prompt: promptfull,
        max_tokens: 3800
    }, {headers})
    .then(function (response) {
        const story = response.data.choices[0].text;
        setLoadBool(!loadbool)
        console.log(loadbool)
        setStory(story);
    })
    .catch(function (error) {
        setStory(error);
        console.log(error)
    }));

}

function Home() {

  const [story, setStory] = useState('');
  const [prompt, setPrompt] = useState('');
  const [loadbool, setLoadBool] = useState(false)

    return (
      <Background>
      <Container>
      <H1>Campfire Story Generator</H1>
      </Container>
      <Container>
          <input type="text" value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Enter story theme"></input>
          </Container>
          <Container>
          <button onClick={() => GenerateStory(prompt,setStory,loadbool,setLoadBool)}>Generate Story</button>
          <button onClick={() => setPrompt('')}>Clear</button>
          </Container>
          <Container>
          <TextBub>
          <LoadingIndicator/>
          <InsideText>
            {story}
            </InsideText>
          </TextBub>
          </Container>
      <Image src={mygif} alt="campfire"/>
      </Background>
    );
}

export default Home;


