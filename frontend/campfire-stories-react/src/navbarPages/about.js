import React, {useState} from 'react';
import logo from '../logo.svg';


function About() {
    const [count, setCount] = useState("")

    function yoMamaButton() {

        // nathan api
        setCount("yo")
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <header>{count}</header>
                <p>
                    yo mama <code>is</code> a fat boi.
                </p>

                <button id="button2" onClick={yoMamaButton}>
                    if you push this ....
                </button>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default About;
