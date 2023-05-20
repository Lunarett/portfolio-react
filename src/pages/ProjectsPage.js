import React from "react";
import { useState, useEffect } from "react";

// Shipwreck Images
import sw1 from './images/shipwreck/sw_1.png';
import sw2 from './images/shipwreck/sw_2.png';
import sw3 from './images/shipwreck/sw_3.png';
import sw4 from './images/shipwreck/sw_4.png';
import sw5 from './images/shipwreck/sw_5.png';

// Bowling VR Images
import bvr1 from './images/bvr/bvr1.png';

// Heightmap Generator Tool Images
import hgt1 from './images/hgt/gen1.png';
import hgt2 from './images/hgt/gen2.png';
import hgt3 from './images/hgt/gen3.png';

// Heist Simulator Images
import hs1 from './images/hs/hs1.png';
import hs2 from './images/hs/hs2.png';
import hs3 from './images/hs/hs3.png';
import hs4 from './images/hs/hs3.png';
import hs5 from './images/hs/hs5.png';

// Ready Set Roll! Images
import rsr1 from './images/rsr/rsr1.png';
import rsr2 from './images/rsr/rsr2.png';
import rsr3 from './images/rsr/rsr3.png';
import rsr4 from './images/rsr/rsr4.png';
import rsr5 from './images/rsr/rsr5.png';

function ProjectBlock({ title, desc, seconds, children }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Cycle Gallery automatically by seconds
    useEffect(() => {
        if (seconds === 0) return;
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % children.length);
        }, seconds * 1000);

        return () => {
            clearInterval(interval);
        };
    }, [children.length]);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % children.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
    };

    const prevSymbol = '<';
    const nextSymbol = '>';

    return (
        <div className="projectContainer">
            <div className="titleContainer">
                <h1>{title}</h1>
            </div>

            <div className="galleryContainer">
                <button onClick={prevImage} className="prevBtn">{prevSymbol}</button>
                <img src={children[currentImageIndex].props.src} alt={`Image ${currentImageIndex}`} />
                <button onClick={nextImage} className="nextBtn">{nextSymbol}</button>
            </div>

            <div className="descContainer">
                <h2>Description:</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
}

function Projects() {
    return (
        <div className="content">
            <h1>My Projects</h1>

            <div className="projectMainContainer">
                <ProjectBlock
                title='Shipwreck'
                desc='Project shipwreck is a Unity-based game that features a randomly generated island landscape. The game uses Perlin noise algorithms to create realistic terrain and vegetation. The player can explore the island and discover buildings with npcs and shipwrecks on the shore. The game aims to provide an immersive and dynamic experience for the player.'
                seconds={3}
                >
                    <img src={sw1} />
                    <img src={sw2} />
                    <img src={sw3} />
                    <img src={sw4} />
                    <img src={sw5} />
                </ProjectBlock>

                <ProjectBlock
                title='Heightmap Generator Tool'
                desc='Heightmap Generator is a tool for creating heightmaps and textures created using windows presentation forms. It is developed for designers and artists who need to generate realistic terrain for their projects. The tool allows you to adjust various parameters to customize the heightmap. You can also export the heightmap as a .png file or save the project for later editing.'
                seconds={3}
                >
                    <img src={hgt1} />
                    <img src={hgt2} />
                    <img src={hgt3} />
                </ProjectBlock>

                <ProjectBlock
                title='Ready Set Roll!'
                desc='Ready Set Roll is a local multiplayer game that challenges you to race through a colorful toy block world as hamster balls. The game is developed using Unreal Engine 4 and features dynamic physics and interactive obstacles. Your main goal is to stay on the track and reach the finish line before your opponents. Ready Set Roll is a fun and engaging game for all ages.'
                seconds={3}
                >
                    <img src={rsr1} />
                    <img src={rsr2} />
                    <img src={rsr3} />
                    <img src={rsr4} />
                    <img src={rsr5} />
                </ProjectBlock>

                <ProjectBlock
                title='Heist Simulator'
                desc='Heist Simulator is a thrilling game developed in Unity, where you have to balance between looting cash and fighting off waves of cops. The game challenges you to survive as long as you can while the police forces become more numerous and tougher. How much money can you make before you get caught?'
                seconds={3}
                >
                    <img src={hs1} />
                    <img src={hs2} />
                    <img src={hs3} />
                    <img src={hs4} />
                    <img src={hs5} />
                </ProjectBlock>

                <ProjectBlock
                title='Egors Bolwing in VR'
                desc='Egors bowling in VR is a game that simulates the experience of bowling in an arcade setting. The game is built with Unity. Egors bowling in VR is designed to appeal to fans of classic arcade games and virtual reality enthusiasts alike.'
                seconds={0}
                >
                    <img src={bvr1} />
                    <img src={bvr1} />
                </ProjectBlock>
            </div>
        </div>
    )
}

export default Projects;