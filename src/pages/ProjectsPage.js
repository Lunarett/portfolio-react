import React from "react";

function ProjectBlock(props) {
    const { title, img, desc, link } = props;

    return (
        <div className="projectContainer">
            <h1>Project Block</h1>
        </div>
    );
}

function Projects() {
    return (
        <div className="content">
            <h1>My Projects</h1>

            <div className="projectMainContainer">
            </div>
        </div>
    )
}

export default Projects;