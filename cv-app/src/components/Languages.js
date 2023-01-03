import React from "react";

const Languages = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <ul>
                {props.languagesList.map( el =>
                    <li key={el.title}><span>{el.title}</span> - <span>{el.level}</span></li>
                )}
            </ul>
        </div>
    )
}

export default Languages
