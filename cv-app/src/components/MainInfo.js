import React from "react";

const MainInfo = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.position}</h2>
            <p>{props.information}</p>
        </div>
    )
}

export default MainInfo