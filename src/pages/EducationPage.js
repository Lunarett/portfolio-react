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
                    course='Games Programming'
                    degree='Diploma'
                    dateFrom='01/03/2020'
                    dateTo='01/09/2021'
                />

                <EducationBlock
                    course='Audio Engineering'
                    degree='Bachelors of Arts'
                    dateFrom='01/03/2018'
                    dateTo='01/03/2020'
                />

                <EducationBlock
                    course='Audio Engineering'
                    degree='Diploma'
                    dateFrom='01/09/2016'
                    dateTo='01/03/2028'
                />
            </div>
        </div>
    )
}

export default Education;