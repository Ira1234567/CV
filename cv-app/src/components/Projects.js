import React from "react"

const Projects = (props) => {
    return (
        <div>
            <h2 className="mainPageTitle">{props.title}</h2>
            <ul>
                <li>
                    <p>{props.projectsList[0].description} - [{props.projectsList[0].technologies}]</p>
                    <p>{props.projectsList[0].type}</p>
                    <p><a className='mainPageLink' href='https://github.com/koldovsky/714-team-06'>{props.projectsList[0].url}</a></p>
                </li>
                <li>
                    <p>{props.projectsList[1].description} - [{props.projectsList[1].technologies}]</p>
                    <p>{props.projectsList[1].type}</p>
                    <p><a className='mainPageLink' href='https://github.com/Ira1234567/CV'>{props.projectsList[1].url}</a></p>
                </li>
            </ul>
        </div>
    )
}

export default Projects
