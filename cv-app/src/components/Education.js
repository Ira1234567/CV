import React from "react";

const Education = (props) => {
    return (
        <div>
           <h2>{props.title}</h2>
           <p>{props.univercity}</p>
           <p>{props.specialty}</p>
           <p>[<span>{props.startDate}</span>-<span>{props.finishDate}</span>]</p>
        </div>
    )
}

export default Education