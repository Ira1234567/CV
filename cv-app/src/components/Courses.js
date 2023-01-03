import React from "react";

const Courses = (props) => {
        return (
            <div>
                <h2>{props.title}</h2>
                <ul>
                    {props.coursesList.map( el =>
                        <li key={el.title}>
                            <span>{el.title}</span> - [<span>{el.startDate}</span>-<span>{el.finishDate}</span>] {el.checkCert}
                        </li>
                    )}
                </ul>
            </div>
        )
}

export default Courses

