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
                    jobTitle='Position'
                    dateFrom='01/01/2000'
                    dateTo='01/01/2000'
                    desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                />

                <ExperienceBlock
                    jobTitle='Position'
                    dateFrom='01/01/2000'
                    dateTo='01/01/2000'
                    desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                />

                <ExperienceBlock
                    jobTitle='Position'
                    dateFrom='01/01/2000'
                    dateTo='01/01/2000'
                    desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                />

                <ExperienceBlock
                    jobTitle='Position'
                    dateFrom='01/01/2000'
                    dateTo='01/01/2000'
                    desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                />
            </div>
        </div>
    )
}

export default WorkExperience;