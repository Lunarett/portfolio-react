import React from "react";

function EducationBlock(props) {
    const { course, degree, dateFrom, dateTo } = props;

    return (
        <div className="educationContainer">
            <div className="leftBox">
                <h1>{course}</h1>
                <h3>{degree}</h3>
            </div>

            <div className="rightBox">
                <h2>{dateFrom} - {dateTo}</h2>
            </div>
        </div>
    );
}

function Education() {
    return (
        <div className="content">
            <h1>Education Degrees</h1>

            <div className="educationMainContainer">
                <EducationBlock
                    course='Special Course'
                    degree='Super Degree'
                    dateFrom='01/01/2000'
                    dateTo='01/01/2000'
                />

                <EducationBlock
                    course='Special Course'
                    degree='Super Degree'
                    dateFrom='01/01/2000'
                    dateTo='01/01/2000'
                />

                <EducationBlock
                    course='Special Course'
                    degree='Super Degree'
                    dateFrom='01/01/2000'
                    dateTo='01/01/2000'
                />
            </div>
        </div>
    )
}

export default Education;