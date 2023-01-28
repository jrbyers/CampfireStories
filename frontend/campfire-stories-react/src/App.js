import axios from 'axios';
import './App.css';
import React, { useState } from 'react';
import mygif from './campfire.gif'
import background2 from './eveningbackground.png'
import styled from 'styled-components';
import scroll from './pixelscroll3.png'

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
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin:auto;
`;

const H1 = styled.h1`
  font-family: 'Lucida Handwriting', Cursive;
`;

const TextBub = styled.div`
  background-image: url(${scroll});
  background-size: 100%;
  font-family: 'Papyrus', Fantasy;
  color: black;
  width: 800px;
  height: 500px;
  padding: 65px 170px 65px 170px;
  box-sizing: border-box;
  overflow-y: auto;
`;

function GenerateStory(prompt, setStory,loadbool,setLoadBool) {
    setStory("")
    const apiKey = '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';
    const promptfull = 'write a spooky story with' + prompt + 'with campfire safety';
    
    const headers = {
        'Authorization': `Bearer ${apiKey}`
    };

    setLoadBool(!loadbool)
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
    });
     
}

function App() {

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
            {story}
          </TextBub>
          </Container>
          <Image src={mygif} alt="My GIF"/>
      </Background>
    );
}

export default App;

