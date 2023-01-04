import React from "react";

const MainInfo = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2 className="mainPageTitle">{props.position}</h2>
            <p className='mainPageInfoText'>{props.information}</p>
        </div>
    )
}

export default MainInfo