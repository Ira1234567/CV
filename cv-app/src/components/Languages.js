import React from "react";

const Languages = (props) => {
    return (
        <div>
            <h2 className="mainPageTitle">{props.title}</h2>
            <ul>
                {props.languagesList.map( el =>
                    <li key={el.title} className='mainPageText'><span>{el.title}</span> - <span>{el.level}</span></li>
                )}
            </ul>
        </div>
    )
}

export default Languages
