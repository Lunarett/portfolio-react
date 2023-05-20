import c from './icons/c.svg';
import cpp from './icons/cpp.svg';
import cs from './icons/cs.svg';
import ue from './icons/ue.svg';
import unity from './icons/unity.svg';
import html5 from './icons/html5.svg';
import css from './icons/css.svg';
import js from './icons/js.svg';
import ps from './icons/ps.svg';
import rct from './icons/logo.svg';

function About() {
    return (
        <div className='content'>
            <div className="mainContainer">
                <div className="faceContainer">
                    <img src='https://media.licdn.com/dms/image/D4D03AQHFwlqWfAXkAA/profile-displayphoto-shrink_800_800/0/1683147038848?e=1689811200&v=beta&t=Je8HGlYxsJQWJOH6umYNP0vryp6Xf0gMptlzO9vGqYo' className="faceImg" />
                </div>

                <div className="textContainer">
                    <h1>Hi!</h1>
                    <h2>I am Egor Ageev, a Software Developer.</h2>
                </div>
            </div>

            <div className="textContainer2">
                <h3>Who am I?</h3>
                <p>I am a programmer with over 3 years of professional experience in various domains of software development. My journey began as a sound designer for video games, where I discovered my passion for programming. Since then, I have worked on projects involving game development, physics engines, graphics engines, multiplayer games and created tools for designers using Windows Presentation Forms. My main strength is developing and designing user interfaces that are intuitive and engaging. Lately, I have also developed an interest in creating web apps and websites using modern technologies and frameworks.</p>
            </div>

            <div className="textContainer2">
                <h3>Skills</h3>
                <div className="skillsBox">
                    <img src={c} className="skillImg"/>
                    <img src={cpp} className="skillImg"/>
                    <img src={cs} className="skillImg"/>
                    <img src={unity} className="skillImg"/>
                    <img src={ue} className="skillImg"/>
                    <img src={html5} className="skillImg"/>
                    <img src={css} className="skillImg"/>
                    <img src={js} className="skillImg"/>
                    <img src={rct} className="skillImg"/>
                    <img src={ps} className="skillImg"/>
                </div>
            </div>
        </div>
    )
}

export default About;