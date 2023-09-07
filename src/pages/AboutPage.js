import html5 from './icons/html5.svg';
import css from './icons/css.svg';
import js from './icons/js.svg';
import rct from './icons/logo.svg';

function About() {
    return (
        <div className='content'>
            <div className="mainContainer">
                <div className="faceContainer"></div>

                <div className="textContainer">
                    <h1>Hi!</h1>
                    <h2>I am John Doe, a Software Developer.</h2>
                </div>
            </div>

            <div className="textContainer2">
                <h3>Who am I?</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <div className="textContainer2">
                <h3>Skills</h3>
                <div className="skillsBox">
                    <img src={html5} className="skillImg" />
                    <img src={css} className="skillImg" />
                    <img src={js} className="skillImg" />
                    <img src={rct} className="skillImg" />
                </div>
            </div>
        </div>
    )
}

export default About;