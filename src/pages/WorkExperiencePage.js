import React from "react";

function ExperienceBlock(props) {
    const { jobTitle, dateFrom, dateTo, desc } = props;

    return (
        <div className="experienceContainer">
            <h1>{jobTitle}</h1>
            <h2>{dateFrom} - {dateTo}</h2>
            <p> {desc} </p>
            <h1></h1>
        </div>
    );
}

function WorkExperience() {
    return (
        <div className="content">
            <h1>Work Experience</h1>
            <div className="wxpContainer">
                <ExperienceBlock
                    jobTitle='Game Developer - Unreal Engine 4'
                    dateFrom='01/06/2022'
                    dateTo='01/12/2022'
                    desc='Worked on Unreal Engine 4 and developed UI system for mobile games'
                />

                <ExperienceBlock
                    jobTitle='Game Developer - Unity'
                    dateFrom='01/06/2021'
                    dateTo='01/12/2021'
                    desc='Developed UI system for Wolves of Rome project and worked on shaders for an unannounced project'
                />
            </div>
        </div>
    )
}

export default WorkExperience;