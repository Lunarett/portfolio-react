import React, { useState, useEffect } from 'react';
import placeHolder from './images/placeholder.jpeg';  // Make sure this path is correct

function ProjectBlock({ title, desc, seconds, children }) {
    const childrenArray = React.Children.toArray(children);
    const [currentImageIndex, setCurrentImageIndex] = useState(childrenArray.length > 0 ? 0 : -1);

    useEffect(() => {
        if (seconds === 0 || childrenArray.length === 0) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
        }, seconds * 1000);

        return () => {
            clearInterval(interval);
        };
    }, [childrenArray.length, seconds]);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + childrenArray.length) % childrenArray.length);
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
                <img src={childrenArray && childrenArray[currentImageIndex] ? childrenArray[currentImageIndex].props.src : ''} alt={`Image ${currentImageIndex}`} />
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
                    title='Project Name'
                    desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
                    seconds={0}
                >
                    <img src={placeHolder} alt="Placeholder" />
                </ProjectBlock>

                <ProjectBlock
                    title='Project Name'
                    desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
                    seconds={0}
                >
                    <img src={placeHolder} alt="Placeholder" />
                </ProjectBlock>

                <ProjectBlock
                    title='Project Name'
                    desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
                    seconds={0}
                >
                    <img src={placeHolder} alt="Placeholder" />
                </ProjectBlock>

                <ProjectBlock
                    title='Project Name'
                    desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
                    seconds={0}
                >
                    <img src={placeHolder} alt="Placeholder" />
                </ProjectBlock>

                <ProjectBlock
                    title='Project Name'
                    desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
                    seconds={0}
                >
                    <img src={placeHolder} alt="Placeholder" />
                </ProjectBlock>

                <ProjectBlock
                    title='Project Name'
                    desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
                    seconds={0}
                >
                    <img src={placeHolder} alt="Placeholder" />
                </ProjectBlock>
            </div>
        </div>
    );
}

export default Projects;